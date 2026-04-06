import { shorts } from "@/lib/shorts";
import ShortCard from "../story/shortCard";

export default function ShortList() {
    return (
        <>
            {shorts.map((short) => (
                <ShortCard key={short.name} short={short} />
            ))}
        </>
    )
}