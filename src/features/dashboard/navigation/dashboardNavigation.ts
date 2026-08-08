import {
    BarChart3,
    MapPinned,
    LayoutDashboard,
    Van,
    Road,
    Construction,
    Users,
    Route,
    Container, FileStack, LifeBuoy, ClipboardList,
} from "lucide-react";
import type { DashboardNavigationSection } from "./navigationTypes.ts";
import {permissions} from "./permissions.ts";

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
        section: "Fleet",
        items: [
            {
                label: "Vehicles",
                to: "/vehicles",
                icon: Van,
                requiredPermissions: [permissions.OFFER_SHIPMENT, permissions.CREATE_LOAD,],
            },
            {
                label: "Live Tracking",
                to: "/live-tracking",
                icon: MapPinned,
                requiredPermissions: [permissions.OFFER_SHIPMENT, permissions.MANAGE_ROLES],
            },
            {
                label: "Trips",
                to: "/trips",
                icon: Road,
                requiredPermissions: [permissions.MANAGE_ROLES],
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
        section: "Logistics",
        items: [
            {
                label: "Shipments",
                to: "/shipments",
                icon: Container,
                requiredPermissions: [],
            },
            {
                label: "Orders",
                to: "/orders",
                icon: FileStack,
                requiredPermissions: [],
            },
            {
                label: "Routes",
                to: "/routes",
                icon: Route,
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
        ]
    },
]