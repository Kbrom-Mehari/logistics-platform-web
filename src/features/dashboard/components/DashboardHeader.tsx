import { Menu } from "lucide-react";
import {useMatches} from "react-router-dom";

import UserMenu from "./UserMenu";
import NotificationDropdown from "./NotificationDropdown";
import type {DashboardRouteHandle} from "../../../routes/routeMetadata.ts";

interface DashboardHeaderProps {
    onMenuClick: () => void;
}

export default function DashboardHeader({
                                            onMenuClick,
                                        }: DashboardHeaderProps) {

    const matches = useMatches();
    const currentPage = matches
        .slice()
        .reverse()
        .find((match) => match.handle)?.handle as
        | DashboardRouteHandle
        | undefined;

    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
            {/* Left side */}
            <div className="flex min-w-0 items-center gap-3">
                {/* Mobile navigation */}
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:hidden"
                    aria-label="Open navigation menu"
                >
                    <Menu
                        size={20}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />
                </button>

                {/* Page identity */}
                <div className="min-w-0">
                    <h1 className="truncate text-sm font-semibold text-slate-900 sm:text-base">
                        {currentPage?.title ?? "Dashboard"}
                    </h1>

                    <p className="hidden truncate text-xs text-slate-400 sm:block">
                        {currentPage?.description ?? "Dash"}
                    </p>
                </div>
            </div>

            {/* Right side */}
            <div className="flex shrink-0 items-center gap-1.5">
                <NotificationDropdown />

                <div
                    className="mx-2 hidden h-7 w-px bg-slate-200 sm:block"
                    aria-hidden="true"
                />
                <UserMenu />
            </div>
        </header>
    );
}