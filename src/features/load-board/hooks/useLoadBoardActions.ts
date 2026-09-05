import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useToast } from "../../../contexts/ToastContext";

import { shareLoad } from "../utils/shareLoad";

import type { LoadBoardItem } from "../types/LoadBoardTypes";

export function useLoadBoardActions() {
    const navigate = useNavigate();
    const toast = useToast();

    const handleViewDetails = useCallback(
        (load: LoadBoardItem) => {
            navigate(`/dashboard/load-board/${load.id}`);
        },
        [navigate],
    );

    const handleShare = useCallback(
        async (load: LoadBoardItem) => {
            try {
                const result = await shareLoad(load);

                if (result.status === "cancelled") {
                    return;
                }

                if (result.method === "clipboard") {
                    toast.success("Load link copied to clipboard.");
                    return;
                }

                toast.success("Load shared successfully.");
            } catch (error) {
                console.error("Unable to share load:", error);

                toast.error(
                    "Unable to share the load. Please try again.",
                );
            }
        },
        [toast],
    );

    return {
        handleViewDetails,
        handleShare,
    };
}