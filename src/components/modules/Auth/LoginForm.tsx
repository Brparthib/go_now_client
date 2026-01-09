/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { useActionState, useEffect } from "react";
import { loginUser } from "@/services/auth/loginUser";
import { getFieldError } from "@/utils/getFieldError";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  useEffect(() => {
    if (state?.success) {
      router.replace(redirect || "/user/dashboard");
    }
  }, [state, redirect, router]);

  const emailError = getFieldError(state, "email");
  const passwordError = getFieldError(state, "password");

  return (
    <form action={formAction}>
      <FieldSet>
        <FieldGroup>
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              placeholder="john@example.com"
              autoComplete="email"
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
              placeholder="***"
              autoComplete="new-password"
              aria-invalid={!!passwordError}
            />
            {passwordError && <FieldError>{passwordError}</FieldError>}
          </Field>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition cursor-pointer"
          >
            {isPending ? "Login..." : "Login"}
          </button>

          {/* Footer text */}
          <p className="pt-2 text-center text-xs text-slate-500">
            {`Don't`} have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-sky-700 hover:underline"
            >
              Register
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
