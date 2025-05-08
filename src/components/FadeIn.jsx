import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, duration = 0.5, className = '' }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay, duration }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeIn;
