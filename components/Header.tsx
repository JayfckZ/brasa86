'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, site } from '@/data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'border-b border-white/10 bg-carvao/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8'>
        <a href='#inicio' className='leading-none' onClick={() => setOpen(false)} aria-label='BRASA 86, ir para o início'>
          <span className='block font-display text-2xl tracking-wide text-marfim'>BRASA 86</span>
          <span className='mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-cobre'>{site.tagline.toUpperCase()}</span>
        </a>

        <nav aria-label='Principal' className='hidden items-center gap-9 lg:flex'>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className='text-sm text-marfim/80 transition-colors hover:text-champagne'>
              {item.label}
            </a>
          ))}
          <a href='#reservas' className='border border-cobre bg-cobre px-5 py-2.5 text-sm font-semibold text-carvao transition-colors hover:bg-transparent hover:text-cobre'>
            Reservar mesa
          </a>
        </nav>

        <button
          type='button'
          className='flex h-11 w-11 items-center justify-center text-marfim lg:hidden'
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls='menu-mobile'
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <nav
        id='menu-mobile'
        aria-label='Menu mobile'
        className={`overflow-hidden px-5 transition-all duration-500 lg:hidden ${open ? 'max-h-[28rem] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
        hidden={!open}
      >
        <ul className='divide-y divide-white/10'>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)} className='block py-4 font-display text-xl text-marfim'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href='#reservas' onClick={() => setOpen(false)} className='mt-6 block bg-cobre py-4 text-center text-sm font-semibold text-carvao'>
          Reservar mesa
        </a>
      </nav>
    </header>
  )
}
