import React from 'react'
import { motion } from 'framer-motion'

const FancyButton = ({ text }) => {
    const variants = {
        offScreen: { y: 40, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8 } },
    }
    return (
        <motion.button
            variants={variants}
            initial={['initial', 'offScreen']}
            whileHover={[{ scale: 1.1 }, 'hover']}
            whileTap={[{ scale: 0.9 }, 'hover']}
            whileInView='onScreen'
            viewport={{ once: true }}
            className='relative w-44 h-12 border border-primaryGreen overflow-clip mt-2'
        >
            <motion.div
                variants={{
                    initial: { x: '-100%', skewX: '-10deg' },
                    hover: { x: '0%', scale: 1.1 }
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 }}
                className='absolute top-0 -left-2 w-[110%] h-full bg-primaryGreen'
            ></motion.div>
            <motion.h3
                variants={{
                    initial: { color: "#74F06B" },
                    hover: { color: "#000", transition: { duration: 0, delay: 0.2 } }
                }}
                className="absolute top-0 left-0 w-full h-full grid place-items-center font-medium uppercase tracking-widest z-10 hover:font-semibold"
            >{text}</motion.h3>
        </motion.button>
    )
}

export default FancyButton