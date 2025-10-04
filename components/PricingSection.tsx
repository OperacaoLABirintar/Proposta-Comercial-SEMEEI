
import React from 'react';
import { PricingPlan } from '../types';
import { pricingPlans } from '../constants';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div
      className="group rounded-xl p-8 border bg-white border-gray-200 shadow-lg transition-all duration-300 w-full flex flex-col justify-center text-center h-full hover:bg-[#BF917F] hover:border-[#BF917F] hover:shadow-2xl hover:scale-105 cursor-pointer"
    >
      <h3 className="font-slab text-2xl font-bold text-[#ff595a] transition-colors duration-300 group-hover:text-white">
        {plan.frequency}
      </h3>
      <div className="mt-4">
        <span className="text-xl font-normal text-gray-400 line-through transition-colors duration-300 group-hover:text-gray-300">
          R$ {plan.originalPrice}
        </span>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-[#BF917F] transition-colors duration-300 group-hover:text-white">
            R$ {plan.discountedPrice}
          </span>
          <span className="ml-1 text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
            /mês
          </span>
        </div>
        <div className="mt-2 text-xs font-bold text-[#ff595a] border border-[#ff595a] rounded-full px-3 py-1 inline-block transition-colors duration-300 group-hover:bg-[#ff595a] group-hover:text-white group-hover:border-white">
          Exclusivo SEMEEI
        </div>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-slab text-3xl sm:text-4xl font-bold text-[#BF917F]">
            Investimento
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Precificação especial para as famílias da rede SEMEEI e benefícios exclusivos para as escolas parceiras.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-screen-xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="flex">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="font-slab text-2xl sm:text-3xl font-bold text-[#ff595a]">
              Benefício Exclusivo para Escolas Parceiras
            </h3>
            <p className="mt-4 text-lg text-gray-600">Além dos valores especiais para as famílias, a parceria oferece:</p>
          </div>
          <div className="mt-10">
            <div className="bg-[#f4f0e8] p-8 rounded-xl shadow-md">
              <h4 className="font-slab text-xl font-bold text-[#BF917F] text-center">Formação para Gestores</h4>
              <p className="mt-2 text-gray-700 text-center">
                As escolas da rede SEMEEI que aderirem à parceria ganham uma capacitação em <strong>Empreendedorismo</strong> ou <strong>Gestão Financeira</strong> para sua equipe, fortalecendo a gestão e agregando valor estratégico ao negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
