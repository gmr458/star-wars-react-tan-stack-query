import { Planet } from "@/schemas/planets";

import { Card } from "@/components/card";
import { Property } from "@/components/property";

interface PlanetComponentProps {
    planet: Planet;
}

export function PlanetComponent({ planet }: PlanetComponentProps) {
    return (
        <Card title={planet.name}>
            <Property label="Population" value={planet.population} />
            <Property label="Terrain" value={planet.terrain} />
        </Card>
    );
}
