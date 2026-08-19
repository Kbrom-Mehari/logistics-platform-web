import type {
    DashboardNavigationItem,
    DashboardNavigationSection,
} from "./navigationTypes";
import type {Permission} from "../../../authorization/permissions.ts";
import {dashboardNavigation} from "./dashboardNavigation.ts";

/**
 * Returns true if the user has every required permission.
 */
function hasRequiredPermissions(
    item: DashboardNavigationItem,
    userPermissions: Permission[],
): boolean {
    if (!item.requiredPermissions) {
        return true;
    }

    return item.requiredPermissions.every((permission) =>
        userPermissions.includes(permission),
    );
}

/**
 * Removes navigation items the user cannot access.
 * Also removes empty sections.
 */
export function filterNavigation(
    userPermissions: Permission[],
): DashboardNavigationSection[] {
    return dashboardNavigation
        .map((section) => ({
            ...section,
            items: section.items.filter((item) =>
                hasRequiredPermissions(item, userPermissions),
            ),
        }))
        .filter((section) => section.items.length > 0);
}