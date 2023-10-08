import React from 'react'
import Link from "next/link";

export default function Navbar() {
  return <>
  
  <div className="w-full flex justify-between align-middle items-end p-5 ">
          <div className="w-10 h-10 bg-black"><p className="text-white">IMG</p></div>
          <nav>
            <ul className="flex gap-2">
              <li className=" hover:text-blue-400">
                <Link href="/">Home</Link>
              </li>
              <li className=" hover:text-blue-400">
                <Link href="/about">Sobre</Link>
              </li>
              <li className=" hover:text-blue-400">
                <Link href="/news">Notícias</Link>
              </li>
              <li className=" hover:text-blue-400">
                <Link href="projects">Projetos</Link>
              </li>
              <li className=" hover:text-blue-400">
                <Link href="contact">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
        
  </>
}
