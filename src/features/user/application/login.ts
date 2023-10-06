import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/firebase";

import type { User } from "../domain/user";

export async function doLogin({ email, password }: User) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential?.user;
      const uid = user.uid;
      return uid;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    });
}
