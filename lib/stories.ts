
export type Story = {
    name: string;
    title: string;
    description: string;
    content: string;
    pictureUrl: string;
    youtube: string;
}

export const getStory = (name: string): Story | undefined => {
    return stories.find(story => story.name === name);
}

export const stories: Story[] = [
    {
        name: "the-slagport-downs-massacre",
        title: "The Slagport Downs Massacre",
        description: "A harrowing murder leaves the port city of Slagport in terror. When a detective investigates the case, he unveils a primal force that seeks to unleash centuries of vengeance upon humanity...",
        content: "content/the-slagport-downs-massacre.md",
        pictureUrl: "/assets/slagport.png",
        youtube: ""
    },
    {
        name: "the-ulter-hell",
        title: "The Ulter Hell",
        description: "The renowned artist Sandor has lived a life of luxury and excess. When a vengeful ex-lover plans to ruin his life, she finds that Sandor has taken up residence in a haunted mansion, called 'The Ulter Hell'. Within, she discovers that Sandor's latest work threatens to consume not only himself, but everything around it... ",
        content: "content/the-ulter-hell.md",
        pictureUrl: "/assets/the_ulter_hell.png",
        youtube: ""
    },
    {
        name: "one-night-under-the-western-bridge",
        title: "One Night Under the Western Bridge",
        description: "A single weekend in the city of Dysgenita can poison the mind. Strange things happen at night, and people go missing when they wander down the wrong street...",
        content: "content/one-night-under-the-western-bridge.md",
        pictureUrl: "/assets/western_bridge.png",
        youtube: ""
    },
    {
        name: "the-aqman-files",
        title: "The AqMan Files",
        description: "Ralov Charksy awakens in a prison, with no recollection of how he got there. As the days pass, strange things happen to the world outside. Ralov is left subject to invasive phone calls, as he witnesses the strange metamorphosis of the planet he once knew.",
        content: "content/the-aqman-files.md",
        pictureUrl: "/assets/the_aqman_files.png",
        youtube: ""
    }

]