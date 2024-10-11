import { z } from "zod";

const API: string = import.meta.env.VITE_API;

const schemaErrorBody = z.object({
    detail: z.string(),
});

export type FetchParams = {
    page: number;
};

export class FetchWrapperError extends Error {
    public readonly status?: number;
    public readonly statusText?: string;

    constructor(message: string, response: Response, init?: RequestInit) {
        message = `Error fetching ${init?.method || "Unknown method"} ${response.url} ${response.status}: ${message}`;
        super(message);
        this.name = "FetchWrapperError";
        this.status = response.status;
        this.statusText = response.statusText;
    }
}

export class ApiDown extends Error {
    constructor() {
        super("The server is down, try later.");
        this.name = "ApiDown";
    }
}

export async function fetchWrapper<T>(schema: z.Schema<T>, path: string, init?: RequestInit): Promise<T> {
    try {
        const response = await fetch(`${API}${path}`, init);

        const json = await response.json().catch(() => {
            throw new FetchWrapperError("Not a JSON body", response, init);
        });

        if (!response.ok) {
            const result = schemaErrorBody.safeParse(json);
            if (!result.success) {
                throw new FetchWrapperError("Unexpected body for unsuccessful response", response, init);
            }

            throw new FetchWrapperError(result.data.detail, response, init);
        }

        const result = schema.safeParse(json);
        if (!result.success) {
            throw new FetchWrapperError("Unexpected body for successful response", response, init);
        }

        return result.data;
    } catch (err) {
        if (err instanceof TypeError && err.message === "Failed to fetch") {
            throw new ApiDown();
        }

        throw err;
    }
}
