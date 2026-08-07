import { useAuth } from "../../hooks/useAuth.tsx";

export default function AnalyticsPage(){

const { user, isLoading } = useAuth();

if(isLoading){
    return <h1>Loading authentication...</h1>;
}

    return (
        <div>
            <h1>Analytics</h1>

            <h2>Current User</h2>

            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    );
}