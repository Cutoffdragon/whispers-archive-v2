import { Short } from "./shorts";
import { getShort } from "./shorts";

export type ShortCollection = {
    name: string;
    title: string;
    description: string;
    content: Short[];
    pictureUrl: string;
    youtube: string;
}

export const getShortCollection = (name: string): ShortCollection | undefined => {
    return shortCollections.find(shortCollection => shortCollection.name === name);
}

export const shortCollections: ShortCollection[] = [
    {
        name: "52-minutes-of-invasive-brain-surgery",
        title: "52 Minutes of Invasive Brain Surgery",
        description: "Discover three mind bending tales of simulated reality, government secrets, and psychological torment.",
        content: [
            getShort("the-conveyor-belt-theory"),
            getShort("the-gardener"),
            getShort("the-most-wicked-man-in-time"),
        ].filter((short): short is Short => Boolean(short)),
        pictureUrl: "/assets/brain_surgery.png",
        youtube: "https://www.youtube.com/watch?v=IQvq6l-0TtQ&t=46s"
    },
    {
        name: "lost-stories-found-in-a-dark-attic",
        title: "Lost Stories Found in a Dark Attic",
        description: "A collection of Whispers uncovered in an old, dusty attic... Unearth the forgotten tales of a forlorn highway route, a scientists deranged experiment, and a jacket that should not exist.",
        content: [
            getShort("route-99b"),
            getShort("photographic-memory"),
            getShort("the-black-jacket"),
        ].filter((short): short is Short => Boolean(short)),
        pictureUrl: "/assets/lost_attic.png",
        youtube: "https://www.youtube.com/watch?v=aoqoOgaXBaM&t=1380s"
    },
    {
        name: "forgotten-fever-dreams",
        title: "Forgotten Fever Dreams",
        description: "This surreal collection of Whispers is drawn straight from an author's nightmares... endure the torment imposed by imaginary landscapes and home invasions.",
        content: [
            getShort("allans-tape"),
            getShort("killed-in-hadesville"),
            getShort("trauma"),
        ].filter((short): short is Short => Boolean(short)),
        pictureUrl: "/assets/forgotten_fever_dreams.png",
        youtube: "https://www.youtube.com/watch?v=EfG3-BbY0z4"
    }
]