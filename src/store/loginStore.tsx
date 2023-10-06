import { create } from "zustand";
import { toast } from "sonner";

import { doLogin } from "@/features/user/application/login";
import { doLogout } from "@/features/user/application/logout";
import { doSignUp } from "@/features/user/application/signUp";

interface LoginStore {
  isDoingLogin: boolean;
  isCreatingUser: boolean;
  isDoingLogout: boolean;
  error: null;
  doLogin: ({ email, password }: { email: string; password: string }) => void;
  doLogout: () => void;
  doSignUp: ({ email, password }: { email: string; password: string }) => void;
}

export const useLoginStore = create<LoginStore>((set) => ({
  isDoingLogin: false,
  isDoingLogout: false,
  isCreatingUser: false,
  error: null,
  doLogin: async ({ email, password }) => {
    set({ isDoingLogin: true });

    try {
      const result = await doLogin({ email, password });

      if (typeof result === "string") {
        toast.success("Log in successful");
      } else {
        toast.error("The email or password is incorrect");
      }
    } catch (error) {
      toast.error("Error: " + error);
    } finally {
      set({ isDoingLogin: false });
    }
  },
  doLogout: () => {
    set({ isDoingLogin: true });
    doLogout();
    set({ isDoingLogin: false });
  },
  doSignUp: async ({ email, password }) => {
    set({ isCreatingUser: true });

    try {
      const result = await doSignUp({ email, password });

      if (typeof result === "string") {
        toast.success("User created successful");
      } else {
        toast.error("Sorry but the user could not be created");
      }
    } catch (error) {
      toast.error("Error: " + error);
    } finally {
      set({ isCreatingUser: false });
    }
  },
}));
