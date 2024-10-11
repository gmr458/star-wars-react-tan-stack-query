import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

import { Button } from "@/components/button";

export function PageError() {
    const error = useRouteError();

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center gap-3">
            <h1 className="text-5xl">Oops!</h1>

            {isRouteErrorResponse(error) ? (
                <p className="text-xl">{error.statusText}</p>
            ) : (
                <p>Sorry, an unexpected error has occurred.</p>
            )}
            <Link to="/">
                <Button className="text-lg">Go back to home</Button>
            </Link>
        </div>
    );
}
