import React, { useState, useEffect, useContext } from 'react'
import { useCycle } from 'framer-motion'
import data from './data.json'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const { Featured, Notable } = data
    const [isOpen, setIsOpen] = useCycle(false, true)
    return <AppContext.Provider value={{ isOpen, Featured, Notable, setIsOpen }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)

export const useProgressiveImage = src => {
    const [sourceLoaded, setSourceLoaded] = useState(null)
    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => setSourceLoaded(src)
    }, [src])
    return sourceLoaded
}