import {
    ArrowRight,
    Clock3,
    MoreHorizontal,
    Package,
    Truck,
} from "lucide-react";

import type { LoadStatus } from "../loadForm/LoadFormTypes.ts";
import type { LoadRecord } from "../types/LoadsPageTypes.ts";

import {
    getPriorityClass,
    getStatusClass,
} from "../utils/loadDisplayUtils.ts";

import {statusLabels,} from "../config/loadTableConfig.ts";

import { formatRelativeTime } from "../utils/loadDisplayUtils.ts";

import LoadActionsMenu from "./LoadActionsMenu.tsx";

interface LoadTableRowProps {
    load: LoadRecord;

    isMenuOpen: boolean;
    isSelected: boolean;

    onToggleMenu: () => void;
    onSelectLoad: () => void;

    onOpenCarrierModal: () => void;

    onOpenEdit: () => void;
    onDuplicate: () => void;
    onDelete: () => void;
    onAssign: () => void;

    onStatusChange: (
        id: string,
        status: LoadStatus,
    ) => void;

    onCloseMenu: () => void;
}

export default function LoadTableRow({
                                         load,
                                         isMenuOpen,
                                         isSelected,
                                         onToggleMenu,
                                         onSelectLoad,
                                         onOpenCarrierModal,
                                         onOpenEdit,
                                         onDuplicate,
                                         onDelete,
                                         onAssign,
                                         onStatusChange,
                                         onCloseMenu,
                                     }: LoadTableRowProps) {
    const totalWeight =
        load.data.cargoItems.reduce(
            (total, item) =>
                total +
                item.weightKg *
                item.quantity,
            0,
        );

    const firstCargo =
        load.data.cargoItems[0];

    return (
        <tr
            className={[
                "border-b border-slate-100 transition last:border-b-0",
                isSelected
                    ? "bg-blue-50/40"
                    : "hover:bg-slate-50/70",
            ].join(" ")}
        >
            {/* Load */}
            <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Package className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                        <button
                            type="button"
                            onClick={onSelectLoad}
                            className="block max-w-[190px] truncate text-sm font-semibold text-slate-800 hover:text-blue-600"
                        >
                            {
                                load.data
                                    .reference
                            }
                        </button>

                        <div className="mt-1 flex items-center gap-2">
                            <span
                                className={[
                                    "rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide",
                                    getPriorityClass(
                                        load.data
                                            .priority,
                                    ),
                                ].join(" ")}
                            >
                                {
                                    load.data
                                        .priority
                                }
                            </span>

                            {load.data.cargoItems.some(
                                (item) =>
                                    item.fragile,
                            ) && (
                                <span className="text-[10px] font-medium text-red-500">
                                    Fragile
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </td>

            {/* Route */}
            <td className="px-5 py-4">
                <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-slate-700">
                        {
                            load.data.pickup
                                .city
                        }
                    </span>

                    <ArrowRight className="h-3.5 w-3.5 text-slate-400" />

                    <span className="font-medium text-slate-700">
                        {
                            load.data.delivery
                                .city
                        }
                    </span>
                </div>

                <p className="mt-1 text-xs text-slate-400">
                    {
                        load.data
                            .pickupDate
                    }
                </p>
            </td>

            {/* Cargo */}
            <td className="px-5 py-4">
                {firstCargo ? (
                    <>
                        <div className="text-sm font-medium text-slate-700">
                            {
                                firstCargo.name
                            }
                        </div>

                        <div className="mt-1 text-xs text-slate-400">
                            {load.data
                                .cargoItems
                                .length > 1
                                ? `+${
                                    load
                                        .data
                                        .cargoItems
                                        .length -
                                    1
                                } more · `
                                : ""}
                            {totalWeight.toLocaleString()}{" "}
                            kg
                        </div>
                    </>
                ) : (
                    <span className="text-sm text-slate-400">
                        No cargo
                    </span>
                )}
            </td>

            {/* Carrier */}
            <td className="px-5 py-4">
                {load.carrier ? (
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-blue-600">
                            <Truck className="h-4 w-4" />
                        </div>

                        <span className="text-sm font-medium text-slate-700">
                            {
                                load.carrier
                            }
                        </span>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={
                            onOpenCarrierModal
                        }
                        className="inline-flex items-center gap-2 rounded-lg border border-dashed border-blue-200 px-3 py-1.5 text-xs font-medium text-blue-600 transition hover:border-blue-400 hover:bg-blue-50"
                    >
                        <Truck className="h-3.5 w-3.5" />
                        See offers
                    </button>
                )}
            </td>

            {/* Status */}
            <td className="px-5 py-4">
                <span
                    className={[
                        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
                        getStatusClass(
                            load.status,
                        ),
                    ].join(" ")}
                >
                    {
                        statusLabels[
                            load.status
                            ]
                    }
                </span>
            </td>

            {/* Updated */}
            <td className="px-5 py-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock3 className="h-3.5 w-3.5 text-slate-400" />

                    {formatRelativeTime(
                        load.updatedAt,
                    )}
                </div>
            </td>

            {/* Actions */}
            <td className="relative px-3 py-4">
                <button
                    type="button"
                    onClick={onToggleMenu}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Load actions"
                >
                    <MoreHorizontal className="h-4 w-4" />
                </button>

                {isMenuOpen && (
                    <LoadActionsMenu
                        load={load}
                        onClose={
                            onCloseMenu
                        }
                        onEdit={onOpenEdit}
                        onDuplicate={
                            onDuplicate
                        }
                        onDelete={onDelete}
                        onAssign={onAssign}
                        onStatusChange={
                            onStatusChange
                        }
                        onView={
                            onSelectLoad
                        }
                    />
                )}
            </td>
        </tr>
    );
}