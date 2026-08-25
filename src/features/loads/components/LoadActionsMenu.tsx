import {CheckCircle2, Copy, Edit3, Eye, Truck, X} from "lucide-react";
import type {LoadRecord} from "../types/LoadsPageTypes.ts";
import type {LoadStatus} from "../loadForm/LoadFormTypes.ts";

interface LoadActionsMenuProps {
    load: LoadRecord;

    onClose: () => void;
    onEdit: () => void;
    onDuplicate: () => void;
    onDelete: () => void;
    onAssign: () => void;

    onStatusChange: (
        id: string,
        status: LoadStatus,
    ) => void;

    onView: () => void;
}

export default function LoadActionsMenu({
                             load,
                             onEdit,
                             onDuplicate,
                             onDelete,
                             onAssign,
                             onStatusChange,
                             onView,
                         }: LoadActionsMenuProps) {
    return (
        <div className="absolute right-3 top-12 z-30 w-52 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
            <ActionButton
                icon={Eye}
                label="View details"
                onClick={onView}
            />

            {(load.status === "DRAFT" ||
                load.status === "PENDING") && (
                <ActionButton
                    icon={Edit3}
                    label="Edit load"
                    onClick={onEdit}
                />
            )}

            <ActionButton
                icon={Copy}
                label="Duplicate"
                onClick={onDuplicate}
            />

            {load.status === "PENDING" &&
                !load.carrier && (
                    <ActionButton
                        icon={Truck}
                        label="Assign carrier"
                        onClick={onAssign}
                    />
                )}

            {load.status === "ASSIGNED" && (
                <ActionButton
                    icon={Truck}
                    label="Mark in transit"
                    onClick={() =>
                        onStatusChange(
                            load.id,
                            "IN_TRANSIT",
                        )
                    }
                />
            )}

            {load.status === "IN_TRANSIT" && (
                <ActionButton
                    icon={CheckCircle2}
                    label="Mark delivered"
                    onClick={() =>
                        onStatusChange(
                            load.id,
                            "DELIVERED",
                        )
                    }
                />
            )}

            {load.status === "DELIVERED" && (
                <ActionButton
                    icon={CheckCircle2}
                    label="Mark completed"
                    onClick={() =>
                        onStatusChange(
                            load.id,
                            "COMPLETED",
                        )
                    }
                />
            )}

            {load.status === "DRAFT" && (
                <>
                    <div className="my-1 border-t border-slate-100" />

                    <ActionButton
                        icon={X}
                        label="Delete draft"
                        danger
                        onClick={onDelete}
                    />
                </>
            )}
        </div>
    );
}

interface ActionButtonProps {
    icon: typeof Eye;
    label: string;
    onClick: () => void;
    danger?: boolean;
}

function ActionButton({
                          icon: Icon,
                          label,
                          onClick,
                          danger = false,
                      }: ActionButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition",
                danger
                    ? "text-red-600 hover:bg-red-50"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
            ].join(" ")}
        >
            <Icon className="h-4 w-4" />
            {label}
        </button>
    );
}