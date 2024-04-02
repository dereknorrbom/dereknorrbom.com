import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Derek Norrbom</p>
    </footer>
  );
};

export default Footer;