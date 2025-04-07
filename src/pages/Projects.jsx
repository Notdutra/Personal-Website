import { useState, useMemo } from "react";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsFilter from "../components/projects/ProjectsFilter";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { projects } from "../data/projects";

const Projects = () => {
  // Dynamically determine available categories from projects
  const availableCategories = useMemo(() => {
    if (projects.length === 0) return [];

    // Always include "All" if there are any projects
    const categories = ["All"];

    // Add unique categories from projects
    const projectCategories = [
      ...new Set(projects.map((project) => project.category)),
    ];
    categories.push(...projectCategories);

    return categories;
  }, []);

  // Set active category, defaulting to "All" if available
  const [activeCategory, setActiveCategory] = useState(
    availableCategories.includes("All") ? "All" : availableCategories[0] || ""
  );

  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-3xl font-bold text-gray-300 mb-4">
          Coming Soon! 🚀
        </h3>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          I&apos;m currently working on adding my portfolio projects. Check back
          soon to see what I&apos;ve been building!
        </p>
      </div>
    );
  }
  return (
    <>
      <ProjectsHero />
      {/* Only show filter if there are multiple categories */}
      {availableCategories.length > 1 && (
        <ProjectsFilter
          categories={availableCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}
      <ProjectsGrid activeCategory={activeCategory} />
    </>
  );
};

export default Projects;
