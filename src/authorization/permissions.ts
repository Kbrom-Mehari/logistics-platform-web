export const permissions = {
    CREATE_LOAD: "PERMISSION_CREATE_LOAD",
    OFFER_SHIPMENT: "PERMISSION_OFFER_SHIPMENT",
    VIEW_TRACKING: "PERMISSION_VIEW_TRACKING",
    VIEW_VEHICLES: "PERMISSION_VIEW_VEHICLES",
    VIEW_REPORTS: "PERMISSION_VIEW_REPORTS",
    MANAGE_USERS: "PERMISSION_MANAGE_USERS",
    MANAGE_ROLES: "PERMISSION_MANAGE_ROLES",
    MANAGE_COMPANY: "PERMISSION_MANAGE_COMPANY",
} as const;

export type Permission = typeof permissions[keyof typeof permissions];

export function isPermission(
    authority: string,
): authority is Permission {
    return Object.values(Permissions).includes(
        authority as Permission,
    );
}