"use client";
import React, { useState, useEffect } from 'react';
import Nav from './Nav';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary-dark-green text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Derek Norrbom</h1>
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Button SVG omitted for brevity */}
        </button>
        {/* Conditional rendering of the Nav component based on the state */}
        {isMobileMenuOpen && <Nav />}
        <div className="lg:block">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
