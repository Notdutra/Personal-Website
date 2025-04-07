import { motion } from "motion/react";
import { FiCheckCircle } from "react-icons/fi";

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      icon: <FiCheckCircle />,
      items: ["Java", "JavaScript", "Python", "Dart", "C#", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Tools",
      icon: <FiCheckCircle />,
      items: [
        "Spring Boot",
        "React",
        "Flutter",
        ".NET Core",
        "Node.js",
        "Git/GitHub",
        "Postman",
        "Salesforce",
      ],
    },
    {
      category: "Databases",
      icon: <FiCheckCircle />,
      items: ["SQL", "MongoDB", "Hibernate/JPA"],
    },
    {
      category: "Testing & Integration",
      icon: <FiCheckCircle />,
      items: ["JUnit", "Mockito", "Cypress", "Jest", "REST", "GraphQL"],
    },
    {
      category: "Soft Skills",
      icon: <FiCheckCircle />,
      items: ["Team Collaboration", "Problem Solving", "Time Management"],
    },
    {
      category: "Operating Systems",
      icon: <FiCheckCircle />,
      items: ["Windows", "Linux", "macOS"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="text-primary text-2xl mr-3">{skill.icon}</div>
            <h2 className="text-xl font-semibold">{skill.category}</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {skill.items.map((item) => (
              <div
                key={item}
                className="flex items-center text-gray-600 dark:text-gray-300">
                <FiCheckCircle className="text-primary mr-2" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
