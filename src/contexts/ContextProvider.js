import { React,createContext, useContext, useState } from "react";

const StateContext = createContext();


const initialState = {
    chat: false,
    cart : false,
    notification: false,
    userProfile: false,
};

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined);

    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');

    const [ themeSetting, setThemeSetting ] = useState(false);

    const setMode = ( e ) => {
        setCurrentMode( e.target.value );

        localStorage.setItem('themeMode', e.target.value)
    }

    const setColor = (color) => {
        // console.log(color);
        setCurrentColor(color);    

        localStorage.setItem('colorMode', color)

        setThemeSetting(false);
    }

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked] : true })
    }
    
    return(
        <StateContext.Provider value= { 
            { 
                activeMenu, 
                setActiveMenu, 
                isClicked, 
                setIsClicked, 
                handleClick, 
                screenSize, 
                setScreenSize,
                currentColor, 
                currentMode, 
                themeSetting, 
                setThemeSetting,
                setMode,
                setColor,
                initialState

            } 
                } 
            >
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

