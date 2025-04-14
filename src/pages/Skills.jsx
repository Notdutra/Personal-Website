import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Languages',
    icon: <FiCheckCircle />,
    items: ['Java', 'JavaScript', 'Python', 'Dart', 'C#', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Tools',
    icon: <FiCheckCircle />,
    items: [
      'Spring Boot',
      'React',
      'Flutter',
      '.NET Core',
      'Node.js',
      'Git/GitHub',
      'Postman',
      'Salesforce',
    ],
  },
  {
    category: 'Databases',
    icon: <FiCheckCircle />,
    items: ['SQL', 'MongoDB', 'Hibernate/JPA'],
  },
  {
    category: 'Testing & Integration',
    icon: <FiCheckCircle />,
    items: ['JUnit', 'Mockito', 'Cypress', 'Jest', 'REST', 'GraphQL'],
  },
  {
    category: 'Soft Skills',
    icon: <FiCheckCircle />,
    items: ['Team Collaboration', 'Problem Solving', 'Time Management'],
  },
  {
    category: 'Operating Systems',
    icon: <FiCheckCircle />,
    items: ['Windows', 'Linux', 'macOS'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex flex-col justify-center mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-16 min-h-screen container">
        <div className="mx-auto mb-8 sm:mb-12 max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 font-bold text-white text-4xl md:text-5xl heading-responsive">
            My Skills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed">
            A showcase of my technical expertise and tools I use to build
            amazing projects.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="gap-6 md:gap-8 grid grid-cols-1 sm:grid-cols-2 mx-auto w-full max-w-5xl">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-[#1a1f2b]/80 shadow-xl hover:shadow-2xl backdrop-blur-sm p-5 sm:p-6 md:p-7 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-5">
                <div className="mr-3 text-teal-400 text-xl sm:text-2xl">
                  {skill.icon}
                </div>
                <h2 className="font-semibold text-white text-lg sm:text-xl">
                  {skill.category}
                </h2>
              </div>
              <div className="gap-3 sm:gap-4 grid grid-cols-1 xs:grid-cols-2">
                {skill.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + index * 0.05 + itemIndex * 0.02,
                    }}
                    className="flex items-center text-gray-200 text-sm sm:text-base">
                    <FiCheckCircle className="flex-shrink-0 mr-2 text-teal-400" />
                    <span className="hover:text-teal-400 transition-colors duration-200">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
