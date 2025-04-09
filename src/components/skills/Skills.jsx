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
    <div className="max-w-4xl mx-auto mb-16">
      <h1 className="text-4xl font-bold mb-6 text-center">My Skills</h1>
      <p className="text-xl text-gray-300 text-center mb-12">
        A showcase of my technical expertise and tools I use to build amazing
        projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={skill.category}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
