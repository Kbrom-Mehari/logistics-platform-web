import type { LoadBoardItem } from "../types/LoadBoardTypes";

import { LoadCard } from "./LoadCard";

interface LoadBoardGridProps {
    loads: LoadBoardItem[];

    onOfferShipment: (
        load: LoadBoardItem,
    ) => void;

    onShare: (
        load: LoadBoardItem,
    ) => void;
}

export function LoadBoardGrid({
                                  loads,
                                  onOfferShipment,
                                  onShare,
                              }: LoadBoardGridProps) {
    return (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {loads.map((load) => (
                <LoadCard
                    key={load.id}
                    load={load}
                    onOfferShipment={
                        onOfferShipment
                    }
                    onShare={onShare}
                />
            ))}
        </div>
    );
}