import { motion } from "framer-motion";
import {
  FiCode,
  FiTool,
  FiUsers,
  FiBriefcase,
  FiDatabase,
  FiServer,
  FiGitBranch,
  FiMonitor,
  FiMessageSquare,
  FiGlobe,
  FiCheckCircle,
  FiClock,
  FiTarget,
  FiTrendingUp,
  FiAward,
  FiStar,
} from "react-icons/fi";

const About = () => {
  const skills = [
    {
      category: "Technical Skills",
      icon: <FiCode />,
      items: [
        "Java/Spring Boot",
        "C#/.NET",
        "Python",
        "JavaScript",
        "TypeScript",
        "React",
        "HTML/CSS",
        "SQL",
        "Theoretical CS",
        "Web Development",
        "Front-end Design",
        "Problem Solving",
      ],
    },
    {
      category: "Development Tools",
      icon: <FiTool />,
      items: [
        "Git",
        "VS Code",
        "IntelliJ IDEA",
        "Visual Studio",
        "Docker",
        "npm/yarn",
        "Webpack",
        "REST APIs",
        "Responsive Design",
        "Version Control",
        "Code Review",
        "Agile/Scrum",
      ],
    },
    {
      category: "Soft Skills",
      icon: <FiUsers />,
      items: [
        "Team Collaboration",
        "Problem Solving",
        "Communication",
        "Adaptability",
        "Self-Learning",
        "Attention to Detail",
        "Analytical Thinking",
        "Time Management",
      ],
    },
    {
      category: "Areas of Interest",
      icon: <FiBriefcase />,
      items: [
        "Web Development",
        "Front-end Design",
        "User Experience",
        "Modern Frameworks",
        "Clean Code",
        "Best Practices",
        "Innovation",
        "New Technologies",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            I'm a software developer with a passion for creating web solutions.
            I kicked off my journey in software engineering at PUCRS in Brazil,
            diving deep into theoretical computer science topics like discrete
            mathematics, computational theory, and low-level systems. These
            studies gave me a strong foundation for tackling complex problems.
            <br />
            <br />
            I've built hands-on experience with languages like Java, C#, Python,
            and JavaScript through internships—working with .NET at Dell and
            Java/Spring Boot at Panvel—where I also got my first taste of
            front-end development. That sparked my interest in building
            user-friendly interfaces.
            <br />
            <br />
            Since then, I've been self-teaching and leveling up my skills,
            focusing on modern web development with tools like React. Right now,
            I'm building this personal website to showcase what I can do. I'm
            excited to bring my mix of theoretical knowledge and real-world
            experience to a team that values innovation. Let's connect!
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="text-primary text-2xl mr-3">{skill.icon}</div>
                <h2 className="text-xl font-semibold">{skill.category}</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skill.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <FiCheckCircle className="text-primary mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="space-y-8">
            {/* Panvel Experience */}
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">
                  Software Developer Intern
                </h3>
                <a
                  href="https://www.panvel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 inline-block relative group"
                >
                  Panvel
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
                <p className="text-sm text-gray-500">2023</p>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <FiTarget className="text-primary mr-2 mt-1" />
                  <span>
                    Developed with Java/Spring Boot in a retail platform
                    environment
                  </span>
                </li>
                <li className="flex items-start">
                  <FiTrendingUp className="text-primary mr-2 mt-1" />
                  <span>
                    Gained experience in front-end development and user
                    interface design
                  </span>
                </li>
                <li className="flex items-start">
                  <FiAward className="text-primary mr-2 mt-1" />
                  <span>
                    Worked in an agile environment with modern development
                    practices
                  </span>
                </li>
              </ul>
            </div>

            {/* Dell Experience */}
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">
                  Software Developer Intern
                </h3>
                <a
                  href="https://www.dell.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 inline-block relative group"
                >
                  Dell Technologies
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
                <p className="text-sm text-gray-500">2022</p>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <FiStar className="text-primary mr-2 mt-1" />
                  <span>
                    Worked with C#/.NET in enterprise application development
                  </span>
                </li>
                <li className="flex items-start">
                  <FiGlobe className="text-primary mr-2 mt-1" />
                  <span>
                    Collaborated with international teams on various projects
                  </span>
                </li>
                <li className="flex items-start">
                  <FiMessageSquare className="text-primary mr-2 mt-1" />
                  <span>
                    Enhanced team communication and documentation practices
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
