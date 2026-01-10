import { Story } from "@/lib/stories";
import Image from "next/image";

export default function StoryCard( { story }: { story: Story}) {

    return (
        <section className="w-full flex flex-col sm:flex-row items-center justify-between px-6 md:px-12 py-12 gap-8">

    {/* Image Column */}
    <div className="w-full max-w-[200px] sm:max-w-[260px] md:max-w-[320px] flex-shrink-0 z-10">
        <Image
            src={story.pictureUrl}
            alt="Story Cover Image"
            width={600}
            height={700}
            className="w-full h-auto border border-white/40"
        />
    </div>

    {/* Text Column */}
    <div className="flex flex-col gap-5 items-center sm:items-start text-center sm:text-left w-full z-10">

        <h3
            className="text-[clamp(1.8rem,3.2vw,2.8rem)] leading-tight font-bold mainFont"
            style={{
                color: '#f5f3f0',
                textShadow: `
                    0 4px 8px rgba(0, 0, 0, 0.9),
                    0 10px 24px rgba(0, 0, 0, 0.85)
                `,
                letterSpacing: '-0.02em',
            }}
        >
            {story.title}
        </h3>

        <p
            className="text-[clamp(1.05rem,1.9vw,1.35rem)] leading-relaxed mainFont"
            style={{
                color: '#e8e6e2',
                textShadow: `
                    0 3px 6px rgba(0, 0, 0, 0.85)
                `,
            }}
        >
            {story.description}
        </p>

        <div className="flex flex-col xs:flex-row gap-4 mt-6">
            <a
                href={`/story/${story.name}`}
                className="primaryBtn text-base px-6 py-3 min-w-[170px]"
            >
                Read Now
            </a>
            <a
                href="/"
                className="primaryBtn text-base px-6 py-3 min-w-[170px]"
            >
                YouTube
            </a>
        </div>

    </div>

</section>


    )
}