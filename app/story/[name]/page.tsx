
import Loading from '@/components/loading/loading';
import StoryContent from '@/components/story/storyContent';
import StoryInfo from '@/components/story/storyInfo';
import { getStory } from '@/lib/stories';
import { Metadata } from 'next';
import { use } from 'react';

const SITE_NAME = "Whispers Archive";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function canonicalFor(slug: string) {
  return `${SITE_URL}/story/${encodeURIComponent(slug)}`;
}

function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

function clampDescription(desc: string) {
  const s = desc.replace(/\s+/g, " ").trim();
  return s.length > 160 ? s.slice(0, 157).trimEnd() + "…" : s;
}

export async function generateMetadata(
  { params }: { params: Promise<{ name: string }> }
): Promise<Metadata> {
  const { name } = await params; // <-- critical in Next 15
  const story = getStory(name);

  if (!story) {
    return {
      title: `Story not found | ${SITE_NAME}`,
      robots: { index: false, follow: false },
    };
  }

  const title = `${story.title} | ${SITE_NAME}`;
  const description = clampDescription(story.description);
  const url = canonicalFor(story.name);
  const ogImage = absoluteUrl(story.pictureUrl);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Story({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params); // <-- your original working pattern
  const story = getStory(name);

  if (!story) return <Loading />;

  const url = canonicalFor(story.name);
  const image = absoluteUrl(story.pictureUrl);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.description,
    image,
    url,
    mainEntityOfPage: url,
  };

  return (
    <section className="min-h-screen max-w-8xl py-30 md:py-20 mx-auto min-w-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StoryInfo story={story} />
      <StoryContent content={story.content} />
    </section>
  );
}