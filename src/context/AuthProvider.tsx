import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { loadCurrentUser, logoutUser } from "../services/authService";
import type { CurrentUser } from "../types/auth";

interface AuthProviderProps{
    children: ReactNode;
}


export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<CurrentUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const refreshUser = useCallback(async () => {
        try{
            const currentUser = await loadCurrentUser();
            setUser(currentUser);
        }
        catch{
            setUser(null);
        }
        finally{
            setIsLoading(false);
        }
    }, []);

    const logout = useCallback(async () => {
        try{
            await logoutUser()
        }
        finally{
            setUser(null);
        }
    }, []);

    useEffect(() => {
        refreshUser();
    }, [refreshUser]);

    const value = useMemo(
        () => ({
            user,
            isLoading,
            refreshUser, 
            logout
        }),
        [user, isLoading, refreshUser, logout]
    );

    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    );

}