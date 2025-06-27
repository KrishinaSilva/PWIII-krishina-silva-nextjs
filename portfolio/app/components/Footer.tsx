// app/components/Footer.tsx
'use client';

import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()}. Todos os direitos reservados a Krishina Borges.</p>
        <p className="text-sm mt-2">Feito com <span className="text-red-500">♥</span> e Next.js.</p>
      </div>
    </footer>
  );
};