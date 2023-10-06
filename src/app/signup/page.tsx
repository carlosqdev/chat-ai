import FormSingUp from "@/components/form-sign-up";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="grid place-content-center min-h-screen">
      <div className="w-[90%] m-auto grid gap-4 lg:max-w-[400px] lg:w-[100%]">
        <header className="grid gap-4">
          <h1 className="text-3xl font-bold text-center">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Sign up to continue using the app. If you have an account, please
            omit this form. Thank you!.
          </p>
        </header>
        <FormSingUp />
        <p className="text-sm text-center text-gray-500">
          Don&apos;t have an account?{" "}
          <Link className="text-gptlogo" href="/login">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
