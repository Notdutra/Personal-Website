import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
    <section id="contact">
      <div className="flex flex-col justify-center mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-16 min-h-screen container">
        <div className="mx-auto mb-8 sm:mb-12 max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 font-bold text-white text-4xl md:text-5xl heading-responsive">
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-[#1a1f2b]/80 shadow-xl hover:shadow-2xl backdrop-blur-sm p-6 sm:p-8 md:p-10 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-200 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/5 backdrop-blur-sm px-4 py-3 border border-white/10 focus:border-teal-400/70 rounded-lg focus:ring-2 focus:ring-teal-400/50 w-full text-white transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-200 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 backdrop-blur-sm px-4 py-3 border border-white/10 focus:border-teal-400/70 rounded-lg focus:ring-2 focus:ring-teal-400/50 w-full text-white transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 font-medium text-gray-200 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/5 backdrop-blur-sm px-4 py-3 border border-white/10 focus:border-teal-400/70 rounded-lg focus:ring-2 focus:ring-teal-400/50 w-full text-white transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-200 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="bg-white/5 backdrop-blur-sm px-4 py-3 border border-white/10 focus:border-teal-400/70 rounded-lg focus:ring-2 focus:ring-teal-400/50 w-full text-white transition-all duration-200"
                  required></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 hover:from-teal-600 to-blue-500 hover:to-blue-600 shadow-md hover:shadow-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg w-full font-medium text-white transition-all duration-300">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
