import {
    ArrowRight,
    Package,
    Search,
} from "lucide-react";

import type {
    LoadStatus,
} from "../loadForm/LoadFormTypes.ts";

import type {
    LoadRecord,
} from "../types/LoadsPageTypes.ts";

import {statusLabels,} from "../config/loadTableConfig.ts";

import LoadTableRow from "./LoadTableRow.tsx";

interface LoadsTableProps {
    loads: LoadRecord[];
    counts: Record<string, number>;
    activeTab: string;
    openMenuId: string | null;
    selectedLoadId: string | null;

    onToggleMenu: (
        loadId: string,
    ) => void;

    onCloseMenu: () => void;

    onSelectLoad: (
        loadId: string,
    ) => void;

    onOpenCarrierModal: (
        load: LoadRecord,
    ) => void;

    onOpenEdit: (
        load: LoadRecord,
    ) => void;

    onDuplicate: (
        load: LoadRecord,
    ) => void;

    onDelete: (
        loadId: string,
    ) => void;

    onAssign: (
        load: LoadRecord,
    ) => void;

    onStatusChange: (
        loadId: string,
        status: LoadStatus,
    ) => void;
}

export default function LoadsTable({
                                       loads,
                                       counts,
                                       activeTab,
                                       onCloseMenu,
                                       openMenuId,
                                       selectedLoadId,
                                       onToggleMenu,
                                       onSelectLoad,
                                       onOpenCarrierModal,
                                       onOpenEdit,
                                       onDuplicate,
                                       onDelete,
                                       onAssign,
                                       onStatusChange,
                                   }: LoadsTableProps) {
    return (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px]">
                    <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/70">
                        <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                            Load
                        </th>

                        <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                            Route
                        </th>

                        <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                            Cargo
                        </th>

                        <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                            Carrier
                        </th>

                        <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                            Status
                        </th>

                        <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                            Updated
                        </th>

                        <th className="w-12 px-3 py-3" />
                    </tr>
                    </thead>

                    <tbody>
                    {loads.map((load) => (
                        <LoadTableRow
                            key={load.id}
                            load={load}
                            isMenuOpen={
                                openMenuId === load.id
                            }
                            isSelected={
                                selectedLoadId === load.id
                            }
                            onToggleMenu={() =>
                                onToggleMenu(load.id)
                            }
                            onSelectLoad={() =>
                                onSelectLoad(load.id)
                            }
                            onOpenCarrierModal={() =>
                                onOpenCarrierModal(load)
                            }
                            onOpenEdit={() =>
                                onOpenEdit(load)
                            }
                            onDuplicate={() =>
                                onDuplicate(load)
                            }
                            onDelete={() =>
                                onDelete(load.id)
                            }
                            onAssign={() =>
                                onAssign(load)
                            }
                            onStatusChange={
                                onStatusChange
                            }
                            onCloseMenu={onCloseMenu}
                        />
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Empty state */}
            {loads.length === 0 && (
                <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                        <Search className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-slate-800">
                        No loads found
                    </h3>

                    <p className="mt-1 max-w-sm text-sm text-slate-500">
                        Try changing your search or
                        selecting a different status.
                    </p>
                </div>
            )}

            {/* Footer */}
            {loads.length > 0 && (
                <div className="flex items-center justify-between border-t border-slate-200 px-5 py-3.5">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Package className="h-4 w-4 text-blue-500" />

                        <span>
                            Showing{" "}
                            <span className="font-medium text-slate-700">
                                {loads.length}
                            </span>{" "}
                            of{" "}
                            <span className="font-medium text-slate-700">
                                {
                                    counts[
                                        activeTab
                                        ]
                                }
                            </span>{" "}
                            {activeTab === "ALL"
                                ? "loads"
                                : statusLabels[
                                    activeTab as LoadStatus
                                    ].toLowerCase()}
                        </span>
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                        View all
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            )}
        </section>
    );
}