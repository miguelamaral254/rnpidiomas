"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
<<<<<<< HEAD
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="md:flex justify-between items-center p-5 relative">
      <img
        src={require("../src/images/359464103_757245303077001_5758154635758079026_n.jpg")}
        alt="icon"
        className="w-10"
      />
      <div className="md:hidden absolute top-0 right-0 p-5">
        {showMenu ? (
          <button
            className="text-blue-400 focus:outline-none"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <button
            className="text-blue-400 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </div>
      <nav
        className={`md:flex ${showMenu ? 'block' : 'hidden'} absolute top-0 right-0 bg-white p-4`}
      >
        <ul className="md:flex gap-3">
          <li className="hover:text-blue-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/about">Sobre</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/news">Notícias</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/projects">Projetos</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </div>

    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-4 relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold text-xl"><Image src={require("../src/images/359464103_757245303077001_5758154635758079026_n.jpg")} alt="logo" className="w-1/3 bg-blend-overlay"/></div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`lg:hidden absolute right-0 bg-black text-white w-40 space-y-0 transform ${
              isOpen
                ? "translate-y-1/2 opacity-100 transition-all duration-300 ease-out"
                : "translate-y-0 opacity-0 transition-all duration-300 ease-in"
            } ${isOpen ? "top-0" : "top-1/2"}`}
          >
            <li className="hover:text-blue-400">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/about">Sobre</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/news">Notícias</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/projects">Projetos</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
          <ul className="lg:flex space-x-4 hidden lg:block">
            <li className="hover:text-blue-400">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/about">Sobre</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/news">Notícias</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/projects">Projetos</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
