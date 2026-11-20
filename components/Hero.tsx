import { ChevronDown, MapPin } from 'lucide-react'
import { images } from '@/data/images'

export default function Hero() {
  return (
    <section id='inicio' className='relative flex min-h-[100svh] items-end overflow-hidden'>
      <img src={images.hero.src} alt={images.hero.alt} className='absolute inset-0 h-full w-full object-cover' fetchPriority='high' />
      <div className='absolute inset-0 bg-gradient-to-t from-carvao via-carvao/60 to-carvao/40' aria-hidden='true' />

      <div className='relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-28'>
        <p className='mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-champagne'>
          <span className='h-px w-10 bg-cobre' aria-hidden='true' />A arte do fogo
        </p>
        <h1 className='max-w-4xl font-display text-[clamp(2.5rem,7.5vw,6rem)] leading-[1.02] text-marfim'>
          Muito além da carne. <span className='italic text-champagne'>Uma experiência em cada corte.</span>
        </h1>
        <p className='mt-6 max-w-md text-base leading-relaxed text-marfim/80 md:text-lg'>
          Cortes selecionados, fogo vivo e uma gastronomia feita para ser lembrada.
        </p>
        <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
          <a href='#cardapio' className='inline-flex min-h-12 items-center justify-center bg-cobre px-8 text-sm font-semibold text-carvao transition-colors hover:bg-champagne'>
            Explorar cardápio
          </a>
          <a href='#reservas' className='inline-flex min-h-12 items-center justify-center border border-marfim/40 px-8 text-sm font-semibold text-marfim transition-colors hover:border-cobre hover:text-cobre'>
            Reservar uma mesa
          </a>
        </div>
      </div>

      <div className='absolute inset-x-0 bottom-6 mx-auto hidden max-w-7xl items-center justify-between px-8 text-xs uppercase tracking-[0.2em] text-marfim/60 md:flex'>
        <span className='flex items-center gap-2'><MapPin size={14} className='text-cobre' /> Rio de Janeiro, RJ</span>
        <a href='#essencia' aria-label='Rolar para a próxima seção' className='flex items-center gap-2 hover:text-cobre'>
          Role <ChevronDown size={14} />
        </a>
      </div>
    </section>
  )
}
