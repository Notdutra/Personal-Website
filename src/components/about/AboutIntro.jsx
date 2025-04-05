import { motion } from "framer-motion";

const AboutIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto text-center mb-16"
    >
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        I started my journey in software engineering at <strong>PUCRS</strong>{" "}
        in Brazil, diving into <strong>discrete mathematics</strong>,{" "}
        <strong>calculus</strong>, <strong>algorithms</strong>,{" "}
        <strong>databases</strong>, <strong>logic</strong> and{" "}
        <strong>computational theory</strong>. These studies built a strong
        analytical mindset and gave me a deep understanding of how software
        works at a fundamental level. Along the way, I explored{" "}
        <strong>software development methodologies</strong>,{" "}
        <strong>version control</strong>, and{" "}
        <strong>programming paradigms</strong>, laying a solid foundation in
        both theory and practice.
        <br />
        <br />
        During my internships at <strong>Dell Technologies</strong> and{" "}
        <strong>Panvel</strong>, I gained hands-on experience across different
        areas of development. At Dell, I started by contributing to small
        projects using <strong>C#</strong>, <strong>.NET</strong>,{" "}
        <strong>Dart</strong>, <strong>Flutter</strong>, and{" "}
        <strong>Python</strong>. I focused on building tools for automation and
        text analysis that streamlined workflows and provided valuable insights
        into enterprise application development. This experience helped me
        navigate complex codebases and sharpen my documentation practices.
        Later, I joined a team primarily working with{" "}
        <strong>Salesforce</strong> and <strong>Apex</strong>, contributing to
        robust internal business solutions.
        <br /> <br />
        At Panvel, I contributed to the online marketplace platform using{" "}
        <strong>Java</strong> and <strong>Spring Boot</strong>. My tasks
        included developing <strong>RESTful endpoints</strong> for product
        search and filtering, enhancing the user experience. Working within the{" "}
        <strong>MVC architecture</strong>, I collaborated on creating{" "}
        <strong>controllers</strong> to handle HTTP requests,{" "}
        <strong>services</strong> for business logic, and{" "}
        <strong>repositories</strong> for data access, ensuring a clean
        separation of concerns. Additionally, I engaged in{" "}
        <strong>cross-functional collaborations</strong>, coordinating with
        various teams to integrate services effectively. Writing{" "}
        <strong>unit tests</strong> for my code was a key part of my workflow,
        helping maintain code quality and reliability.
        <br />
        <br />
        Since then, I&apos;ve been actively expanding my skills in full-stack
        web development. I&apos;ve built a solid foundation in core web
        technologies like <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
        <strong>JavaScript</strong>, and I&apos;m diving deeper into modern
        frameworks like <strong>React</strong>. My personal website project
        serves as a dynamic space to showcase my progress while I explore both
        front-end and back-end technologies. I&apos;m focused on creating a
        seamless user experience and laying the groundwork for future features
        like user authentication, database integration, and deployment. As I
        continue to learn and grow, I&apos;m excited to tackle more complex
        challenges, including cloud services and artificial intelligence in the
        future. Let&apos;s connect!
      </p>
    </motion.div>
  );
};

export default AboutIntro;
