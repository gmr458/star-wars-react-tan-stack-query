import { UserRoundIcon, EarthIcon, FilmIcon } from "lucide-react";

import { ButtonTab } from "@/components/button-tab";

const classNameIcon = "size-4 mr-1";

const tabs: {
    label: string;
    to: string;
    icon: JSX.Element;
}[] = [
    {
        label: "People",
        to: "/people",
        icon: <UserRoundIcon className={classNameIcon} />,
    },
    {
        label: "Planets",
        to: "/planets",
        icon: <EarthIcon className={classNameIcon} />,
    },
    {
        label: "Films",
        to: "/films",
        icon: <FilmIcon className={classNameIcon} />,
    },
];

export function Tabs() {
    return (
        <nav className="text-md flex gap-2 rounded-lg border bg-slate-200 p-1 shadow-md">
            {tabs.map((tab, index) => (
                <ButtonTab key={index} tab={tab} />
            ))}
        </nav>
    );
}
