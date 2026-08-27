import type { LoadRecord } from "../types/LoadsPageTypes";
import { createEmptyLoad } from "./createEmptyLoad";

export const createMockLoads = (): LoadRecord[] => [
    {
        id: "load-001",
        status: "PENDING",
        carrier: "Trans ETH",
        createdAt: "2026-08-16T08:00:00",
        updatedAt: "2026-08-17T10:31:00",
        data: {
            reference: "SHP-12H4-59ST",
            priority: "HIGH",
            description: "Electronic equipment shipment",

            pickup: {
                name: "Mekelle Warehouse",
                address: "Hawelti",
                city: "Adigrat",
            },

            delivery: {
                name: "Wukro Distribution Center",
                address: "Main Road",
                city: "Wukro",
            },

            pickupDate: "2026-08-17",
            pickupTimeFrom: "08:00",
            pickupTimeTo: "12:00",

            deliveryDate: "2026-08-18",
            deliveryTimeFrom: "09:00",
            deliveryTimeTo: "16:00",

            cargoItems: [
                {
                    id: "item-001",
                    name: "Electronics",
                    cargoType: "ELECTRONICS",
                    quantity: 12,
                    weightKg: 850,
                    volumeM3: 4.5,
                    packaging: "Boxes",
                    fragile: true,
                    hazardous: false,
                },
            ],

            vehicleType: "Medium Truck",
            temperatureControlled: false,
            minTemperature: undefined,
            maxTemperature: undefined,
            specialInstructions: "",
        },
    },

    {
        id: "load-002",
        status: "PENDING",
        carrier: "Ethio Freight",
        createdAt: "2026-08-16T07:00:00",
        updatedAt: "2026-08-17T05:30:00",
        data: {
            reference: "SHP-25C6-4PQ3",
            priority: "NORMAL",
            description: "Agricultural products",

            pickup: {
                name: "Mekelle Grain Warehouse",
                address: "Industrial Area",
                city: "Mekelle",
            },

            delivery: {
                name: "Shire Distribution Center",
                address: "Central Road",
                city: "Shire",
            },

            pickupDate: "2026-08-17",
            pickupTimeFrom: "07:00",
            pickupTimeTo: "11:00",

            deliveryDate: "2026-08-18",
            deliveryTimeFrom: "08:00",
            deliveryTimeTo: "15:00",

            cargoItems: [
                {
                    id: "item-002",
                    name: "Wheat",
                    cargoType: "AGRICULTURAL",
                    quantity: 30,
                    weightKg: 2500,
                    volumeM3: 8,
                    packaging: "Bags",
                    fragile: false,
                    hazardous: false,
                },
            ],

            vehicleType: "Heavy Truck",
            temperatureControlled: false,
            minTemperature: undefined,
            maxTemperature: undefined,
            specialInstructions: "",
        },
    },

    {
        id: "load-003",
        status: "PENDING",
        carrier: null,
        createdAt: "2026-08-17T08:00:00",
        updatedAt: "2026-08-17T11:00:00",
        data: {
            reference: "SHP-64A0-6302",
            priority: "HIGH",
            description: "Fresh fruit shipment",

            pickup: {
                name: "Hawassa Farm",
                address: "Southern Farm Road",
                city: "Hawassa",
            },

            delivery: {
                name: "Mekelle Market",
                address: "Main Market",
                city: "Mekelle",
            },

            pickupDate: "2026-08-17",
            pickupTimeFrom: "06:00",
            pickupTimeTo: "10:00",

            deliveryDate: "2026-08-18",
            deliveryTimeFrom: "08:00",
            deliveryTimeTo: "12:00",

            cargoItems: [
                {
                    id: "item-003",
                    name: "Fruit",
                    cargoType: "FOOD",
                    quantity: 20,
                    weightKg: 1200,
                    volumeM3: 7,
                    packaging: "Crates",
                    fragile: true,
                    hazardous: false,
                },
            ],

            vehicleType: "Refrigerated Truck",
            temperatureControlled: true,
            minTemperature: 2,
            maxTemperature: 8,
            specialInstructions: "Keep cargo refrigerated.",
        },
    },

    {
        id: "load-004",
        status: "PENDING",
        carrier: null,
        createdAt: "2026-08-17T09:00:00",
        updatedAt: "2026-08-17T10:50:00",
        data: {
            reference: "SHP-58XC-4C06",
            priority: "NORMAL",
            description: "Construction materials",

            pickup: {
                name: "Adwa Construction Depot",
                address: "Industrial Area",
                city: "Adwa",
            },

            delivery: {
                name: "Shire Construction Site",
                address: "Northern Road",
                city: "Shire",
            },

            pickupDate: "2026-08-18",
            pickupTimeFrom: "07:00",
            pickupTimeTo: "12:00",

            deliveryDate: "2026-08-18",
            deliveryTimeFrom: "14:00",
            deliveryTimeTo: "18:00",

            cargoItems: [
                {
                    id: "item-004",
                    name: "Brick",
                    cargoType: "CONSTRUCTION",
                    quantity: 500,
                    weightKg: 3000,
                    volumeM3: 10,
                    packaging: "Pallets",
                    fragile: false,
                    hazardous: false,
                },
            ],

            vehicleType: "Heavy Truck",
            temperatureControlled: false,
            minTemperature: undefined,
            maxTemperature: undefined,
            specialInstructions: "",
        },
    },

    {
        id: "load-005",
        status: "ASSIGNED",
        carrier: "Tigrai Logistics",
        createdAt: "2026-08-15T09:00:00",
        updatedAt: "2026-08-16T09:00:00",
        data: {
            reference: "SHP-M68N3-20T1",
            priority: "NORMAL",
            description: "Packaged drinking water",

            pickup: {
                name: "Raya Water Depot",
                address: "Industrial Area",
                city: "Raya",
            },

            delivery: {
                name: "Adigrat Warehouse",
                address: "Main Road",
                city: "Adigrat",
            },

            pickupDate: "2026-08-16",
            pickupTimeFrom: "08:00",
            pickupTimeTo: "12:00",

            deliveryDate: "2026-08-17",
            deliveryTimeFrom: "09:00",
            deliveryTimeTo: "15:00",

            cargoItems: [
                {
                    id: "item-005",
                    name: "Water",
                    cargoType: "GENERAL",
                    quantity: 100,
                    weightKg: 1800,
                    volumeM3: 12,
                    packaging: "Boxes",
                    fragile: false,
                    hazardous: false,
                },
            ],

            vehicleType: "Medium Truck",
            temperatureControlled: false,
            minTemperature: undefined,
            maxTemperature: undefined,
            specialInstructions: "",
        },
    },

    {
        id: "load-006",
        status: "IN_TRANSIT",
        carrier: "Ethio Freight",
        createdAt: "2026-08-14T08:00:00",
        updatedAt: "2026-08-17T09:15:00",
        data: {
            reference: "SHP-82KA-1029",
            priority: "HIGH",
            description: "Food distribution",

            pickup: {
                name: "Mekelle Warehouse",
                address: "Industrial Area",
                city: "Mekelle",
            },

            delivery: {
                name: "Axum Distribution Center",
                address: "Central Road",
                city: "Axum",
            },

            pickupDate: "2026-08-15",
            pickupTimeFrom: "06:00",
            pickupTimeTo: "09:00",

            deliveryDate: "2026-08-17",
            deliveryTimeFrom: "09:00",
            deliveryTimeTo: "17:00",

            cargoItems: [
                {
                    id: "item-006",
                    name: "Food",
                    cargoType: "FOOD",
                    quantity: 40,
                    weightKg: 2200,
                    volumeM3: 9,
                    packaging: "Boxes",
                    fragile: false,
                    hazardous: false,
                },
            ],

            vehicleType: "Heavy Truck",
            temperatureControlled: false,
            minTemperature: undefined,
            maxTemperature: undefined,
            specialInstructions: "",
        },
    },

    {
        id: "load-007",
        status: "DELIVERED",
        carrier: "Trans ETH",
        createdAt: "2026-08-12T08:00:00",
        updatedAt: "2026-08-16T16:00:00",
        data: {
            reference: "SHP-44ZX-8912",
            priority: "NORMAL",
            description: "General merchandise",

            pickup: {
                name: "Adigrat Supplier",
                address: "Main Road",
                city: "Adigrat",
            },

            delivery: {
                name: "Mekelle Store",
                address: "Downtown",
                city: "Mekelle",
            },

            pickupDate: "2026-08-14",
            pickupTimeFrom: "08:00",
            pickupTimeTo: "11:00",

            deliveryDate: "2026-08-16",
            deliveryTimeFrom: "10:00",
            deliveryTimeTo: "15:00",

            cargoItems: [
                {
                    id: "item-007",
                    name: "General merchandise",
                    cargoType: "GENERAL",
                    quantity: 25,
                    weightKg: 900,
                    volumeM3: 5,
                    packaging: "Boxes",
                    fragile: false,
                    hazardous: false,
                },
            ],

            vehicleType: "Medium Truck",
            temperatureControlled: false,
            minTemperature: undefined,
            maxTemperature: undefined,
            specialInstructions: "",
        },
    },

    {
        id: "load-008",
        status: "DRAFT",
        carrier: null,
        createdAt: "2026-08-17T10:00:00",
        updatedAt: "2026-08-17T10:00:00",
        data: {
            ...createEmptyLoad(),
            reference: "SHP-DRAFT-001",
            description: "Draft load",
        },
    },
];