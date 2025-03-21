'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import navLinks from '@/config/links';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { NavMenu } from './NavMenu';

export const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  // Get scroll position
  const { scrollY } = useScroll();

  const bgColor = useTransform(
    scrollY,
    [0, 400, 800],
    ['transparent', `rgba(94,118,182,1)`, '#232946']
  );

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 100) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div
      className={`mx-auto w-full lg:fixed z-30 top-0 left-0 p-2 lg:px-8 lg:h-[90px] bgColor shadow-2xl ${
        hasShadow ? 'shadow-2xl' : 'shadow-none'
      } `}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <nav className="block lg:flex justify-between items-center">
        <div className="flex justify-between ">
          <div>
            <Link href="/">
              <Logo className="fill-yellow-500 transition-all transform hover:scale-75 w-55 lg:w-full" />
            </Link>
          </div>
          <button
            type="button"
            className="text-yellow-500 focus:outline-none  lg:hidden"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <Menu size={18} />
          </button>
        </div>
        <NavMenu navLinks={navLinks} showMobileNav={showMobileNav} />
      </nav>
    </motion.div>
  );
};
