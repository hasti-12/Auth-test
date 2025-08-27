import { TUser } from "@/types";

const USER_STORAGE_KEY = "auth_user";

export const storage = {
  getUser: (): TUser | null => {
    if (typeof window === "undefined") return null;

    try {
      const userData = localStorage.getItem(USER_STORAGE_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Error reading user from localStorage:", error);
      return null;
    }
  },

  setUser: (user: TUser): void => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (error) {
      console.error("Error saving user to localStorage:", error);
    }
  },

  removeUser: (): void => {
    if (typeof window === "undefined") return;

    try {
      localStorage.removeItem(USER_STORAGE_KEY);
    } catch (error) {
      console.error("Error removing user from localStorage:", error);
    }
  },

  isAuthenticated: (): boolean => {
    return storage.getUser() !== null;
  },
};
