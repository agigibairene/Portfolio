import { useEffect } from "react";
import Header from "./Components/Header";
import { useTheme } from "./hooks/useTheme";
// import { Outlet } from "react-router-dom";

import About from "./Components/About";
import Home from "./Components/Home";
import "./Components/style.css"

function App() {
  const [theme, setTheme] = useTheme("theme", "dark");

  useEffect(()=>{
    document.body.setAttribute("data-theme", theme)
  }, [theme])

  function toggleTheme(){
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <section id="home" >
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <Home />
      <About />
    </section>
  )
}

export default App
