import { cn } from "@/utils";

interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export function Card({ title, children, className }: CardProps) {
    return (
        <div
            className={cn(
                "flex w-full transform flex-col justify-around gap-5 rounded-lg border p-8 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl",
                className,
            )}
        >
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <div className="flex flex-col gap-1">{children}</div>
        </div>
    );
}
