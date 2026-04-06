import { stories } from "@/lib/stories";
import StoryCard from "@/components/story/storyCard";

export default function StoryList() {
    return (
        <>
            {stories.map((story) => {
                return <StoryCard key={story.name} story={story} />
            })}
        </>
    )
}