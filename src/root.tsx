import { Outlet } from "react-router-dom";

import { Tabs } from "@/components/tabs";

export function Root() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 p-3">
                <h1 className="text-center text-5xl font-bold">Star Wars Info</h1>
                <Tabs />
            </div>
            <div className="flex items-center justify-center px-5 pb-5">
                <Outlet />
            </div>
        </>
    );
}
