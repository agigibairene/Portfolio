import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import "./styles/style.css";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contact";
import NavBar from './Components/NavBar'
import Terminal from './Components/Terminal';
import About from './Components/About';
import OpenSourceContributions from './Components/OpenSource';
import BlogList from './Components/Blog'

function App() {
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