import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/index.css";

function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Arthur Schossler Dutra - Software Developer</title>
        <meta
          name="description"
          content="Personal portfolio website of Arthur Schossler Dutra, a passionate software developer specializing in JavaScript, Python, and Java development."
        />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
