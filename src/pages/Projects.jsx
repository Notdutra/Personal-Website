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

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="relative z-10">
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
      </div>
    </div>
  );
};

export default Projects;
