import React from 'react'
import { motion } from 'framer-motion'
import FancyButton from '../components/NavBar/FancyButton'

const Contact = () => {
    const variants = {
        offScreen: { y: 40, opacity: 0 },
        offScreen2: { y: 70, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8 } },
    }
    return (
        <section id='contact' className="flex flex-col space-y-12 items-center pt-40 pb-60 md:pb-96">
            <motion.div
                variants={variants}
                initial='offScreen2'
                whileInView='onScreen'
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-4 md:w-2/3 xl:w-2/5"
            >
                <span className="text-primaryGreen text-base font-secondary md:text-xl">03. What's Next ?</span>
                <h2 className="text-white font-semibold text-3xl tracking-wider capitalize md:text-4xl">get in touch</h2>
            </motion.div>
            <motion.p
                variants={variants}
                initial='offScreen'
                whileInView='onScreen'
                viewport={{ once: true }}
                className="w-10/12 max-w-[850px] text-sm text-center text-accentGray font-semibold tracking-wide leading-relaxed"
            >
                Thanks for stopping by, I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another, have a question or just want to say Hi, my inbox is always open, I’ll get back to you as soon as I can.
            </motion.p>
            <a href="mailto:oluwatobisalau2000@gmail.com" rel='noreferrer' target='_blank' aria-label='contact me'><FancyButton text='Say Hello' /></a>
        </section>
    )
}

export default Contact