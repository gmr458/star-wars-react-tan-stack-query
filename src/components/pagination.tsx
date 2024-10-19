import * as React from "react";

import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";

import { Button } from "@/components/button";

interface PaginationProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    nextButtonDisabled: boolean;
    status: "error" | "success" | "pending";
}

export function Pagination({ currentPage, setCurrentPage, nextButtonDisabled, status }: PaginationProps) {
    const changePage = React.useCallback(
        (page: number) => {
            setCurrentPage(page);
        },
        [setCurrentPage],
    );

    React.useEffect(() => {
        const urlSearchParams = new URLSearchParams(document.location.search);
        const pageStr = urlSearchParams.get("page");
        if (pageStr) {
            const page = parseInt(pageStr);
            if (page > 1) {
                changePage(page);
            }
        }
    }, [changePage]);

    React.useEffect(() => {
        const url = new URL(window.location.toString());
        url.searchParams.set("page", currentPage.toString());
        history.pushState(null, "", url);
    }, [currentPage]);

    return (
        <div className="flex flex-row items-center justify-center gap-3">
            <Button
                disabled={currentPage === 1 || status === "pending" || status === "error"}
                onClick={() => setCurrentPage((prevState) => Math.max(prevState - 1, 1))}
                className="p-1"
                aria-label="Next"
            >
                <ChevronLeftIcon />
            </Button>
            <div className="mx-2 flex h-5 w-4 items-center justify-center text-center">
                {status === "error" ? "N/A" : currentPage}
            </div>
            <Button
                disabled={nextButtonDisabled || status === "pending" || status === "error"}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="p-1"
                aria-label="Previous"
            >
                <ChevronRightIcon />
            </Button>
        </div>
    );
}
