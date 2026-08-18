import {useAuth} from "../../../../hooks/useAuth.tsx";

export default function DashboardWelcome() {
    const { user } = useAuth();

    return (
        <section>
            <div>
                <p className="text-sm font-medium text-blue-600">
                    Welcome back
                </p>

                <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                    {user?.email}
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                    Here's an overview of your logistics operations.
                </p>
            </div>
        </section>
    );
}