
import React from 'react';
import { imageBase64 } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#F4F0E8] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${imageBase64})` }}
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="font-slab text-4xl md:text-6xl font-bold text-black">
          SEMEEI & <span className="text-[#ffa400]">LABirintar</span>
        </h1>
        <p className="mt-6 font-sans text-2xl md:text-3xl text-[#ff595a] tracking-wide">
          Educar é dar sentido ao tempo
        </p>
        <div className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
          <p className="mb-4">
            Uma proposta exclusiva para a SEMEEI para co-criarmos uma experiência extracurricular memorável para 2026, impulsionada pelo ecossistema LABirintar.
          </p>
          <div className="inline-block text-left p-4 rounded-lg bg-[#BF917F]">
            <p className="text-white"><strong>Faixa Etária:</strong> 3 e 4 anos.</p>
            <p className="text-white"><strong>Grupos:</strong> de até 12 crianças.</p>
            <p className="text-white"><strong>Duração:</strong> 2 horas de experiências por dia.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
