'use client';

import React from 'react';
import Link from 'next/link';

export const Contato = () => {
  return (
    <section className="py-20 bg-gray-950 text-white" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Vamos Conectar!</h2>
        <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Se você tem um projeto em mente, uma oportunidade de estágio ou apenas quer trocar ideias sobre tecnologia e astronomia, sinta-se à vontade para entrar em contato.
        </p>
        <div className="flex flex-col items-center space-y-6">
          <Link href="mailto:contatokrishina@gmail.com" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-xl font-semibold transition-colors duration-300 shadow-lg">
            Enviar E-mail
          </Link>
          <div className="flex space-x-6">
            <a href="https://linkedin.com/in/seuperfil" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-500 transition-colors text-2xl">
              {/* Ícone do LinkedIn (ex: usando react-icons, ou um SVG inline) */}
              LinkedIn
            </a>
            <a href="https://github.com/seuperfil" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-500 transition-colors text-2xl">
              {/* Ícone do GitHub */}
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};