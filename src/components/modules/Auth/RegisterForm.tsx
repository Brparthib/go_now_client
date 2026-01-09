"use client";

import Link from "next/link";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { useActionState } from "react";
import { registerUser } from "@/services/auth/registerUser";
import { getFieldError } from "@/utils/getFieldError";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerUser, null);

  console.log("logged in: ", state);

  const nameError = getFieldError(state, "fullName");
  const emailError = getFieldError(state, "email");
  const passwordError = getFieldError(state, "password");
  const confirmPasswordError = getFieldError(state, "confirmPassword");

  return (
    <form action={formAction}>
      <FieldSet>
        <FieldGroup>
          {/* Full Name */}
          <Field>
            <FieldLabel htmlFor="fullName">Full name</FieldLabel>
            <Input
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              autoComplete="fullName"
              aria-invalid={!!nameError}
            />
            {nameError && <FieldError>{nameError}</FieldError>}
          </Field>

          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              aria-invalid={!!emailError}
            />
            {emailError && <FieldError>{emailError}</FieldError>}
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              aria-invalid={!!passwordError}
            />
            {passwordError && <FieldError>{passwordError}</FieldError>}
          </Field>

          {/* Confirm Password */}
          <Field>
            <FieldLabel htmlFor="confirmPassword">Confirm password</FieldLabel>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              aria-invalid={!!confirmPasswordError}
            />
            {confirmPasswordError && (
              <FieldError>{confirmPasswordError}</FieldError>
            )}
          </Field>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition"
            disabled={isPending}
          >
            {isPending ? "Create Account..." : "Create Account"}
          </button>

          {/* Footer text */}
          <p className="pt-2 text-center text-xs text-slate-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-sky-700 hover:underline"
            >
              Login
            </Link>
          </p>

          {/* Divider */}
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-500">or</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="mb-5 inline-flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            <GoogleIcon />
            Continue with Google
          </button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
