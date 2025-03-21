'use client';
import Link from 'next/link';
import Underline from '@/app/images/Nav_Actives';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type NavItemProps = {
  title: string;
  href: string;
  currentPage: string;
};

type NavMenuProps = {
  navLinks: { title: string; href: string }[];
  showMobileNav: boolean;
};

export const NavMenu = ({ navLinks, showMobileNav }: NavMenuProps) => {
  const [currentPage, setCurrentPage] = useState('');
  const [hash, setHash] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPage(hash ? `${pathname}${hash}` : pathname);
  }, [hash, pathname]);

  useEffect(() => {
    // listens for changes in hash (anchor links)
    const onHashChanged = () => setHash(window.location.hash);
    const { pushState, replaceState } = window.history;
    window.history.pushState = function (...args) {
      pushState.apply(window.history, args);
      setTimeout(() => setHash(window.location.hash));
    };
    window.history.replaceState = function (...args) {
      replaceState.apply(window.history, args);
      setTimeout(() => setHash(window.location.hash));
    };
    window.addEventListener('hashchange', onHashChanged);
    return () => {
      window.removeEventListener('hashchange', onHashChanged);
    };
  }, []);

  return (
    <div
      className={
        showMobileNav
          ? 'block mt-2  transition-all bgBlue opacity-95'
          : 'hidden lg:block'
      }
    >
      <ul className=" lg:flex lg:flex-row  md:border-none poppins">
        {navLinks.map((link) => {
          return (
            <NavItem
              title={link.title}
              href={link.href}
              key={link.href}
              currentPage={currentPage}
            />
          );
        })}
      </ul>
    </div>
  );
};

const NavItem = ({ href, title, currentPage }: NavItemProps) => {
  const isCurrentPage = currentPage === href;
  return (
    <Link href={href}>
      <li
        className={`
          px-5 py-2 pt-1 lg:pt-4 lg:px-4 lg:text-center
          ${isCurrentPage ? 'border-l-4 border-yellow-500 lg:border-none' : ''} 
          `}
      >
        <p className="transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-bold md:hover:text-violet">
          {title}
        </p>
        <Underline
          className={`
            hidden lg:block lg:opacity-0
            ${isCurrentPage && 'lg:opacity-100 md:w-20 fill-yellow-500'}
            `}
        />
      </li>
    </Link>
  );
};
