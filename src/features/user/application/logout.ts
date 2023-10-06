import { signOut } from "firebase/auth";

import { auth } from "@/firebase";

export async function doLogout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
}
