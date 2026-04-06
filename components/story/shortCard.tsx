import { Short } from "@/lib/shorts";

export default function ShortCard({ short }: { short: Short }) {

    return (
        <section className="w-full flex flex-col sm:flex-row items-center justify-between px-6 md:px-12 py-12 gap-8">

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
                    {short.title}
                </h3>

                <a
                href={`/short/${short.name}`}
                className="primaryBtn text-base px-6 py-3 min-w-[170px]"
            >
                Read Now
            </a>
            </div>

        </section>
    )
}