
export type Short = {
    name: string;
    title: string;
    content: string;
}

export const getShort = (name: string): Short | undefined => {
    return shorts.find(short => short.name === name);
}

export const shorts: Short[] = [
    {
        name: "the-conveyor-belt-theory",
        title: "The Conveyor Belt Theory",
        content: "content/shorts/the-conveyor-belt-theory.md"
    },
    {
        name: "the-gardener",
        title: "The Gardener",
        content: "content/shorts/the-gardener.md"
    },
    {
        name: "the-most-wicked-man-in-time",
        title: "The Most Wicked Man in Time",
        content: "content/shorts/the-most-wicked-man-in-time.md"
    },
    {
        name: "Photographic Memory",
        title: "Photographic Memory",
        content: "content/shorts/photographic-memory.md"
    },
    {
        name: "route-99b",
        title: "Route 99B",
        content: "content/shorts/route-99b.md"
    },
    {
        name: "the-black-jacket",
        title: "The Black Jacket",
        content: "content/shorts/the-black-jacket.md"
    }
]