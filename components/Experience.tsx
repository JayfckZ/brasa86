import { images } from '@/data/images'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const pillars = [
  { title: 'Gastronomia', text: 'Cortes preparados com precisão.' },
  { title: 'Coquetelaria', text: 'Drinks autorais e clássicos.' },
  { title: 'Ambiente', text: 'Conforto, sofisticação e boa companhia.' },
]

export default function Experience() {
  return (
    <section id='experiencia' className='relative overflow-hidden py-28 md:py-44'>
      <img src={images.experience.src} alt={images.experience.alt} loading='lazy' className='absolute inset-0 h-full w-full object-cover' />
      <div className='absolute inset-0 bg-carvao/80' aria-hidden='true' />
      <div className='relative mx-auto max-w-7xl px-5 md:px-8'>
        <Reveal className='max-w-3xl'>
          <Eyebrow>Experiência</Eyebrow>
          <h2 className='font-display text-4xl leading-tight text-marfim md:text-6xl'>Mais do que uma refeição. Um momento.</h2>
        </Reveal>
        <div className='mt-16 grid gap-0 border-t border-white/15 md:mt-24 md:grid-cols-3'>
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className='border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0 md:first:pl-0'>
              <h3 className='font-display text-2xl text-champagne'>{p.title}</h3>
              <p className='mt-3 text-sm leading-relaxed text-marfim/70'>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
