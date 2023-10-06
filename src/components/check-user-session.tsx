"use client";

import { useProtectedRoutes } from "@/hooks/useProtected";

export default function CheckUserSession() {
  useProtectedRoutes();

  return <span className="hidden">Check user session</span>;
}
