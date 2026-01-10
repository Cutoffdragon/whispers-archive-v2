import { Story } from "@/lib/stories";
import { parseISO, format } from "date-fns";
import Image from 'next/image';

export default function StoryInfo({ story }: { story: Story }) {

    const date = parseISO(story.date);
    const formatted = format(date, "d MMMM, yyyy");

    return (
        <section className="m-auto flex flex-col gap-8 m-20 w-[90vw] sm:w-[600px] md:w-[700px] lg:w-[800px] px-4 md:px-20 py-10 shadow-md h=[80vh]">
            <h1 className="m-auto text-center text-[clamp(1.75rem,3vw,2.5rem)] lg:text-[clamp(2rem,4vw,3rem)] xl:text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-wide">
                {story.title}
            </h1>
            <h2 className="m-auto text-[clamp(1rem,1.6vw,1.125rem)] md:text-[clamp(1.05rem,1.75vw,1.25rem)] lg:text-[clamp(1.1rem,1.9vw,1.375rem)] xl:text-[clamp(1.15rem,2vw,1.5rem)] max-w-2xl sm:text-left leading-relaxed">
                By Jason LaGrasse
            </h2>
            <div className="relative max-w-[180px] sm:max-w-[250px] md:max-w-[360px] lg:max-w-[460px] xl:max-w-[520px] shrink-0 my-5 mx-auto border-1">
                <Image
                    src={story.pictureUrl}
                    alt="Story Cover Image"
                    width={800}
                    height={900}
                    className="w-full h-auto border border-white/40"
                    priority
                />
            </div>
            <p className="text-[clamp(0.85rem,1.2vw,1.1rem)] italic text-gray-400 mt-1 m-auto">
                {formatted}
            </p>
            <p className="text-[clamp(0.85rem,1.2vw,1.1rem)] italic text-white-400 mt-1 leading-relaxed text-center">
                {story.description}
            </p>
        </section>
    )
}