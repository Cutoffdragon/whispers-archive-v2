import Image from 'next/image';

export default function Feature() {

    return (
        <section className="border-div background2 w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-evenly px-4 md:px-20 py-30 gap-10">

            {/* Image Column */}
            <div className="w-full max-w-[180px] sm:max-w-[250px] md:max-w-[360px] lg:max-w-[460px] xl:max-w-[520px] z-10">
                <Image
                    src="/assets/black_hole_cockroaches.png"
                    alt="Black Hole Cockroaches Illustration"
                    width={800}
                    height={900}
                    className="w-full h-auto"
                    priority
                />
            </div>


            <div className="gap-4 lg:gap-8 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 z-10">
                <div className="textDiv"><h1
                    className="text-[clamp(2.5rem,5vw,6rem)] leading-tight font-bold mainFont"
                    style={{
                        color: '#f5f3f0',
                        textShadow: `
      0 6px 12px rgba(0, 0, 0, 0.9),
      0 12px 28px rgba(0, 0, 0, 0.85),
      0 20px 60px rgba(0, 0, 0, 0.8)
    `,
                        letterSpacing: '-0.02em',
                    }}
                >
                    Black Hole Cockroaches
                </h1></div>
                <div className="textDiv">
                    <h2 className="text-[clamp(1rem,2.8vw,2.75rem)] leading-tight font-bold mainFont"
                        style={{
                            color: '#f5f3f0',
                            textShadow: `
      0 6px 12px rgba(0, 0, 0, 0.9),
      0 12px 28px rgba(0, 0, 0, 0.85),
      0 20px 60px rgba(0, 0, 0, 0.8)
    `,
                            letterSpacing: '-0.02em',
                        }}>
                        Browse tales of the odd and eerie, or publish a tale of your own volition. Whispers Archive is the dungeon where forgotten authors exercise ambition.
                    </h2></div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button className="primaryBtn text-[clamp(1rem,1.5vw,1.25rem)] px-6 py-3 min-w-[180px]">
                        Read Now
                    </button>
                    <a href="/ " className="primaryBtn text-[clamp(1rem,1.5vw,1.25rem)] px-6 py-3 min-w-[180px]">
                        Youtube
                    </a>
                </div>
            </div>

        </section>
    )
}