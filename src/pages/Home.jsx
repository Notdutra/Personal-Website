import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";

const Home = () => {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="relative z-10">
        <Hero />
        <FeaturedProjects />
      </div>
    </div>
  );
};

export default Home;
