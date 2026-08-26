import {
    CircleAlert,
    Clock3,
    Package,
    Truck,
    type LucideIcon,
} from "lucide-react";

interface LoadsMetricsProps {
    metrics: {
        active: number;
        unassigned: number;
        inTransit: number;
        issues: number;
    };
}

interface MetricCardProps {
    icon: LucideIcon;
    label: string;
    value: number;
    description: string;
    danger?: boolean;
}

export default function LoadsMetrics({
                                         metrics,
                                     }: LoadsMetricsProps) {
    return (
        <section className="grid grid-cols-4 gap-4 border-b border-slate-200 bg-white px-6 py-4">
            <MetricCard
                icon={Truck}
                label="Active loads"
                value={metrics.active}
                description="Assigned or in transit"
            />

            <MetricCard
                icon={Clock3}
                label="Unassigned"
                value={metrics.unassigned}
                description="Waiting for a carrier"
            />

            <MetricCard
                icon={Package}
                label="In transit"
                value={metrics.inTransit}
                description="Currently moving"
            />

            <MetricCard
                icon={CircleAlert}
                label="Issues"
                value={metrics.issues}
                description="Need your attention"
                danger={metrics.issues > 0}
            />
        </section>
    );
}

function MetricCard({
                        icon: Icon,
                        label,
                        value,
                        description,
                        danger = false,
                    }: MetricCardProps) {
    return (
        <article className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
            <div
                className={[
                    "flex h-9 w-9 items-center justify-center rounded-lg",
                    danger
                        ? "bg-red-50 text-red-600"
                        : "bg-blue-50 text-blue-600",
                ].join(" ")}
            >
                <Icon className="h-4 w-4" />
            </div>

            <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-slate-900">
                        {value}
                    </span>

                    <span className="text-xs font-medium text-slate-500">
                        {label}
                    </span>
                </div>

                <p className="truncate text-[11px] text-slate-400">
                    {description}
                </p>
            </div>
        </article>
    );
}