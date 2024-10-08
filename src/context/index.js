"use client"

import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export function AppWrapper({ children }) {
    const [nav, setNav] = useState(null)


    return (
        <AppContext.Provider value={{
            nav,
            setNav
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}