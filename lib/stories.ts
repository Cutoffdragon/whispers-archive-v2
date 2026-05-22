
export type Story = {
    name: string;
    title: string;
    description: string;
    content: string;
    pictureUrl: string;
    youtube: string;
    collection: number;
}

export const getStory = (name: string): Story | undefined => {
    return stories.find(story => story.name === name);
}

export const stories: Story[] = [
    {
        name: "the-slagport-downs-massacre",
        title: "The Slagport Downs Massacre",
        description: "A harrowing murder leaves the port city of Slagport in terror. When a detective investigates the case, he unveils a primal force that seeks to unleash centuries of vengeance upon humanity...",
        content: "content/features/the-slagport-downs-massacre.md",
        pictureUrl: "/assets/slagport.png",
        youtube: "https://www.youtube.com/watch?v=g8IrVr1UTMc&t=564s",
        collection: 1,
    },
    {
        name: "the-ulter-hell",
        title: "The Ulter Hell",
        description: "The renowned artist Sandor has lived a life of luxury and excess. When a vengeful ex-lover plans to ruin his life, she finds that Sandor has taken up residence in a haunted mansion, called 'The Ulter Hell'. Within, she discovers that Sandor's latest work threatens to consume not only himself, but everything around it... ",
        content: "content/features/the-ulter-hell.md",
        pictureUrl: "/assets/the_ulter_hell.png",
        youtube: "https://www.youtube.com/watch?v=6wsQfTXlyJ0&t=2764s",
        collection: 1,
    },
    {
        name: "one-night-under-the-western-bridge",
        title: "One Night Under the Western Bridge",
        description: "A single weekend in the city of Dysgenita can poison the mind. Strange things happen at night, and people go missing when they wander down the wrong street...",
        content: "content/features/one-night-under-the-western-bridge.md",
        pictureUrl: "/assets/western_bridge.png",
        youtube: "https://www.youtube.com/watch?v=kUukmdnvfY0&t=4s",
        collection: 1,
    },
    {
        name: "the-aqman-files",
        title: "The AqMan Files",
        description: "Ralov Charksy awakens in a prison, with no recollection of how he got there. As the days pass, strange things happen to the world outside. Ralov is left subject to invasive phone calls, as he witnesses the strange metamorphosis of the planet he once knew.",
        content: "content/features/the-aqman-files.md",
        pictureUrl: "/assets/the_aqman_files.png",
        youtube: "https://www.youtube.com/watch?v=UXqoYXUFtyE",
        collection: 1,
    },
    {
        name:"visions-of-viktor",
        title: "Visions of Viktor",
        description: "The massive wall of Arcterman's End is Dysgenita's greatest safeguard. Atop the wall, a mysterious man tells tales of a religious prophecy, the thought of which threatens to deconstruct reality itself.",
        content: "content/features/visions-of-viktor.md",
        pictureUrl: "/assets/visions_of_viktor.png",
        youtube: "https://www.youtube.com/watch?v=g0wU4okY1GU",
        collection: 1,
    },
    {
        name:"the-human-face",
        title: "The Human Face",
        description: "During a mundane detour to avoid traffic, a man comes across an old freak show from his childhood. What starts as a nostalgic walk through the abandoned fair grounds quickly turns into a nightmarish recollection of the atrocities committed by a freak, known as The Human Face.",
        content: "content/features/the-human-face.md",
        pictureUrl: "/assets/human_face.png",
        youtube: "https://www.youtube.com/watch?v=AbOGAxlwibQ",
        collection: 1,
    },
    {
        name:"zed",
        title: "Zed",
        description: "Following a confession that his wife originally married him to inherit his estate, a pyshicatrist enacts twisted revenge.",
        content: "content/features/zed.md",
        pictureUrl: "/assets/zed.png",
        youtube: "https://www.youtube.com/watch?v=CV3eypoFfVc",
        collection: 1,
    },
    {
        name: "case-files-urdd-99a",
        title: "Case Files URDD-99A",
        description: "A strange, beggarly man with the power to manipulate the willpower of humans threatens to unravel society itself.",
        content: "content/features/case-files-urdd-99a.md",
        pictureUrl: "/assets/case_files.png",
        youtube: "https://www.youtube.com/watch?v=o-IMqm8JuMg",
        collection: 1,
    },
    {
        name: "the-hand-of-the-shadowed-man",
        title: "The Hand of the Shadowed Man",
        description: "A troubled boy senses that an unknowable force has been stalking him. As he can feel the hand of this stalker gripping his head as he sleeps, he begins to wonder what future the strange shadow has in store for him.",
        content: "content/features/the-hand-of-the-shadowed-man.md",
        pictureUrl: "/assets/shadowed_man.png",
        youtube: "https://www.youtube.com/watch?v=Hyj1wZ0sZZg",
        collection: 1,
    },
    {
        name: "the-crows-of-wither-creek",
        title: "The Crows of Wither Creek",
        description: "In this gothic tale of tragedy and decay, a farm's thin blood ties are threatened by a death in the family. When a young girl finds a written plot to murder her family, she realizes that her deceased Uncle may have been protecting them from a malevolent force in the skies above.",
        content: "content/features/the-crows-of-wither-creek.md",
        pictureUrl: "/assets/crows_of_wither_creek.png",
        youtube: "",
        collection: 2,
    }

]