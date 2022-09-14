import React from 'react'
import { motion } from 'framer-motion'
import { useGlobalContext } from '../../context'

const NavItems = ({ no, value }) => {
    const { setIsOpen } = useGlobalContext()
    const itemsVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: { y: { stiffness: 1000, velocity: -100 } }
        },
        closed: {
            y: 20,
            opacity: 0,
            transition: { y: { stiffness: 1000 } }
        }
    }
    return (
        <motion.li
            variants={itemsVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className='text-white text-base font-secondary tracking-wider hover:text-primaryGreen'
        >
            <a href={`#${value.toLowerCase()}`} className='flex space-x-4 items-center' onClick={setIsOpen}><span className="text-primaryGreen">{no}.</span><h3>{value}</h3></a>
        </motion.li>
    )
}

export default NavItems