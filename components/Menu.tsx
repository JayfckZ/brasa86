'use client'

import { useState } from 'react'
import { dishes, fullMenu } from '@/data/menu'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

export default function Menu() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id='cardapio' className='bg-madeira py-24 md:py-36'>
      <div className='mx-auto max-w-7xl px-5 md:px-8'>
        <Reveal className='mb-16 max-w-2xl md:mb-24'>
          <Eyebrow>Cardápio</Eyebrow>
          <h2 className='font-display text-4xl text-marfim md:text-6xl'>Seleção da casa.</h2>
          <p className='mt-5 text-marfim/70'>Cortes especiais, preparados com precisão e respeito à tradição.</p>
        </Reveal>

        <div className='space-y-20 md:space-y-28'>
          {dishes.map((dish, i) => (
            <Reveal key={dish.name}>
              <article className='grid items-center gap-6 md:grid-cols-12 md:gap-10'>
                <div className={`overflow-hidden md:col-span-7 ${i % 2 ? 'md:order-2 md:col-start-6' : ''}`}>
                  <img src={dish.image.src} alt={dish.image.alt} loading='lazy' className='aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] hover:scale-105' />
                </div>
                <div className={`md:col-span-4 ${i % 2 ? 'md:order-1 md:col-start-1' : 'md:col-start-9'}`}>
                  <span className='font-display text-sm italic text-cobre'>0{i + 1}</span>
                  <h3 className='mt-2 font-display text-3xl text-marfim md:text-4xl'>{dish.name}</h3>
                  <p className='mt-3 max-w-xs text-marfim/70'>{dish.description}</p>
                  <p className='mt-5 border-t border-cobre/40 pt-4 font-display text-2xl text-champagne'>{dish.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className='mt-20 text-center'>
          <button
            type='button'
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            aria-controls='cardapio-completo'
            className='min-h-12 border border-cobre px-8 text-sm font-semibold text-cobre transition-colors hover:bg-cobre hover:text-carvao'
          >
            {showAll ? 'Ocultar cardápio completo' : 'Ver cardápio completo'}
          </button>
        </div>

        {showAll && (
          <div id='cardapio-completo' className='mx-auto mt-14 grid max-w-4xl gap-12 md:grid-cols-2'>
            {fullMenu.map((g) => (
              <div key={g.group}>
                <h3 className='mb-4 font-display text-2xl text-champagne'>{g.group}</h3>
                <ul className='divide-y divide-white/10 border-y border-white/10'>
                  {g.items.map((it) => (
                    <li key={it.name} className='flex justify-between gap-4 py-3 text-sm'>
                      <span className='text-marfim'>{it.name}</span>
                      <span className='text-marfim/60'>{it.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className='text-xs text-marfim/40 md:col-span-2'>Preços fictícios, apenas para fins demonstrativos.</p>
          </div>
        )}
      </div>
    </section>
  )
}
