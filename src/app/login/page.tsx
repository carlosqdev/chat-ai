"use client";

import FormLogin from "@/components/form-login";

import { useLogin } from "@/hooks/useLogin";
import Link from "next/link";

export default function Login() {
  useLogin();

  return (
    <main className="grid place-content-center min-h-screen">
      <div className="w-[90%] m-auto grid gap-4 lg:max-w-[400px] lg:w-[100%]">
        <header className="grid gap-4">
          <h1 className="text-3xl font-bold text-center">
            Welcome to the app!
          </h1>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Log In to your account to continue using the app. If you don&apos;t
            have an account, please sign up first. Thank you!.
          </p>
        </header>
        <FormLogin />
        <p className="text-sm text-center text-gray-500">
          Don&apos;t have an account?{" "}
          <Link className="text-gptlogo" href="/signup">
            Sign up here
          </Link>
        </p>
      </div>
    </main>
  );
}
