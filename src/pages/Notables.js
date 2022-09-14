import React from 'react'
import { motion } from 'framer-motion'
import { useGlobalContext } from '../context'
import Notable from '../components/Notables/Notable'

const Notables = () => {
    const { Notable: project } = useGlobalContext()
    const variants = {
        offScreen: { y: 70, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8 } },
    }
    return (
        <section id='home' className="flex flex-col space-y-20 items-center pt-40 min-h-screen pb-16">
            <motion.div
                variants={variants}
                initial='offScreen'
                whileInView='onScreen'
                viewport={{ once: true }}
                className="md:w-2/3 xl:w-2/5"
            >
                <h2 className="text-white font-semibold text-xl tracking-wider capitalize md:text-3xl">other noteworthy projects</h2>
            </motion.div>
            <section className="flex flex-wrap items-cente justify-center gap-3 xl:w-10/12">
                {project.map(project => {
                    return <Notable key={project.id} {...project} />
                })}
            </section>
        </section>
    )
}

export default Notables