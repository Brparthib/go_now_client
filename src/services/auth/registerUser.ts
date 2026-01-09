/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import z from "zod";

const registerZodSchema = z
  .object({
    fullName: z
      .string({ error: "Full name must be a string." })
      .nonempty({ message: "Name is required." })
      .max(100, { message: "Name is too long" }),
    email: z
      .email({ message: "Invalid email address format." })
      .nonempty({ message: "Email is required." })
      .min(5, { message: "Email must be at least 5 characters long." })
      .max(100, { message: "Email cannot exceed 100 characters." }),
    password: z
      .string({ error: "Password must be a string." })
      .nonempty({ message: "Password is required." })
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/^(?=.*[A-Z])/, {
        message: "Password must contain at least 1 uppercase letter.",
      })
      .regex(/^(?=.*[!@#$%^&*])/, {
        message: "Password must contain at least 1 special character.",
      })
      .regex(/^(?=.*\d)/, {
        message: "Password must contain at least 1 number.",
      }),
    confirmPassword: z
      .string({ error: "Password must be a string." })
      .nonempty({ message: "Password is required." })
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/^(?=.*[A-Z])/, {
        message: "Password must contain at least 1 uppercase letter.",
      })
      .regex(/^(?=.*[!@#$%^&*])/, {
        message: "Password must contain at least 1 special character.",
      })
      .regex(/^(?=.*\d)/, {
        message: "Password must contain at least 1 number.",
      }),
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    error: "Password does not match.",
    path: ["confirmPassword"],
  });

export const registerUser = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const registerData = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    console.log("Payload", registerData);

    const validatedFields = registerZodSchema.safeParse(registerData);

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

    console.log(validatedFields);

    const res = await fetch("http://localhost:5000/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    }).then((res) => res.json());

    console.log("Register: ", res);

    return res;
  } catch (error) {
    console.log(error);
    return { error: "Failed to create user!" };
  }
};
