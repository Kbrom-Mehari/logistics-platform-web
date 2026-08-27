import type {LoadTab,} from "../types/LoadsPageTypes";
import type {LoadStatus,} from "../loadForm/LoadFormTypes";

export const statusLabels: Record<
    LoadStatus,
    string
> = {
    DRAFT: "Drafts",
    PENDING: "Pending",
    ASSIGNED: "Assigned",
    IN_TRANSIT: "In Transit",
    DELIVERED: "Delivered",
    COMPLETED: "Completed",
    ISSUE: "Issues",
};

export const tabs: {
    key: LoadTab;
    label: string;
}[] = [
    {
        key: "ALL",
        label: "All loads",
    },
    {
        key: "DRAFT",
        label: "Drafts",
    },
    {
        key: "PENDING",
        label: "Pending",
    },
    {
        key: "ASSIGNED",
        label: "Assigned",
    },
    {
        key: "IN_TRANSIT",
        label: "In Transit",
    },
    {
        key: "DELIVERED",
        label: "Delivered",
    },
    {
        key: "COMPLETED",
        label: "Completed",
    },
    {
        key: "ISSUE",
        label: "Issues",
    },
];