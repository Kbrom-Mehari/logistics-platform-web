import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute(){
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(!user){
        return (
        <Navigate
        to="/login"
        replace
        state={{from: location}}
        />
        );
    }

    return <Outlet />
}