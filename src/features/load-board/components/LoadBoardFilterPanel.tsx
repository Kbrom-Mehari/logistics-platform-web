import {
    CalendarDays,
    MapPin,
    RotateCcw,
    X,
} from "lucide-react";

import type {
    BooleanFilter,
    LoadBoardFilters,
} from "../types/LoadBoardTypes";
import type {ReactNode} from "react";
import type {Priority} from "../../loads/loadForm/LoadFormTypes.ts";

interface LoadBoardFilterPanelProps {
    isOpen: boolean;

    filters: LoadBoardFilters;

    onClose: () => void;

    onChange: (
        filters: LoadBoardFilters,
    ) => void;

    onApply: () => void;

    onReset: () => void;
}

export function LoadBoardFilterPanel({
                                         isOpen,
                                         filters,
                                         onClose,
                                         onChange,
                                         onApply,
                                         onReset,
                                     }: LoadBoardFilterPanelProps) {
    if (!isOpen) {
        return null;
    }

    const updateFilter = <
        K extends keyof LoadBoardFilters,
    >(
        key: K,
        value: LoadBoardFilters[K],
    ) => {
        onChange({
            ...filters,
            [key]: value,
        });
    };

    const handlePriorityChange = (
        priority: Priority,
    ) => {
        const priorities =
            filters.priorities.includes(priority)
                ? filters.priorities.filter(
                    (item) =>
                        item !== priority,
                )
                : [
                    ...filters.priorities,
                    priority,
                ];

        updateFilter(
            "priorities",
            priorities,
        );
    };

    const handleApply = () => {
        onApply();
        onClose();
    };

    const handleReset = () => {
        onReset();
    };

    return (
        <div className="fixed inset-0 z-50">
            <button
                type="button"
                aria-label="Close filters"
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px]"
            />

            <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
                <FilterPanelHeader
                    onClose={onClose}
                />

                <div className="flex-1 overflow-y-auto px-5 py-6">
                    <div className="space-y-8">
                        <FilterSection
                            title="Route"
                            description="Where the load starts and ends."
                        >
                            <LocationInput
                                label="Origin"
                                value={filters.origin}
                                onChange={(value) =>
                                    updateFilter(
                                        "origin",
                                        value,
                                    )
                                }
                            />

                            <LocationInput
                                label="Destination"
                                value={
                                    filters.destination
                                }
                                onChange={(value) =>
                                    updateFilter(
                                        "destination",
                                        value,
                                    )
                                }
                            />
                        </FilterSection>

                        <FilterSection
                            title="Pickup schedule"
                            description="Filter loads by pickup date."
                        >
                            <DateRangeFields
                                from={
                                    filters.pickupDateFrom
                                }
                                to={
                                    filters.pickupDateTo
                                }
                                onFromChange={(
                                    value,
                                ) =>
                                    updateFilter(
                                        "pickupDateFrom",
                                        value,
                                    )
                                }
                                onToChange={(value) =>
                                    updateFilter(
                                        "pickupDateTo",
                                        value,
                                    )
                                }
                            />
                        </FilterSection>

                        <FilterSection
                            title="Delivery schedule"
                            description="Filter loads by delivery date."
                        >
                            <DateRangeFields
                                from={
                                    filters.deliveryDateFrom
                                }
                                to={
                                    filters.deliveryDateTo
                                }
                                onFromChange={(
                                    value,
                                ) =>
                                    updateFilter(
                                        "deliveryDateFrom",
                                        value,
                                    )
                                }
                                onToChange={(value) =>
                                    updateFilter(
                                        "deliveryDateTo",
                                        value,
                                    )
                                }
                            />
                        </FilterSection>

                        <FilterSection
                            title="Priority"
                            description="Choose one or more priority levels."
                        >
                            <PriorityOptions
                                priorities={
                                    filters.priorities
                                }
                                onChange={
                                    handlePriorityChange
                                }
                            />
                        </FilterSection>

                        <FilterSection
                            title="Cargo requirements"
                            description="Match loads based on handling requirements."
                        >
                            <div className="space-y-5">
                                <BooleanFilterField
                                    label="Fragile cargo"
                                    value={
                                        filters.fragile
                                    }
                                    onChange={(value) =>
                                        updateFilter(
                                            "fragile",
                                            value,
                                        )
                                    }
                                />

                                <BooleanFilterField
                                    label="Hazardous cargo"
                                    value={
                                        filters.hazardous
                                    }
                                    onChange={(value) =>
                                        updateFilter(
                                            "hazardous",
                                            value,
                                        )
                                    }
                                />

                                <BooleanFilterField
                                    label="Temperature controlled"
                                    value={
                                        filters.temperatureControlled
                                    }
                                    onChange={(value) =>
                                        updateFilter(
                                            "temperatureControlled",
                                            value,
                                        )
                                    }
                                />
                            </div>
                        </FilterSection>
                    </div>
                </div>

                <FilterPanelFooter
                    onReset={handleReset}
                    onApply={handleApply}
                />
            </aside>
        </div>
    );
}

interface FilterPanelHeaderProps {
    onClose: () => void;
}

function FilterPanelHeader({
                               onClose,
                           }: FilterPanelHeaderProps) {
    return (
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
                <h2 className="font-semibold text-slate-900">
                    Filters
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Refine available loads.
                </p>
            </div>

            <button
                type="button"
                onClick={onClose}
                aria-label="Close filters"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
                <X className="h-5 w-5" />
            </button>
        </div>
    );
}

interface FilterSectionProps {
    title: string;
    description: string;
    children: ReactNode;
}

function FilterSection({
                           title,
                           description,
                           children,
                       }: FilterSectionProps) {
    return (
        <section>
            <div>
                <h3 className="font-medium text-slate-900">
                    {title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                    {description}
                </p>
            </div>

            <div className="mt-4 space-y-3">
                {children}
            </div>
        </section>
    );
}

interface LocationInputProps {
    label: string;
    value: string;

    onChange: (
        value: string,
    ) => void;
}

function LocationInput({
                           label,
                           value,
                           onChange,
                       }: LocationInputProps) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
                {label}
            </span>

            <div className="relative">
                <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                    type="text"
                    value={value}
                    onChange={(event) =>
                        onChange(
                            event.target.value,
                        )
                    }
                    placeholder={`Search ${label.toLowerCase()}...`}
                    className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
            </div>
        </label>
    );
}

interface DateRangeFieldsProps {
    from: string;
    to: string;

    onFromChange: (
        value: string,
    ) => void;

    onToChange: (
        value: string,
    ) => void;
}

function DateRangeFields({
                             from,
                             to,
                             onFromChange,
                             onToChange,
                         }: DateRangeFieldsProps) {
    return (
        <div className="grid grid-cols-2 gap-3">
            <DateInput
                label="From"
                value={from}
                onChange={onFromChange}
            />

            <DateInput
                label="To"
                value={to}
                onChange={onToChange}
            />
        </div>
    );
}

interface DateInputProps {
    label: string;
    value: string;

    onChange: (
        value: string,
    ) => void;
}

function DateInput({
                       label,
                       value,
                       onChange,
                   }: DateInputProps) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
                {label}
            </span>

            <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                    type="date"
                    value={value}
                    onChange={(event) =>
                        onChange(
                            event.target.value,
                        )
                    }
                    className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-700 outline-none transition-colors focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
            </div>
        </label>
    );

}


interface PriorityOptionsProps {
    priorities: Priority[];

    onChange: (
        priority: Priority,
    ) => void;
}

function PriorityOptions({
                             priorities,
                             onChange,
                         }: PriorityOptionsProps) {
    const options: {
        value: Priority;
        label: string;
    }[] = [
        {
            value: "URGENT",
            label: "Urgent",
        },
        {
            value: "HIGH",
            label: "High",
        },
        {
            value: "NORMAL",
            label: "Normal",
        },
    ];

    return (
        <div className="grid grid-cols-3 gap-2">
            {options.map((option) => {
                const isSelected =
                    priorities.includes(
                        option.value,
                    );

                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                            onChange(
                                option.value,
                            )
                        }
                        className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                            isSelected
                                ? "border-blue-200 bg-blue-50 text-blue-700"
                                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );

}


interface BooleanFilterFieldProps {
    label: string;

    value: BooleanFilter;

    onChange: (
        value: BooleanFilter,
    ) => void;
}

function BooleanFilterField({
                                label,
                                value,
                                onChange,
                            }: BooleanFilterFieldProps) {
    return (
        <div>
            <p className="mb-2 text-sm font-medium text-slate-700">
                {label}
            </p>

            <div className="grid grid-cols-3 gap-2">
                <BooleanOption
                    label="Any"
                    value="ANY"
                    selected={value}
                    onChange={onChange}
                />

                <BooleanOption
                    label="Yes"
                    value="YES"
                    selected={value}
                    onChange={onChange}
                />

                <BooleanOption
                    label="No"
                    value="NO"
                    selected={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

interface BooleanOptionProps {
    label: string;
    value: BooleanFilter;
    selected: BooleanFilter;

    onChange: (
        value: BooleanFilter,
    ) => void;
}

function BooleanOption({
                           label,
                           value,
                           selected,
                           onChange,
                       }: BooleanOptionProps) {
    const isSelected =
        value === selected;

    return (
        <button
            type="button"
            onClick={() =>
                onChange(value)
            }
            className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                isSelected
                    ? "border-blue-200 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
            }`}
        >
            {label}
        </button>
    );
}


interface FilterPanelFooterProps {
    onReset: () => void;
    onApply: () => void;
}
function FilterPanelFooter({
                               onReset,
                               onApply,
                           }: FilterPanelFooterProps) {
    return (
        <div className="flex items-center gap-3 border-t border-slate-200 px-5 py-4">
            <button
                type="button"
                onClick={onReset}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
                <RotateCcw className="h-4 w-4" />

                Reset
            </button>

            <button
                type="button"
                onClick={onApply}
                className="ml-auto h-10 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
                Apply Filters
            </button>
        </div>
    );
}