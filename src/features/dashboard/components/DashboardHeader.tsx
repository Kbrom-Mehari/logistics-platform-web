import { Menu } from "lucide-react";
import UserMenu from "./UserMenu";
import NotificationDropdown from "./NotificationDropdown";


interface DashboardHeaderProps {
    onMenuClick: () => void;
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 lg:px-6">
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:hidden"
                    aria-label="Open Navigation Menu"
                >
                    <Menu size={22}/>
                </button>
                <div>
                    <h1 className="text-xl font-semibold text-blue-600">
                        Logicare
                    </h1>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <NotificationDropdown />

                <UserMenu />
            </div>

        </header>
    );
}