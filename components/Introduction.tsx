
import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-slab text-3xl sm:text-4xl font-bold text-[#ff595a]">
            Sobre Nós
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            A LABirintar nasce com a missão de integrar educadores empreendedores, escolas e comunidades em uma rede que valoriza a infância, a cultura e a inovação pedagógica.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Na perspectiva da Educação Integral, propomos organizar o tempo expandido das crianças em eixos pedagógicos, que estruturam experiências ricas, diversificadas e coerentes, permitindo que a escola oferte um currículo extracurricular encantador, estratégico e alinhado ao seu projeto pedagógico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
