import AboutIntro from "../components/about/AboutIntro";
import Skills from "../components/about/Skills";
import Experience from "../components/about/Experience";

const About = () => {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <AboutIntro />
          <Skills />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default About;
