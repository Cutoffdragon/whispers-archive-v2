import { shortCollections } from "@/lib/shortCollections";
import CollectionCard from "../story/collectionCard";

export default function CollectionList() {
    return (
        <>
            {shortCollections.map((collection) => (
                <CollectionCard key={collection.title} collection={collection} />
            ))}
        
        </>
    )
}