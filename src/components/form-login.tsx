"use client";

import { toast } from "sonner";

import { useLoginStore } from "@/store/loginStore";

export default function FormLogin() {
  const doLogin = useLoginStore((state) => state.doLogin);
  const isDoingLogin = useLoginStore((state) => state.isDoingLogin);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());

    if (email.length <= 0 && password.length <= 0) {
      toast.error("Email and password are required");
      return;
    }

    const userCredentials = {
      email: email.toString(),
      password: password.toString(),
    };

    doLogin(userCredentials);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4  rounded-md p-4 lg:w-full m-auto"
    >
      <section className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="email">
          Email address:
        </label>
        <input
          className="w-full p-3 text-lg font-medium text-gray-900 outline-none border hover:border-gptlogoHover hover:transition-colors focus:border-gptlogoHover focus:transition-colors"
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          required
        />
      </section>

      <section className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="password">
          Password:
        </label>
        <input
          className="w-full p-3 text-lg font-medium text-gray-900 outline-none border hover:border-gptlogoHover hover:transition-colors focus:border-gptlogoHover focus:transition-colors"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
      </section>

      <section>
        <button
          disabled={isDoingLogin}
          className={
            isDoingLogin
              ? "bg-gray-400 text-gray-600 p-3 rounded-sm text-xl w-full cursor-not-allowed"
              : "bg-gptlogo hover:bg-gptlogoHover text-white hover:transition-colors p-3 rounded-sm text-lg w-full"
          }
        >
          Continue
        </button>
      </section>
    </form>
  );
}
