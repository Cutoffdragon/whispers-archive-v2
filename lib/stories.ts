
export type Story = {
    name: string;
    title: string;
    date: string;
    description: string;
    content: string;
    pictureUrl: string;
}

export const getStory = (name: string): Story | undefined => {
    return stories.find(story => story.name === name);
}

export const stories: Story[] = [
    {
        name: "black-hole-cockroaches",
        title: "Black Hole Cockroaches",
        date: "2025-01-05",
        description: "A surreal tale of cosmic horror and existential dread.",
        content: "../whispers-archive-v2/content/black-hole-cockroaches.md",
        pictureUrl: "/assets/black_hole_cockroaches.png"
    },

    {
        name: "the-ulter-hell",
        title: "The Ulter Hell",
        date: "2025-01-15",
        description: "A journey through a nightmarish underworld filled with unimaginable terrors.",
        content: "../whispers-archive-v2/content/the-ulter-hell.md",
        pictureUrl: "/assets/the_ulter_hell.png"
    }
]