import React from 'react'
import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
  return <>
  
  <div className="flex justify-between align-middle items-end p-5 ">
          <Image src={require("../src/images/359464103_757245303077001_5758154635758079026_n.jpg")} alt='icon'
          className='w-10' />
          <nav>
            <ul className="flex gap-3">
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
