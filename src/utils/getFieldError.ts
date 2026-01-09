/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldErrorType } from "@/types/userType";

export const getFieldError = (state: any, fieldName: string) => {
  if (state?.errors) {
    const error = state.errors.find(
      (err: FieldErrorType) => err.field === fieldName
    );

    if (error) {
      console.log("Error Message: ", error);
      return error.message;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
