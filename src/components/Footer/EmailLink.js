import React from 'react'
import { motion } from 'framer-motion'

const EmailLink = () => {
    return (
        <div className="fixed bottom-0 right-6 hidden flex-col items-center justify-center gap-10 p-2 pb-0 md:flex">
            <motion.a href="mailto:oluwatobisalau2000@gmail.com" rel='noreferrer' target='_blank' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <h3 className='verticalWrite text-xs tracking-wide text-white font-secondary hover:text-primaryGreen'>oluwatobisalau2000@gmail.com</h3>
            </motion.a>
            <span className="h-20 border-l border-white"></span>
        </div>
    )
}

export default EmailLink