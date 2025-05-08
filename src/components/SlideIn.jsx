import { motion } from 'framer-motion';

const SlideIn = ({ children, delay = 0 }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: '-100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        type: 'spring',
        restDelta: 0.01,
      },
    },
  };

  return (
    <div className="relative">
      <motion.div variants={variants} initial="hidden" animate="visible" className="w-full">
        {children}
      </motion.div>
    </div>
  );
};

export default SlideIn;
