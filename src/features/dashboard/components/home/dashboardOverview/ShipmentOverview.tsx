import {
    AlertTriangle,
    ArrowRight,
    CheckCircle2,
    Star,
    Truck,
} from "lucide-react";

import ShipmentStatusChart from "./ShipmentStatusChart";

interface StatusItemProps {
    label: string;
    value: number;
    colorClassName: string;
}

export interface YourShipmentsProps {
    shipments: {
        total: number;
        complete: number;
        inTransit: number;
        cancelled: number;
        delivered: number;
    };

    rating: number;
    ratingCount: number;

    criticalAlerts: number;

    canOfferShipment: boolean;

    onFindCarriers?: () => void;
    onRegisterTransport?: () => void;
    onViewAlerts?: () => void;
}

function StatusItem({
                        label,
                        value,
                        colorClassName,
                    }: StatusItemProps) {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
                <span
                    className={`size-2.5 shrink-0 rounded-sm ${colorClassName}`}
                    aria-hidden="true"
                />

                <span className="text-sm font-medium text-slate-600">
                    {label}
                </span>
            </div>

            <span className="text-sm font-semibold text-slate-900">
                {value}
            </span>
        </div>
    );
}

export default function ShipmentOverview({
                                          shipments,
                                          rating,
                                          ratingCount,
                                          criticalAlerts,
                                          canOfferShipment,
                                          onFindCarriers,
                                          onRegisterTransport,
                                          onViewAlerts,
                                      }: YourShipmentsProps) {
    const totalShipments =
        shipments.complete +
        shipments.inTransit +
        shipments.cancelled +
        shipments.delivered;

    const hasShipments = totalShipments > 0;

    return (
        <div className="p-6">
            {/* Section heading */}
            <div className="mb-5 flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Truck className="size-4" />
                </div>

                <div>
                    <h3 className="font-semibold text-slate-800">
                        Your Shipments
                    </h3>

                    <p className="text-xs text-slate-500">
                        Transport activity at a glance
                    </p>
                </div>
            </div>

            {!canOfferShipment ? (
                /* Carrier registration empty state */
                <div className="flex min-h-55 flex-col justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-6">
                    <h4 className="font-semibold text-slate-700">
                        Start offering transportation
                    </h4>

                    <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
                        Register your transport company and vehicles to start
                        offering shipment services for available loads.
                    </p>

                    <button
                        type="button"
                        onClick={onRegisterTransport}
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                    >
                        Register transport
                        <ArrowRight className="size-4" />
                    </button>
                </div>
            ) : (
                <>
                    {hasShipments ? (
                        <div className="grid gap-6 sm:grid-cols-[190px_1fr]">
                            {/* Shipment status pie chart */}
                            <div className="flex items-center justify-center">
                                <ShipmentStatusChart
                                    data={{
                                        complete: shipments.complete,
                                        inTransit: shipments.inTransit,
                                        cancelled: shipments.cancelled,
                                        delivered: shipments.delivered,
                                    }}
                                />
                            </div>

                            {/* Shipment status legend */}
                            <div className="flex flex-col justify-center gap-3">
                                <StatusItem
                                    label="Complete"
                                    value={shipments.complete}
                                    colorClassName="bg-emerald-500"
                                />

                                <StatusItem
                                    label="In transit"
                                    value={shipments.inTransit}
                                    colorClassName="bg-blue-500"
                                />

                                <StatusItem
                                    label="Cancelled"
                                    value={shipments.cancelled}
                                    colorClassName="bg-red-500"
                                />

                                <StatusItem
                                    label="Delivered"
                                    value={shipments.delivered}
                                    colorClassName="bg-violet-500"
                                />
                            </div>
                        </div>
                    ) : (
                        /* No shipments empty state */
                        <div className="flex min-h-55 flex-col justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-6">
                            <h4 className="font-semibold text-slate-900">
                                No shipments yet
                            </h4>

                            <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
                                Once you accept a load, your active
                                transportation jobs will appear here.
                            </p>

                            <button
                                type="button"
                                onClick={onFindCarriers}
                                className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                            >
                                Browse available loads
                                <ArrowRight className="size-4" />
                            </button>
                        </div>
                    )}
                </>
            )}

            {/* Rating + rating count + alerts */}
            <div className="mt-6 grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-5">
                {/* Overall rating */}
                <div className="pr-4">
                    <p className="text-xs font-medium text-slate-500">
                        Overall rating
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`size-4 ${
                                        star <= Math.round(rating)
                                            ? "fill-amber-400 text-amber-400"
                                            : "text-slate-300"
                                    }`}
                                />
                            ))}
                        </div>

                        <span className="text-sm font-semibold text-slate-900">
                            {rating.toFixed(1)}
                        </span>
                    </div>
                </div>

                {/* Rating count */}
                <div className="px-4">
                    <p className="text-xs font-medium text-slate-500">
                        Based on
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-900">
                        {ratingCount.toLocaleString()}{" "}
                        <span className="font-medium text-slate-500">
                            {ratingCount === 1 ? "rating" : "ratings"}
                        </span>
                    </p>
                </div>

                {/* Critical alerts */}
                <button
                    type="button"
                    onClick={onViewAlerts}
                    className="group pl-4 text-left"
                >
                    <p className="text-xs font-medium text-slate-500">
                        Critical alerts
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                        <span
                            className={`flex size-7 items-center justify-center rounded-lg ${
                                criticalAlerts > 0
                                    ? "bg-red-100 text-red-600"
                                    : "bg-emerald-100 text-emerald-600"
                            }`}
                        >
                            {criticalAlerts > 0 ? (
                                <AlertTriangle className="size-3.5" />
                            ) : (
                                <CheckCircle2 className="size-3.5" />
                            )}
                        </span>

                        <span className="text-sm font-semibold text-slate-900">
                            {criticalAlerts}
                        </span>

                        <ArrowRight className="ml-auto size-3.5 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-slate-500" />
                    </div>
                </button>
            </div>
        </div>
    );
}