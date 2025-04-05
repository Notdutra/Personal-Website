import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import RippleEffect from "./effects/RippleEffect";
import MouseGlow from "./effects/MouseGlow";
import "./styles/global.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Arthur Dutra | Software Developer</title>
        <meta name="description" content="Arthur Dutra - Software Developer" />
      </Helmet>

      {/* Global effects moved here */}
      <div className="fixed inset-0 z-0">
        <MouseGlow />
        <RippleEffect />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
