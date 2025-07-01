'use client';

import React, { useState } from 'react';

export const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', { name, email, message });
    alert('Mensagem enviada! (Isso é um alerta de demonstração, substitua por um modal customizado)');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact-footer" id="contact">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center flex-grow">
        <h2 className="contact-form-title text-3xl font-bold text-center mb-8">Fale Comigo</h2>
        <p className="contact-intro-text text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-center">
          Se você tem um projeto em mente, uma oportunidade de estágio ou apenas quer trocar ideias sobre tecnologia e astronomia, sinta-se à vontade para entrar em contato.
        </p>

        {/* Formulário */}
        <div className="contact-form-container rounded-lg shadow-xl max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email para contato*"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Mensagem"
              rows={5}
              className="contact-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="contact-submit-button">
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-info">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()}. Todos os direitos reservados a Krishina Borges. Feito com <span className="text-red-500">♥</span> e Next.js.</p>
        </div>
      </div>
    </section>
  );
};