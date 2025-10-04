
import React, { useState } from 'react';
import { Axe } from '../types';
import { axes } from '../constants';

interface AccordionItemProps {
  axe: Axe;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ axe, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 px-6 text-left"
      >
        <div className="flex items-center">
          <div>
            <h4 className="font-slab text-xl font-bold text-[#BF917F]">{axe.title}</h4>
            <p className="text-gray-500">{axe.subtitle}</p>
          </div>
        </div>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[30rem]' : 'max-h-0'}`}
      >
        <div className="p-6 bg-gray-50">
          <ul className="space-y-4">
            {axe.details.map((detail, index) => (
              <li key={index}>
                <h5 className="font-bold text-[#ff595a]">{detail.title}</h5>
                <p className="text-gray-600">{detail.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const AxesSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#f4f0e8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-slab text-3xl sm:text-4xl font-bold text-[#ff595a]">
            Eixos Pedagógicos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Experiências ricas e diversificadas que integram saberes e constroem sentido, respeitando a cultura da infância.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {axes.map((axe, index) => (
            <AccordionItem
              key={index}
              axe={axe}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AxesSection;
