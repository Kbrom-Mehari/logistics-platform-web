import {
    Activity,
    Circle,
    MapPin,
    Power,
    Wrench,
} from "lucide-react";

interface FleetStatus {
    label: string;
    count: number;
    icon: React.ElementType;
}

const fleetStatuses: FleetStatus[] = [
    {
        label: "Moving",
        count: 27,
        icon: MapPin,
    },
    {
        label: "Idle",
        count: 9,
        icon: Circle,
    },
    {
        label: "Offline",
        count: 4,
        icon: Power,
    },
    {
        label: "Maintenance",
        count: 2,
        icon: Wrench,
    },
];

export default function FleetOverview() {
    return (
        <section
            aria-labelledby="fleet-overview-heading"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h2
                        id="fleet-overview-heading"
                        className="text-lg font-semibold text-slate-900"
                    >
                        Fleet Overview
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Current status of your vehicles.
                    </p>
                </div>

                <Activity
                    size={20}
                    className="text-blue-600"
                    aria-hidden="true"
                />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
                {fleetStatuses.map((status) => {
                    const Icon = status.icon;

                    return (
                        <div
                            key={status.label}
                            className="rounded-lg bg-slate-50 p-4"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-500">
                                    {status.label}
                                </span>

                                <Icon
                                    size={16}
                                    className="text-slate-400"
                                    aria-hidden="true"
                                />
                            </div>

                            <p className="mt-2 text-2xl font-bold text-slate-900">
                                {status.count}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}