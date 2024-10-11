import React from "react";

import { cn } from "@/utils";

export interface ButtonNavbarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    enabled: boolean;
}

export const ButtonTab = React.forwardRef<HTMLButtonElement, ButtonNavbarProps>(({ enabled, ...props }, ref) => {
    return (
        <button
            className={cn(
                "rounded-md px-2 py-1 text-slate-400 outline-none transition-all duration-300 ease-in-out",
                enabled ? "rounded-md bg-white text-black shadow-md" : "hover:bg-slate-300 hover:text-slate-600",
            )}
            ref={ref}
            {...props}
        />
    );
});
