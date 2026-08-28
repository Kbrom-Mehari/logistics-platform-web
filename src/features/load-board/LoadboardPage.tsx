import {
    useState,
} from "react";

import { LoadBoardFilterPanel } from "./components/LoadBoardFilterPanel";
import { LoadBoardGrid } from "./components/LoadBoardGrid";
import { LoadBoardToolbar } from "./components/LoadBoardToolbar";

import {
    DEFAULT_LOAD_BOARD_FILTERS,
    // DEFAULT_LOAD_BOARD_PAGE_SIZE,
    DEFAULT_LOAD_BOARD_SORT,
} from "./constants/loadBoardConstants";

import { mockLoadBoardResponse } from "./data/mockLoads";

import type {
    LoadBoardFilters,
    LoadBoardItem,
    LoadBoardSort,
} from "./types/LoadBoardTypes";

export function LoadBoardPage() {
    const [search, setSearch] =
        useState("");

    const [sort, setSort] =
        useState<LoadBoardSort>(
            DEFAULT_LOAD_BOARD_SORT,
        );

    const [
        isFilterPanelOpen,
        setIsFilterPanelOpen,
    ] = useState(false);

    const [
        filters,
        setFilters,
    ] = useState<LoadBoardFilters>(
        DEFAULT_LOAD_BOARD_FILTERS,
    );

    const [
        draftFilters,
        setDraftFilters,
    ] = useState<LoadBoardFilters>(
        DEFAULT_LOAD_BOARD_FILTERS,
    );

    const loads =
        mockLoadBoardResponse.items;

    const activeFilterCount =
        getActiveFilterCount(filters);

    const handleSearchChange = (
        value: string,
    ) => {
        setSearch(value);

        // Backend-ready:
        // page should reset to 0 here
        // once query state is introduced.
    };

    const handleSortChange = (
        value: LoadBoardSort,
    ) => {
        setSort(value);

        // Backend-ready:
        // page should reset to 0 here.
    };

    const handleOpenFilters = () => {
        setDraftFilters(filters);
        setIsFilterPanelOpen(true);
    };

    const handleCloseFilters = () => {
        setIsFilterPanelOpen(false);
    };

    const handleApplyFilters = () => {
        setFilters(draftFilters);

        // Backend-ready:
        // reset page to 0 here.
    };

    const handleResetFilters = () => {
        setDraftFilters(
            DEFAULT_LOAD_BOARD_FILTERS,
        );
    };

    const handleOfferShipment = (
        load: LoadBoardItem,
    ) => {
        console.log(
            "Offer shipment for:",
            load,
        );
    };

    const handleShare = (
        load: LoadBoardItem,
    ) => {
        console.log(
            "Share load:",
            load,
        );
    };

    return (
        <div className="space-y-6">

            {/*<div className="flex items-center justify-between">*/}
            {/*    <p className="text-sm text-slate-500">*/}
            {/*        <span className="font-semibold text-slate-900">*/}
            {/*            {*/}
            {/*                mockLoadBoardResponse*/}
            {/*                    .pagination*/}
            {/*                    .totalElements*/}
            {/*            }*/}
            {/*        </span>{" "}*/}
            {/*        loads available*/}
            {/*    </p>*/}
            {/*</div>*/}

            <LoadBoardToolbar
                search={search}
                sort={sort}
                activeFilterCount={
                    activeFilterCount
                }
                onSearchChange={
                    handleSearchChange
                }
                onSortChange={
                    handleSortChange
                }
                onOpenFilters={
                    handleOpenFilters
                }
            />

            <LoadBoardGrid
                loads={loads}
                onOfferShipment={
                    handleOfferShipment
                }
                onShare={handleShare}
            />

            <LoadBoardFilterPanel
                isOpen={isFilterPanelOpen}
                filters={draftFilters}
                onClose={
                    handleCloseFilters
                }
                onChange={
                    setDraftFilters
                }
                onApply={
                    handleApplyFilters
                }
                onReset={
                    handleResetFilters
                }
            />
        </div>
    );
}

function getActiveFilterCount(
    filters: LoadBoardFilters,
): number {
    let count = 0;

    if (filters.origin) {
        count++;
    }

    if (filters.destination) {
        count++;
    }

    if (filters.pickupDateFrom) {
        count++;
    }

    if (filters.pickupDateTo) {
        count++;
    }

    if (filters.deliveryDateFrom) {
        count++;
    }

    if (filters.deliveryDateTo) {
        count++;
    }

    count += filters.priorities.length;

    if (filters.fragile !== "ANY") {
        count++;
    }

    if (filters.hazardous !== "ANY") {
        count++;
    }

    if (
        filters.temperatureControlled !==
        "ANY"
    ) {
        count++;
    }

    return count;
}