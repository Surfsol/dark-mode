// will bring over [storedValue, setValue]
import {useLocalStorage} from './useLocalStorage'
//use effect hook to manipulate the DOM to DarkMode
import React, {useEffect} from 'react'

//set key = 'darkMode', and initialvalue = false
export const useDarkMode = () => {
    const [someMode, setSomeMode]= useLocalStorage('darkMode', false)

    useEffect(() => {
        //check value of useLocalState t or f
        //if t add dark mode, f remove
        //was verified in console log document.body.classList.add("dark-mode")
        if (someMode === true){
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
        
    })

    return(
        //array is passed to Navbar
        [someMode, setSomeMode]
    )

}
