import type {
    OfferShipmentApiFieldErrors,
} from "../types/OfferShipmentTypes";

export class ShipmentOfferRequestError
    extends Error {
    readonly fieldErrors?: OfferShipmentApiFieldErrors;

    constructor(
        message: string,
        fieldErrors?: OfferShipmentApiFieldErrors,
    ) {
        super(message);

        this.name =
            "ShipmentOfferRequestError";

        this.fieldErrors =
            fieldErrors;
    }
}