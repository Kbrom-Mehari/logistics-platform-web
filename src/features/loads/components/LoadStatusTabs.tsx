import type {
    LoadTab,
} from "../types/LoadsPageTypes.ts";

import {
    tabs,
} from "../config/loadTableConfig.ts";

interface LoadsStatusTabsProps {
    activeTab: LoadTab;
    counts: Record<LoadTab, number>;
    onTabChange: (tab: LoadTab) => void;
}

export default function LoadsStatusTabs({
                                            activeTab,
                                            counts,
                                            onTabChange,
                                        }: LoadsStatusTabsProps) {
    return (
        <section className="overflow-x-auto border-b border-slate-200 bg-white px-6">
            <div className="flex min-w-max">
                {tabs.map((tab) => {
                    const isActive =
                        activeTab === tab.key;

                    return (
                        <button
                            key={tab.key}
                            type="button"
                            onClick={() =>
                                onTabChange(
                                    tab.key,
                                )
                            }
                            className={[
                                "relative flex items-center gap-2 px-4 py-4 text-sm font-medium transition",
                                isActive
                                    ? "text-blue-600"
                                    : "text-slate-500 hover:text-slate-800",
                            ].join(" ")}
                        >
                            {tab.label}

                            <span
                                className={[
                                    "rounded-full px-1.5 py-0.5 text-[11px] font-semibold",
                                    isActive
                                        ? "bg-blue-50 text-blue-600"
                                        : "bg-slate-100 text-slate-500",
                                ].join(" ")}
                            >
                                {counts[tab.key]}
                            </span>

                            {isActive && (
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600" />
                            )}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}