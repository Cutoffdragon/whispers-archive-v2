import { loadMarkdown } from "@/lib/loadMarkdown"

export default function StoryContent({ content } : { content: string}) {

    const storyContent = loadMarkdown(content);

    return(
        <section className="p-5 sm: max-w-4xl xl:max-w-6xl mx-auto text-white font-serif gap-4 rounded">
            <p className="whitespace-pre-wrap text-[clamp(1rem,1.6vw,1.125rem)] md:text-[clamp(1.05rem,1.75vw,1.25rem)] lg:text-[clamp(1.1rem,1.9vw,1.375rem)] xl:text-[clamp(1.15rem,2vw,1.5rem)] mx-auto text-center sm:text-left leading-loose">
                {storyContent}
            </p>
        </section>
    )
}