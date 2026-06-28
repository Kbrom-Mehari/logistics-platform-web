import {Outlet} from "react-router-dom";


export default function LandingLayout() {
    return (
        <div className="h-screen bg-white font-sans text-slate-900 selection:bg-blue-500 selection:text-white scrollbar-none overflow-auto">

            {/* 1. Navigation Bar */}
            <header className="sticky top-0 z-50 mx-auto w-auto px-6 py-6 flex justify-between items-center h-20 bg-white border-b border-b-gray-200">
                {/* Brand Logo */}
                <div className="text-2xl font-bold text-blue-600 tracking-tight flex items-center">
                    LogiCare
                </div>

                {/* Centered Links */}
                <nav className="hidden md:flex space-x-8 text-[15px] font-medium text-gray-600">
                    <a href="/features" className="hover:text-blue-600 transition">Features</a>
                    <a href="/solutions" className="hover:text-blue-600 transition">Solutions</a>
                    <a href="/pricing" className="hover:text-blue-600 transition">Pricing</a>
                </nav>

                {/* Auth / CTA */}
                <div className="flex items-center space-x-6 text-[15px]">
                    <a href="/login" className="font-medium text-gray-600 hover:text-blue-600 transition">Log in</a>
                    <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm">
                        Book a Demo
                    </button>
                </div>
            </header>

            <main className="min-h-screen ">
                <Outlet />
            </main>

        </div>
    );
}