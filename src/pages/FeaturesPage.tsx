import FeatureCard from "../components/FeatureCard";
import { Shield, Smile, Layout } from "lucide-react";

export default function FeaturesPage() {
    const features = [
        {
            icon: <Shield size={24} />,
            title: "Lightning Fast Performance",
            description: "Optimized for speed. Your users will experience instant load times and seamless transitions.",
        },
        {
            icon: <Shield size={24} />,
            title: "Bank-Grade Security",
            description: "Data privacy is our priority. End-to-end encryption ensures your information stays safe.",
        },
        {
            icon: <Layout size={24} />,
            title: "Intuitive Dashboard",
            description: "Manage everything from a beautiful, clutter-free interface designed for productivity.",
        },
        {
            icon: <Smile size={24} />,
            title: "24/7 Premium Support",
            description: "Our dedicated team of experts is always here to help you solve problems in real-time.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Everything you need to scale your business
                    </p>
                    <p className="mt-4 text-xl text-gray-500">
                        A powerful suite of tools designed to help you automate workflows, track progress, and grow faster.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}