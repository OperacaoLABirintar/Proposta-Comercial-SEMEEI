
import React from 'react';

interface StepProps {
    number: number | string;
    title: string;
    children: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, children }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-0 h-10 w-10 bg-[#ff595a] text-white rounded-full flex items-center justify-center font-slab text-xl font-bold">
      {number}
    </div>
    <h3 className="font-slab text-2xl font-bold text-[#BF917F]">{title}</h3>
    <p className="mt-2 text-gray-600">{children}</p>
  </div>
);

const NextStepsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#f4f0e8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-slab text-3xl sm:text-4xl font-bold text-[#ff595a]">
            Próximos Passos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Vamos co-construir esta jornada juntos. Propomos um caminho claro para dar vida a este projeto.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-12 relative">
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-300" aria-hidden="true"></div>
            <Step number="1" title="Alinhamento e Co-criação">
              Uma reunião para aprofundar o alinhamento pedagógico e desenhar a implementação inicial, customizando a proposta para a realidade da SEMEEI.
            </Step>
            <Step number="2" title="Captação e Lançamento">
              Definição do cronograma, seleção dos educadores, criação dos materiais de comunicação e suporte na organização de eventos de lançamento para engajar as famílias desde o primeiro dia.
            </Step>
            <Step number="3" title="Operação e Acompanhamento">
              Onboarding completo para a rede de educadores LABirintar. Suporte técnico e pedagógico contínuo para garantir uma execução fluida e de alta qualidade das atividades.
            </Step>
            <Step number="4" title="Encantamento e Evolução">
              Coleta de feedbacks, análise de dados de engajamento e relatórios de impacto. Planejamento conjunto para a evolução do programa, introduzindo novas experiências e fortalecendo a comunidade.
            </Step>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
