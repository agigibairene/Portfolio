import { useEffect } from "react";
import Header from "./Components/Header";
import { useTheme } from "./hooks/useTheme";
// import { Outlet } from "react-router-dom";

import About from "./Components/About";
import Home from "./Components/Home";
import "./Components/style.css"
import ScrollToTop from "./utils/scrollToTop";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

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
      <ScrollToTop />
      <Home />
      <About />
      <Skills />
      <Contact />
    </section>
  )
}

export default App
