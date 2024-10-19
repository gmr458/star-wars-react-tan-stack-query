import * as React from "react";

import { cn } from "@/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ disabled, className, ...props }, ref) => {
    return (
        <button
            className={cn(
                "rounded-md border bg-white shadow-md outline-none",
                {
                    "cursor-not-allowed text-slate-400": disabled,
                    "hover:bg-slate-100": !disabled,
                },
                className,
            )}
            ref={ref}
            disabled={disabled}
            {...props}
        />
    );
});
