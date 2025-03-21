import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedSentence = ({ wordsToAnimate }: { wordsToAnimate: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Change word every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % wordsToAnimate.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [wordsToAnimate.length]);

  // Animation variants
  const wordVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="my-5 poppins">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentWordIndex}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-4xl md:text-4xl xl:text-6xl uppercase  font-bold bg-gradient-to-r from-yellow-400 via-amber-600 to-amber-300 bg-clip-text text-transparent"
        >
          {wordsToAnimate[currentWordIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedSentence;
