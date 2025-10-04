
import React from 'react';
import LabirintarLogo from './LabirintarLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12 text-center text-gray-500">
        <div className="flex justify-center mb-6">
          <LabirintarLogo />
        </div>
        <h3 className="font-slab text-2xl text-[#BF917F] mb-6">
          Vamos juntos dar um novo sentido ao tempo?
        </h3>
        <a
          href="https://www.labirintar.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ff595a] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#ffa400] transition-all duration-300 transform hover:scale-105 text-lg"
        >
          Visite nosso site: www.labirintar.com.br
        </a>
        <p className="mt-8 text-sm">
          &copy; {new Date().getFullYear()} LABirintar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
