import * as React from "react";

import { Link, useLocation } from "react-router-dom";

import { cn } from "@/utils";

export interface ButtonTabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    tab: {
        label: string;
        to: string;
        icon: JSX.Element;
    };
}

export const ButtonTab = React.forwardRef<HTMLButtonElement, ButtonTabProps>(({ tab, ...props }, ref) => {
    const { pathname } = useLocation();

    return (
        <Link to={tab.to}>
            <button
                className={cn(
                    "flex items-center justify-center rounded-md px-2 py-1 text-slate-600 outline-none transition-all duration-300 ease-in-out",
                    tab.to === pathname ? "rounded-md bg-white text-black shadow-md" : "hover:bg-slate-300",
                )}
                ref={ref}
                {...props}
            >
                {tab.icon}
                <h2>{tab.label}</h2>
            </button>
        </Link>
    );
});
