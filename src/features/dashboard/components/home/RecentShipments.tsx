import {
    ArrowRight,
    CheckCircle2,
    Clock3,
    Package,
    Truck,
} from "lucide-react";

type ShipmentStatus =
    | "PENDING"
    | "IN_TRANSIT"
    | "DELIVERED"
    | "CANCELLED";

interface RecentShipment {
    id: string;
    trackingNumber: string;
    origin: string;
    destination: string;
    status: ShipmentStatus;
    carrier: string;
    updatedAt: string;
}

const recentShipments: RecentShipment[] = [
    {
        id: "shipments-001",
        trackingNumber: "SHP-2026-00124",
        origin: "Mekelle",
        destination: "Addis Ababa",
        status: "IN_TRANSIT",
        carrier: "Ethio Logistics",
        updatedAt: "10 minutes ago",
    },
    {
        id: "shipments-002",
        trackingNumber: "SHP-2026-00123",
        origin: "Adigrat",
        destination: "Mekelle",
        status: "DELIVERED",
        carrier: "Tigray Transport",
        updatedAt: "35 minutes ago",
    },
    {
        id: "shipments-003",
        trackingNumber: "SHP-2026-00122",
        origin: "Addis Ababa",
        destination: "Dire Dawa",
        status: "PENDING",
        carrier: "Habesha Freight",
        updatedAt: "1 hour ago",
    },
    {
        id: "shipments-004",
        trackingNumber: "SHP-2026-00121",
        origin: "Mekelle",
        destination: "Shire",
        status: "IN_TRANSIT",
        carrier: "Northern Transport",
        updatedAt: "2 hours ago",
    },
    {
        id: "shipments-005",
        trackingNumber: "SHP-2026-00120",
        origin: "Axum",
        destination: "Mekelle",
        status: "CANCELLED",
        carrier: "Tigray Transport",
        updatedAt: "3 hours ago",
    },
];

interface ShipmentStatusConfig {
    label: string;
    className: string;
    icon: React.ElementType;
}

const shipmentStatusConfig: Record<
    ShipmentStatus,
    ShipmentStatusConfig
> = {
    PENDING: {
        label: "Pending",
        className: "bg-amber-50 text-amber-700",
        icon: Clock3,
    },
    IN_TRANSIT: {
        label: "In Transit",
        className: "bg-blue-50 text-blue-700",
        icon: Truck,
    },
    DELIVERED: {
        label: "Delivered",
        className: "bg-green-50 text-green-700",
        icon: CheckCircle2,
    },
    CANCELLED: {
        label: "Cancelled",
        className: "bg-red-50 text-red-700",
        icon: Package,
    },
};

function ShipmentStatusBadge({status,}: { status: ShipmentStatus; }) {
    const config = shipmentStatusConfig[status];
    const Icon = config.icon;

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${config.className}`}
        >
            <Icon
                size={14}
                aria-hidden="true"
            />

            <span>{config.label}</span>
        </span>
    );
}

export default function RecentShipments() {
    return (
        <section
            aria-labelledby="recent-shipments-heading"
            className=" border border-slate-200 bg-white shadow-sm"
        >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                    <h2
                        id="recent-shipments-heading"
                        className="text-lg font-semibold text-slate-700"
                    >
                        Recent Shipments
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Latest shipment activity across your operation.
                    </p>
                </div>

                <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    View all
                    <ArrowRight
                        size={16}
                        aria-hidden="true"
                    />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/70">
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                            >
                                Shipment
                            </th>

                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                            >
                                Route
                            </th>

                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                            >
                                Carrier
                            </th>

                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                            >
                                Status
                            </th>

                            <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500"
                            >
                                Updated
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                    {recentShipments.map((shipment) => (
                        <tr
                            key={shipment.id}
                            className="transition-colors hover:bg-slate-50"
                        >
                            <td className="whitespace-nowrap px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                                        <Package
                                            size={17}
                                            className="text-blue-600"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-slate-900">
                                            {shipment.trackingNumber}
                                        </p>

                                        <p className="mt-0.5 text-xs text-slate-400">
                                            {shipment.id}
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <td className="whitespace-nowrap px-6 py-4">
                                <div className="text-sm text-slate-700">
                                    {shipment.origin}
                                    <span className="mx-2 text-slate-300">
                                            →
                                        </span>
                                    {shipment.destination}
                                </div>
                            </td>

                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                                {shipment.carrier}
                            </td>

                            <td className="whitespace-nowrap px-6 py-4">
                                <ShipmentStatusBadge
                                    status={shipment.status}
                                />
                            </td>

                            <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-slate-500">
                                {shipment.updatedAt}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}