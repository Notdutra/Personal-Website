import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
