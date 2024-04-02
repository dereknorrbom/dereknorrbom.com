import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark-green text-accent-neutral-green p-4 text-center">
      <p className="text-sm lg:text-base">
        © {currentYear} Derek Norrbom
      </p>
    </footer>
  );
};

export default Footer;