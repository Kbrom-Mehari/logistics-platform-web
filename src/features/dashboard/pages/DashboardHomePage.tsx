import DashboardWelcome from "../components/home/DashboardWelcome";
import DashboardOverview from "../components/home/dashboardOverview/DashboardOverview.tsx";
import FleetOverview from "../components/home/FleetOverview";
import ShipmentOverview from "../components/home/dashboardOverview/ShipmentOverview.tsx";
import RecentShipments from "../components/home/RecentShipments";
import RecentAlerts from "../components/home/RecentAlerts";

export default function DashboardHomePage() {
    return (
        <div className="space-y-8">
            {/*<DashboardWelcome />*/}

            <DashboardOverview loads={{
                total: 45,
                delivered: 20,
                completed: 10,
                cancelled: 15
            }} shipments={{
                total: 0,
                complete: 9,
                inTransit: 11,
                cancelled: 2,
                delivered: 11
            }} rating={4} ratingCount={56894} criticalAlerts={0} canOfferShipment={true} hasCreatedLoad={true} />

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {/*<FleetOverview />*/}
            </div>

            <div className="xl:col-span-2">
                <RecentShipments />
            </div>

            {/*<div className="grid grid-cols-1 gap-6 xl:grid-cols-3">*/}
            {/*    <RecentAlerts />*/}
            {/*</div>*/}
            <RecentAlerts />
        </div>
    );
}