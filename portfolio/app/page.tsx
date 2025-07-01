'use client';

import { Banner } from "./components/Banner";
import { Tecnologias } from "./components/Tecnologias";
import { Projetos } from "./components/Projetos";
import { Contato } from "./components/Contato";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900"> 
      <Banner />
      <Tecnologias />
      <Projetos />
      <Contato />
    </div>
  );
}