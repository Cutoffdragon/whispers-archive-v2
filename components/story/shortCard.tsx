import { Short } from "@/lib/shorts";

export default function ShortCard({ short }: { short: Short }) {

    return (
        <section className="w-full flex flex-col sm:flex-row items-center justify-between py-5 gap-8">

            <div className="flex flex-col gap-5 items-center sm:items-start text-center sm:text-left w-full z-10">
                <a
  href={`/short/${short.name}`}
  className="
    text-[clamp(1.1rem,2vw,1.6rem)]
    leading-tight
    font-bold
    mainFont
    text-[#f5f3f0]
    transition-all
    duration-300
    hover:text-red-500
    [text-shadow:0_4px_8px_rgba(0,0,0,0.9),0_10px_24px_rgba(0,0,0,0.85)]
    hover:[text-shadow:0_0_8px_rgba(239,68,68,0.95),0_0_18px_rgba(239,68,68,0.75),0_0_32px_rgba(239,68,68,0.45)]
  "
  style={{
    letterSpacing: "-0.02em",
  }}
>
                    {short.title}
                </a>
            </div>

        </section>
    )
}