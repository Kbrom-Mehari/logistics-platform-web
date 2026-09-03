import {
    createContext,
    useCallback,
    useContext,
    useState,
} from "react";

import type {
    ReactNode,
} from "react";

import {
    ToastContainer,
} from "../components/ui/toast/ToastContainer";

import type {
    Toast,
    ToastType,
} from "../types/ToastTypes";

interface ShowToastOptions {
    duration?: number;
}

interface ToastContextValue {
    success: (
        message: string,
        options?: ShowToastOptions,
    ) => void;

    error: (
        message: string,
        options?: ShowToastOptions,
    ) => void;

    info: (
        message: string,
        options?: ShowToastOptions,
    ) => void;

    warning: (
        message: string,
        options?: ShowToastOptions,
    ) => void;
}

const ToastContext =
    createContext<
        ToastContextValue | undefined
    >(undefined);

const DEFAULT_DURATION = 4_000;

interface ToastProviderProps {
    children: ReactNode;
}

export function ToastProvider({
                                  children,
                              }: ToastProviderProps) {
    const [
        toasts,
        setToasts,
    ] = useState<Toast[]>([]);

    const dismissToast = useCallback(
        (id: string) => {
            setToasts((current) =>
                current.filter(
                    (toast) =>
                        toast.id !== id,
                ),
            );
        },
        [],
    );

    const showToast = useCallback(
        (
            type: ToastType,
            message: string,
            options: ShowToastOptions = {},
        ) => {
            const toast: Toast = {
                id:
                    crypto.randomUUID(),

                type,

                message,

                duration:
                    options.duration ??
                    DEFAULT_DURATION,
            };

            setToasts((current) => [
                ...current,
                toast,
            ]);
        },
        [],
    );

    const success = useCallback(
        (
            message: string,
            options?: ShowToastOptions,
        ) => {
            showToast(
                "success",
                message,
                options,
            );
        },
        [showToast],
    );

    const error = useCallback(
        (
            message: string,
            options?: ShowToastOptions,
        ) => {
            showToast(
                "error",
                message,
                options,
            );
        },
        [showToast],
    );

    const info = useCallback(
        (
            message: string,
            options?: ShowToastOptions,
        ) => {
            showToast(
                "info",
                message,
                options,
            );
        },
        [showToast],
    );

    const warning = useCallback(
        (
            message: string,
            options?: ShowToastOptions,
        ) => {
            showToast(
                "warning",
                message,
                options,
            );
        },
        [showToast],
    );

    return (
        <ToastContext.Provider
            value={{
                success,
                error,
                info,
                warning,
            }}
        >
            {children}

            <ToastContainer
                toasts={toasts}
                onDismiss={
                    dismissToast
                }
            />
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context =
        useContext(ToastContext);

    if (!context) {
        throw new Error(
            "useToast must be used within a ToastProvider.",
        );
    }

    return context;
}