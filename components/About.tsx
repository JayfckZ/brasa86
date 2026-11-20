import { images } from '@/data/images'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const pillars = [
  { n: '01', title: 'Seleção criteriosa', text: 'Carnes escolhidas corte a corte.' },
  { n: '02', title: 'Preparação artesanal', text: 'Cada prato finalizado à mão.' },
  { n: '03', title: 'Técnicas de parrilla', text: 'Tradição, fogo vivo e paciência.' },
]

export default function About() {
  return (
    <section id='essencia' className='mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36'>
      <div className='grid items-center gap-14 md:grid-cols-12 md:gap-8'>
        <Reveal className='md:col-span-5'>
          <div className='relative'>
            <div className='aspect-[4/5] overflow-hidden'>
              <img src={images.about.src} alt={images.about.alt} loading='lazy' className='h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105' />
            </div>
            <div className='absolute -bottom-4 -right-4 -z-10 hidden h-full w-full border border-cobre/50 md:block' aria-hidden='true' />
          </div>
        </Reveal>

        <Reveal className='md:col-span-6 md:col-start-7' delay={0.1}>
          <Eyebrow>Nossa essência</Eyebrow>
          <h2 className='font-display text-4xl leading-tight text-marfim md:text-6xl'>O fogo é o começo de tudo.</h2>
          <p className='mt-7 max-w-xl leading-relaxed text-marfim/75'>
            Na BRASA 86, acreditamos que a excelência está nos detalhes. Da seleção de cada corte à precisão da brasa, cada etapa é conduzida com respeito aos ingredientes e paixão pela gastronomia.
          </p>
          <ul className='mt-12 divide-y divide-white/10 border-y border-white/10'>
            {pillars.map((p) => (
              <li key={p.n} className='flex items-baseline gap-6 py-5'>
                <span className='font-display text-sm italic text-cobre'>{p.n}</span>
                <div>
                  <h3 className='font-display text-xl text-champagne'>{p.title}</h3>
                  <p className='mt-1 text-sm text-marfim/60'>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
