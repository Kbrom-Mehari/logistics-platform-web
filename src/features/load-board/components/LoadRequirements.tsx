import {
    Box,
    Snowflake,
    Truck,
    TriangleAlert,
} from "lucide-react";

import type { LoadBoardItem } from "../types/LoadBoardTypes";

import {
    getCargoItemCount,
    isFragileLoad,
    isHazardousLoad,
} from "../utils/loadBoardUtils";

interface LoadRequirementsProps {
    load: LoadBoardItem;
}

export function LoadRequirements({
                                     load,
                                 }: LoadRequirementsProps) {
    const fragile = isFragileLoad(load);
    const hazardous = isHazardousLoad(load);

    return (
        <div className="flex flex-wrap gap-2">
            <RequirementChip
                icon={<Truck className="h-3.5 w-3.5" />}
                label={load.vehicleType}
            />

            <RequirementChip
                icon={<Box className="h-3.5 w-3.5" />}
                label={`${getCargoItemCount(load)} items`}
            />

            {fragile && (
                <RequirementChip
                    label="Fragile"
                />
            )}

            {hazardous && (
                <RequirementChip
                    icon={
                        <TriangleAlert className="h-3.5 w-3.5" />
                    }
                    label="Hazardous"
                />
            )}

            {load.temperatureControlled && (
                <RequirementChip
                    icon={
                        <Snowflake className="h-3.5 w-3.5" />
                    }
                    label="Temperature Controlled"
                />
            )}
        </div>
    );
}

interface RequirementChipProps {
    icon?: React.ReactNode;
    label: string;
}

function RequirementChip({
                             icon,
                             label,
                         }: RequirementChipProps) {
    return (
        <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600">
            {icon}

            <span>{label}</span>
        </div>
    );
}