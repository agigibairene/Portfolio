import { useEffect } from "react";
import Header from "./Components/Header";
import { useTheme } from "./hooks/useTheme";
import { Outlet } from "react-router-dom";
import "./Components/style.css"

function App() {
  const [theme, setTheme] = useTheme("theme", "light");

  useEffect(()=>{
    document.body.setAttribute("data-theme", theme)
  }, [theme])

  function toggleTheme(){
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <section id="home" >
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <Outlet />
    </section>
  )
}

export default App
