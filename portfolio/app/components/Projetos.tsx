// app/components/Projetos.tsx
'use client';

import React from 'react';
import Image from 'next/image';

export const Projetos = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Gerenciamento de Estrelas",
      description: "Um aplicativo web para catalogar e visualizar dados de estrelas e constelações.",
      image: "/project-star.svg", // Substitua por imagens reais dos seus projetos
      link: "#", // Link para o projeto online
      repo: "#" // Link para o repositório no GitHub
    },
    {
      id: 2,
      title: "Simulador de Órbitas Planetárias",
      description: "Ferramenta interativa para simular o movimento de corpos celestes no espaço.",
      image: "/project-orbit.svg",
      link: "#",
      repo: "#"
    },
    {
        id: 3,
        title: "Calculadora Astronômica",
        description: "Uma calculadora que realiza cálculos astrodinâmicos básicos e conversões de unidades.",
        image: "/project-calc.svg",
        link: "#",
        repo: "#"
      },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" id="projetos">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Meus Projetos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
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