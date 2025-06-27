'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; /*URLs*/
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); 
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {

  }, [pathname]);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      //links de rolagem na navegação
      const sections = ['home', 'sobremim', 'projetos', 'academico', 'contact']; // IDs das suas seções
      let currentActive = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY + window.innerHeight / 2 >= section.offsetTop) {
          currentActive = sections[i];
          break;
        }
      }
      setActiveLink(currentActive);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavLinkClick = (linkName: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveLink(linkName);

    const targetElement = document.getElementById(linkName);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60, // Ajusta para a altura da navbar fixa
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-purple-900 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo - Clicar no logo leva para o topo da página */}
        <Link href="#home" onClick={(e) => handleNavLinkClick('home', e)}>
          <Image src="/logo.svg" alt="Logo" width={100} height={40} className="h-10" />
        </Link>

        {/* Links de Navegação */}
        <div className="hidden md:flex space-x-8">
          <Link href="#home"
                className={`text-white text-lg hover:text-purple-300 transition-colors ${activeLink === 'home' ? 'font-bold border-b-2 border-purple-300' : ''}`}
                onClick={(e) => handleNavLinkClick('home', e)}>
            Início
          </Link>
          <Link href="#sobremim"
                className={`text-white text-lg hover:text-purple-300 transition-colors ${activeLink === 'sobremim' ? 'font-bold border-b-2 border-purple-300' : ''}`}
                onClick={(e) => handleNavLinkClick('sobremim', e)}>
            Sobre Mim
          </Link>
          <Link href="#projetos"
                className={`text-white text-lg hover:text-purple-300 transition-colors ${activeLink === 'projetos' ? 'font-bold border-b-2 border-purple-300' : ''}`}
                onClick={(e) => handleNavLinkClick('projetos', e)}>
            Projetos
          </Link>
          <Link href="#contact"
                className={`text-white text-lg hover:text-purple-300 transition-colors ${activeLink === 'contact' ? 'font-bold border-b-2 border-purple-300' : ''}`}
                onClick={(e) => handleNavLinkClick('contact', e)}>
            Contato
          </Link>
        </div>

        {/* Botão de Conectar */}
        <div className="hidden md:block">
          <Link href="#contact" onClick={(e) => handleNavLinkClick('contact', e)}>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
              Vamos Conectar
            </button>
          </Link>
        </div>

        {/* Botão de Toggle para Mobile (simples, sem funcionalidade de abrir/fechar o menu ainda) */}
        <div className="md:hidden">
          <button className="text-white text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};