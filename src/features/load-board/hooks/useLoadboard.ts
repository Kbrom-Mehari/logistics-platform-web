import {
    useCallback,
    useEffect,
    useState,
} from "react";


import type {
    LoadBoardQuery,
    LoadBoardResponse,
} from "../types/LoadBoardTypes";
import {getMockLoadBoard} from "../service/loadBoardService.ts";

interface UseLoadBoardResult {
    data: LoadBoardResponse | null;

    isLoading: boolean;

    error: Error | null;

    refetch: () => void;
}

export function useLoadBoard(
    query: LoadBoardQuery,
): UseLoadBoardResult {
    const [data, setData] =
        useState<LoadBoardResponse | null>(
            null,
        );

    const [isLoading, setIsLoading] =
        useState(true);

    const [error, setError] =
        useState<Error | null>(
            null,
        );

    const [reloadKey, setReloadKey] =
        useState(0);

    const refetch = useCallback(() => {
        setReloadKey(
            (current) => current + 1,
        );
    }, []);

    useEffect(() => {
        let isCancelled = false;

        async function loadBoard() {
            try {
                setIsLoading(true);
                setError(null);

                const response =
                    await getMockLoadBoard(
                        query,
                    );

                if (!isCancelled) {
                    setData(response);
                }
            } catch (error) {
                if (!isCancelled) {
                    setError(
                        error instanceof Error
                            ? error
                            : new Error(
                                "Failed to load available loads.",
                            ),
                    );
                }
            } finally {
                if (!isCancelled) {
                    setIsLoading(false);
                }
            }
        }

        loadBoard();

        return () => {
            isCancelled = true;
        };
    }, [query, reloadKey]);

    return {
        data,
        isLoading,
        error,
        refetch,
    };
}