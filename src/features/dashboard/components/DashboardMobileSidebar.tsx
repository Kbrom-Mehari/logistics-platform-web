import { X } from "lucide-react";
import NavigationMenu from "./NavigationMenu.tsx";

interface DashboardMobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DashboardMobileSidebar({ isOpen, onClose }: DashboardMobileSidebarProps) {
    if(!isOpen) {
        return null;
    }

    return (
        <>
            <div
                className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                onClick={onClose}
                aria-label="true"
            />
            <aside className="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto border-r border-slate-200 bg-white lg:hidden">
                <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
                    <h2 className="text-lg font-semibold text-slate-900">
                        Menu
                    </h2>

                    <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close navigation menu"
                    >
                        <X size={20}/>
                    </button>
                </div>

                <nav className="p-4">
                    <NavigationMenu onItemClick={onClose} />
                </nav>

            </aside>



        </>
    )
}