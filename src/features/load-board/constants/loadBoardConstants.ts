import type {
    LoadBoardFilters,
    LoadBoardSort,
} from "../types/LoadBoardTypes";

export const DEFAULT_LOAD_BOARD_FILTERS: LoadBoardFilters =
    {
        origin: "",
        destination: "",

        pickupDateFrom: "",
        pickupDateTo: "",

        deliveryDateFrom: "",
        deliveryDateTo: "",

        priorities: [],

        fragile: "ANY",
        hazardous: "ANY",
        temperatureControlled: "ANY",
    };

export const DEFAULT_LOAD_BOARD_SORT: LoadBoardSort =
    "NEWEST";

export const DEFAULT_LOAD_BOARD_PAGE_SIZE = 20;