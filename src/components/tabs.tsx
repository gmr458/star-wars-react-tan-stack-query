import { Link, useLocation } from "react-router-dom";

import { ButtonTab } from "@/components/button-tab";

const tabs: {
    label: string;
    to: string;
}[] = [
    {
        label: "People",
        to: "/people",
    },
    {
        label: "Planets",
        to: "/planets",
    },
    {
        label: "Films",
        to: "/films",
    },
];

export function Tabs() {
    const { pathname } = useLocation();

    return (
        <nav className="flex gap-2 rounded-lg border bg-slate-200 p-1 text-2xl shadow-md">
            {tabs.map((tab, index) => (
                <Link to={tab.to} key={index}>
                    <ButtonTab enabled={tab.to === pathname}>{tab.label}</ButtonTab>
                </Link>
            ))}
        </nav>
    );
}
