import {
    AlertCircle,
    AlertTriangle,
    ArrowRight,
    CheckCircle2,
    Info,
} from "lucide-react";

type AlertSeverity =
    | "CRITICAL"
    | "WARNING"
    | "INFO"
    | "RESOLVED";

interface RecentAlert {
    id: string;
    title: string;
    message: string;
    severity: AlertSeverity;
    createdAt: string;
}

interface AlertSeverityConfig {
    label: string;
    className: string;
    icon: React.ElementType;
}

const alertSeverityConfig: Record<
    AlertSeverity,
    AlertSeverityConfig
> = {
    CRITICAL: {
        label: "Critical",
        className: "bg-red-50 text-red-700",
        icon: AlertCircle,
    },
    WARNING: {
        label: "Warning",
        className: "bg-amber-50 text-amber-700",
        icon: AlertTriangle,
    },
    INFO: {
        label: "Info",
        className: "bg-blue-50 text-blue-700",
        icon: Info,
    },
    RESOLVED: {
        label: "Resolved",
        className: "bg-green-50 text-green-700",
        icon: CheckCircle2,
    },
};

const recentAlerts: RecentAlert[] = [
    {
        id: "alert-001",
        title: "Vehicle Offline",
        message: "Vehicle V-102 has been offline for 45 minutes.",
        severity: "CRITICAL",
        createdAt: "5 minutes ago",
    },
    {
        id: "alert-002",
        title: "Shipment Delayed",
        message: "Shipment SHP-2026-00124 is behind its expected schedule.",
        severity: "WARNING",
        createdAt: "18 minutes ago",
    },
    {
        id: "alert-003",
        title: "Geofence Violation",
        message: "Vehicle V-205 entered a restricted area.",
        severity: "WARNING",
        createdAt: "32 minutes ago",
    },
    {
        id: "alert-004",
        title: "Maintenance Due",
        message: "Vehicle V-108 is approaching its scheduled maintenance.",
        severity: "INFO",
        createdAt: "1 hour ago",
    },
];

function AlertSeverityBadge({
                                severity,
                            }: {
    severity: AlertSeverity;
}) {
    const config = alertSeverityConfig[severity];
    const Icon = config.icon;

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${config.className}`}
        >
            <Icon
                size={13}
                aria-hidden="true"
            />

            {config.label}
        </span>
    );
}

export default function RecentAlerts() {
    return (
        <section
            aria-labelledby="recent-alerts-heading"
            className="border border-slate-200 bg-white shadow-sm"
        >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                    <h2
                        id="recent-alerts-heading"
                        className="text-lg font-semibold text-slate-900"
                    >
                        Recent Alerts
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Operational issues that may require attention.
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

            <div className="divide-y divide-slate-100">
                {recentAlerts.map((alert) => {
                    const config = alertSeverityConfig[alert.severity];
                    const Icon = config.icon;

                    return (
                        <article
                            key={alert.id}
                            className="px-6 py-4 transition-colors hover:bg-slate-50"
                        >
                            <div className="flex gap-4">
                                <div
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${config.className}`}
                                >
                                    <Icon
                                        size={18}
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <h3 className="text-sm font-semibold text-slate-900">
                                            {alert.title}
                                        </h3>

                                        <AlertSeverityBadge
                                            severity={alert.severity}
                                        />
                                    </div>

                                    <p className="mt-1 text-sm leading-5 text-slate-600">
                                        {alert.message}
                                    </p>

                                    <time
                                        className="mt-2 block text-xs text-slate-400"
                                        dateTime={alert.createdAt}
                                    >
                                        {alert.createdAt}
                                    </time>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}