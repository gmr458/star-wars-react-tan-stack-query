import { ApiDown, FetchWrapperError } from "@/fetch-wrapper";

import { Button } from "@/components/button";

interface ErrorComponentProps {
    err: Error;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export function ErrorComponent({ err, setCurrentPage }: ErrorComponentProps) {
    if (err instanceof ApiDown) {
        return <p>The server is down, try later.</p>;
    }

    if (err instanceof FetchWrapperError) {
        if (err.status === 404) {
            return (
                <div className="flex flex-col gap-2 text-center">
                    <p>Page not found</p>
                    <Button
                        onClick={() => {
                            setCurrentPage(1);
                        }}
                    >
                        Go back to page 1
                    </Button>
                </div>
            );
        }
    }

    return <p>Unexpected internal error, try later.</p>;
}
