import { ArrowDownRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { CLUB_ASSETS, CLUB_INFO } from '../data/clubData';
import { EditorialMedia } from './EditorialMedia';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.09]);

  return (
    <section
      id="abertura"
      ref={sectionRef}
      className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-between overflow-hidden bg-[#171717] text-white"
    >
      {/* Fotografia cinematográfica em tela ampla com parallax sutil */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="pointer-events-none absolute inset-0 z-0 will-change-transform"
        aria-hidden="true"
      >
        <EditorialMedia
          src={CLUB_ASSETS.heroPhoto.src}
          alt={CLUB_ASSETS.heroPhoto.alt}
          className="h-full w-full bg-[#171717]"
          imgClassName="h-full w-full object-cover object-[72%_center] sm:object-center"
          priority
        />
        {/* Camada escura direcional para garantir alto contraste e leitura */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/95 via-[#171717]/75 to-[#171717]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-[#171717]/55" />
      </motion.div>

      {/* Linhas geométricas sutis inspiradas em quadra e trajetória da bolinha */}
      <svg
        viewBox="0 0 1440 760"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-45"
        aria-hidden="true"
      >
        {/* Linha de borda editorial */}
        <line
          x1="48"
          y1="0"
          x2="48"
          y2="760"
          stroke="white"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
        {/* Trajetória em arco da bolinha */}
        <path
          d="M 120 620 Q 520 340 940 430 T 1360 220"
          stroke="#A9DDF5"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <circle cx="940" cy="430" r="5" fill="#A9DDF5" />
      </svg>

      {/* Conteúdo principal assimétrico */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1360px] flex-1 flex-col justify-between px-5 pt-7 pb-10 sm:px-8 sm:pt-10 sm:pb-12 lg:px-12 lg:pt-12 lg:pb-14">
        {/* Barra editorial superior da abertura */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs font-medium tracking-widest text-[#A9DDF5]">
              01
            </span>
            <span aria-hidden="true" className="h-[1px] w-6 bg-white/35" />
            <span className="font-mono-tech text-xs tracking-wider text-white/85 uppercase">
              Tênis de Mesa
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono-tech text-xs tracking-wider text-white/75">
              {CLUB_INFO.locationFull}
            </span>
            <span
              aria-hidden="true"
              className="hidden h-2 w-2 rounded-full bg-[#A9DDF5] sm:inline-block"
            />
          </div>
        </div>

        {/* Bloco central-esquerdo com logotipo, título monumental e CTA */}
        <div className="my-auto py-10 sm:py-14 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            {/* Identificação do clube com logotipo oficial sem distorções */}
            <div className="mb-7 flex items-center gap-4 sm:gap-5">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#A9DDF5] bg-white p-0.5 sm:h-24 sm:w-24">
                <EditorialMedia
                  src={CLUB_ASSETS.logo.src}
                  alt={CLUB_ASSETS.logo.alt}
                  fit="contain"
                  priority
                  className="h-full w-full rounded-full bg-white"
                />
              </div>
              <div>
                <p className="font-display text-sm font-extrabold tracking-[0.16em] text-[#A9DDF5] uppercase sm:text-base">
                  ATM ARAPONGAS
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/75 sm:text-sm">
                  Clube comunitário gratuito · Sem fins lucrativos
                </p>
              </div>
            </div>

            {/* Título monumental sobreposto à atmosfera da cena */}
            <h1 className="font-display text-[clamp(2.85rem,8vw,6.8rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white text-balance">
              ARAPONGAS
              <span className="mt-1.5 block">
                JOGA{' '}
                <span className="relative inline-block text-[#A9DDF5]">
                  JUNTO.
                </span>
              </span>
            </h1>

            {/* Texto de apoio */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-xl sm:leading-relaxed">
              Um espaço para praticar, aprender, competir e compartilhar o tênis de mesa.
            </p>

            {/* Ação principal e referência rápida de encontros */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#manifesto"
                className="group inline-flex min-h-13 items-center gap-3 bg-[#A9DDF5] px-7 py-4 text-xs font-extrabold tracking-[0.14em] text-[#171717] uppercase transition-all duration-200 hover:bg-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9DDF5]"
              >
                <span>CONHEÇA O ATM</span>
                <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#agenda"
                className="inline-flex min-h-12 items-center border border-white/30 bg-[#171717]/60 px-5 py-3 font-mono-tech text-xs tracking-wide text-white transition-colors hover:border-[#A9DDF5] hover:text-[#A9DDF5] whitespace-nowrap shrink-0"
              >
                Terças 19:30 · Sábados 15:00
              </a>
            </div>
          </motion.div>
        </div>

        {/* Rodapé técnico da primeira dobra */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-4">
          <p className="font-mono-tech text-[11px] tracking-wide text-white/65">
            {CLUB_INFO.address.street} · {CLUB_INFO.address.neighborhood}
          </p>
          <p className="font-mono-tech text-[11px] tracking-wide text-white/55">
            {CLUB_ASSETS.heroPhoto.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
