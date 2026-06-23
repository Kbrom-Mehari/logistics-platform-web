import mapImage from "../assets/landing_map_image.png"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
            {/* Hero Section */}
            <main className="container mx-auto px-6 pt-15 pb-24 flex flex-col lg:flex-row items-center gap-12 ">

                {/* Left Side: Copy & Call to Action */}
                <div className="flex-1 space-y-8">
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                        Intelligent routing and <span className="text-blue-600">live tracking</span> for modern fleets.
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                        Cut fuel costs, eliminate delivery delays, and give your dispatchers a God's-eye view of your entire operation in real-time.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                            Start Free Trial
                        </button>
                        <button className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold text-lg hover:border-gray-300 transition">
                            Watch Video
                        </button>
                    </div>
                </div>

                {/* Right Side: Dashboard/Map Mockup Placeholder */}
                <div className="flex-1 w-full">
                    <div className="bg-slate-200 rounded-2xl shadow-2xl aspect-video w-full flex items-center justify-center border-4 border-white relative overflow-hidden">

                        <div className="text-slate-500 font-medium">
                            <img src={mapImage} alt="Map of delivery routes"/>
                        </div>

                        {/* Fake UI elements for visual flair */}
                        <div className="absolute top-4 left-4 bg-white p-1 px-4 text-blue-600 font-semibold rounded shadow-sm w-1/3 h-8 ">
                            Watch Live Location
                        </div>
                        <div className="absolute bottom-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                            Shipment Arriving in 6 hours
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}