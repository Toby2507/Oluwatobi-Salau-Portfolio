import React, { useContext } from 'react'
import { useCycle } from 'framer-motion'
import data from './data.json'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const { Featured, Notable } = data
    const [isOpen, setIsOpen] = useCycle(false, true)
    return <AppContext.Provider value={{ isOpen, Featured, Notable, setIsOpen }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)