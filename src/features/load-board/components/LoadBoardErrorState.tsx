import {
    AlertCircle,
    RefreshCw,
} from "lucide-react";

interface LoadBoardErrorStateProps {
    message: string;

    onRetry: () => void;
}

export function LoadBoardErrorState({
                                        message,
                                        onRetry,
                                    }: LoadBoardErrorStateProps) {
    return (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-red-100 bg-red-50/40 px-6 py-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                <AlertCircle className="h-7 w-7" />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-slate-900">
                Unable to load the Load Board
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                {message}
            </p>

            <button
                type="button"
                onClick={onRetry}
                className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
                <RefreshCw className="h-4 w-4" />

                Try again
            </button>
        </div>
    );
}