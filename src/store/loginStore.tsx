import { create } from "zustand";
import { toast } from "sonner";

import { doLogin } from "@/features/user/application/login";
import { doLogout } from "@/features/user/application/logout";

interface LoginStore {
  isDoingLogin: boolean;
  isDoingLogout: boolean;
  error: null;
  doLogin: ({ email, password }: { email: string; password: string }) => void;
  doLogout: () => void;
}

export const useLoginStore = create<LoginStore>((set) => ({
  isDoingLogin: false,
  isDoingLogout: false,
  error: null,
  doLogin: async ({ email, password }) => {
    set({ isDoingLogin: true });

    try {
      const result = await doLogin({ email, password });

      if (typeof result === "string") {
        toast.success("Welcome to the anime application");
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
}));
