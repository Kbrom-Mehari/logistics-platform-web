import type { LucideIcon } from "lucide-react";
import type {Permission} from "../../../authorization/permissions.ts";

export interface DashboardNavigationItem {
    label: string;
    to: string;
    icon: LucideIcon;
    requiredPermissions?: Permission[];
}

export interface DashboardNavigationSection {
    section: string;
    items: DashboardNavigationItem[];
}