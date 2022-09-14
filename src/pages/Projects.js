import React from 'react'
import { motion } from 'framer-motion'
import Project from '../components/ProjectPage/Project'
import { useGlobalContext } from '../context'

const Projects = () => {
    const { Featured } = useGlobalContext()
    const variants = {
        offScreen: { y: 100, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8 } },
    }
    return (
        <section id='works' className="flex flex-col space-y-32 items-center pt-40 min-h-screen pb-16">
            <motion.div
                variants={variants}
                initial='offScreen'
                whileInView='onScreen'
                viewport={{ once: true }}
                className="flex items-end space-x-4 md:w-2/3 xl:w-2/5"
            >
                <span className="text-primaryGreen text-base font-secondary md:text-xl">02.</span>
                <h2 className="text-white font-semibold text-xl tracking-wider capitalize md:text-3xl">some things i've built</h2>
                <span className="hidden flex-1 self-center border-b border-accentGray md:block"></span>
            </motion.div>
            <section className="flex flex-col space-y-40 items-center w-full">
                {Featured.map(project => {
                    return <Project key={project.id} {...project} />
                })}
            </section>
        </section>
    )
}

export default Projects