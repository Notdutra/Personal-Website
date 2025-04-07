import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/global.css";

function App() {
  return (
    <>
      <div>
        <title>Arthur Dutra | Software Developer</title>
        <meta name="description" content="Arthur Dutra - Software Developer" />
      </div>

      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
