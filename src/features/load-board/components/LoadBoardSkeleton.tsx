export function LoadBoardSkeleton() {
    return (
        <div className="grid gap-5 md:grid-cols-2">
            {Array.from(
                { length: 6 },
                (_, index) => (
                    <LoadCardSkeleton
                        key={index}
                    />
                ),
            )}
        </div>
    );
}

function LoadCardSkeleton() {
    return (
        <div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div className="space-y-2">
                    <div className="h-3 w-24 rounded bg-slate-200" />

                    <div className="h-5 w-36 rounded bg-slate-200" />
                </div>

                <div className="h-7 w-16 rounded-full bg-slate-200" />
            </div>

            {/* Route */}
            <div className="mt-6 flex items-center gap-4">
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="h-3 w-20 rounded bg-slate-200" />

                    <div className="h-4 w-full max-w-36 rounded bg-slate-200" />
                </div>

                <div className="h-px w-8 shrink-0 bg-slate-200" />

                <div className="flex min-w-0 flex-1 flex-col items-end gap-2">
                    <div className="h-3 w-20 rounded bg-slate-200" />

                    <div className="h-4 w-full max-w-36 rounded bg-slate-200" />
                </div>
            </div>

            {/* Schedule */}
            <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="h-16 rounded-xl bg-slate-100" />

                <div className="h-16 rounded-xl bg-slate-100" />
            </div>

            {/* Requirements */}
            <div className="mt-6 flex flex-wrap gap-2">
                <div className="h-7 w-20 rounded-full bg-slate-100" />

                <div className="h-7 w-24 rounded-full bg-slate-100" />

                <div className="h-7 w-16 rounded-full bg-slate-100" />
            </div>

            {/* Owner */}
            <div className="mt-6 h-4 w-40 rounded bg-slate-200" />

            {/* Actions */}
            <div className="mt-6 flex gap-3">
                <div className="h-10 flex-1 rounded-lg bg-slate-200" />

                <div className="h-10 w-24 rounded-lg bg-slate-100" />
            </div>
        </div>
    );
}