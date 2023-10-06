import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import type { User } from "../domain/user";

export async function doSignUp({ email, password }: User) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user.uid;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    });
}
