import { Clock, AtSign, MapPin, Phone } from 'lucide-react'
import { nav, site } from '@/data/site'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id='contato' className='bg-carvao pt-24'>
      <div className='mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-8'>
        <div className='md:col-span-4'>
          <p className='font-display text-3xl text-marfim'>BRASA 86</p>
          <p className='mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cobre'>{site.tagline}</p>
          <ul className='mt-8 space-y-3 text-sm text-marfim/70'>
            <li className='flex gap-3'><MapPin size={18} className='mt-0.5 shrink-0 text-cobre' />{site.address}</li>
            <li className='flex gap-3'><Phone size={18} className='mt-0.5 shrink-0 text-cobre' />Tel. {site.phone} · WhatsApp {site.whatsapp}</li>
            <li className='flex gap-3'><AtSign size={18} className='mt-0.5 shrink-0 text-cobre' /><a href={site.instagramUrl} target='_blank' rel='noopener noreferrer' className='hover:text-champagne'>{site.instagram}</a></li>
          </ul>
        </div>

        <div className='md:col-span-3'>
          <h2 className='mb-5 flex items-center gap-3 font-display text-xl text-champagne'><Clock size={18} className='text-cobre' />Horários</h2>
          <ul className='space-y-3 text-sm text-marfim/70'>
            {site.hours.map((h) => (
              <li key={h.days} className='flex justify-between gap-4 border-b border-white/10 pb-3'><span>{h.days}</span><span>{h.time}</span></li>
            ))}
          </ul>
          <nav aria-label='Rodapé' className='mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-marfim/60'>
            {nav.map((n) => <a key={n.href} href={n.href} className='hover:text-cobre'>{n.label}</a>)}
          </nav>
        </div>

        <div className='md:col-span-5'>
          {site.mapEmbedUrl ? (
            <iframe src={site.mapEmbedUrl} title='Mapa de localização da BRASA 86' loading='lazy' className='h-64 w-full border-0 md:h-full md:min-h-64' />
          ) : (
            <div className='flex h-64 items-center justify-center border border-dashed border-white/20 p-6 text-center text-sm text-marfim/40 md:h-full'>
              Espaço reservado para o mapa (defina mapEmbedUrl em data/site.ts)
            </div>
          )}
        </div>
      </div>

      <div className='mx-auto mt-16 max-w-7xl border-t border-white/10 px-5 py-6 text-xs text-marfim/40 md:px-8'>
        © 2026 BRASA 86. Todos os direitos reservados.
      </div>

      <div className='border-t border-white/10 bg-[#12110F]'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 sm:flex-row md:px-8'>
          <a
            href='https://fluxy.dev.br'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Conheça a WERKA'
            className='flex items-center gap-3 transition-opacity hover:opacity-70'
          >
            <Image
              src='/werka-cropped-white-logo.png'
              alt='WERKA'
              width={140}
              height={30}
              className='h-8 w-36 object-contain'
            />

            <div className='border-l border-white/15 pl-3'>
              <p className='text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-marfim/80'>
                Desenvolvido por
              </p>
              <p className='text-xs text-marfim/50'>
                Tecnologia que resolve problemas reais.
              </p>
            </div>
          </a>

          <span className='text-[0.65rem] uppercase tracking-wider text-marfim/30'>
            Design & Tecnologia
          </span>
        </div>
      </div>
    </footer>
  )
}
