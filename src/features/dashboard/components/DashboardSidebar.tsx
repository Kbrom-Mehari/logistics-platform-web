import NavigationMenu from './NavigationMenu'

export default function DashboardSidebar(){
    return (
        <aside className="w-64 bg-white border-r border-slate-200 fixed bottom-0 top-16 left-0 hidden lg:block overflow-y-auto">
            <nav className="p-4">
                <NavigationMenu />
            </nav>
        </aside>
    );
}