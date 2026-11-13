import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CLUB_ASSETS, CLUB_INFO } from '../data/clubData';
import { EditorialMedia } from './EditorialMedia';

export function FinalInviteSection() {
  return (
    <section
      id="convite"
      className="relative overflow-hidden bg-[#171717] py-20 text-white sm:py-28 lg:py-32"
    >
      {/* Fotografia esportiva escurecida ao fundo para profundidade */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <EditorialMedia
          src={CLUB_ASSETS.closingPhoto.src}
          alt={CLUB_ASSETS.closingPhoto.alt}
          className="h-full w-full bg-[#171717]"
          imgClassName="h-full w-full object-cover opacity-30 grayscale-[35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/88 to-[#171717]/75" />
      </div>

      {/* Trajetória gráfica da bolinha em azul-bebê */}
      <svg
        viewBox="0 0 900 240"
        fill="none"
        className="pointer-events-none absolute right-0 bottom-0 z-10 h-48 w-full max-w-4xl opacity-45 sm:h-60"
        aria-hidden="true"
      >
        <path
          d="M 20 210 Q 260 30 480 185 T 850 58"
          stroke="#A9DDF5"
          strokeWidth="1.75"
          strokeDasharray="6 6"
        />
        <circle cx="850" cy="58" r="9" fill="#A9DDF5" />
      </svg>

      <div className="relative z-20 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-8">
            <span className="font-mono-tech text-xs font-medium tracking-widest text-[#A9DDF5]">
              07 / CONTATO
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.35rem,5.4vw,4.5rem)] font-extrabold leading-[0.93] tracking-[-0.035em] text-white text-balance">
              SEU PRÓXIMO JOGO
              <br />
              <span className="text-[#A9DDF5]">PODE COMEÇAR AQUI.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-xl">
              Venha conhecer o ATM, experimentar o tênis de mesa e fazer parte da nossa comunidade.
            </p>
          </div>

          <div className="flex flex-col items-start lg:col-span-4 lg:items-end">
            <a
              href={CLUB_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center gap-3 bg-[#A9DDF5] px-8 py-4 text-xs font-extrabold tracking-[0.14em] text-[#171717] uppercase transition-all duration-150 hover:bg-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9DDF5]"
            >
              <span>FALAR PELO WHATSAPP</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="mt-3 font-mono-tech text-xs text-white/70">
              Atendimento direto · {CLUB_INFO.whatsapp.displayNumber}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
