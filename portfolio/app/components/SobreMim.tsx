// app/components/SobreMim.tsx
'use client'; // Se for usar qualquer hook React ou interatividade

import React from 'react';

export const SobreMim = () => {
  return (
    <section className="py-20 bg-gray-950 text-white" id="sobremim">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Desde que me aventurei no universo da programação, sou movido(a) pela curiosidade de desvendar os mistérios do código e construir soluções que impactam. Minha jornada me levou a explorar diversas tecnologias e metodologias, sempre em busca do próximo desafio.
            </p>
            <p className="text-lg leading-relaxed">
              Sou apaixonado(a) por transformar ideias complexas em interfaces intuitivas e funcionais, com um olhar atento à experiência do usuário e à performance. Minha meta é continuar aprendendo e contribuindo para projetos inovadores.
            </p>
          </div>
          <div className="flex justify-center">
            {/* Aqui você pode adicionar uma imagem pessoal ou uma ilustração relacionada a você */}
            <img src="/placeholder-profile.svg" alt="Ilustração Pessoal" className="rounded-full w-64 h-64 object-cover shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};