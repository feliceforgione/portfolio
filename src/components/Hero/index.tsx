'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSentence from './AnimatedText';
import heroText from '@/config/hero';

export function Hero() {
  const config = {
    type: 'spring',
    damping: 10,
    stiffness: 80,
  };

  const svgVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 6,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="bg-[linear-gradient(356deg,_rgba(35,41,70,1)_0%,rgba(35,41,70,1)_10%,_rgba(94,118,182,1)_100%)] ">
      <motion.img
        src="/circle-spin.svg"
        className="absolute -left-16 md:-left-74 top-52 md:top-0 lg:bottom-36 w-1/3 2xl:w-1/3 pointer-events-none "
        variants={svgVariants}
        animate="rotate"
      />

      <motion.div
        transition={config}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transitionDuration: '0.2s' }}
        exit={{ x: 0, opacity: 0 }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:h-[calc(100vh-10px)]  lg:mx-16">
          <div className="flex flex-col justify-center items-center mt-10  md:col-span-7">
            <p className="text-3xl md:text-4xl xl:text-5xl uppercase text-gray-300 poppins">
              {heroText.title}
            </p>
            <AnimatedSentence wordsToAnimate={heroText.animatedWords} />
            <p className="px-4 text-lg max-w-xl  md:text-xl text-center self-center my-8 text-neutral-300 ">
              {heroText.about}
            </p>
            <div className="flex flex-row justify-around w-full m-4">
              <Image
                src="/microsoft-certified-ai-engineer-badge.png"
                width={215}
                height={80}
                alt="Profile"
                className=" opacity-60"
              />
              <Image
                src="/oracle-dba-badge.png"
                width={225}
                height={80}
                alt="Profile"
                className="opacity-60"
              />
            </div>
          </div>

          <div className="flex lg:col-span-5 items-center justify-center">
            <Image
              src="/profile.jpg"
              width={500}
              height={500}
              alt="Profile"
              className="w-75 mb-30 lg:mb-0 md:w-90 lg:w-110 rounded-full  border-8 z-10 outline-6 outline-blue-900"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
