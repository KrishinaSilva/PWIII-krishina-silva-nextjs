// app/components/Projetos.tsx
'use client';

import React from 'react';
import Image from 'next/image';

export const Projetos = () => {
  const projects = [
        {
      id: 1,
      title: "RedeMãeAutista",
      description: "Uma aplicação mobile desenvolvida para dar suporte a mães e responsáveis por crianças autistas.",
      image: "/logo.png",
      link: "https://www.google.com",
      repo: "https://github.com/leticiaglendy/RedeMaeAutista"
    },
    {
      id: 2,
      title: "Sistema de Gerenciamento de Estrelas",
      description: "Um aplicativo web feito para catalogar e visualizar dados de estrelas e constelações.",
      image: "/em-breve.jpg",
      link: "https://www.google.com",
      repo: "https://github.com/SEU_USUARIO/SEU_REPOSITORIO_ESTRELAS"
    },
    {
      id: 3,
      title: "Simulador de Órbitas Planetárias",
      description: "Ferramenta interativa desenvolvida para simular o movimento de corpos celestes no espaço.",
      image: "/em-breve.jpg",
      link: "https://www.google.com",
      repo: "https://github.com/SEU_USUARIO/SEU_REPOSITORIO_CALCULADORA"
    },
    {
        id: 4,
        title: "Calculadora Astronômica",
        description: "Uma calculadora que realiza cálculos astrodinâmicos básicos e conversões de unidades.",
        image: "/em-breve.jpg",
        link: "https://www.google.com",
        repo: "https://github.com/SEU_USUARIO/SEU_REPOSITORIO_CALCULADORA"
      },
  ];

  return (
    <section className="project" id="projetos">
      <div className="container mx-auto px-6">
        <h2>Meus Projetos</h2>
        <p>
            Aqui você encontrará uma seleção dos meus trabalhos mais recentes, que demonstram minhas habilidades e minha paixão pelo desenvolvimento web. Cada projeto é uma jornada de aprendizado e inovação.
        </p>
        
        <div className="project-cards-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="proj-imgbx bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">Ver Projeto</a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};