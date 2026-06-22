import LandingLayout from "./layouts/LandingLayout.tsx"
import FeaturesPage from "./pages/FeaturesPage.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import SolutionsPage from "./pages/SolutionsPage.tsx";

function App() {
    return (
        <LandingLayout>
            <SolutionsPage />
        </LandingLayout>
    );
}

export default App;