import {useEffect, useRef, useState} from "react";
import {Bell} from "lucide-react";


const notifications = [
    {
        id: 1,
        title: "Vehicle ET-102 entered a geofence.",
        time: "2 min ago",
    },
    {
        id: 2,
        title: "Driver Alem reported a delay.",
        time: "18 min ago",
    },
    {
        id: 3,
        title: "Maintenance reminder for Truck ET-204.",
        time: "1 hour ago",
    },
];

export default function NotificationDropdown(){
    const [isOpen, setIsOpen] = useState(false); // state

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=> {
        function handleClickOutside(event: MouseEvent){
            if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={dropdownRef}
            className="relative"
        >
            <button
                type="button"
                onClick={()=> setIsOpen((previous)=> !previous)}
                className="relative rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                aria-label="Notifications"
            >
                <Bell size={20} />
                <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500"/>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                    <div className="border-b border-slate-200 px-4 py-3">
                        <h2 className="font-semibold text-slate-900">
                            Notifications
                        </h2>
                    </div>

                    <div>
                        {notifications.map(
                            (notification)=> (
                                <button
                                key={notification.id}
                                type="button"
                                className="block w-full boder-b border-slate-100 px-4 py-3 text-left transition-colors hover:bg-slate-50"
                                >
                                    <p className="text-sm font-medium text-slate-800">
                                        {notification.title}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        {notification.time}
                                    </p>

                                </button>
                            )
                        )}
                    </div>

                </div>

            )}
        </div>
    );


}