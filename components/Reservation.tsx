'use client'

import { useState } from 'react'
import { site } from '@/data/site'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

type Errors = Partial<Record<'name' | 'phone' | 'date' | 'time' | 'people', string>>

const times = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30']
const field = 'w-full border border-white/20 bg-transparent px-4 py-3.5 text-marfim placeholder:text-marfim/30 focus:border-cobre focus:outline-none'

export default function Reservation() {
  const [errors, setErrors] = useState<Errors>({})
  const today = new Date().toISOString().split('T')[0]

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const v = (k: string) => String(f.get(k) ?? '').trim()
    const next: Errors = {}

    if (v('name').length < 3) next.name = 'Informe seu nome.'
    if (v('phone').replace(/\D/g, '').length < 10) next.phone = 'Informe um telefone com DDD.'
    if (!v('date')) next.date = 'Escolha uma data.'
    else if (v('date') < today) next.date = 'Escolha uma data futura.'
    if (!v('time')) next.time = 'Escolha um horário.'
    if (!v('people')) next.people = 'Informe a quantidade.'
    setErrors(next)
    if (Object.keys(next).length) return

    const [y, m, d] = v('date').split('-')
    const text = [
      'Olá! Gostaria de solicitar uma reserva na BRASA 86.',
      `Nome: ${v('name')}`,
      `Telefone: ${v('phone')}`,
      `Data: ${d}/${m}/${y}`,
      `Horário: ${v('time')}`,
      `Pessoas: ${v('people')}`,
      v('notes') ? `Observações: ${v('notes')}` : '',
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  const err = (k: keyof Errors) =>
    errors[k] ? <p id={`${k}-err`} role='alert' className='mt-1 text-xs text-cobre'>{errors[k]}</p> : null
  const aria = (k: keyof Errors) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })

  return (
    <section id='reservas' className='border-y border-cobre/30 bg-gradient-to-b from-carvao to-madeira py-24 md:py-36'>
      <div className='mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-8'>
        <Reveal className='md:col-span-5'>
          <Eyebrow>Reservas</Eyebrow>
          <h2 className='font-display text-4xl leading-tight text-marfim md:text-5xl'>Sua próxima experiência começa com uma reserva.</h2>
          <p className='mt-6 text-sm leading-relaxed text-marfim/60'>
            Ao enviar, abriremos o WhatsApp com sua solicitação. A reserva só é confirmada após a resposta do restaurante. Número demonstrativo (placeholder).
          </p>
        </Reveal>

        <Reveal className='md:col-span-6 md:col-start-7' delay={0.1}>
          <form onSubmit={onSubmit} noValidate className='grid gap-5 sm:grid-cols-2'>
            <div className='sm:col-span-2'>
              <label htmlFor='name' className='mb-2 block text-xs uppercase tracking-widest text-champagne'>Nome</label>
              <input id='name' name='name' type='text' autoComplete='name' className={field} {...aria('name')} />
              {err('name')}
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='phone' className='mb-2 block text-xs uppercase tracking-widest text-champagne'>Telefone</label>
              <input id='phone' name='phone' type='tel' autoComplete='tel' placeholder='(21) 90000-0000' className={field} {...aria('phone')} />
              {err('phone')}
            </div>
            <div>
              <label htmlFor='date' className='mb-2 block text-xs uppercase tracking-widest text-champagne'>Data</label>
              <input id='date' name='date' type='date' min={today} className={`${field} [color-scheme:dark]`} {...aria('date')} />
              {err('date')}
            </div>
            <div>
              <label htmlFor='time' className='mb-2 block text-xs uppercase tracking-widest text-champagne'>Horário</label>
              <select id='time' name='time' defaultValue='' className={`${field} [color-scheme:dark]`} {...aria('time')}>
                <option value='' disabled>Selecione</option>
                {times.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              {err('time')}
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='people' className='mb-2 block text-xs uppercase tracking-widest text-champagne'>Quantidade de pessoas</label>
              <select id='people' name='people' defaultValue='' className={`${field} [color-scheme:dark]`} {...aria('people')}>
                <option value='' disabled>Selecione</option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? 'pessoa' : 'pessoas'}</option>)}
              </select>
              {err('people')}
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='notes' className='mb-2 block text-xs uppercase tracking-widest text-champagne'>Observações (opcional)</label>
              <textarea id='notes' name='notes' rows={3} className={field} />
            </div>
            <button type='submit' className='min-h-14 bg-cobre px-8 text-sm font-semibold text-carvao transition-colors hover:bg-champagne sm:col-span-2'>
              Solicitar reserva pelo WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
