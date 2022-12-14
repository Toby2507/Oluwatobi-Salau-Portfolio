import React from 'react'
import { motion } from 'framer-motion'
import logo from '../images/logo.webp'

const Preloader = () => {
    return (
        <motion.div animate={{ y: ["0%", "-100%"], transition: { duration: 1, delay: 10 } }} className="fixed top-0 left-0 w-screen h-screen bg-black grid place-item-center z-40">
            <div className="flex items-center justify-center space-x-4">
                <motion.img animate={{ x: [-20, 0], opacity: [0, 1] }} src={logo} alt="oluwatobi salau" className='w-20 h-20' />
                <motion.div animate={{ x: [20, 0], opacity: [0, 1], transition: { when: "afterChildren" } }} className="before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-preloaderBefore relative h-5 w-max overflow-hidden after:block after:absolute after:bottom-0 after:right-0 after:w-full after:h-full after:bg-preloaderAfter">
                    <motion.div animate={{ y: ["0%", "-90%"] }} transition={{ duration: 8 }} className="w-max">
                        <p className="text-sm text-primaryGreen font-bold tracking-tight leading-loose font-secondary">HTML5</p>
                        <p className="text-sm text-primaryGreen font-bold tracking-tight leading-loose font-secondary">CSS3/TAILWINDCSS</p>
                        <p className="text-sm text-primaryGreen font-bold tracking-tight leading-loose font-secondary">JAVASCRIPT</p>
                        <p className="text-sm text-primaryGreen font-bold tracking-tight leading-loose font-secondary">TYPESCRIPT</p>
                        <p className="text-sm text-primaryGreen font-bold tracking-tight leading-loose font-secondary">REACT.JS</p>
                        <p className="text-sm text-primaryGreen font-bold tracking-tight leading-loose font-secondary">NODE.JS</p>
                        <p className="text-sm text-primaryGreen font-bold tracking-tight leading-loose font-secondary">PYTHON</p>
                        <p className="text-sm text-primaryGreen font-bold tracking-tight leading-loose font-secondary">FRAMER MOTION</p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Preloader