import { Share2 } from "lucide-react";

import type { LoadBoardItem } from "../types/LoadBoardTypes";

interface LoadCardActionsProps {
    load: LoadBoardItem;

    onOfferShipment: (
        load: LoadBoardItem,
    ) => void;

    onShare: (
        load: LoadBoardItem,
    ) => void;
}

export function LoadCardActions({
                                    load,
                                    onOfferShipment,
                                    onShare,
                                }: LoadCardActionsProps) {
    return (
        <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
            <button
                type="button"
                onClick={() => onShare(load)}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
                <Share2 className="h-4 w-4" />

                Share
            </button>

            <button
                type="button"
                onClick={() =>
                    onOfferShipment(load)
                }
                className="ml-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
                Offer Shipment
            </button>
        </div>
    );
}