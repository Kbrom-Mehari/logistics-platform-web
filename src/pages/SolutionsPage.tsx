import { BarChart3, Box, Clock, Compass, ArrowRight, ShieldCheck, Truck } from "lucide-react";

export default function LogisticsSolutions() {
    const solutions = [
        {
            icon: <Truck className="text-blue-600" size={24} />,
            title: "Dynamic Fleet Routing",
            description: "Optimize multi-stop routes in real-time. Reduce fuel consumption by up to 22% with predictive machine learning paths that adapt to traffic conditions.",
            tag: "Efficiency"
        },
        {
            icon: <Box className="text-indigo-600" size={24} />,
            title: "Smart Inventory Vaulting",
            description: "Gain end-to-end multi-warehouse visibility. Automated restock triggers and intelligent sorting maximize storage capacity and prevent stockouts.",
            tag: "Automation"
        },
        {
            icon: <Clock className="text-emerald-600" size={24} />,
            title: "Predictive ETA Tracking",
            description: "Give clients hyper-accurate delivery windows. Our telemetry engine updates ETA parameters second-by-second, eliminating standard dispatch blind spots.",
            tag: "Visibility"
        },
        {
            icon: <ShieldCheck className="text-rose-600" size={24} />,
            title: "Cold-Chain Integrity",
            description: "Continuous real-time IoT temperature and humidity monitoring designed strictly for critical medical, pharmaceutical, and perishable cargo.",
            tag: "Compliance"
        },
        {
            icon: <BarChart3 className="text-amber-600" size={24} />,
            title: "Freight Cost Analytics",
            description: "Uncover hidden supply chain overhead. Dive deep into localized cost analytics dashboards to negotiate stronger lanes and eliminate deadhead miles.",
            tag: "Analytics"
        },
        {
            icon: <Compass className="text-sky-600" size={24} />,
            title: "Cross-Border Clearing",
            description: "Accelerate customs operations. Digital manifest compiling and localized tariff automations clear your cross-border freight seamlessly.",
            tag: "Global Freight"
        }
    ];

    return (
        <section className="bg-slate-50 py-12 overflow-hidden ">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 mt-0">

                {/* --- HEADER --- */}
                <div className="max-w-3xl mx-auto text-center mb-20 mt-0">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                        What We Solve
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-700 mt-4 sm:leading-tight">
                        Engineered to eliminate supply chain friction.
                    </h2>
                    <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                        From dynamic multi-stop routing to IoT asset monitoring, Logicare integrates enterprise-grade intelligence directly into your fleet operations.
                    </p>
                </div>

                {/* --- SOLUTIONS GRID --- */}
                <div className="grid grid-cols-1 px-6 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((sol, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl border border-slate-200/70 p-8 shadow-sm hover:shadow-xl hover:border-slate-300/90 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* Icon & Tag */}
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                                        {sol.icon}
                                    </div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 group-hover:text-emerald-400">
                                        {sol.tag}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-slate-700 mt-6 group-hover:text-blue-600 transition-colors">
                                    {sol.title}
                                </h3>
                                <p className="text-sm text-slate-500 mt-3 leading-relaxed font-semibold">
                                    {sol.description}
                                </p>
                            </div>

                            {/* Action Link */}
                            <div className="pt-6 mt-6 border-t border-slate-50">
                                <a
                                    href={`#${sol.title.toLowerCase().replace(/ /g, '-')}`}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                                >
                                    Explore solution
                                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-200" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- BOTTOM TRUST BANNER --- */}
                <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-950/10 flex flex-col lg:flex-row items-center justify-between gap-8  overflow-hidden border border-gray-200">
                    <div className="max-w-xl text-center lg:text-left z-10">
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-700 tracking-tight">
                            Looking for a tailored logistics structure?
                        </h4>
                        <p className="text-sm text-slate-500 font-semibold mt-2 leading-relaxed">
                            Connect with our integration team to architect custom API schemas or custom hardware integrations unique to your logistics blueprint.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10">
                        <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl shadow-md transition-all active:scale-95">
                            Talk to an Expert
                        </button>
                        <button className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 text-slate-700 hover:border-gray-200 text-sm font-semibold rounded-xl backdrop-blur-sm transition-all border border-gray-200">
                            View Case Studies
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}