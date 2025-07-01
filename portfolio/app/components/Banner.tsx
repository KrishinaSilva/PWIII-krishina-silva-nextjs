'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const ArrowRightCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 o 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5 0 1 0-.708.708L10.293 7.5z"
    />
  </svg>
);

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = ["Futura Astrofísica"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(150 - Math.random() * 50);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <section className="banner" id="home"> 
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-7/12 text-center md:text-left mb-10 md:mb-0">
            <div className={`${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="tagline">
                Bem-vindo ao Meu Portfólio
              </span>
              <h1> 
                {`Olá! Eu sou a `}
                <span className="text-blue-400">Krishina Borges</span>{" "}
                <span className="txt-rotate" data-period="1000" data-rotate='[ "Futura Astrofísica" ]'>
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Técnica em Desenvolvimento de Sistemas apaixonada por Astronomia. <br />
                <strong className="text-purple-300 font-semibold">
                  Desenvolvo soluções de programação científica
                </strong> para análise de dados astronômicos, simulações computacionais e processamento de imagens do universo.
              </p>
              {/* ÍCONES DE REDES SOCIAIS */}
              <div className="social-icons-banner mt-8 flex justify-center md:justify-start space-x-6">
                <a href="https://github.com/KrishinaSilva" target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-purple-300 transition-colors duration-300">
                  <FaGithub size={35} />
                </a>
                <a href="https://br.linkedin.com/in/krishina-borges-960aa8264" target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-purple-300 transition-colors duration-300">
                  <FaLinkedinIn size={35} />
                </a>
              </div>
              {/* FIM DOS NOVOS ÍCONES */}
            </div>
          </div>
          <div className="w-full md:w-5/12 flex justify-center md:justify-end">
            <div className={`${hasAnimated ? 'animate-zoom-in' : 'opacity-0'}`}>
              <Image
                src="./header-img.svg"
                alt="Header Image"
                width={500}
                height={500}
                priority
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};