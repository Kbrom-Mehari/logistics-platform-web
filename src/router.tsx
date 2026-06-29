import { createBrowserRouter } from 'react-router-dom';
import LandingLayout from "./layouts/LandingLayout.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import SolutionsPage from "./pages/SolutionsPage.tsx";
import FeaturesPage from "./pages/FeaturesPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <LandingLayout />,
            children: [
                { index: true, element: <LandingPage /> },
                { path: "solutions", element: <SolutionsPage /> },
                { path: "features", element: <FeaturesPage /> },
                { path: "login", element: <LoginPage /> },
                { path: "register", element: <RegisterPage /> }
            ]
        },

        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
                { index: true, element: <LandingPage /> },
            ]
        },
        {
            path: "*",
            element: <div className="text-4xl flex justify-center items-center mt-64 font-bold">404 - Logistics Hub Not Found</div>,
        }
    ]
);

