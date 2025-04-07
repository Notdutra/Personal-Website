import { motion } from "motion/react";
import {
  FiTarget,
  FiTrendingUp,
  FiAward,
  FiStar,
  FiGlobe,
  FiMessageSquare,
} from "react-icons/fi";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="space-y-8">
        {/* Panvel Experience */}
        <div className="relative pl-8 border-l-2 border-primary">
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Software Developer Intern</h3>
            <a
              href="https://www.panvel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 inline-block relative group">
              Panvel
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
            <p className="text-sm text-gray-500">2022 - 2023</p>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <FiTarget className="text-primary mr-2 mt-1" />
              <span>
                Developed with Java/Spring Boot in a retail platform environment
              </span>
            </li>
            <li className="flex items-start">
              <FiTrendingUp className="text-primary mr-2 mt-1" />
              <span>
                Gained experience in front-end development and user interface
                design
              </span>
            </li>
            <li className="flex items-start">
              <FiAward className="text-primary mr-2 mt-1" />
              <span>
                Worked in an agile environment with modern development practices
              </span>
            </li>
          </ul>
        </div>

        {/* Dell Experience */}
        <div className="relative pl-8 border-l-2 border-primary">
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Software Developer Intern</h3>
            <a
              href="https://www.dell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 inline-block relative group">
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
  );
};

export default Experience;
