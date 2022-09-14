import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import hoverEffect from 'hover-effect'
import number1 from '../../images/number 1.webp'
import number2 from '../../images/number 2.webp'
import number3 from '../../images/number 3.webp'
import myDistortionImage from '../../images/myDistortionImage.webp'
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";


const Project = p => {
    const imageRef = useRef(null)
    const variants = {
        offScreen: { y: 70, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8 } },
    }
    const numbers = [number1, number2, number3]
    useEffect(() => {
        new hoverEffect({
            parent: imageRef.current,
            intensity: 0.3,
            image1: p.image1,
            image2: p.image2,
            displacementImage: myDistortionImage,
        })
    }, [p.image1, p.image2])
    return (
        <motion.section
            variants={variants}
            initial='offScreen'
            whileInView='onScreen'
            viewport={{ once: true }}
            className="relative w-full max-w-[850px] h-[600px] md:w-11/12 md:h-[450PX] lg:h-[60vh]"
        >
            <article className="absolute w-full h-full bg-cardGradient border border-cardBorder/40 rounded-2rem p-6 z-10 md:p-8 lg:rounded-5rem">
                <div className='grid grid-rows-2 gap-3 h-full md:grid-rows-1 md:grid-cols-[auto_1fr_1fr] md:gap-8 md:items-center lg:justify-end'>
                    <div className="hidden flex-col-reverse items-center justify-center space-y-reverse space-y-2 w-full md:flex">
                        {p.tech.map((tech, i) => {
                            return <h4 key={i} className="verticalWrite rotate-180 text-accentGray text-xs tracking-wider font-medium uppercase font-secondary">{tech}</h4>
                        })}
                    </div>
                    <figure className="canvasref w-full h-full rounded-2xl" ref={imageRef}></figure>
                    <article className="flex flex-col space-y-6 lg:space-y-10">
                        <h3 className="text-4xl text-white capitalize font-bold lg:text-5xl">{p.fName}<br />{p.lName && <span className="block text-3xl -mt-2 lg:text-4xl">{p.lName}</span>}</h3>
                        <p className="text-sm font-medium text-white lg:w-10/12">{p.info}</p>
                        <div className="flex space-x-3 items-center">
                            {p.github && <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} aria-label="github"><a href={p.github} rel='noreferrer' target='_blank' aria-label='github'><FiGithub className='text-xl text-accentGray hover:text-primaryGreen' /></a></motion.button>}
                            {p.website && <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} aria-label="website"><a href={p.website} rel='noreferrer' target='_blank' aria-label='website'><HiOutlineExternalLink className='text-xl text-accentGray hover:text-primaryGreen' /></a></motion.button>}
                        </div>
                        <div className="flex items-center justify-center space-x-2 w-full md:hidden">
                            {p.tech.map((tech, i) => {
                                return <h4 key={i} className="text-accentGray text-xs tracking-wider font-medium uppercase font-secondary">{tech}</h4>
                            })}
                        </div>
                    </article>
                </div>
            </article>
            <figure className="absolute top-0 right-0 translate-x-4 -translate-y-8 md:translate-x-6 md:-translate-y-12">
                <img src={numbers[p.id - 1]} alt="number 1 icon" className='w-20 h-20 object-contain md:w-28 md:h-28' />
            </figure>
        </motion.section>
    )
}

export default Project