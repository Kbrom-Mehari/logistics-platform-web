import {
    Loader2,
    Send,
} from "lucide-react";

import type {
    OfferShipmentFormErrors,
    OfferShipmentFormValues,
} from "../../types/OfferShipmentTypes";

interface OfferShipmentFormProps {
    values: OfferShipmentFormValues;

    errors: OfferShipmentFormErrors;

    isSubmitting: boolean;

    error: Error | null;

    onFieldChange: <
        T extends keyof OfferShipmentFormValues,
    >(
        field: T,
        value: OfferShipmentFormValues[T],
    ) => void;

    onSubmit: () => void;

    onCancel: () => void;
}

const MAX_MESSAGE_LENGTH = 1_000;

export function OfferShipmentForm({
                                      values,
                                      errors,
                                      isSubmitting,
                                      error,
                                      onFieldChange,
                                      onSubmit,
                                      onCancel,
                                  }: OfferShipmentFormProps) {

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit();
            }}
            className="space-y-5"
        >
            {/* Offer price */}
            <div>
                <label
                    htmlFor="offeredPrice"
                    className="text-sm font-medium text-slate-700"
                >
                    Your offer
                </label>

                <div className="mt-2 flex gap-2">
                    <input
                        id="offeredPrice"
                        type="number"
                        min="0"
                        step="0.001"
                        value={values.offeredPrice}
                        onChange={(event) =>
                            onFieldChange(
                                "offeredPrice",
                                event.target.value,
                            )
                        }
                        aria-invalid={
                            Boolean(
                                errors.offeredPrice,
                            )
                        }
                        aria-describedby={
                            errors.offeredPrice
                                ? "offeredPrice-error"
                                : undefined
                        }
                        placeholder="Enter your price"
                        className={`h-11 min-w-0 flex-1 rounded-lg border bg-white px-3 text-sm text-slate-900 outline-none transition focus:ring-4 ${
                            errors.offeredPrice
                                ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                                : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                        }`}
                    />

                    <select
                        value={values.currency}
                        onChange={(event) =>
                            onFieldChange(
                                "currency",
                                event.target.value,
                            )
                        }
                        className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    >
                        <option value="ETB">
                            ETB
                        </option>

                        <option value="USD">
                            USD
                        </option>
                    </select>
                </div>

                {errors.offeredPrice && (
                    <p
                        id="offeredPrice-error"
                        className="mt-1.5 text-xs text-red-600"
                    >
                        {errors.offeredPrice}
                    </p>
                )}
            </div>

            {/* Estimated dates */}
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="estimatedPickupDate"
                        className="text-sm font-medium text-slate-700"
                    >
                        Estimated pickup
                    </label>

                    <input
                        id="estimatedPickupDate"
                        type="date"
                        value={
                            values.estimatedPickupDate
                        }
                        onChange={(event) =>
                            onFieldChange(
                                "estimatedPickupDate",
                                event.target.value,
                            )
                        }
                        aria-invalid={
                            Boolean(
                                errors.estimatedPickupDate,
                            )
                        }
                        aria-describedby={
                            errors.estimatedPickupDate
                                ? "estimatedPickupDate-error"
                                : undefined
                        }
                        className={`mt-2 h-11 w-full rounded-lg border bg-white px-3 text-sm text-slate-900 outline-none transition focus:ring-4 ${
                            errors.estimatedPickupDate
                                ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                                : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                        }`}
                    />

                    {errors.estimatedPickupDate && (
                        <p
                            id="estimatedPickupDate-error"
                            className="mt-1.5 text-xs text-red-600"
                        >
                            {
                                errors.estimatedPickupDate
                            }
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="estimatedDeliveryDate"
                        className="text-sm font-medium text-slate-700"
                    >
                        Estimated delivery
                    </label>

                    <input
                        id="estimatedDeliveryDate"
                        type="date"
                        value={
                            values.estimatedDeliveryDate
                        }
                        onChange={(event) =>
                            onFieldChange(
                                "estimatedDeliveryDate",
                                event.target.value,
                            )
                        }
                        aria-invalid={
                            Boolean(
                                errors.estimatedDeliveryDate,
                            )
                        }
                        aria-describedby={
                            errors.estimatedDeliveryDate
                                ? "estimatedDeliveryDate-error"
                                : undefined
                        }
                        className={`mt-2 h-11 w-full rounded-lg border bg-white px-3 text-sm text-slate-900 outline-none transition focus:ring-4 ${
                            errors.estimatedDeliveryDate
                                ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                                : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                        }`}
                    />

                    {errors.estimatedDeliveryDate && (
                        <p
                            id="estimatedDeliveryDate-error"
                            className="mt-1.5 text-xs text-red-600"
                        >
                            {
                                errors.estimatedDeliveryDate
                            }
                        </p>
                    )}
                </div>
            </div>

            {/* Message */}
            <div>
                <div className="flex items-center justify-between gap-4">
                    <label
                        htmlFor="offerMessage"
                        className="text-sm font-medium text-slate-700"
                    >
                        Message

                        <span className="ml-1 font-normal text-slate-400">
                            Optional
                        </span>
                    </label>

                    <span className="text-xs text-slate-400">
                        {values.message.length}/1000
                    </span>
                </div>

                <textarea
                    id="offerMessage"
                    rows={4}
                    maxLength={MAX_MESSAGE_LENGTH}
                    value={values.message}
                    onChange={(event) =>
                        onFieldChange(
                            "message",
                            event.target.value,
                        )
                    }
                    aria-invalid={
                        Boolean(
                            errors.message,
                        )
                    }
                    aria-describedby={
                        errors.message
                            ? "offerMessage-error"
                            : undefined
                    }
                    placeholder="Tell the shipper why your transportation service is a good fit for this load..."
                    className={`mt-2 w-full resize-none rounded-lg border bg-white px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
                        errors.message
                            ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                            : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                    }`}
                />

                <div className="mt-1.5 flex items-center justify-between gap-3">
                    <div>
                        {errors.message && (
                            <p className="text-xs text-red-600">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <span className="text-xs text-slate-400">
                        {values.message.length}/
                        {MAX_MESSAGE_LENGTH}
                    </span>
                </div>
            </div>

            {/* Server error */}
            {error && (
                <div
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700"
                >
                    {error.message}
                </div>
            )}

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={isSubmitting}
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    disabled={
                        isSubmitting ||
                        !values.offeredPrice
                    }
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" />

                            Submitting...
                        </>
                    ) : (
                        <>
                            <Send className="h-4 w-4" />

                            Submit offer
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}