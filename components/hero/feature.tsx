'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stories } from '@/lib/stories';
import StoryFeature from '../story/storyFeature';
import { useState } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Feature() {
    const [featureState, setFeatureState] = useState(0)
    const [direction, setDirection] = useState<'left' | 'right' | null>(null)
    const [animating, setAnimating] = useState(false)

    const storyList = stories.slice(stories.length - 3, stories.length);

    const handleNext = () => {
        if (animating) return
        setDirection('right')
        setAnimating(true)

        setTimeout(() => {
            setFeatureState((prev) =>
                prev === storyList.length - 1 ? 0 : prev + 1
            )
            setAnimating(false)
        }, 200)
    }

    const handlePrev = () => {
        if (animating) return
        setDirection('left')
        setAnimating(true)

        setTimeout(() => {
            setFeatureState((prev) =>
                prev === 0 ? storyList.length - 1 : prev - 1
            )
            setAnimating(false)
        }, 200)
    }

    return (
        <section className="border-div background w-full min-h-screen flex flex-col items-center justify-evenly px-4 md:py-30 gap-10 overflow-hidden">

            <div
                className={`
    transition-all duration-200 ease-in-out
    ${animating
                        ? `opacity-0 ${direction === 'right' ? 'translate-x-6' : '-translate-x-6'}`
                        : 'opacity-100 translate-x-0'
                    }
  `}
            >
                <StoryFeature story={storyList[featureState]} />
            </div>

            <div className="flex gap-20 mb-20 md:mt-8 flex-row">
                <FontAwesomeIcon
                    onClick={handlePrev}
                    className="text-4xl text-red-500 hover:text-red-300 cursor-pointer z-500"
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon
                    onClick={handleNext}
                    className="text-4xl text-red-500 hover:text-red-300 cursor-pointer z-500"
                    icon={faAngleRight}
                />
            </div>
        </section>
    )
}