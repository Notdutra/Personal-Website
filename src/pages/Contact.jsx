import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="relative z-10">
        {/* Hero Section */}
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
                Have a question or want to work together? Feel free to reach
                out!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Contact Information
                  </h2>
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

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
