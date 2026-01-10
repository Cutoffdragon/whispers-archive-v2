import Loading from '@/components/loading/loading';
import StoryContent from '@/components/story/storyContent';
import StoryInfo from '@/components/story/storyInfo';
import { getStory } from '@/lib/stories';
import React from 'react';

export default function Story({ params }: { params: Promise<{ name: string }> }) {

    const { name } = React.use(params);

    const story = getStory(name);

    if (!story) return <Loading />;

    return (
        <section className="min-h-screen max-w-8xl py-30 md:py-20 mx-auto min-w-screen">
            <StoryInfo story ={story} />
            <StoryContent content ={story.content} />
        </section>
    )
}