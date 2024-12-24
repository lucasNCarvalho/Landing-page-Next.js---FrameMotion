'use client'

import CheckIcon from '@/assets/check.svg'
import { twMerge } from 'tailwind-merge'
import {motion} from 'framer-motion'

const pricingTiers = [
  {
    title: "Grátis",
    monthlyPrice: 0,
    buttonText: "Comece gratuitamente",
    popular: false,
    inverse: false,
    features: [
      "Até 5 membros no projeto",
      "Tarefas e projetos ilimitados",
      "2GB de armazenamento",
      "Integrações",
      "Suporte básico",
    ],
  },
  {
    title: "Profissional",
    monthlyPrice: 9,
    buttonText: "Assine agora",
    popular: true,
    inverse: true,
    features: [
      "Até 50 membros no projeto",
      "Tarefas e projetos ilimitados",
      "50GB de armazenamento",
      "Integrações",
      "Suporte prioritário",
      "Suporte avançado",
      "Suporte para exportação",
    ],
  },
  {
    title: "Empresarial",
    monthlyPrice: 19,
    buttonText: "Assine agora",
    popular: false,
    inverse: false,
    features: [
      "Até 5 membros no projeto",
      "Tarefas e projetos ilimitados",
      "200GB de armazenamento",
      "Integrações",
      "Gerente de conta dedicado",
      "Campos personalizados",
      "Análises avançadas",
      "Capacidades de exportação",
      "Acesso à API",
      "Recursos de segurança avançados",
    ],
  },
];


export const Pricing = () => {
  

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className='section-heading'>
          <h2 className="section-title ">Preço</h2>
          <p className="section-description mt-5">Grátis para sempre, atualiza para tarefas ilimitadas, melhor segurança, e recursos exclusivos</p>
        </div>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, features, inverse }) => (
            <div className={twMerge('card', inverse === true && 'border-black bg-black text-white')} key={title}>
              <div className='flex justify-between'>
                <h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && 'text-white/60')}>{title}</h3>
                {popular && (
                  <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                    <span className="bg-gradient-to-r from-[#DD7DDF] via-[#E1CD86] to-[#3BFFFF] text-transparent bg-clip-text font-medium">
                      Popular
                    </span>
                  </div>
                )}
              </div>
              <div className='flex items-baseline gap-1 mt-[30px]'>
                <span className='text-4xl font-bold tracking-tighter leading-none'>{monthlyPrice}</span>
                <span className='tracking-tight font-bold text-black/50'>/mês</span>
              </div>
              <button className={twMerge('btn btn-primary w-full mt-[30px]', inverse === true && 'bg-white text-black')}>{buttonText}</button>
              <ul className='flex flex-col gap-5 mt-8'>
                {features.map(feature => (
                  <li key={feature} className='text-sm flex items-center gap-4'>
                    <CheckIcon className="h-6 w-6" />
                    <span >{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};
