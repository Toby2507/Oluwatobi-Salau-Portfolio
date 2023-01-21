import React from 'react'
import { motion } from 'framer-motion'
import { GoPrimitiveDot } from "react-icons/go";
import { useProgressiveImage } from '../context';
import bgImg from '../images/mainBg.webp'

const Home = () => {
    const loaded = useProgressiveImage(bgImg)
    const variants = {
        offScreen: { y: -40, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8 } },
    }
    const orchestrationVariant = {
        onScreen: { transition: { staggerChildren: 0.1, delayChildren: 8.5 } }
    }
    return (
        <section id='home' className="min-h-screen grid items-center border-accentBlack lg:px-12 lg:grid-cols-2 lg:border-b xl:px-20">
            <motion.div
                variants={orchestrationVariant}
                initial='offScreen'
                animate='onScreen'
                viewport={{ once: true }}
                role='banner'
                id='home'
                className="flex flex-col space-y-6 items-center justify-center min-h-screen short:space-y-4 short:pt-12 md:pt-0 lg:items-start"
            >
                <motion.p variants={variants} className="text-white text-lg uppercase tracking-wider md:text-xl">hi there 👋🏼. i'm</motion.p>
                <motion.span variants={variants} className="flex items-center text-white text-6xl font-bold tracking-[-4px] py-3 md:text-7xl">
                    <h1>toby</h1>
                    <GoPrimitiveDot className='text-2xl mt-8 -ml-1 md:mt-10 md:text-3xl md:-ml-2' />
                </motion.span>
                <motion.h2 variants={variants} className="text-primaryGreen text-lg font-medium uppercase tracking-tight md:text-2xl md:tracking-[5px]">full stack web developer 👨🏾‍💻</motion.h2>
                <motion.p variants={variants} className="text-accentGray text-base text-center font-medium pb-6 lg:text-left">I curate experiences with front-end and back-end technologies.</motion.p>
                <motion.button variants={variants} className="bg-primaryGreen border-2 border-transparent rounded-3xl text-black text-base font-medium uppercase tracking-widest py-3 px-12 hover:bg-transparent hover:text-primaryGreen hover:border-primaryGreen"><a href="mailto:oluwatobisalau2000@gmail.com" rel="noreferrer" target="_blank">hire me</a></motion.button>
            </motion.div>
            <div className="w-full h-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${loaded || null})`, backgroundColor: `${loaded ? "" : "#000"}` }}></div>
        </section>
    )
}

export default Home