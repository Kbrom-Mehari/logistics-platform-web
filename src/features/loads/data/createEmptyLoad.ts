import type {
    CargoItem,
    Load,
} from "../loadForm/LoadFormTypes";

export function createDefaultCargoItem(): CargoItem {
    return {
        id: crypto.randomUUID(),
        name: "",
        cargoType: "GENERAL",
        quantity: 1,
        weightKg: 0,
        volumeM3: undefined,
        packaging: "",
        fragile: false,
        hazardous: false,
    };
}

export function createEmptyLoad(): Load {
    return {
        reference: "",
        priority: "NORMAL",
        description: "",

        pickup: {
            name: "",
            address: "",
            city: "",
        },

        delivery: {
            name: "",
            address: "",
            city: "",
        },

        pickupDate: "",
        pickupTimeFrom: "",
        pickupTimeTo: "",

        deliveryDate: "",
        deliveryTimeFrom: "",
        deliveryTimeTo: "",

        cargoItems: [
            createDefaultCargoItem(),
        ],

        vehicleType: "",
        temperatureControlled: false,
        minTemperature: undefined,
        maxTemperature: undefined,

        specialInstructions: "",
    };
}