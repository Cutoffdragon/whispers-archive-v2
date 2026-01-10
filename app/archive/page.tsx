import { stories } from "@/lib/stories";
import StoryCard from "@/components/story/storyCard";

export default function Archive() {

    return (
        <section className="w-full min-h-screen flex flex-col items-center jusitfy-center px-4 md:px-20 py-30">
            {stories.map((story) => {
                return <StoryCard key={story.name} story={story} />
            })}
        </section>
    )
}