import {
    ArrowRight,
    MapPin,
    Package,
} from "lucide-react";
import type {LoadBoardItem} from "../../types/LoadBoardTypes.ts";

interface OfferShipmentLoadSummaryProps {
    load: LoadBoardItem;
}

export function OfferShipmentLoadSummary({
                                             load,
                                         }: OfferShipmentLoadSummaryProps) {
    const cargoType =
        load.cargoItems[0]?.cargoType ??
        "General cargo";

    return (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                    <Package className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                Load reference
                            </p>

                            <p className="mt-1 font-semibold text-slate-900">
                                {load.reference}
                            </p>
                        </div>

                        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
                            {cargoType}
                        </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm">
                        <div className="flex min-w-0 items-center gap-1.5 text-slate-700">
                            <MapPin className="h-4 w-4 shrink-0 text-blue-500" />

                            <span className="truncate">
                                {load.pickup.city}
                            </span>
                        </div>

                        <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" />

                        <div className="flex min-w-0 items-center gap-1.5 text-slate-700">
                            <MapPin className="h-4 w-4 shrink-0 text-slate-500" />

                            <span className="truncate">
                                {load.delivery.city}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}