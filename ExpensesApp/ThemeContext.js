import { createContext,useState,useContext } from "react";

const ThemeContext = createContext();



export const ThemeProvider=({children})=>{


  const [isDarkMode, setIsDarkMode]= useState(false);

  const toggleTheme =()=> {
    setIsDarkMode(prevMode=>!prevMode)
  }


const theme ={
  isDarkMode,
  toggleTheme,
  colors: isDarkMode ?{
    background: '#171726',
    text: '#FFFFFF',
  }:{
    background:'white',
    text: 'black'
  }
};

  return(
    <ThemeContext.Provider value ={theme}>
      {children}
    </ThemeContext.Provider>
  )
};


export const useTheme = ()=>useContext(ThemeContext);