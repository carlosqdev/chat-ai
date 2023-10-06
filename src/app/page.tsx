import CheckUserSession from "@/components/check-user-session";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen"></main>
      <CheckUserSession />
    </>
  );
}
