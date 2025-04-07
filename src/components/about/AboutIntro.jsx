import { motion } from "motion/react";
import { useState } from "react";
import { FiBook, FiBriefcase, FiCode, FiArrowRight } from "react-icons/fi";
import SectionCard from "./SectionCard";

const AboutIntro = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (title) => {
    if (expandedCard === title) {
      setExpandedCard(null);
    } else {
      setExpandedCard(title);
    }
  };

  const sections = [
    {
      icon: <FiBook />,
      title: "Education",
      content:
        "Software Engineering at PUCRS in Brazil, focusing on discrete mathematics, algorithms, and computational theory.",
      details:
        "My education built a strong analytical foundation in software fundamentals and modern development practices.",
      fullText: `I started my journey in software engineering at PUCRS in Brazil, diving into discrete mathematics, calculus, algorithms, databases, logic and computational theory. These studies built a strong analytical mindset and gave me a deep understanding of how software works at a fundamental level. Along the way, I explored software development methodologies, version control, and programming paradigms, laying a solid foundation in both theory and practice.`,
    },
    {
      icon: <FiBriefcase />,
      title: "Dell Technologies",
      year: "2020-2021",
      content:
        "Worked with C#, .NET, Dart, Flutter, and Python on automation tools and enterprise applications.",
      details:
        "Later joined a Salesforce team, working with Apex on internal business solutions.",
      fullText: `During my internship at Dell Technologies, I started by contributing to small projects using C#, .NET, Dart, Flutter, and Python. I focused on building tools for automation and text analysis that streamlined workflows and provided valuable insights into enterprise application development. This experience helped me navigate complex codebases and sharpen my documentation practices. Later, I joined a team primarily working with Salesforce and Apex, contributing to robust internal business solutions.`,
    },
    {
      icon: <FiBriefcase />,
      title: "Panvel",
      year: "2022-2023",
      content:
        "Contributed to an online marketplace with Java and Spring Boot, developing RESTful APIs.",
      details:
        "Focused on MVC architecture, creating controllers, services, and repositories with clean separation of concerns.",
      fullText: `At Panvel, I contributed to the online marketplace platform using Java and Spring Boot. My tasks included developing RESTful endpoints for product search and filtering, enhancing the user experience. Working within the MVC architecture, I collaborated on creating controllers to handle HTTP requests, services for business logic, and repositories for data access, ensuring a clean separation of concerns. Additionally, I engaged in cross-functional collaborations, coordinating with various teams to integrate services effectively. Writing unit tests for my code was a key part of my workflow, helping maintain code quality and reliability.`,
    },
    {
      icon: <FiCode />,
      title: "Current Focus",
      content:
        "Expanding skills in full-stack development with HTML, CSS, JavaScript, and React.",
      details:
        "Building a foundation for advanced features like authentication, database integration, and deployment.",
      fullText: `Since then, I've been actively expanding my skills in full-stack web development. I've built a solid foundation in core web technologies like HTML, CSS, and JavaScript, and I'm diving deeper into modern frameworks like React. My personal website project serves as a dynamic space to showcase my progress while I explore both front-end and back-end technologies. I'm focused on creating a seamless user experience and laying the groundwork for future features like user authentication, database integration, and deployment. As I continue to learn and grow, I'm excited to tackle more complex challenges, including cloud services and artificial intelligence in the future.`,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mb-16">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <p className="text-xl text-gray-300 text-center mb-12">
        My journey from software engineering student to full-stack developer
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <SectionCard
            key={section.title}
            section={section}
            expanded={expandedCard === section.title}
            toggleExpand={toggleCard}
            index={index}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/contact"
          className="inline-flex items-center text-primary hover:underline">
          Let&apos;s connect <FiArrowRight className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default AboutIntro;
