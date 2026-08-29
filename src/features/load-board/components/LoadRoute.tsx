import {
    ArrowRight,
    MapPin,
} from "lucide-react";

interface LoadRouteProps {
    pickup: {
        name: string;
        address: string;
        city: string;
    };

    delivery: {
        name: string;
        address: string;
        city: string;
    };
}

export function LoadRoute({
                              pickup,
                              delivery,
                          }: LoadRouteProps) {
    return (
        <div className="flex items-center gap-3">
            <RouteLocation
                label="Pickup"
                city={pickup.city}
                location={pickup.name}
                align="left"
            />

            <RouteConnector />

            <RouteLocation
                label="Delivery"
                city={delivery.city}
                location={delivery.name}
                align="right"
            />
        </div>
    );
}

interface RouteLocationProps {
    label: string;
    city: string;
    location: string;
    align: "left" | "right";
}

function RouteLocation({
                           label,
                           city,
                           location,
                           align,
                       }: RouteLocationProps) {
    const alignment =
        align === "right"
            ? "items-end text-right"
            : "items-start text-left";

    return (
        <div
            className={`flex min-w-0 flex-1 flex-col ${alignment}`}
        >
            <div className="flex items-center gap-1.5">
                <MapPin
                    className={`h-3.5 w-3.5 shrink-0 ${
                        align === "right"
                            ? "text-green-600"
                            : "text-blue-600"
                    }`}
                />

                <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {label}
                </span>
            </div>

            <p className="mt-1 w-full truncate text-sm font-semibold text-slate-900">
                {city}
            </p>

            <p className="mt-1 w-full truncate text-xs text-slate-500">
                {location}
            </p>
        </div>
    );
}

function RouteConnector() {
    return (
        <div className="flex shrink-0 items-center gap-1">
            <div className="h-px w-4 border-t border-dashed border-slate-300 sm:w-8" />

            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500">
                <ArrowRight className="h-4 w-4" />
            </div>

            <div className="h-px w-4 border-t border-dashed border-slate-300 sm:w-8" />
        </div>
    );
}