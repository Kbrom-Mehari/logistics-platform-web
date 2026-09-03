import type {
    Toast as ToastType,
} from "../../../types/ToastTypes";

import {
    Toast,
} from "./Toast";

interface ToastContainerProps {
    toasts: ToastType[];

    onDismiss: (
        id: string,
    ) => void;
}

export function ToastContainer({
                                   toasts,
                                   onDismiss,
                               }: ToastContainerProps) {
    if (toasts.length === 0) {
        return null;
    }

    return (
        <div
            className="pointer-events-none fixed bottom-6 right-6 z-[100] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3"
            aria-live="polite"
            aria-atomic="true"
        >
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    toast={toast}
                    onDismiss={
                        onDismiss
                    }
                />
            ))}
        </div>
    );
}