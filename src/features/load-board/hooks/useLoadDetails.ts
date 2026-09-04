import {
    useCallback,
    useEffect,
    useState,
} from "react";

import {
    getLoadById,
} from "../service/loadBoardService";

import type {
    LoadBoardItem,
} from "../types/LoadBoardTypes";

interface UseLoadDetailsResult {
    load: LoadBoardItem | null;

    isLoading: boolean;

    error: Error | null;

    refetch: () => Promise<void>;
}

export function useLoadDetails(
    loadId: string | undefined,
): UseLoadDetailsResult {
    const [load, setLoad] =
        useState<LoadBoardItem | null>(
            null,
        );

    const [
        isLoading,
        setIsLoading,
    ] = useState(true);

    const [
        error,
        setError,
    ] = useState<Error | null>(
        null,
    );

    const fetchLoad = useCallback(
        async () => {
            if (!loadId) {
                setLoad(null);

                setError(
                    new Error(
                        "Load ID is missing.",
                    ),
                );

                setIsLoading(false);

                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const result =
                    await getLoadById(
                        loadId,
                    );

                setLoad(result);
            } catch (error) {
                setLoad(null);

                setError(
                    error instanceof Error
                        ? error
                        : new Error(
                            "Unable to load load details.",
                        ),
                );
            } finally {
                setIsLoading(false);
            }
        },
        [loadId],
    );

    useEffect(() => {
        void fetchLoad();
    }, [fetchLoad]);

    return {
        load,
        isLoading,
        error,
        refetch: fetchLoad,
    };
}