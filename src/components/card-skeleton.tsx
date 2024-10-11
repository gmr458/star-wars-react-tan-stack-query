import { cn } from "@/utils";

export function CardSkeleton({ count }: { count: number }) {
    return (
        <div className="flex w-full animate-pulse flex-col justify-around gap-5 rounded-lg border p-8 shadow-lg">
            <div>
                <h3 className="h-7 w-[45%] rounded bg-slate-200 font-bold"></h3>
            </div>
            <div className="flex flex-col gap-1">
                {Array.from({ length: count }).map((_, index) => (
                    <p
                        key={index}
                        className={cn("h-6 rounded bg-slate-200 font-bold", index % 2 === 0 ? "w-[95%]" : "w-[45%]")}
                    ></p>
                ))}
            </div>
        </div>
    );
}
