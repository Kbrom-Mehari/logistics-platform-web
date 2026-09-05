import { FileText } from "lucide-react";

import type { LoadBoardItem } from "../types/LoadBoardTypes";

interface LoadDetailsInstructionsProps {
    load: LoadBoardItem;
}

export function LoadDetailsInstructions({
                                            load,
                                        }: LoadDetailsInstructionsProps) {
    if (!load.specialInstructions.trim()) {
        return null;
    }

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-slate-400" />

                <h2 className="text-base font-semibold text-slate-900">
                    Special instructions
                </h2>
            </div>

            <p className="mt-4 whitespace-pre-line text-sm leading-6 text-slate-600">
                {load.specialInstructions}
            </p>
        </section>
    );
}