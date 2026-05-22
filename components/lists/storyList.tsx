import { stories } from "@/lib/stories";
import { useState } from "react";
import StoryCard from "@/components/story/storyCard";

export default function StoryList() {

    const [collection, setCollection] = useState(1);

    return (
        <>
        <h2 className={`text-2xl font-bold tracking-wide hover-underline cursor-pointer mb-10`}>Collection</h2>
        <div id="filter" className=" w-75 flex items-center justify-center flex-row gap-4 mb-20">
            <h2 className={`${collection == 1 ? 'underline font-bold' : 'text-decoration: none'} text-xl tracking-wide hover-underline cursor-pointer`} onClick={() => setCollection(1)}>1</h2>
            <h2 className="text-2xl font-bold tracking-wide"> | </h2>
            <h2 className={`${collection == 2 ? 'underline font-bold' : 'text-decoration: none'} text-xl tracking-wide hover-underline cursor-pointer`} onClick={() => setCollection(2)}>2</h2>
        </div>
            {stories
                    .filter(stories => stories.collection == collection)
                    .map((story) => {
                return <StoryCard key={story.name} story={story} />
            })}
        </>
    )
}