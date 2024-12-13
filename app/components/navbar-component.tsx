    "use client";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
      {/* Ícone GIF no lado esquerdo */}
      <div className="flex items-center">
        <img
          src="assets/rocket.gif"
          alt="Logo Gif"
          className="w-10 h-10 mr-4"
        />
      </div>
  
      {/* Botão para abrir/fechar menu (em telas menores) */}
      <button
        className="text-black md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
  
      {/* Links da Navbar */}
      <ul
        className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 md:flex md:space-x-6 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <li className="text-center md:text-left">
          <a href="#home" className="block py-2 px-4 text-black hover:text-blue-500">
            Home
          </a>
        </li>
        <li className="text-center md:text-left">
          <a href="#about" className="block py-2 px-4 text-black hover:text-blue-500">
            Sobre
          </a>
        </li>
        <li className="text-center md:text-left">
          <a href="#projects" className="block py-2 px-4 text-black hover:text-blue-500">
            Projetos
          </a>
        </li>
      </ul>
    </div>
  </nav>
  );
}  