import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <About />
      <Projects />
      <Work />
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
