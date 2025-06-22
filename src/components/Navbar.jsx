import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useRef, useState } from 'react';


export default function Navbar() {
    const [isDark, setIsDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    if (shouldUseDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    setIsDark(shouldUseDark);
}, []); 

// Toggle dark/light theme
const toggleTheme = () => {
  const html = document.documentElement;
  const isCurrentlyDark = html.classList.contains('dark');

  if (isCurrentlyDark) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    setIsDark(false);
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setIsDark(true);
  }
};

// toggle hamburger menu for mobile
const toggleMenu = () => {
    setMenuOpen ((prev) => !prev);
};

return (
    <>
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white/5 dark:bg-black/10 backdrop-blur-sm backdrop-saturate-150 shadow-sm border-b border-white/10 dark:border-white/10">
            <div className="text-lg font-bold text-indigo-500 dark:text-indigo-300 font-mono flex items-center animate-fade-in-slow">
                Hello, world!<span className="ml-1 h-5 w-1.5 bg-indigo-500 dark:bg-indigo-300 animate-blink"></span>
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 text-sm">
                <a href="/Whoop" className="relative group text-gray-500 dark:text-white px-3 py-1 rounded hover:bg-indigo-500/20 transition">Whoop ML</a>
                <a href="#projects" className="relative group text-gray-500 dark:text-white px-3 py-1 rounded hover:bg-indigo-500/20 transition">Projects</a>
                <a href="#about" className="relative group text-gray-500 dark:text-white px-3 py-1 rounded hover:bg-indigo-500/20 transition">About</a>
                <a href="#contact" className="relative group text-gray-500 dark:text-white px-3 py-1 rounded hover:bg-indigo-500/20 transition">Contact</a>
                <a href="/Tedra_Resume.pdf" className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600 transition">Resume</a>
                <button
                    onClick={toggleTheme}
                    className="ml-4 p-2 rounded-full hover:bg-indigo-500/20 transition"
                    aria-label="Toggle Dark Mode">
                    {isDark ? (
                        <SunIcon className="h-5 w-5 text-yellow-400" />
                    ) : (
                        <MoonIcon className="h-5 w-5 text-indigo-400" />
                    )}
                </button>
               </div> 

               {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleTheme}
                        className="mr-2 p-2 rounded-full hover:bg-indigo-500/20 transition"
                        aria-label="Toggle Dark Mode">
                        {isDark ? (
                            <SunIcon className="h-5 w-5 text-yellow-400" />
                        ) : (
                            <MoonIcon className="h-5 w-5 text-indigo-400" />
                        )}
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded hover:bg-indigo-500/20 transition md:hidden"
                        aria-label="Toggle Menu"
                        >
                        <div className="w-6 h-6 flex flex-col justify-between items-center">
                            <span
                            className={`h-0.5 w-full bg-indigo-400 rounded transition-transform duration-300 ease-in-out ${
                                menuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                            />
                            <span
                            className={`h-0.5 w-full bg-indigo-400 rounded transition-opacity duration-300 ease-in-out ${
                                menuOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                            />
                            <span
                            className={`h-0.5 w-full bg-indigo-400 rounded transition-transform duration-300 ease-in-out ${
                                menuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                            />
                        </div>
                    </button>
            </div>
        </nav>

        {/* Mobile Nav Dropdown */}
        <div className={`md:hidden overflow-hidden px-6 py-4 space-y-4 bg-white/90 dark:bg-black/30 backdrop-blur-md shadow-md transform transition-all duration-300 ${
            menuOpen ? 'max-h-96 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-95'
            } origin-top flex flex-col gap-2`} style={{ zIndex: 999 }}>
                <a href="/Whoop" className="self-start inline-block px-2 py-1 text-gray-700 dark:text-white hover:bg-indigo-700/20 rounded transition">Whoop ML</a>
                <a href="#projects" className="self-start inline-block px-2 py-1 text-gray-700 dark:text-white hover:bg-indigo-700/20 rounded transition">Projects</a>
                <a href="#about" className="self-start inline-block px-2 py-1 text-gray-700 dark:text-white hover:bg-indigo-700/20 rounded transition">About</a>
                <a href="#contact" className="self-start inline-block px-2 py-1 text-gray-700 dark:text-white hover:bg-indigo-700/20 rounded transition">Contact</a>
                <a href="/Tedra_Resume.pdf" className="self-start inline-block px-2 py-1 text-white font-semibold hover:bg-white/50 rounded transition">Resume</a>
            </div>
        </>
    );
}