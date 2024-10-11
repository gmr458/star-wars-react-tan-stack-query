import { Character } from "@/schemas/people";

import { Card } from "@/components/card";
import { Property } from "@/components/property";

interface CharacterProps {
    character: Character;
}

export function CharacterComponent({ character }: CharacterProps) {
    return (
        <Card title={character.name}>
            <Property label="Hair color" value={character.hair_color} />
            <Property label="Eye color" value={character.eye_color} />
            <Property label="Birth year" value={character.birth_year} />
            <Property label="Gender" value={character.gender} />
        </Card>
    );
}
