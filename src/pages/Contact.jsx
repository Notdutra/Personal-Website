'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [showToast, setShowToast] = useState(false);

  const getFieldError = (field) => {
    const value = formData[field];
    if (field === 'name') {
      if (!value.trim() || value.trim().length < 2)
        return 'Please enter your name (at least 2 characters).';
    }
    if (field === 'subject') {
      const trimmed = value.trim();
      if (!trimmed) return 'Please enter a subject (at least 5 characters).';
      if (trimmed.length < 5)
        return `Subject is too short (${5 - trimmed.length} more character${5 - trimmed.length === 1 ? '' : 's'} needed).`;
    }
    if (field === 'message') {
      const trimmed = value.trim();
      if (!trimmed) return 'Please enter a message (at least 30 characters).';
      if (trimmed.length < 30)
        return `Message is too short (${30 - trimmed.length} more character${30 - trimmed.length === 1 ? '' : 's'} needed).`;
    }
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(value.trim())) return 'Please enter a valid email address.';
    }
    return '';
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validateForm = () => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus('Please enter your name (at least 2 characters).');
      return false;
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      setStatus('Please enter a subject (at least 3 characters).');
      return false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 30) {
      setStatus('Please enter a message (at least 30 characters).');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!validateForm()) return;
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
        setShowToast(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({ name: false, email: false, subject: false, message: false });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

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
                  onBlur={handleBlur}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-200 focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/50"
                  disabled={isSubmitting}
                />
                {touched.name && getFieldError('name') && (
                  <div className="mt-1 text-sm text-teal-400">{getFieldError('name')}</div>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-200 focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/50"
                  disabled={isSubmitting}
                />
                {touched.email && getFieldError('email') && (
                  <div className="mt-1 text-sm text-teal-400">{getFieldError('email')}</div>
                )}
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
                  onBlur={handleBlur}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-200 focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/50"
                  disabled={isSubmitting}
                />
                {touched.subject && getFieldError('subject') && (
                  <div className="mt-1 text-sm text-teal-400">{getFieldError('subject')}</div>
                )}
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
                  onBlur={handleBlur}
                  className="h-24 w-full resize-y rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-200 focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/50 md:h-28"
                  disabled={isSubmitting}
                ></textarea>
                {touched.message && getFieldError('message') && (
                  <div className="mt-1 text-sm text-teal-400">{getFieldError('message')}</div>
                )}
              </div>
              <button
                type="submit"
                className={`w-full rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:from-teal-600 hover:to-blue-600 hover:shadow-lg sm:px-8 sm:py-4 ${isSubmitting ? 'cursor-not-allowed opacity-60' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="size-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-x-0 bottom-10 z-50 mx-auto w-fit rounded-lg bg-teal-600 px-6 py-3 text-white shadow-lg"
            >
              Message sent successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
