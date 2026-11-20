export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className='mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cobre'>
      <span className='h-px w-8 bg-cobre' aria-hidden='true' />
      {children}
    </p>
  )
}
