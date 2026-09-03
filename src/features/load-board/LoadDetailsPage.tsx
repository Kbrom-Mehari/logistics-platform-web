import {
    ArrowLeft,
    Loader2,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import { LoadDetailsActions } from "./loadDetails/LoadDetailsActions.tsx";
import { LoadDetailsCargo } from "./loadDetails/LoadDetailsCargo";
import { LoadDetailsHeader } from "./loadDetails/LoadDetailsHeader";
import { LoadDetailsInstructions } from "./loadDetails/LoadDetailsInstructions";
import { LoadDetailsOwner } from "./loadDetails/LoadDetailsOwner";
import { LoadDetailsRequirements } from "./loadDetails/LoadDetailsRequirements";
import { LoadDetailsRoute } from "./loadDetails/LoadDetailsRoute";
import { useLoadDetails } from "./hooks/useLoadDetails";

import type { LoadBoardItem} from "./types/LoadBoardTypes.ts";

interface LoadDetailsPageProps {
    onOfferShipment?: (load: LoadBoardItem) => void;
    onShare?: (load: LoadBoardItem) => void;
}

export default function LoadDetailsPage({
                                    onOfferShipment,
                                    onShare,
                                }: LoadDetailsPageProps) {
    const navigate = useNavigate();
    const { loadId } = useParams<{ loadId: string }>();

    const {
        load,
        isLoading,
        error,
        refetch,
    } = useLoadDetails(loadId);

    if (isLoading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading load details...
                </div>
            </div>
        );
    }

    if (error || !load) {
        return (
            <div className="mx-auto max-w-3xl py-10">
                <BackButton onClick={() => navigate("/dashboard/load-board")} />

                <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                    <h1 className="font-semibold text-red-900">
                        Load unavailable
                    </h1>

                    <p className="mt-1 text-sm text-red-700">
                        {error?.message ??
                            "The requested load could not be found."}
                    </p>

                    <button
                        type="button"
                        onClick={() => void refetch()}
                        className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                        Try again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl pb-10">
            <BackButton onClick={() => navigate(-1)} />

            <div className="space-y-5">
                <LoadDetailsHeader load={load} />

                <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
                    <main className="min-w-0 space-y-5">
                        <LoadDetailsRoute load={load} />

                        <LoadDetailsCargo load={load} />

                        <LoadDetailsRequirements load={load} />

                        <LoadDetailsInstructions load={load} />
                    </main>

                    <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
                        {onOfferShipment && onShare && (
                            <LoadDetailsActions
                                load={load}
                                onOfferShipment={onOfferShipment}
                                onShare={onShare}
                            />
                        )}

                        <LoadDetailsOwner owner={load.owner} />
                    </aside>
                </div>
            </div>
        </div>
    );
}

interface BackButtonProps {
    onClick: () => void;
}

function BackButton({
                        onClick,
                    }: BackButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
        >
            <ArrowLeft className="h-4 w-4" />
            Back to Load Board
        </button>
    );
}