import { useEffect, useRef } from "react";
import Header from "./Components/Header";
import { useTheme } from "./hooks/useTheme";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import About from "./Components/About";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience"; 
import "./styles/style.css";
import Footer from "./Components/Footer";

function App() {
  const about = useRef();
  const home = useRef();
  const skills = useRef();
  const contact = useRef();
  const experiences = useRef();

  const refs = { about, home, skills, contact, experiences };

  const [theme, setTheme] = useTheme("theme", "dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const scrollToContact = () => {
    if (contact.current) {
        window.scrollTo({
            top: contact.current.offsetTop - 120,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section id="home">
      <Header refs={refs} toggleTheme={toggleTheme} theme={theme} />
      <div ref={home} ><Home scrollToContact={scrollToContact}/></div>
      <div ref={about}><About /></div>
      <div ref={experiences}><Experience /></div>
      <div ref={skills}><Skills /></div>
      <div ref={contact}><Contact /></div>
      <Footer />
      <ScrollToTop
        smooth
        className="rounded"
        component={<FaArrowUp style={{ color: "#fff", fontSize: "500px" }} />}
      />
    </section>
  );
}

export default App;
