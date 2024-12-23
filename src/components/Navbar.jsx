import React from 'react';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-4 rounded-lg flex items-center justify-between my-5">
      <div className="text-2xl font-bold text-white hover:text-pink-600 transition-colors md:text-3xl ">My Portfolio</div>
      <ul className="flex space-x-6">
        <li><a href="/" className="text-white hover:text-pink-600 transition-colors">Home</a></li>
        <li><a href="/about" className="text-white hover:text-pink-600 transition-colors">About</a></li>
        <li><a href="/projects" className="text-white hover:text-pink-600 transition-colors">Projects</a></li>
        <li><a href="/skills" className="text-white hover:text-pink-600 transition-colors">Skills</a></li>
        <li><a href="/contact" className="text-white hover:text-pink-600 transition-colors">Contact</a></li>
      </ul>
      <div>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
