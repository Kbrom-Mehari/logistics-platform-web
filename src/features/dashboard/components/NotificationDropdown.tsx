import { useEffect, useRef, useState } from "react";
import {
    Bell,
    Check,
    ChevronRight,
} from "lucide-react";

interface Notification {
    id: number;
    title: string;
    time: string;
    isRead: boolean;
}

const notifications: Notification[] = [
    {
        id: 1,
        title: "Vehicle ET-102 entered a geofence.",
        time: "2 min ago",
        isRead: true,
    },
    {
        id: 2,
        title: "Driver Alem reported a delay.",
        time: "18 min ago",
        isRead: true,
    },
    {
        id: 3,
        title: "Maintenance reminder for Truck ET-204.",
        time: "1 hour ago",
        isRead: true,
    },
];

export default function NotificationDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const unreadCount = notifications.filter(
        (notification) => !notification.isRead,
    ).length;

    const hasUnreadNotifications = unreadCount > 0;

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    function toggleDropdown() {
        setIsOpen((previous) => !previous);
    }

    function closeDropdown() {
        setIsOpen(false);
    }

    return (
        <div
            ref={dropdownRef}
            className="relative"
        >
            {/* Notification trigger */}
            <button
                type="button"
                onClick={toggleDropdown}
                aria-label={
                    hasUnreadNotifications
                        ? `${unreadCount} unread notifications`
                        : "Notifications"
                }
                aria-haspopup="menu"
                aria-expanded={isOpen}
                className={[
                    "relative flex h-9 w-9 items-center justify-center rounded-xl",
                    "text-slate-500 transition-colors duration-150",
                    "hover:bg-slate-100 hover:text-slate-900",
                    "focus:outline-none focus-visible:ring-2",
                    "focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                ].join(" ")}
            >
                <Bell
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                />

                {hasUnreadNotifications && (
                    <span
                        className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"
                        aria-hidden="true"
                    />
                )}
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div
                    role="menu"
                    aria-label="Notifications"
                    className={[
                        "absolute right-0 top-full z-50 mt-2 w-80",
                        "origin-top-right overflow-hidden rounded-2xl",
                        "border border-slate-200 bg-white shadow-xl shadow-slate-900/10",
                    ].join(" ")}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5">
                        <div>
                            <h2 className="text-sm font-semibold text-slate-900">
                                Notifications
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                {hasUnreadNotifications
                                    ? `${unreadCount} unread`
                                    : "You're all caught up"}
                            </p>
                        </div>

                        {hasUnreadNotifications && (
                            <button
                                type="button"
                                className="text-xs font-medium text-blue-600 transition-colors hover:text-blue-700"
                            >
                                Mark all read
                            </button>
                        )}
                    </div>

                    {/* Notification list */}
                    <div className="max-h-96 overflow-y-auto">
                        {notifications.length > 0 ? (
                            notifications.map((notification) => (
                                <button
                                    key={notification.id}
                                    type="button"
                                    role="menuitem"
                                    onClick={closeDropdown}
                                    className={[
                                        "flex w-full gap-3 border-b border-slate-100 px-4 py-3.5",
                                        "text-left transition-colors last:border-b-0",
                                        "hover:bg-slate-50",
                                        "focus:outline-none focus-visible:bg-slate-50",
                                        !notification.isRead
                                            ? "bg-blue-50/40"
                                            : "bg-white",
                                    ].join(" ")}
                                >
                                    {/* Status indicator */}
                                    <span
                                        className={[
                                            "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                                            notification.isRead
                                                ? "bg-transparent"
                                                : "bg-blue-600",
                                        ].join(" ")}
                                        aria-hidden="true"
                                    />

                                    {/* Content */}
                                    <span className="min-w-0 flex-1">
                                        <span
                                            className={[
                                                "block text-sm leading-5",
                                                notification.isRead
                                                    ? "font-medium text-slate-600"
                                                    : "font-semibold text-slate-800",
                                            ].join(" ")}
                                        >
                                            {notification.title}
                                        </span>

                                        <span className="mt-1 block text-xs text-slate-400">
                                            {notification.time}
                                        </span>
                                    </span>

                                    <ChevronRight
                                        size={15}
                                        className="mt-1 shrink-0 text-slate-300"
                                        aria-hidden="true"
                                    />
                                </button>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                                    <Check size={18} />
                                </span>

                                <p className="mt-3 text-sm font-medium text-slate-700">
                                    You're all caught up
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                    No new notifications right now.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-slate-100 p-2">
                        <button
                            type="button"
                            onClick={closeDropdown}
                            className="flex w-full items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-50"
                        >
                            View all notifications

                            <ChevronRight
                                size={14}
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}