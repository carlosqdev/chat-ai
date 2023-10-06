"use client";

import CheckUserSession from "@/components/check-user-session";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect("/account");
  }, []);
  return (
    <>
      <main className="flex min-h-screen"></main>
      <CheckUserSession />
    </>
  );
}
