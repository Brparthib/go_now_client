/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import z, { success } from "zod";

const loginZodSchema = z.object({
  email: z
    .email({ message: "Invalid email address format." })
    .nonempty({ message: "Email is required." })
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(100, { message: "Email cannot exceed 100 characters." }),
  password: z
    .string({ error: "Password must be a string." })
    .nonempty({ message: "Password is required." })
    // .min(8, { message: "Password must be at least 8 characters long." })
    // .regex(/^(?=.*[A-Z])/, {
    //   message: "Password must contain at least 1 uppercase letter.",
    // })
    // .regex(/^(?=.*[!@#$%^&*])/, {
    //   message: "Password must contain at least 1 special character.",
    // })
    // .regex(/^(?=.*\d)/, {
    //   message: "Password must contain at least 1 number.",
    // }),
});

export const loginUser = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const validatedFields = loginZodSchema.safeParse(loginData);

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    console.log("Validate Data: ", validatedFields);

    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(loginData),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.message || "Login failed",
      };
    }


    console.log("From Server Action: ", data);

    return {
      success: true,
      data: data,
      message: "Logged in successfully"
    };

  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Login failed",
    };
  }
};
