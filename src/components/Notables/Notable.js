import React from 'react'
import { motion } from 'framer-motion'
import { FiFolder } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";


const Notable = p => {
    const variants = {
        offScreen: { y: 40, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8 } },
    }
    return (
        <motion.article
            variants={variants}
            initial='offScreen'
            whileInView='onScreen'
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            className="w-72 grid grid-row-[auto_auto_1fr_auto] gap-6 items-center bg-cardBg border border-cardBorder rounded-md p-4"
        >
            <div className="w-full flex items-center justify-between">
                <FiFolder className='text-4xl text-primaryGreen' />
                <div className="flex items-center space-x-3">
                    {p.github && <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} aria-label="github"><a href={p.github} rel='noreferrer' target='_blank' aria-label='github'><FiGithub className='text-xl text-accentGray hover:text-primaryGreen' /></a></motion.button>}
                    {p.website && <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} aria-label="website"><a href={p.website} rel='noreferrer' target='_blank' aria-label='website'><HiOutlineExternalLink className='text-xl text-accentGray hover:text-primaryGreen' /></a></motion.button>}
                </div>
            </div>
            <h1 className="text-lg font-semibold capitalize text-white leading-snug hover:text-primaryGreen">{p.title}</h1>
            <p className="text-sm font-medium text-accentGray">{p.info}</p>
            <div className="flex items-center space-x-2">
                {p.tech.map((t, i) => {
                    return <p key={i} className="text-xs text-accentGray font-secondary">{t}</p>
                })}
            </div>
        </motion.article>
    )
}

export default Notable