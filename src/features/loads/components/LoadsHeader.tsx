import { Plus } from "lucide-react";

interface LoadsHeaderProps {
    onCreateLoad: () => void;
}

export default function LoadsHeader({
                                        onCreateLoad,
                                    }: LoadsHeaderProps) {
    return (
        <section className="border-b border-slate-200 bg-white px-6 py-5">
            <div className="flex items-center justify-between gap-6">
                <div>
                    <h1 className="text-xl font-semibold text-slate-900">
                        Your Loads
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Track and manage loads you created in one place.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onCreateLoad}
                    className="inline-flex h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    <Plus className="h-4 w-4" />
                    Create load
                </button>
            </div>
        </section>
    );
}