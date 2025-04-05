import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="text-primary text-xl">
              <FiMail />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">
                arthurdutra@live.ca
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-primary text-xl">
              <FiMapPin />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Alberta, Canada
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">Social Links</h2>
        <div className="flex gap-6">
          <a
            href="https://github.com/Notdutra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/arthursdutra/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200"
          >
            <FiLinkedin size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
