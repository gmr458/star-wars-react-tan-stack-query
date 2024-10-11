interface PropertyProps {
    label: string;
    value: string | number;
}

export function Property({ label, value }: PropertyProps) {
    return (
        <p className="truncate">
            <span className="font-medium">{label}:</span> {value}
        </p>
    );
}
