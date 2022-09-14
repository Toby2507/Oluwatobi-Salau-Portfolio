import React from 'react'
import { motion } from 'framer-motion'
import logo from '../../images/logo.png'
import logo2 from '../../images/logo2.svg'
import Submenu from './Submenu'
import NavToggle from './NavToggle'
import { useGlobalContext } from '../../context'

const Navbar = () => {
    const { isOpen } = useGlobalContext()
    return (
        <nav className="fixed top-12 left-0 right-0 w-[90vw] max-w-[660px] mx-auto z-20">
            <motion.div
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                className="flex items-center justify-between bg-cardBg/95 border-2 border-cardBorder/95 rounded-2xl px-4 py-3"
            >
                <div className='flex items-center space-x-2'>
                    <button><a href="#home" aria-label='back to top'><img src={logo} alt="Oluwatobi Salau" className='w-12' /></a></button>
                    <figure className="overflow-hidden">
                        <motion.img
                            animate={{ x: ["-100%", "0%"] }}
                            transition={{
                                duration: 3,
                                ease: [1, 0, 0.2, 1],
                                repeat: Infinity,
                                repeatDelay: 5,
                                repeatType: "reverse"
                            }}
                            src={logo2} alt="Oluwatobi Salau" className='w-32 mt-2'
                        />
                    </figure>
                </div>
                <button><NavToggle /></button>
            </motion.div>
            <Submenu />
        </nav>
    )
}

export default Navbar