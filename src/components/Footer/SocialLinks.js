import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const SocialLinks = () => {
    return (
        <>
            <div className="fixed bottom-0 left-6 hidden flex-col items-center justify-center gap-10 p-2 pb-0 md:flex">
                <motion.a aria-label='github' rel='noreferrer' target='_blank' href="https://github.com/Toby2507" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><FiGithub className='text-lg text-white hover:text-primaryGreen' /></motion.a>
                <motion.a aria-label='twitter' rel='noreferrer' target='_blank' href="https://twitter.com/iamtswags" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><FiTwitter className='text-lg text-white hover:text-primaryGreen' /></motion.a>
                <motion.a aria-label='linkedin' rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/oluwatobi-salau-37b20723a/" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><FiLinkedin className='text-lg text-white hover:text-primaryGreen' /></motion.a>
                <motion.a aria-label='instagram' rel='noreferrer' target='_blank' href="https://www.instagram.com/iamtswags/" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><FiInstagram className='text-lg text-white hover:text-primaryGreen' /></motion.a>
                <span className="h-20 border-l border-white"></span>
            </div>
            <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-6 md:hidden">
                <motion.a aria-label='github' rel='noreferrer' target='_blank' href="https://github.com/Toby2507" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><FiGithub className='text-lg text-white hover:text-primaryGreen' /></motion.a>
                <motion.a aria-label='twitter' rel='noreferrer' target='_blank' href="https://twitter.com/iamtswags" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><FiTwitter className='text-lg text-white hover:text-primaryGreen' /></motion.a>
                <motion.a aria-label='linkedin' rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/oluwatobi-salau-37b20723a/" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><FiLinkedin className='text-lg text-white hover:text-primaryGreen' /></motion.a>
                <motion.a aria-label='instagram' rel='noreferrer' target='_blank' href="https://www.instagram.com/iamtswags/" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><FiInstagram className='text-lg text-white hover:text-primaryGreen' /></motion.a>
            </div>
        </>
    )
}

export default SocialLinks