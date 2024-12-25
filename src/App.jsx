import { useEffect } from "react";
import Header from "./Components/Header";
import { useTheme } from "./hooks/useTheme";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";


import About from "./Components/About";
import Home from "./Components/Home";
import "./styles/style.css"
import ScrollTop from "./utils/scrollTop";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Education from "./Components/Experience";

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
      <ScrollTop />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Education />
      <ScrollToTop
        smooth
        
        component={<FaArrowUp style={{ color: '#fff', fontSize: '500px' }} />}
      />
    </section>
  )
}

export default App
