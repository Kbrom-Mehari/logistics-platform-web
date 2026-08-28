import {
    Search,
    SlidersHorizontal,
    X,
} from "lucide-react";

import type {
    LoadBoardSort,
} from "../types/LoadBoardTypes";

interface LoadBoardToolbarProps {
    search: string;
    sort: LoadBoardSort;

    activeFilterCount?: number;

    onSearchChange: (
        value: string,
    ) => void;

    onSortChange: (
        value: LoadBoardSort,
    ) => void;

    onOpenFilters: () => void;
}

export function LoadBoardToolbar({
                                     search,
                                     sort,
                                     activeFilterCount = 0,
                                     onSearchChange,
                                     onSortChange,
                                     onOpenFilters,
                                 }: LoadBoardToolbarProps) {
    return (
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                    type="search"
                    value={search}
                    onChange={(event) =>
                        onSearchChange(
                            event.target.value,
                        )
                    }
                    placeholder="Search by reference, location, or owner..."
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-10 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />

                {search && (
                    <button
                        type="button"
                        onClick={() =>
                            onSearchChange("")
                        }
                        aria-label="Clear search"
                        className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}
            </div>

            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={onOpenFilters}
                    className="relative inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                >
                    <SlidersHorizontal className="h-4 w-4" />

                    Filters

                    {activeFilterCount > 0 && (
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-semibold text-white">
                            {activeFilterCount}
                        </span>
                    )}
                </button>

                <LoadBoardSortSelect
                    value={sort}
                    onChange={onSortChange}
                />
            </div>
        </div>
    );
}

interface LoadBoardSortSelectProps {
    value: LoadBoardSort;

    onChange: (
        value: LoadBoardSort,
    ) => void;
}

function LoadBoardSortSelect({
                                 value,
                                 onChange,
                             }: LoadBoardSortSelectProps) {
    return (
        <select
            value={value}
            onChange={(event) =>
                onChange(
                    event.target
                        .value as LoadBoardSort,
                )
            }
            className="h-11 min-w-40 cursor-pointer rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition-colors hover:border-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            aria-label="Sort loads"
        >
            <option value="NEWEST">
                Newest first
            </option>

            <option value="OLDEST">
                Oldest first
            </option>

            <option value="PICKUP_SOONEST">
                Pickup soonest
            </option>

            <option value="PICKUP_LATEST">
                Pickup latest
            </option>

            <option value="DELIVERY_SOONEST">
                Delivery soonest
            </option>

            <option value="DELIVERY_LATEST">
                Delivery latest
            </option>
        </select>
    );
}