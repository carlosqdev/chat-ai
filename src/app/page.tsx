import AuthForm from "../components/auth-form";

export default function Home() {
  return (
    <main className="min-h-screen grid place-content-center">
      <div className="w-[90%] m-auto grid gap-5 lg:w-[320px]">
        <h1 className="text-3xl font-bold text-center leading-10">Log In</h1>
        <p className="text-center font-normal text-lg">
          Log in with your account and start using our services.
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </main>
  );
}
