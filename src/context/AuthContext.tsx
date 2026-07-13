import type { CurrentUser } from "../types/auth";
import { createContext } from "react";

export interface AuthContextType {
    user: CurrentUser | null;
    isLoading: boolean;

    refreshUser: () => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined> (
    undefined
);