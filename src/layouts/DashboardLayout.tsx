import { useState } from "react";
import { BarChart3, Bell, ChevronDown, LayoutDashboard, Menu, Settings, Users, X } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const navigation = [
        { name: "Dashboard", icon: <LayoutDashboard size={18} />, href: "#", current: true },
        { name: "Analytics", icon: <BarChart3 size={18} />, href: "#", current: false },
        { name: "Team", icon: <Users size={18} />, href: "#", current: false },
        { name: "Settings", icon: <Settings size={18} />, href: "#", current: false },
    ];

    return (
        <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans text-slate-900 antialiased">
            {/* --- HEADER --- */}
            <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/80 fixed top-0 left-0 right-0 h-16 z-30 flex items-center justify-between px-4 sm:px-6">
                {/* Left Side: Logo & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                        className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold text-base shadow-sm shadow-blue-500/20">
                            L
                        </div>
                        <span className="text-base font-bold tracking-tight text-slate-900">
                            LOGICARE
                        </span>
                    </div>
                </div>

                {/* Right Side: Notifications & Profile */}
                <div className="flex items-center gap-4">
                    {/* Notification Bell */}
                    <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 relative transition-colors">
                        <Bell size={18} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
                    </button>

                    <hr className="w-px h-5 bg-slate-200"/>

                    {/* Profile Dropdown Trigger */}
                    <button className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60" >
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                            alt="User profile"
                            className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200"
                        />
                        <div className="hidden sm:block text-left">
                            <p className="text-sm font-semibold text-slate-700 leading-none">Kbrom Mehari</p>
                            <p className="text-xs text-slate-400 font-medium mt-1">Admin</p>
                        </div>
                        <ChevronDown size={14} className="text-slate-400 hidden sm:block ml-0.5"/>
                    </button>
                </div>
            </header>

            {/* --- MAIN CONTENT WRAPPER --- */}
            <div className="flex flex-1 pt-16">

                {/* --- SIDEBAR (Desktop) --- */}
                <aside className="w-64 bg-white border-r border-slate-200 fixed bottom-0 top-16 left-0 hidden lg:block overflow-y-auto">
                    <nav className="p-4 space-y-1">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group relative ${
                                    item.current
                                        ? "bg-blue-50/70 text-blue-600 font-semibold"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                            >
                                {/* Left active accent bar */}
                                {item.current && (
                                    <div className="absolute left-0 top-2.5 bottom-2.5 w-0.5 bg-blue-600 rounded-r-full" />
                                )}
                                <span className={`${item.current ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"} transition-colors`}>
                                    {item.icon}
                                </span>
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* --- SIDEBAR (Mobile Drawer) --- */}
                {isMobileSidebarOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <div
                            className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 lg:hidden pt-16"
                            onClick={() => setIsMobileSidebarOpen(false)}
                        />

                        <aside className="w-64 bg-white border-r border-slate-200 fixed bottom-0 top-16 left-0 z-50 lg:hidden overflow-y-auto animate-in slide-in-from-left duration-200">
                            <nav className="p-4 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileSidebarOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                            item.current
                                                ? "bg-blue-50 text-blue-600 font-semibold"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        }`}
                                    >
                                        <span className={item.current ? "text-blue-600" : "text-slate-400"}>
                                            {item.icon}
                                        </span>
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </aside>
                    </>
                )}

                {/* --- MAIN VIEWPORT --- */}
                <main className="flex-1 lg:pl-64 p-8 bg-slate-50/50 min-h-[calc(100vh-4rem)]">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}