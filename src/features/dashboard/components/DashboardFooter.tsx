import { CircleCheck, ExternalLink } from "lucide-react";

const footerLinks = [
    { label: "Help Center", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
];

const APP_VERSION = "1.0.0";

export default function DashboardFooter() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex min-h-14 max-w-screen-2xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                {/* Copyright */}
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                    <span>
                        © {new Date().getFullYear()} Logicare
                    </span>

                    <span
                        className="text-slate-300"
                        aria-hidden="true"
                    >
                        ·
                    </span>

                    <span>
                        All rights reserved.
                    </span>
                </div>

                {/* Utilities */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    {/* System status */}
                    <div
                        className="flex items-center gap-1.5 text-xs font-medium text-slate-500"
                        title="All systems are operational"
                    >
                        <CircleCheck
                            className="h-3.5 w-3.5 text-emerald-500"
                            aria-hidden="true"
                        />

                        <span>All systems operational</span>
                    </div>

                    {/* Links */}
                    <nav aria-label="Footer navigation">
                        <ul className="flex items-center gap-4">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-700 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Version */}
                    <div
                        className="flex items-center gap-1.5 border-l border-slate-200 pl-4"
                        title={`Logicare version ${APP_VERSION}`}
                    >
                        <span className="text-xs font-medium text-slate-400">
                            v{APP_VERSION}
                        </span>

                        <ExternalLink
                            className="h-3 w-3 text-slate-300"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}