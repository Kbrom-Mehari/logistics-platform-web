import { CalendarDays, Clock } from "lucide-react";

import {
    formatLoadDate,
    formatLoadTimeRange,
} from "../utils/loadBoardUtils";

interface LoadScheduleProps {
    pickupDate: string;
    pickupTimeFrom: string;
    pickupTimeTo: string;

    deliveryDate: string;
    deliveryTimeFrom: string;
    deliveryTimeTo: string;
}

export function LoadSchedule({
                                 pickupDate,
                                 pickupTimeFrom,
                                 pickupTimeTo,
                                 deliveryDate,
                                 deliveryTimeFrom,
                                 deliveryTimeTo,
                             }: LoadScheduleProps) {
    return (
        <div className="grid grid-cols-2 gap-3">
            <ScheduleItem
                label="Pickup"
                date={pickupDate}
                timeFrom={pickupTimeFrom}
                timeTo={pickupTimeTo}
            />

            <ScheduleItem
                label="Delivery"
                date={deliveryDate}
                timeFrom={deliveryTimeFrom}
                timeTo={deliveryTimeTo}
            />
        </div>
    );
}

interface ScheduleItemProps {
    label: string;
    date: string;
    timeFrom: string;
    timeTo: string;
}

function ScheduleItem({
                          label,
                          date,
                          timeFrom,
                          timeTo,
                      }: ScheduleItemProps) {
    return (
        <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                {label}
            </p>

            <div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                <CalendarDays className="h-3.5 w-3.5 text-slate-400" />

                <span>{formatLoadDate(date)}</span>
            </div>

            <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="h-3.5 w-3.5" />

                <span>
                    {formatLoadTimeRange(
                        timeFrom,
                        timeTo,
                    )}
                </span>
            </div>
        </div>
    );
}