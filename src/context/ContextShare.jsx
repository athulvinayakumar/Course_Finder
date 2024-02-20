import React, { createContext, useState } from 'react'

export const addCatContext = createContext()
export const editCatContext = createContext()
export const editCoursContext = createContext()
export const isAuthTokenContext = createContext()

function ContextShare({ children }) {
    const [addCatgoryResponse, setAddCatgoryResponse] = useState({})
    const [editCatgoryResponse, setCatgoryResponse] = useState({})
    const [editCourseResponse, setEditCourseResponse] = useState({})
    const [isAuthToken, setIsAuthToken] = useState(false)
    return (
        <>
            <addCatContext.Provider value={{ addCatgoryResponse, setAddCatgoryResponse }}>
                <editCatContext.Provider value={{ editCatgoryResponse, setCatgoryResponse }}>
                    <editCoursContext.Provider value={{ editCourseResponse, setEditCourseResponse }}>
                        <isAuthTokenContext.Provider value={{isAuthToken, setIsAuthToken}}>
                            {children}
                        </isAuthTokenContext.Provider>
                    </editCoursContext.Provider>
                </editCatContext.Provider>
            </addCatContext.Provider>
        </>
    )
}

export default ContextShare