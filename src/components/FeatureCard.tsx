
interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// A reusable sub-component for individual features
export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}