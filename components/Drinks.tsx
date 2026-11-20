import { drinks } from '@/data/menu'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

export default function Drinks() {
  return (
    <section id='coquetelaria' className='mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36'>
      <Reveal className='mb-16 md:mb-20 md:text-right'>
        <div className='md:flex md:justify-end'><Eyebrow>Coquetelaria</Eyebrow></div>
        <h2 className='font-display text-4xl text-marfim md:text-6xl'>Drinks de assinatura.</h2>
      </Reveal>
      <div className='grid gap-12 md:grid-cols-3 md:gap-8'>
        {drinks.map((d, i) => (
          <Reveal key={d.name} delay={i * 0.1} className={i === 1 ? 'md:mt-20' : i === 2 ? 'md:mt-40' : ''}>
            <article>
              <div className='aspect-[3/4] overflow-hidden'>
                <img src={d.image.src} alt={d.image.alt} loading='lazy' className='h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105' />
              </div>
              <h3 className='mt-5 font-display text-2xl text-champagne'>{d.name}</h3>
              <p className='mt-2 text-sm leading-relaxed text-marfim/65'>{d.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
