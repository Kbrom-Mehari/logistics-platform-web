import {
    useCallback,
    useState,
} from "react";

import type {
    CreateShipmentOfferRequest,
    ShipmentOffer,
} from "../types/OfferShipmentTypes";
import {createShipmentOffer} from "../service/offerShipmentService.ts";
import {ShipmentOfferRequestError} from "../errors/ShipmentOfferRequestError.ts";

interface UseOfferShipmentOptions {
    onSuccess?: (
        offer: ShipmentOffer,
    ) => void;
}

export function useOfferShipment(
    {
        onSuccess,
    }: UseOfferShipmentOptions = {},
) {
    const [
        isSubmitting,
        setIsSubmitting,
    ] = useState(false);

    const [
        error,
        setError,
    ] = useState<Error | null>(
        null,
    );

    const submitOffer = useCallback(
        async (
            request: CreateShipmentOfferRequest,
        ) => {
            try {
                setIsSubmitting(true);
                setError(null);

                const offer =
                    await createShipmentOffer(
                        request,
                    );

                onSuccess?.(offer);

                return offer;
            } catch (error) {
                const submissionError =
                    error instanceof Error
                        ? error
                        : new ShipmentOfferRequestError(
                            "Unable to submit your shipment offer.",
                        );

                setError(
                    submissionError,
                );

                throw submissionError;
            } finally {
                setIsSubmitting(false);
            }
        },
        [onSuccess],
    );

    const reset = useCallback(() => {
        setError(null);
    }, []);

    return {
        submitOffer,
        isSubmitting,
        error,
        reset,
    };
}