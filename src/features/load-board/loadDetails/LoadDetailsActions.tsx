import {
    Send,
    Share2,
} from "lucide-react";

import type { LoadBoardItem } from "../types/LoadBoardTypes";

interface LoadDetailsActionsProps {
    load: LoadBoardItem;
    onOfferShipment: (load: LoadBoardItem) => void;
    onShare: (load: LoadBoardItem) => void;
}

export function LoadDetailsActions({
                                       load,
                                       onOfferShipment,
                                       onShare,
                                   }: LoadDetailsActionsProps) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">
                Interested in this load?
            </h2>

            <p className="mt-1 text-sm leading-5 text-slate-500">
                Submit a shipment offer or share this load with someone
                who may be interested.
            </p>

            <div className="mt-5 space-y-2">
                <button
                    type="button"
                    onClick={() => onOfferShipment(load)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    <Send className="h-4 w-4" />
                    Offer Shipment
                </button>

                <button
                    type="button"
                    onClick={() => onShare(load)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
                >
                    <Share2 className="h-4 w-4" />
                    Share Load
                </button>
            </div>
        </section>
    );
}