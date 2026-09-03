import {
    useEffect,
    useState,
} from "react";

import {
    X,
} from "lucide-react";

import {
    useOfferShipment,
} from "../../hooks/useOfferShipment";

import type {
    LoadBoardItem,
} from "../../types/LoadBoardTypes";

import type {
    OfferShipmentFormErrors,
    OfferShipmentFormValues,
} from "../../types/OfferShipmentTypes";

import {
    OfferShipmentForm,
} from "./OfferShipmentForm";

import {
    OfferShipmentLoadSummary,
} from "./OfferShipmentLoadSummary";
import {validateOfferShipmentForm} from "../../utils/validateOfferShipmentForm.ts";
import {ShipmentOfferRequestError} from "../../errors/ShipmentOfferRequestError.ts";
import {useToast} from "../../../../context/ToastContext.tsx";

interface OfferShipmentDialogProps {
    load: LoadBoardItem | null;

    isOpen: boolean;

    onClose: () => void;

    onSuccess: () => void;
}

const INITIAL_FORM_VALUES: OfferShipmentFormValues =
    {
        offeredPrice: "",
        currency: "ETB",

        estimatedPickupDate: "",
        estimatedDeliveryDate: "",

        message: "",
    };

export function OfferShipmentDialog({
                                        load,
                                        isOpen,
                                        onClose,
                                        onSuccess,
                                    }: OfferShipmentDialogProps) {

    const [
        errors,
        setErrors,
    ] = useState<OfferShipmentFormErrors>(
        {},
    );

    const [
        values,
        setValues,
    ] = useState<OfferShipmentFormValues>(
        INITIAL_FORM_VALUES,
    );

    const {
        submitOffer,
        isSubmitting,
        error,
        reset,
    } = useOfferShipment();

    useEffect(() => {
        if (isOpen) {
            setValues(
                INITIAL_FORM_VALUES,
            );
            setErrors({});
            reset();
        }
    }, [
        isOpen,
        reset,
    ]);

    if (!isOpen || !load) {
        return null;
    }

    const handleClose = () => {
        if (isSubmitting) {
            return;
        }

        onClose();
    };

    const handleFieldChange = <
        T extends keyof OfferShipmentFormValues,
    >(
        field: T,
        value: OfferShipmentFormValues[T],
    ) => {
        setValues((current) => ({
            ...current,
            [field]: value,
        }));

        setErrors((current) => {
            const nextErrors = {
                ...current,
                [field]: undefined,
            };

            if (
                field === "estimatedPickupDate" ||
                field === "estimatedDeliveryDate"
            ) {
                nextErrors.estimatedPickupDate =
                    undefined;

                nextErrors.estimatedDeliveryDate =
                    undefined;
            }

            return nextErrors;
        });
    };

    const toast = useToast();

    const handleSubmit = async () => {
        const validationErrors =
            validateOfferShipmentForm(
                values,
                load,
            );

        setErrors(validationErrors);

        if (
            Object.keys(
                validationErrors,
            ).length > 0
        ) {
            return;
        }

        try {
            await submitOffer({
                loadId: load.id,

                offeredPrice: Number(
                    values.offeredPrice,
                ),

                currency: values.currency,

                estimatedPickupDate:
                    values.estimatedPickupDate ||
                    undefined,

                estimatedDeliveryDate:
                    values.estimatedDeliveryDate ||
                    undefined,

                message:
                    values.message.trim() ||
                    undefined,
            });

            toast.success(
                "Shipment offer submitted successfully.",
            );

            onSuccess();

            onClose();
        } catch (error) {
            if (
                error instanceof
                ShipmentOfferRequestError
            ) {
                if (error.fieldErrors) {
                    setErrors(
                        (current) => ({
                            ...current,
                            ...error.fieldErrors,
                        }),
                    );
                }
            }
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="offer-shipment-title"
        >
            <button
                type="button"
                aria-label="Close dialog"
                onClick={handleClose}
                className="absolute inset-0 cursor-default bg-slate-950/40 backdrop-blur-[2px]"
            />

            <div className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
                <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
                    <div>
                        <h2
                            id="offer-shipment-title"
                            className="text-lg font-semibold text-slate-900"
                        >
                            Offer shipment
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Submit your transportation offer for this load.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleClose}
                        disabled={isSubmitting}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="overflow-y-auto px-6 py-5">
                    <div className="space-y-6">
                        <OfferShipmentLoadSummary
                            load={load}
                        />

                        <OfferShipmentForm
                            values={values}
                            errors={errors}
                            isSubmitting={
                                isSubmitting
                            }
                            error={error}
                            onFieldChange={handleFieldChange}
                            onSubmit={
                                handleSubmit
                            }
                            onCancel={
                                handleClose
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}