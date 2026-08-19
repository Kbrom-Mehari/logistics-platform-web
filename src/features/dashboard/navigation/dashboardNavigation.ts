import {
    BarChart3,
    MapPinned,
    LayoutDashboard,
    Van,
    Road,
    Construction,
    Users,
    Route,
    Container, LifeBuoy, ClipboardList, AlertCircle, Boxes,
} from "lucide-react";
import type { DashboardNavigationSection } from "./navigationTypes.ts";
// import {permissions} from "../../../authorization/permissions.ts";

export const dashboardNavigation: DashboardNavigationSection[] = [
    {
        section: "Overview",
        items: [
            {
                label: "Dashboard",
                to: "/dashboard",
                icon: LayoutDashboard,
            },
        ],

    },

    {
        section: "Logistics",
        items: [
            {
                label: "Shipments",
                to: "/dashboard/shipments",
                icon: Container,
                requiredPermissions: [],
            },
            {
                label: "Loads",
                to: "/dashboard/loads",
                icon: Boxes,
                requiredPermissions: [],
            },
            {
                label: "Routes",
                to: "/dashboard/routes",
                icon: Route,
                requiredPermissions: [],
            },
        ]
    },

    {
        section: "Fleet",
        items: [
            {
                label: "Vehicles",
                to: "/vehicles",
                icon: Van,
                requiredPermissions: [],
            },
            {
                label: "Live Tracking",
                to: "/live-tracking",
                icon: MapPinned,
                requiredPermissions: [],
            },
            {
                label: "Trips",
                to: "/trips",
                icon: Road,
                requiredPermissions: [],
            },
            {
                label: "Maintenance",
                to: "/maintenance",
                icon: Construction,
                requiredPermissions: [],
            },
        ]
    },


    {
        section: "People",
        items: [
            {
                label: "Drivers",
                to: "/drivers",
                icon: LifeBuoy,
                requiredPermissions: [],
            },
            {
                label: "Customers",
                to: "/customers",
                icon: Users,
                requiredPermissions: [],
            },
        ]
    },

    {
        section: "Insights",
        items: [
            {
                label: "Reports",
                to: "/reports",
                icon: ClipboardList,
                requiredPermissions: [],
            },
            {
                label: "Analytics",
                to: "/dashboard/analytics",
                icon: BarChart3,
                requiredPermissions: [],
            },
            {
                label: "Alerts",
                to: "/dashboard/alerts",
                icon: AlertCircle,
                requiredPermissions: [],
            }
        ]
    },
]