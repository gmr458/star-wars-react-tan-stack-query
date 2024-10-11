import * as React from "react";

import { useQuery } from "@tanstack/react-query";

import { ApiDown, FetchParams, fetchWrapper, FetchWrapperError } from "@/fetch-wrapper";

import { ResponsePeople, schemaResponsePeople } from "@/schemas/people";

import { CardSkeleton } from "@/components/card-skeleton";
import { CharacterComponent } from "@/components/character-component";
import { ErrorComponent } from "@/components/error-component";
import { Pagination } from "@/components/pagination";

async function fetchPeople({ page }: FetchParams): Promise<ResponsePeople> {
    page = page < 1 ? 1 : page;
    const path = `/people/?page=${page}`;
    const response = await fetchWrapper(schemaResponsePeople, path);
    return response;
}

export function PagePeople() {
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [nextButtonDisabled, setNextButtonDisabled] = React.useState<boolean>(false);

    const { data, status, error } = useQuery<ResponsePeople, FetchWrapperError | ApiDown>({
        queryKey: ["people", { page: currentPage } as FetchParams],
        queryFn: ({ queryKey }) => fetchPeople(queryKey[1] as FetchParams),
        retry: 1,
    });

    React.useEffect(() => {
        if (status === "success") {
            setNextButtonDisabled(!data.next);
        }
    }, [status, data?.next]);

    return (
        <div className="mt-3 flex w-full flex-col space-y-7">
            <div>
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    nextButtonDisabled={nextButtonDisabled}
                    status={status}
                />
            </div>
            <div className="flex items-center justify-center">
                {status === "error" ? <ErrorComponent err={error} setCurrentPage={setCurrentPage} /> : null}
                {status === "pending" ? (
                    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CardSkeleton key={index} count={4} />
                        ))}
                    </div>
                ) : null}
                {status === "success" ? (
                    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                        {data.results.map((character) => (
                            <CharacterComponent key={character.name} character={character} />
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
}
