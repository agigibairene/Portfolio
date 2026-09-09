import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience"; 
import "./styles/style.css";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects.tsx";
import Contacts from "./Components/Contact";
import NavBar from './Components/NavBar'
import Terminal from './Components/Terminal';
import About from './Components/About';
import OpenSourceContributions from './Components/OpenSource.tsx';
import BlogList from './Components/Blog.tsx'

function App() {

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
      <NavBar />
      <Terminal />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <OpenSourceContributions />
      <BlogList />
      <Contacts />
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
