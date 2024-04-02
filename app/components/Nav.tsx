import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuButton } from './MenuButton'; // Ensure this import path is correct

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarVariants = {
    open: { opacity: 1, x: 0, width: "100vw", height: "100vh" },
    closed: { opacity: 0, x: '-100%', width: "0", height: "0" },
  };

  const navLinks = ['home', 'about', 'resume', 'contact'].map((item) => (
    <li key={item} className="mr-4">
      <Link href={`/${item === 'home' ? '' : item}`}>
        <motion.div whileHover={{ scale: 1.05 }} className="text-white hover:text-accent-lighter-green cursor-pointer lg:text-responsive">
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </motion.div>
      </Link>
    </li>
  ));

  // Adjust the mobile menu to start right below the header
  const headerHeight = "4rem"; // Adjust this value to match your header's height

  useEffect(() => {
    // Toggle the 'no-scroll' class on the html element based on mobile menu state
    const html = document.documentElement;

    if (isMobileMenuOpen) {
      html.classList.add('no-scroll');
    } else {
      html.classList.remove('no-scroll');
    }

    // Clean up the class when the component unmounts
    return () => {
      html.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="z-50 lg:flex">
        {/* MenuButton for toggling mobile menu */}
        <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="block lg:hidden cursor-pointer z-50">
          <MenuButton isOpen={isMobileMenuOpen} color="white" />
        </div>
        {/* Desktop menu */}
        <div className="hidden lg:flex">
          <ul className="flex">
            {navLinks}
          </ul>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 left-0 bg-primary-dark-green flex flex-col items-center lg:hidden z-40"
            style={{ top: headerHeight, height: `calc(100vh - ${headerHeight})` }} // Dynamically set the top and height
          >
            <ul className="w-full text-center text-responsive">
              {navLinks}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
