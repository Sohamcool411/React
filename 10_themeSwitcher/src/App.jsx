import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme=()=>{
    setThemeMode('light')
  }
  
  const darkTheme=()=>{
    setThemeMode('dark')
  }

  const setTheme=(theme)=>{
    setThemeMode(theme)
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
    
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme,setTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
            {/* theme btn*/}
            <ThemeBtn/>
          <div className="w-full max-w-sm mx-auto"></div>
            {/* card */}
            <Card/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
