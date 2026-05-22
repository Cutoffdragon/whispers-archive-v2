import { ShortCollection } from "@/lib/shortCollections";
import Image from "next/image";
import ShortCard from "./shortCard";

export default function CollectionCard({ collection }: { collection: ShortCollection }) {

    return (
        <section className="border-b border-white/40 w-full flex flex-col sm:flex-row items-center justify-between px-6 md:px-12 py-12 gap-8">

            {/* Text Column */}
            <div className="flex flex-col gap-5 items-center sm:items-start text-center sm:text-left w-full z-10">
                <div className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[520px] flex-shrink-0 z-10">
                    <Image
                        src={collection.pictureUrl}
                        alt="Collection Cover Image"
                        width={800}
                        height={950}
                        className="w-full h-auto border border-white/40"
                    />
                </div>
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
                    {collection.title}
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
                    {collection.description}
                </p>

                <div className="flex flex-col xs:flex-row gap-4 mt-6">
                    {collection.youtube != "" && <a
                        href={collection.youtube}
                        target="blank"
                        className="primaryBtn text-base px-6 py-3 min-w-[170px]"
                    >
                        YouTube
                    </a>}
                </div>

                <div>
                    {collection.content.map((short) => {
                        return <ShortCard key={short.name} short={short} />
                    })}
                </div>

            </div>

        </section>
    )
}