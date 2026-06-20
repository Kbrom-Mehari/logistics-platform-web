import React from 'react';

// 1. Tell TypeScript exactly what props this component expects
interface LayoutProps {
    children: React.ReactNode; // This means "any valid JSX element"
}

// 2. Use the interface to type the component
export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex h-screen bg-slate-100 font-sans text-slate-800">
            {/* Sidebar Placeholder */}
            <aside className="w-64 bg-slate-900 text-white p-4">
                <h2 className="text-xl font-bold tracking-wider mb-8">LogiRoute</h2>
                <nav className="space-y-2">
                    <div className="p-2 bg-slate-800 rounded cursor-pointer">Dashboard</div>
                    <div className="p-2 hover:bg-slate-800 rounded cursor-pointer transition">Shipments</div>
                    <div className="p-2 hover:bg-slate-800 rounded cursor-pointer transition">Drivers</div>
                </nav>
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header Placeholder */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-end px-6">
                    <div className="flex items-center space-x-2">
                        <span className="font-medium text-sm">Welcome, Dispatcher</span>
                        <div className="w-8 h-8 rounded-full bg-slate-300" />
                    </div>
                </header>

                {/* Dynamic Content Area */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};