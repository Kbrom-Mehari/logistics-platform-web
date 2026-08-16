import type { LucideIcon } from "lucide-react";

export interface DashboardStatCardProps {
    title: string;
    value: string | number;
    description?: string;
    icon: LucideIcon;
}

export default function DashboardStatCard(
    {
        title,
        value,
        description,
        icon: Icon,
    }: DashboardStatCardProps) {
    return (
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:bg-slate-50 group">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500">
                        {title}
                    </p>

                    <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                        {value}
                    </p>

                    {description && (
                        <p className="mt-1 text-xs text-slate-400">
                            {description}
                        </p>
                    )}
                </div>

                <div className="rounded-lg bg-blue-50 p-2.5 group-hover:bg-blue-100">
                    <Icon
                        size={20}
                        className="text-blue-600"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </article>
    );
}