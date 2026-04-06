
import Loading from '@/components/loading/loading';
import StoryContent from '@/components/story/storyContent';
import { getShort } from '@/lib/shorts';
import { use } from 'react';


export default function Short({ params }: { params: Promise<{ name: string }> }) {
    const { name } = use(params);
    const short = getShort(name);

    if(!short) return <Loading />

    return (
        <section className="min-h-screen max-w-8xl py-30 md:py-20 mx-auto min-w-screen">
            <h1 className="m-auto text-center text-[clamp(1.75rem,3vw,2.5rem)] lg:text-[clamp(2rem,4vw,3rem)] xl:text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-wide my-20">
                {short.title}
            </h1>
            <StoryContent content={short.content} />
        </section>
    )
}