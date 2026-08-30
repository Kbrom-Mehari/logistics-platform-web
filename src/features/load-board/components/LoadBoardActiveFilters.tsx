import {
    RotateCcw,
    X,
} from "lucide-react";

export interface ActiveFilter {
    id: string;
    label: string;
    onRemove: () => void;
}

interface LoadBoardActiveFiltersProps {
    filters: ActiveFilter[];

    onClearAll: () => void;
}

export function LoadBoardActiveFilters({
                                           filters,
                                           onClearAll,
                                       }: LoadBoardActiveFiltersProps) {
    if (filters.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-medium text-slate-500">
                Active filters:
            </span>

            {filters.map((filter) => (
                <button
                    key={filter.id}
                    type="button"
                    onClick={filter.onRemove}
                    className="inline-flex h-8 items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 text-sm font-medium text-blue-700 transition-colors hover:border-blue-200 hover:bg-blue-100"
                >
                    <span>{filter.label}</span>

                    <X className="h-3.5 w-3.5" />
                </button>
            ))}

            <button
                type="button"
                onClick={onClearAll}
                className="ml-1 inline-flex h-8 items-center gap-1.5 rounded-lg px-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
                <RotateCcw className="h-3.5 w-3.5" />

                Clear all
            </button>
        </div>
    );
}