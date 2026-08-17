import {filterNavigation,} from "../navigation";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../../hooks/useAuth.tsx";

interface NavigationMenuProps {
    onItemClick?: ()=>void;
}

export default function NavigationMenu({onItemClick,}: NavigationMenuProps) {

    const { user } = useAuth();
    const userPermissions = user?.permissions ?? [];
    const navigation = filterNavigation(userPermissions);

    return (
        <>
            {navigation.map((section) => (
                <div
                    key={section.section}
                    className="mb-6"
                >
                    <h2 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {section.section}
                    </h2>

                    <div className="space-y-1">
                        {section.items.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        end={item.to === "/dashboard"}
                                        onClick={onItemClick}
                                        className={({ isActive }) =>
                                            `
                                            relative
                                            flex
                                            items-center
                                            gap-3
                                            rounded-lg
                                            px-3
                                            py-2.5
                                            text-sm
                                            font-medium
                                            transition-all

                                            ${
                                                isActive
                                                    ?"bg-blue-50 text-blue-600"
                                                    :"text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                            }
                                            `
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {isActive && (
                                                    <div className="absolute left-0 top-2.5 bottom-2.5 w-0.5 bg-blue-600 rounded-r-full" />
                                                )}

                                                <Icon
                                                    size={18}
                                                    className={
                                                        isActive
                                                            ? "text-blue-600"
                                                            : "text-slate-400"
                                                    }
                                                />

                                                <span>
                                                    {item.label}
                                                </span>
                                            </>

                                        )}
                                    </NavLink>
                                );
                            })}
                    </div>
                </div>
            ))}
        </>
    );
}