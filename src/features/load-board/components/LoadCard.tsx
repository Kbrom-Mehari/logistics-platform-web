import {
    Clock3,
    Package,
} from "lucide-react";

import type { LoadBoardItem } from "../types/LoadBoardTypes";

import { LoadCardActions } from "./LoadCardActions";
import { LoadRequirements } from "./LoadRequirements";
import { LoadRoute } from "./LoadRoute";
import { LoadSchedule } from "./LoadSchedule";
import {getCargoTypeLabel} from "../utils/loadBoardUtils.ts";

interface LoadCardProps {
    load: LoadBoardItem;

    onOfferShipment: (
        load: LoadBoardItem,
    ) => void;

    onShare: (
        load: LoadBoardItem,
    ) => void;
}

export function LoadCard({
                             load,
                             onOfferShipment,
                             onShare,
                         }: LoadCardProps) {
    return (
        <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <p className="flex items-center gap-2 text-xs font-medium text-slate-400">
                        <Package className="h-3.5 w-3.5" />

                        Load reference
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                        <h3 className="truncate font-semibold tracking-tight text-slate-900">
                            {load.reference}
                        </h3>

                        <span className="h-1 w-1 shrink-0 rounded-full bg-slate-300" />

                        <span className="truncate text-sm font-medium text-slate-500">
                            {getCargoTypeLabel(load)}
                        </span>
                    </div>
                </div>

                <PriorityBadge
                    priority={load.priority}
                />
            </div>

            <div className="mt-5">
                <LoadRoute
                    pickup={load.pickup}
                    delivery={load.delivery}
                />
            </div>

            <div className="mt-5">
                <LoadSchedule
                    pickupDate={load.pickupDate}
                    pickupTimeFrom={
                        load.pickupTimeFrom
                    }
                    pickupTimeTo={
                        load.pickupTimeTo
                    }
                    deliveryDate={
                        load.deliveryDate
                    }
                    deliveryTimeFrom={
                        load.deliveryTimeFrom
                    }
                    deliveryTimeTo={
                        load.deliveryTimeTo
                    }
                />
            </div>

            <div className="mt-5">
                <LoadRequirements load={load} />
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                <Clock3 className="h-4 w-4" />

                <span>
                    Posted by{" "}
                    <span className="font-medium text-slate-700">
                        {load.owner.companyName ??
                            load.owner.name}
                    </span>
                </span>
            </div>

            <div className="mt-5">
                <LoadCardActions
                    load={load}
                    onOfferShipment={
                        onOfferShipment
                    }
                    onShare={onShare}
                />
            </div>
        </article>
    );
}

interface PriorityBadgeProps {
    priority: LoadBoardItem["priority"];
}

function PriorityBadge({
                           priority,
                       }: PriorityBadgeProps) {
    const styles = {
        URGENT:
            "border-red-100 bg-red-50 text-red-700",

        HIGH:
            "border-orange-100 bg-orange-50 text-orange-700",

        NORMAL:
            "border-blue-100 bg-blue-50 text-blue-700",
    } as const;

    return (
        <span
            className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${styles[priority]}`}
        >
            {priority}
        </span>
    );
}