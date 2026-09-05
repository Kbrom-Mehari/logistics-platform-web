import {
    CalendarDays,
    Package,
} from "lucide-react";

import type { LoadBoardItem } from "../types/LoadBoardTypes";

interface LoadDetailsHeaderProps {
    load: LoadBoardItem;
}

export function LoadDetailsHeader({
                                      load,
                                  }: LoadDetailsHeaderProps) {
    const ownerName = load.owner.companyName ?? load.owner.name;

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                            <Package className="h-3.5 w-3.5" />
                            Load reference
                        </span>

                        <span className="text-slate-300">•</span>

                        <span className="text-xs font-medium text-slate-400">
                            {load.createdAt}
                        </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-3">
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                            {load.reference}
                        </h1>

                        <PriorityBadge priority={load.priority} />
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                        {load.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                        <span>Posted by</span>

                        <span className="font-semibold text-slate-700">
                            {ownerName}
                        </span>
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                    <CalendarDays className="h-4 w-4 text-slate-400" />

                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                            Posted
                        </p>

                        <p className="text-xs font-semibold text-slate-700">
                            {formatPostedDate(load.createdAt)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface PriorityBadgeProps {
    priority: LoadBoardItem["priority"];
}

function PriorityBadge({
                           priority,
                       }: PriorityBadgeProps) {
    const styles = {
        URGENT: "border-red-100 bg-red-50 text-red-700",
        HIGH: "border-orange-100 bg-orange-50 text-orange-700",
        NORMAL: "border-blue-100 bg-blue-50 text-blue-700",
    } as const;

    return (
        <span
            className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${styles[priority]}`}
        >
            {priority}
        </span>
    );
}

function formatPostedDate(value: string): string {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(date);
}