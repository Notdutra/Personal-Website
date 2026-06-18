'use client';

import {
  FiCheckCircle,
  FiCode,
  FiTool,
  FiDatabase,
  FiPlay,
  FiUsers,
  FiMonitor,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { skillIcons } from '../data/skillIcons';

const skills = [
  {
    category: 'Languages',
    icon: <FiCode />,
    items: [
      'Java',
      'JavaScript',
      'TypeScript',
      'Python',
      'Dart',
      'Swift',
      'C#',
      'HTML',
      'CSS',
      'JSON',
    ],
  },
  {
    category: 'Frameworks & Tools',
    icon: <FiTool />,
    items: [
      'Spring Boot',
      'React',
      'Next.js',
      'Flutter',
      '.NET Core',
      'Node.js',
      'Git/GitHub',
      'Postman',
      'Salesforce',
      'Vercel',
    ],
  },
  {
    category: 'Databases',
    icon: <FiDatabase />,
    items: ['SQL', 'Oracle', 'MongoDB', 'Supabase'],
  },
  {
    category: 'Testing & Integration',
    icon: <FiPlay />,
    items: ['JUnit', 'Jest', 'GraphQL'],
  },
  {
    category: 'Soft Skills',
    icon: <FiUsers />,
    items: ['Team Collaboration', 'Problem Solving', 'Time Management'],
  },
  {
    category: 'Operating Systems',
    icon: <FiMonitor />,
    items: ['Windows', 'Linux', 'macOS'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="flexColumn">
        <div className="section-intro">
          <span className="section-kicker">Skills</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-title"
          >
            The tools I reach for when building modern products.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-copy"
          >
            A practical stack shaped by product work, backend logic, UI development, testing, and
            day-to-day collaboration.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-panel group p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/25 sm:p-6 md:p-7"
            >
              <div className="mb-4 flex items-center sm:mb-5">
                <div className="mr-3 rounded-2xl border border-sky-300/14 bg-sky-300/10 p-3 text-xl text-sky-300 sm:text-2xl">
                  {skill.icon}
                </div>
                <h2 className="text-lg font-semibold text-white sm:text-xl">{skill.category}</h2>
              </div>
              <div className="xs:grid-cols-2 grid grid-cols-1 gap-3 sm:gap-4">
                {skill.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + index * 0.05 + itemIndex * 0.02,
                    }}
                    className="flex items-center rounded-2xl border border-white/5 bg-white/[0.03] px-3 py-2 text-sm text-gray-200 transition hover:border-white/10 hover:bg-white/[0.05] sm:text-base"
                  >
                    <span className="mr-2 shrink-0 text-xl">
                      {skillIcons[item]?.endsWith('.svg') || skillIcons[item]?.endsWith('.png') ? (
                        <img
                          src={skillIcons[item]}
                          alt={item + ' logo'}
                          className="inline-block h-5 w-5 align-middle"
                        />
                      ) : (
                        skillIcons[item] || <FiCheckCircle className="text-teal-400" />
                      )}
                    </span>
                    <span className="transition-colors duration-200 group-hover:text-white">{item}</span>
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
