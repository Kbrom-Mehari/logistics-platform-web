import LoadsOverview from "./LoadsOverview";
import ShipmentOverview from "./ShipmentOverview";

export interface DashboardOverviewProps {
    loads: {
        total: number;
        delivered: number;
        completed: number;
        cancelled: number;
    };

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

    hasCreatedLoad: boolean;

    onCreateLoad?: () => void;
    onFindCarriers?: () => void;
    onRegisterTransport?: () => void;
    onTrackShipment?: (trackingNumber: string) => void;
    onViewAlerts?: () => void;
}

export default function DashboardOverview({
                                              loads,
                                              shipments,
                                              rating,
                                              ratingCount,
                                              criticalAlerts,
                                              canOfferShipment,
                                              hasCreatedLoad,
                                              onCreateLoad,
                                              onFindCarriers,
                                              onRegisterTransport,
                                              onTrackShipment,
                                              onViewAlerts,
                                          }: DashboardOverviewProps) {
    return (
        <section className="overflow-hidden  border border-slate-200 bg-white shadow-sm">
            {/* Header */}
            <div className="border-b border-slate-200 px-6 py-5">
                <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold tracking-tight text-slate-800">
                        Overview
                    </h2>

                    <p className="text-sm text-slate-500">
                        Keep track of your loads, shipments, and transport
                        activity.
                    </p>
                </div>
            </div>

            {/* Main content */}
            <div className="grid lg:grid-cols-[1fr_auto_1fr]">
                {/* Your Loads */}
                <LoadsOverview
                    loads={loads}
                    hasCreatedLoad={hasCreatedLoad}
                    onCreateLoad={onCreateLoad}
                    onFindCarriers={onFindCarriers}
                    onTrackShipment={onTrackShipment}
                />

                {/* Divider */}
                <div className="hidden w-px bg-slate-200 lg:block" />

                <div className="h-px bg-slate-200 lg:hidden" />

                {/* Your Shipments */}
                <ShipmentOverview
                    shipments={shipments}
                    rating={rating}
                    ratingCount={ratingCount}
                    criticalAlerts={criticalAlerts}
                    canOfferShipment={canOfferShipment}
                    onFindCarriers={onFindCarriers}
                    onRegisterTransport={onRegisterTransport}
                    onViewAlerts={onViewAlerts}
                />
            </div>
        </section>
    );
}