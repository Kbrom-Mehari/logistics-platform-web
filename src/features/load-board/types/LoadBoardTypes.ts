import type {Load, Priority} from "../../loads/loadForm/LoadFormTypes";

export interface LoadOwner {
    id: string;
    name: string;
    companyName?: string;
}

export interface LoadBoardItem extends Load {
    id: string;

    owner: LoadOwner;

    createdAt: string;
}

export interface LoadBoardPagination {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}

export interface LoadBoardResponse {
    items: LoadBoardItem[];
    pagination: LoadBoardPagination;
}

export type LoadBoardSort =
    | "NEWEST"
    | "OLDEST"
    | "PICKUP_SOONEST"
    | "PICKUP_LATEST"
    | "DELIVERY_SOONEST"
    | "DELIVERY_LATEST";

export interface LoadBoardQuery {
    page: number;
    size: number;

    search?: string;

    sort?: LoadBoardSort;
}

export type BooleanFilter =
    | "ANY"
    | "YES"
    | "NO";

export interface LoadBoardFilters {
    origin: string;
    destination: string;

    pickupDateFrom: string;
    pickupDateTo: string;

    deliveryDateFrom: string;
    deliveryDateTo: string;

    priorities: Priority[];

    fragile: BooleanFilter;
    hazardous: BooleanFilter;
    temperatureControlled: BooleanFilter;
}