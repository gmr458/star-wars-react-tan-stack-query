import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { Root } from "@/root";

import { PageFilms } from "@/pages/films";
import { PagePeople } from "@/pages/people";
import { PagePlanets } from "@/pages/planets";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Navigate to="/people" />,
            },
            {
                path: "people",
                element: <PagePeople />,
            },
            {
                path: "planets",
                element: <PagePlanets />,
            },
            {
                path: "films",
                element: <PageFilms />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>,
);
