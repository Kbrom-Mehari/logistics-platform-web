import {
    CheckCircle2,
    Package,
    Plus,
    Search,
    Truck,
    XCircle,
} from "lucide-react";

interface LoadStatProps {
    label: string;
    value: number;
    icon: React.ElementType;
    iconClassName: string;
}

export interface YourLoadsProps {
    loads: {
        total: number;
        delivered: number;
        completed: number;
        cancelled: number;
    };

    hasCreatedLoad: boolean;

    onCreateLoad?: () => void;
    onFindCarriers?: () => void;
    onTrackShipment?: (trackingNumber: string) => void;
}

function LoadStat({
                      label,
                      value,
                      icon: Icon,
                      iconClassName,
                  }: LoadStatProps) {
    return (
        <div className=" border border-slate-200 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-sm font-medium text-slate-500">
                        {label}
                    </p>

                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                        {value}
                    </p>
                </div>

                <div
                    className={`flex size-9 items-center justify-center rounded-xl ${iconClassName}`}
                >
                    <Icon className="size-4" />
                </div>
            </div>
        </div>
    );
}

export default function LoadsOverview({
                                      loads,
                                      hasCreatedLoad,
                                      onCreateLoad,
                                      onFindCarriers,
                                      onTrackShipment,
                                  }: YourLoadsProps) {
    const handleTrack = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;

        const input = form.elements.namedItem(
            "trackingNumber",
        ) as HTMLInputElement | null;

        const trackingNumber = input?.value.trim();

        if (trackingNumber) {
            onTrackShipment?.(trackingNumber);
        }
    };

    return (
        <div className="p-6">
            {/* Section heading */}
            <div className="mb-5 flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Package className="size-4" />
                </div>

                <div>
                    <h3 className="font-semibold text-slate-800">
                        Your Loads
                    </h3>

                    <p className="text-xs text-slate-500">
                        Loads you've created
                    </p>
                </div>
            </div>

            {!hasCreatedLoad ? (
                /* First-load empty state */
                <div className="flex min-h-55 flex-col justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-6">
                    <h4 className="font-semibold text-slate-700">
                        Create your first load
                    </h4>

                    <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
                        Add the shipment details you need transported and start
                        connecting with available carriers.
                    </p>

                    <button
                        type="button"
                        onClick={onCreateLoad}
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                    >
                        <Plus className="size-4" />
                        Create your first load
                    </button>
                </div>
            ) : (
                <>
                    {/* Load statistics */}
                    <div className="grid grid-cols-2 gap-3">
                        <LoadStat
                            label="Total"
                            value={loads.total}
                            icon={Package}
                            iconClassName="bg-blue-100 text-blue-500"
                        />

                        <LoadStat
                            label="Delivered"
                            value={loads.delivered}
                            icon={CheckCircle2}
                            iconClassName="bg-emerald-100 text-emerald-700"
                        />

                        <LoadStat
                            label="Completed"
                            value={loads.completed}
                            icon={CheckCircle2}
                            iconClassName="bg-blue-100 text-blue-700"
                        />

                        <LoadStat
                            label="Cancelled"
                            value={loads.cancelled}
                            icon={XCircle}
                            iconClassName="bg-red-100 text-red-700"
                        />
                    </div>

                    {/* Tracking */}
                    <form
                        onSubmit={handleTrack}
                        className="mt-5"
                    >
                        <label
                            htmlFor="trackingNumber"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Track a shipment
                        </label>

                        <div className="flex gap-2">
                            <div className="relative min-w-0 flex-1">
                                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                                <input
                                    id="trackingNumber"
                                    name="trackingNumber"
                                    type="text"
                                    placeholder="Tracking number"
                                    className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-1 focus:ring-slate-200"
                                />
                            </div>

                            <button
                                type="submit"
                                className="h-10 rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                            >
                                Track
                            </button>
                        </div>
                    </form>

                    {/* Quick actions */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={onCreateLoad}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 bg-slate-50/50 hover:bg-slate-100"
                        >
                            <Plus className="size-3.5" />
                            Create load
                        </button>

                        <button
                            type="button"
                            onClick={onFindCarriers}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 bg-slate-50/50 hover:bg-slate-100"
                        >
                            <Truck className="size-3.5" />
                            Find carriers
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}