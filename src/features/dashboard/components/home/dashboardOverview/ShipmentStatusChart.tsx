import { useMemo } from "react";

export interface ShipmentStatusData {
    complete: number;
    inTransit: number;
    cancelled: number;
    delivered: number;
}

interface ShipmentStatusChartProps {
    data: ShipmentStatusData;
}

interface ChartSlice {
    key: keyof ShipmentStatusData;
    label: string;
    value: number;
    percentage: number;
    color: string;
}

const CHART_COLORS = {
    complete: "#10b981",
    inTransit: "#3b82f6",
    cancelled: "#ef4444",
    delivered: "#8b5cf6",
} as const;

const CHART_LABELS = {
    complete: "Complete",
    inTransit: "In transit",
    cancelled: "Cancelled",
    delivered: "Delivered",
} as const;

const SIZE = 180;
const CENTER = SIZE / 2;
const RADIUS = 72;
const LABEL_RADIUS = 50;

function polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number,
) {
    const angleInRadians =
        ((angleInDegrees - 90) * Math.PI) / 180;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
    };
}

function createSlicePath(
    startAngle: number,
    endAngle: number,
) {
    const start = polarToCartesian(
        CENTER,
        CENTER,
        RADIUS,
        endAngle,
    );

    const end = polarToCartesian(
        CENTER,
        CENTER,
        RADIUS,
        startAngle,
    );

    const largeArcFlag =
        endAngle - startAngle <= 180 ? "0" : "1";

    return [
        `M ${CENTER} ${CENTER}`,
        `L ${start.x} ${start.y}`,
        `A ${RADIUS} ${RADIUS} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
        "Z",
    ].join(" ");
}

export default function ShipmentStatusChart({
                                                data,
                                            }: ShipmentStatusChartProps) {
    const total = useMemo(
        () =>
            data.complete +
            data.inTransit +
            data.cancelled +
            data.delivered,
        [data],
    );

    const slices = useMemo<ChartSlice[]>(() => {
        if (total === 0) {
            return [];
        }

        const statuses: Array<keyof ShipmentStatusData> = [
            "complete",
            "inTransit",
            "cancelled",
            "delivered",
        ];

        return statuses
            .map((key) => {
                const value = data[key];

                return {
                    key,
                    label: CHART_LABELS[key],
                    value,
                    percentage: (value / total) * 100,
                    color: CHART_COLORS[key],
                };
            })
            .filter((slice) => slice.value > 0);
    }, [data, total]);

    let currentAngle = 0;

    return (
        <div
            className="relative mx-auto size-45 shrink-0"
            aria-label={`Shipment status distribution: ${total} shipments`}
        >
            <svg
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                className="size-full overflow-visible"
                role="img"
            >
                {slices.map((slice) => {
                    const sliceAngle =
                        (slice.value / total) * 360;

                    const startAngle = currentAngle;
                    const endAngle =
                        currentAngle + sliceAngle;

                    currentAngle = endAngle;

                    const midAngle =
                        startAngle + sliceAngle / 2;

                    const labelPosition = polarToCartesian(
                        CENTER,
                        CENTER,
                        LABEL_RADIUS,
                        midAngle,
                    );

                    const path = createSlicePath(
                        startAngle,
                        endAngle,
                    );

                    return (
                        <g key={slice.key}>
                            <path
                                d={path}
                                fill={slice.color}
                                stroke="white"
                                strokeWidth="2"
                            />

                            {slice.percentage >= 4 && (
                                <text
                                    x={labelPosition.x}
                                    y={labelPosition.y}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className="fill-white text-[11px] font-bold"
                                >
                                    {`${Math.round(slice.percentage)}%`}
                                </text>
                            )}
                        </g>
                    );
                })}

                {/* Center */}
                <circle
                    cx={CENTER}
                    cy={CENTER}
                    r="32"
                    fill="white"
                />

                <text
                    x={CENTER}
                    y={CENTER - 3}
                    textAnchor="middle"
                    className="fill-slate-900 text-[20px] font-bold"
                >
                    {total}
                </text>

                <text
                    x={CENTER}
                    y={CENTER + 12}
                    textAnchor="middle"
                    className="fill-slate-500 text-[7px] font-medium"
                >
                    shipments
                </text>
            </svg>
        </div>
    );
}