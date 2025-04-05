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
import RippleEffect from "../components/RippleEffect";
import MouseGlow from "../components/MouseGlow";

const About = () => {
  const skills = [
    {
      category: "Technical Skills",
      icon: <FiCode />,
      items: [
        "Java and Spring Boot",
        "C# and .NET",
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
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <MouseGlow />
        <RippleEffect />
      </div>
      <div className="relative z-10">
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
              I started my journey in software engineering at{" "}
              <strong>PUCRS</strong> in Brazil, diving into{" "}
              <strong>discrete mathematics</strong>, <strong>calculus</strong>,{" "}
              <strong>algorithms</strong>, <strong>databases</strong>,{" "}
              <strong>logic</strong> and <strong>computational theory</strong>.
              These studies built a strong analytical mindset and gave me a deep
              understanding of how software works at a fundamental level. Along
              the way, I explored{" "}
              <strong>software development methodologies</strong>,{" "}
              <strong>version control</strong>, and{" "}
              <strong>programming paradigms</strong>, laying a solid foundation
              in both theory and practice.
              <br />
              <br />
              During my internships at <strong>
                Dell Technologies
              </strong> and <strong>Panvel</strong>, I gained hands-on
              experience across different areas of development. At Dell, I
              started by contributing to small projects using{" "}
              <strong>C#</strong>, <strong>.NET</strong>, <strong>Dart</strong>,{" "}
              <strong>Flutter</strong>, and <strong>Python</strong>. I focused
              on building tools for automation and text analysis that
              streamlined workflows and provided valuable insights into
              enterprise application development. This experience helped me
              navigate complex codebases and sharpen my documentation practices.
              Later, I joined a team primarily working with{" "}
              <strong>Salesforce</strong> and <strong>Apex</strong>,
              contributing to robust internal business solutions.
              <br /> <br />
              At Panvel, I contributed to the online marketplace platform using{" "}
              <strong>Java</strong> and <strong>Spring Boot</strong>. My tasks
              included developing <strong>RESTful endpoints</strong> for product
              search and filtering, enhancing the user experience. Working
              within the <strong>MVC architecture</strong>, I collaborated on
              creating <strong>controllers</strong> to handle HTTP requests,{" "}
              <strong>services</strong> for business logic, and{" "}
              <strong>repositories</strong> for data access, ensuring a clean
              separation of concerns. Additionally, I engaged in{" "}
              <strong>cross-functional collaborations</strong>, coordinating
              with various teams to integrate services effectively. Writing{" "}
              <strong>unit tests</strong> for my code was a key part of my
              workflow, helping maintain code quality and reliability.
              <br />
              <br />
              Since then, I've been actively expanding my skills in full-stack
              web development. I've built a solid foundation in core web
              technologies like <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
              <strong>JavaScript</strong>, and I'm diving deeper into modern
              frameworks like <strong>React</strong>. My personal website
              project serves as a dynamic space to showcase my progress while I
              explore both front-end and back-end technologies. I'm focused on
              creating a seamless user experience and laying the groundwork for
              future features like user authentication, database integration,
              and deployment. As I continue to learn and grow, I'm excited to
              tackle more complex challenges, including cloud services and
              artificial intelligence in the future. Let's connect!
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
                  <p className="text-sm text-gray-500">2022 - 2023</p>
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
                  <p className="text-sm text-gray-500">2020 - 2021</p>
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
    </div>
  );
};

export default About;
