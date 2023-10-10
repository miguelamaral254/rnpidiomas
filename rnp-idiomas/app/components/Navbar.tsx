"use client";
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="md:flex justify-between items-center p-5 relative">
      <img
        src={require("../src/images/359464103_757245303077001_5758154635758079026_n.jpg")}
        alt="icon"
        className="w-10"
      />
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
        {showMenu && (
          <button
            className="md:hidden text-blue-400 absolute top-3 right-3"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </nav>
      {!showMenu && (
        <div className="md:hidden absolute top-0 right-0 p-5">
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
        </div>
      )}
    </div>
  );
}

export default Navbar;
