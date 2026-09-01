import {
    useEffect,
} from "react";

import {
    CheckCircle2,
    CircleAlert,
    Info,
    TriangleAlert,
    X,
} from "lucide-react";

import type {
    Toast as ToastType,
} from "../../../types/ToastTypes";

interface ToastProps {
    toast: ToastType;

    onDismiss: (
        id: string,
    ) => void;
}

const DEFAULT_DURATION = 4_000;

const TOAST_STYLES = {
    success: {
        icon: CheckCircle2,

        iconClassName:
            "text-emerald-600",

        containerClassName:
            "border-emerald-200 bg-emerald-50",
    },

    error: {
        icon: CircleAlert,

        iconClassName:
            "text-red-600",

        containerClassName:
            "border-red-200 bg-red-50",
    },

    info: {
        icon: Info,

        iconClassName:
            "text-blue-600",

        containerClassName:
            "border-blue-200 bg-blue-50",
    },

    warning: {
        icon: TriangleAlert,

        iconClassName:
            "text-amber-600",

        containerClassName:
            "border-amber-200 bg-amber-50",
    },
} as const;

export function Toast({
                          toast,
                          onDismiss,
                      }: ToastProps) {
    useEffect(() => {
        const timeoutId =
            window.setTimeout(
                () => {
                    onDismiss(
                        toast.id,
                    );
                },
                toast.duration ??
                DEFAULT_DURATION,
            );

        return () => {
            window.clearTimeout(
                timeoutId,
            );
        };
    }, [
        toast.id,
        toast.duration,
        onDismiss,
    ]);

    const {
        icon: Icon,
        iconClassName,
        containerClassName,
    } = TOAST_STYLES[
        toast.type
        ];

    return (
        <div
            role={
                toast.type === "error"
                    ? "alert"
                    : "status"
            }
            className={`pointer-events-auto flex w-full items-start gap-3 rounded-xl border px-4 py-3 shadow-lg ${containerClassName}`}
        >
            <Icon
                className={`mt-0.5 h-5 w-5 shrink-0 ${iconClassName}`}
            />

            <p className="flex-1 text-sm font-medium text-slate-700">
                {toast.message}
            </p>

            <button
                type="button"
                onClick={() =>
                    onDismiss(
                        toast.id,
                    )
                }
                aria-label="Dismiss notification"
                className="shrink-0 rounded-md p-1 text-slate-400 transition hover:bg-black/5 hover:text-slate-700"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}