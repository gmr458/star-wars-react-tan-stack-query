import { Film } from "@/schemas/film";

import { Card } from "@/components/card";
import { Property } from "@/components/property";

interface FilmProps {
    film: Film;
}

export function FilmComponent({ film }: FilmProps) {
    return (
        <Card title={film.title}>
            <Property label="Director" value={film.director} />
            <Property label="Producer" value={film.producer} />
            <Property label="Release data" value={film.release_date} />
        </Card>
    );
}
