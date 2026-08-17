import NavigationMenu from "./NavigationMenu";

export default function DashboardSidebar() {
    return (
        <aside className="hidden h-screen border-r border-slate-200 bg-white lg:flex lg:flex-col">
            {/* Brand */}
            <div className="flex h-16 shrink-0 items-center border-b border-slate-100 px-5">
                <div className="flex items-center gap-3">
                    <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-200"
                        aria-hidden="true"
                    >
                        L
                    </div>

                    <div className="min-w-0">
                        <p className="truncate text-sm font-bold tracking-tight text-slate-900">
                            Logicare
                        </p>

                        <p className="truncate text-[11px] font-medium text-slate-400">
                            Logistics platform
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="min-h-0 flex-1 overflow-y-auto">
                <nav className="px-3 py-5">
                    <NavigationMenu />
                </nav>
            </div>

            {/* Bottom area */}
            <div className="shrink-0 border-t border-slate-100 p-1.5">
                <div className="flex items-center gap-3 rounded-xl px-3 py-2.5">
                    <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600"
                        aria-hidden="true"
                    >
                        K
                    </div>

                    <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-800">
                            Account
                        </p>

                        <p className="truncate text-xs text-slate-400">
                            Manage your account
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
}