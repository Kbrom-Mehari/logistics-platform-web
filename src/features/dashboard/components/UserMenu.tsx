import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import {useAuth} from "../../../hooks/useAuth.tsx";

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function toggleMenu(){
        setIsOpen((previous) => !previous);
    }

    const user = useAuth();

    return (
        <div
            ref={menuRef}
            className="relative"
        >
            <button
                type="button"
                onClick={toggleMenu}
                className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-100"
            >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    KM
                </div>

                <div className="hidden text-left md:block">
                    <p className="text-sm font-medium text-slate-900">
                        Kbrom Mehari
                    </p>

                    <p className="text-xs text-slate-500">
                        kbrom@example.com
                    </p>
                </div>

                <ChevronDown
                    size={18}
                    className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                    <div className="border-b border-slate-200 p-4">
                        <p className="font-medium text-slate-900">
                            Kbrom Mehari
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            kbrom@example.com
                        </p>
                    </div>

                    <button
                        type="button"
                        className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 transition-colors hover:bg-slate-50"
                    >
                        <User size={18} />

                        Profile
                    </button>

                    <button
                        type="button"
                        className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 transition-colors hover:bg-slate-50"
                    >
                        <Settings size={18} />

                        Settings
                    </button>

                    <div className="border-t border-slate-200">
                        <button
                            type="button"
                            onClick={user.logout}
                            className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-red-600 transition-colors hover:bg-red-50"
                        >
                            <LogOut size={18} />

                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}