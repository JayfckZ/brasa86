'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { images } from '@/data/images'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const items = images.gallery

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const move = useCallback((dir: number) => {
    setActive((i) => (i === null ? i : (i + dir + items.length) % items.length))
  }, [])

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') move(1)
      if (e.key === 'ArrowLeft') move(-1)
    }
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, move])

  return (
    <section id='galeria' className='bg-madeira py-24 md:py-36'>
      <div className='mx-auto max-w-7xl px-5 md:px-8'>
        <Reveal className='mb-14'>
          <Eyebrow>Galeria</Eyebrow>
          <h2 className='font-display text-4xl text-marfim md:text-6xl'>Fogo, mesa e detalhes.</h2>
        </Reveal>

        <div className='grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4'>
          {items.map((img, i) => (
            <button
              key={img.src + i}
              type='button'
              onClick={() => setActive(i)}
              aria-label={`Ampliar: ${img.alt}`}
              className={`group relative overflow-hidden ${img.span}`}
            >
              <img src={img.src} alt={img.alt} loading='lazy' className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105' />
              <span className='absolute inset-0 bg-carvao/0 transition-colors group-hover:bg-carvao/20' aria-hidden='true' />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div role='dialog' aria-modal='true' aria-label='Visualização ampliada' className='fixed inset-0 z-[60] flex items-center justify-center bg-carvao/95 p-4' onClick={() => setActive(null)}>
          <button ref={closeRef} type='button' aria-label='Fechar' onClick={() => setActive(null)} className='absolute right-4 top-4 flex h-12 w-12 items-center justify-center text-marfim hover:text-cobre'>
            <X size={28} />
          </button>
          <button type='button' aria-label='Anterior' onClick={(e) => { e.stopPropagation(); move(-1) }} className='absolute left-2 flex h-12 w-12 items-center justify-center text-marfim hover:text-cobre md:left-6'>
            <ChevronLeft size={32} />
          </button>
          <figure className='max-h-full max-w-5xl' onClick={(e) => e.stopPropagation()}>
            <img src={items[active].src} alt={items[active].alt} className='max-h-[80vh] w-auto max-w-full object-contain' />
            <figcaption className='mt-3 text-center text-sm text-marfim/70'>{items[active].alt}</figcaption>
          </figure>
          <button type='button' aria-label='Próxima' onClick={(e) => { e.stopPropagation(); move(1) }} className='absolute right-2 flex h-12 w-12 items-center justify-center text-marfim hover:text-cobre md:right-6'>
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  )
}
