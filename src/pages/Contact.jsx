import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // success or error message
  const [isSubmitting, setIsSubmitting] = useState(false); // loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);
    const data = {
      access_key: 'a2a2c712-9eea-44fd-97c5-28f2cbf0abe6',
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('Your message has been sent!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact">
      <div className="flexColumn">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="heading-primary"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-2xl border border-white/10 bg-[#1a1f2b]/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-2xl sm:p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-200 focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/50"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-200 focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/50"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-200">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-200 focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/50"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-200 focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/50"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:from-teal-600 hover:to-blue-600 hover:shadow-lg sm:py-4 sm:px-8 ${isSubmitting ? 'cursor-not-allowed opacity-60' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
            {status && <div className="mt-4 text-center text-sm text-teal-400">{status}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
