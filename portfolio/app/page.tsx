'use client';

import { Banner } from "./components/Banner";
import { SobreMim } from "./components/SobreMim";
import { Projetos } from "./components/Projetos";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900"> 
      <Banner />
      <SobreMim />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}