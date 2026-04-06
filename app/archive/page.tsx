'use client'
import StoryList from "@/components/lists/storyList"
import ShortList from "@/components/lists/shortList";
import { useState } from "react"

export default function Archive() {

    const [filter, setFilter] = useState(true);


    return (
        <section className={`w-full min-h-screen flex flex-col items-center jusitfy-center px-4 md:px-20 py-30`}>
            <div id="filter" className="w-75 flex items-center flex-row gap-4 mb-20">
                <h2 className={`${filter? 'underline' : 'text-decoration: none'} text-3xl font-bold tracking-wide hover-underline cursor-pointer`} onClick={() => setFilter(true)}>Features</h2>
                <h2 className="text-3xl font-bold tracking-wide"> | </h2>
                <h2 className={`${!filter? 'underline' : 'text-decoration: none'} text-3xl font-bold tracking-wide hover-underline cursor-pointer`} onClick={() => setFilter(false)}>Shorts</h2>
            </div>
            {filter && <StoryList />}
            {!filter && <ShortList />}
        </section>
    )
}