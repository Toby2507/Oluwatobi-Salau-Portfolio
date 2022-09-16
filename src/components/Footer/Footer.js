import React from 'react'
import SocialLinks from './SocialLinks'
import EmailLink from './EmailLink'

const Footer = () => {
    return (
        <>
            <SocialLinks />
            <EmailLink />
            <span className="absolute bottom-8 left-0 right-0 text-center text-white text-xs font-secondary tracking-widest">
                <p className='pb-1'>Designed and Built by Oluwatobi Salau</p>
                <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </span>
        </>
    )
}

export default Footer