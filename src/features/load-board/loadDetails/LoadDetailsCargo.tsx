import {
    Box,
    Scale,
} from "lucide-react";

import type { LoadBoardItem } from "../types/LoadBoardTypes";

interface LoadDetailsCargoProps {
    load: LoadBoardItem;
}

export function LoadDetailsCargo({
                                     load,
                                 }: LoadDetailsCargoProps) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
                Cargo
            </h2>

            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
                <div className="hidden grid-cols-[2fr_1fr_1fr_1fr] border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:grid">
                    <span>Item</span>
                    <span>Packaging</span>
                    <span>Quantity</span>
                    <span>Weight</span>
                </div>

                {load.cargoItems.map((item, index) => (
                    <div
                        key={item.id ?? `${item.name}-${index}`}
                        className="grid gap-4 border-b border-slate-100 px-4 py-4 last:border-b-0 sm:grid-cols-[2fr_1fr_1fr_1fr] sm:items-center"
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                <Box className="h-4 w-4 text-blue-600" />
                            </div>

                            <div className="min-w-0">
                                <p className="font-semibold text-slate-800">
                                    {item.name}
                                </p>

                                <p className="mt-0.5 text-xs text-slate-400">
                                    {formatCargoType(item.cargoType)}
                                </p>
                            </div>
                        </div>

                        <CargoValue
                            label="Packaging"
                            value={item.packaging ?? "—"}
                        />

                        <CargoValue
                            label="Quantity"
                            value={
                                item.quantity !== undefined
                                    ? String(item.quantity)
                                    : "—"
                            }
                        />

                        <div>
                            <p className="text-xs text-slate-400 sm:hidden">
                                Weight
                            </p>

                            <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                                <Scale className="h-3.5 w-3.5 text-slate-400" />

                                {item.weightKg !== undefined
                                    ? `${item.weightKg.toLocaleString()} kg`
                                    : "—"}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

interface CargoValueProps {
    label: string;
    value: string;
}

function CargoValue({
                        label,
                        value,
                    }: CargoValueProps) {
    return (
        <div>
            <p className="text-xs text-slate-400 sm:hidden">
                {label}
            </p>

            <p className="text-sm font-medium text-slate-700">
                {value}
            </p>
        </div>
    );
}

function formatCargoType(type: string): string {
    return type
        .toLowerCase()
        .replace(/_/g, " ")
        .replace(/\b\w/g, character => character.toUpperCase());
}