import {Filter, Search} from "lucide-react";

interface LoadsSearchProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
}

export default function LoadsSearch({
                                        searchQuery,
                                        onSearchChange,
}: LoadsSearchProps) {
    return <section className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="flex items-center gap-3">
            <div className="relative max-w-md flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) =>
                        onSearchChange(event.target.value)
                    }
                    placeholder="Search tracking number, city, carrier..."
                    className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
                <Filter className="h-4 w-4" />
                Filters
            </button>
        </div>
    </section>
}