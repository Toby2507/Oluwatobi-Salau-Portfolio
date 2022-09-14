import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineCaretRight } from "react-icons/ai";
import myImg from '../images/oluwatobiSalau.webp'

const About = () => {
    const variants = {
        offScreen: { y: 70, opacity: 0 },
        offScreen2: { y: 40, opacity: 0 },
        onScreen2: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8 } },
    }
    return (
        <section id='about' className="flex flex-col space-y-16 items-center pt-40 xl:space-y-16">
            <motion.div
                variants={variants}
                initial='offScreen'
                whileInView='onScreen2'
                viewport={{ once: true }}
                className="flex items-end space-x-4 md:w-2/3 xl:w-2/5"
            >
                <span className="text-primaryGreen text-base font-secondary md:text-xl">01.</span>
                <h2 className="text-white font-semibold text-2xl tracking-wider capitalize md:text-3xl">about me</h2>
                <span className="hidden flex-1 self-center border-b border-accentGray md:block"></span>
            </motion.div>
            <article className="flex flex-col space-y-12 items-center md:flex-row-reverse md:space-y-0 md:space-x-reverse md:space-x-10 md:justify-center md:items-start">
                <motion.figure
                    variants={variants}
                    initial={['offScreen2', 'initial']}
                    whileInView='onScreen2'
                    whileHover='hover'
                    viewport={{ once: true }}
                    className="relative w-48 h-48 rounded-xl lg:w-60 lg:h-60"
                >
                    <img src={myImg} alt="Oluwatobi Salau" className='absolute top-0 left-0 w-full h-full object-cover rounded-xl z-10' />
                    <motion.span
                        variants={{
                            initial: { x: '8px', y: '8px' },
                            hover: { x: '5px', y: '5px', transition: { type: 'spring', bounce: 0.4, duration: 0.5 } }
                        }}
                        className="absolute top-0 left-0 w-full h-full border-2 border-primaryGreen rounded-xl"
                    ></motion.span>
                </motion.figure>
                <div className="flex flex-col space-y-3 pb-8 md:w-1/2">
                    <motion.p
                        variants={variants}
                        initial='offScreen2'
                        whileInView='onScreen2'
                        viewport={{ once: true }}
                        className="text-sm text-white lg:text-base xl:w-11/12">
                        Hello! My name is Oluwatobi and I love to curate experiences using both frontend and backend technologies.
                    </motion.p>
                    <motion.p
                        variants={variants}
                        initial='offScreen2'
                        whileInView='onScreen2'
                        viewport={{ once: true }}
                        className="text-sm text-white lg:text-base xl:w-11/12">
                        My interest in web development started back in 2019 when I tried to give my mom’s textile business an online presence. She had no money to hire a developer so I googled how to create a website and that’s how the obsession started lol.
                    </motion.p>
                    <motion.p
                        variants={variants}
                        initial='offScreen2'
                        whileInView='onScreen2'
                        viewport={{ once: true }}
                        className="text-sm text-white lg:text-base xl:w-11/12">
                        I enjoy turning complex problems into simple, beautiful and intuitive web designs. I consider myself a well-organised, problem solving person with very high attention to details.
                    </motion.p>
                    <motion.p
                        variants={variants}
                        initial='offScreen2'
                        whileInView='onScreen2'
                        viewport={{ once: true }}
                        className="text-sm text-white lg:text-base xl:w-11/12">
                        When I’m not eye balls deep in code, you’ll find me cooking, reading, payling video games or most likely watching movies on netflix...yeah I’m a big movie lover lol.
                    </motion.p>
                    <motion.p
                        variants={variants}
                        initial='offScreen2'
                        whileInView='onScreen2'
                        viewport={{ once: true }}
                        className="text-sm text-white lg:text-base xl:w-11/12">
                        Here are few technologies I’ve been working with recently...
                    </motion.p>
                    <motion.ul
                        variants={variants}
                        initial='offScreen2'
                        whileInView='onScreen2'
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-1 w-full lg:w-9/12"
                    >
                        <li className="flex space-x-2 items-center text-sm font-secondary tracking-wide text-accentGray lg:text-base"><AiOutlineCaretRight className='text-primaryGreen mr-2' />HTML5 / CSS3</li>
                        <li className="flex space-x-2 items-center text-sm font-secondary tracking-wide text-accentGray lg:text-base"><AiOutlineCaretRight className='text-primaryGreen mr-2' />Python</li>
                        <li className="flex space-x-2 items-center text-sm font-secondary tracking-wide text-accentGray lg:text-base"><AiOutlineCaretRight className='text-primaryGreen mr-2' />JavaScript(ES6+)</li>
                        <li className="flex space-x-2 items-center text-sm font-secondary tracking-wide text-accentGray lg:text-base"><AiOutlineCaretRight className='text-primaryGreen mr-2' />Django</li>
                        <li className="flex space-x-2 items-center text-sm font-secondary tracking-wide text-accentGray lg:text-base"><AiOutlineCaretRight className='text-primaryGreen mr-2' />React.JS</li>
                        <li className="flex space-x-2 items-center text-sm font-secondary tracking-wide text-accentGray lg:text-base"><AiOutlineCaretRight className='text-primaryGreen mr-2' />PostGresDB</li>
                    </motion.ul>
                </div>
            </article>
        </section>
    )
}

export default About