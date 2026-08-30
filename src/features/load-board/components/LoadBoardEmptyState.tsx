import {
    PackageSearch,
    RotateCcw,
} from "lucide-react";

interface LoadBoardEmptyStateProps {
    hasActiveQuery: boolean;

    onClearFilters: () => void;
}

export function LoadBoardEmptyState({
                                        hasActiveQuery,
                                        onClearFilters,
                                    }: LoadBoardEmptyStateProps) {
    return (
        <div className="flex min-h-96 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <PackageSearch className="h-7 w-7" />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-slate-900">
                {hasActiveQuery
                    ? "No matching loads found"
                    : "No loads available"}
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                {hasActiveQuery
                    ? "Try changing your search or filters to see more available loads."
                    : "There are currently no loads available on the load board. Please check again later."}
            </p>

            {hasActiveQuery && (
                <button
                    type="button"
                    onClick={onClearFilters}
                    className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                >
                    <RotateCcw className="h-4 w-4" />

                    Clear search and filters
                </button>
            )}
        </div>
    );
}