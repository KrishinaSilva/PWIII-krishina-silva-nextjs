'use client';

import React from 'react';
import { FaPython, FaJava, FaReact } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoMongodb } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import { SiCplusplus, SiC } from 'react-icons/si';

export const Tecnologias = () => {
  const technologies = [
    { name: 'Python', icon: FaPython },
    { name: 'Java', icon: FaJava },
    { name: 'C++', icon: SiCplusplus },
    { name: 'C', icon: SiC },
    { name: 'JavaScript', icon: IoLogoJavascript },
    { name: 'React Native', icon: FaReact },
    { name: 'MySQL', icon: GrMysql },
    { name: 'MongoDB', icon: BiLogoMongodb },
  ];

  return (
    <section className="skill text-white py-20" id="tecnologias">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Tecnologias que Utilizo</h2>
        
        {/* Grid de Ícones das Tecnologias */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-items-center max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <div 
              key={tech.name} 
              className="tech-card flex flex-col items-center py-3 px-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              {tech.icon && <tech.icon size={40} className="text-blue-400 mb-1" />}
              <p className="text-lg font-semibold text-center mt-1 leading-tight">{tech.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-300">
            Além das tecnologias acima, também possuo experiência com as seguintes bibliotecas Python: <span className="text-purple-300 font-semibold">
            NumPy, SciPy, Matplotlib, Astropy, Pandas, HDF5, FITS e Programação Orientada a Objetos (POO).
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};