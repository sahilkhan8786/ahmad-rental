import React from 'react'
import ExperienceCard from './ExperienceCard'

const ExperienceSection = () => {
    return (
        <div className='max-w-screen-2xl mx-auto w-full   px-2 bg-slate-200 mt-6'>
            <h1 className='text-center text-4xl  font-semibold uppercase my-6 font-bebas'>
                Inside NEOM Project contact us
            </h1>
            <article className='grid grid-cols-4 gap-4 p-1'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </article>
        </div>
    )
}

export default ExperienceSection