import { ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { CLUB_ASSETS, CLUB_INFO } from '../data/clubData';
import { EditorialMedia } from './EditorialMedia';

export function LocationSection() {
  return (
    <section
      id="onde-estamos"
      className="bg-white py-16 text-[#171717] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho de seção */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-[#171717]/15 pb-4">
          <span className="font-mono-tech text-xs font-medium tracking-widest text-[#171717]">
            05 / LOCALIZAÇÃO
          </span>
          <span className="font-mono-tech text-xs text-[#171717]/60">
            {CLUB_INFO.address.cityLine}
          </span>
        </div>

        {/* Composição combinando fotografia, diagrama espacial e informações oficiais */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Coluna esquerda: Endereço + Botão ABRIR NO MAPA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-[#171717] text-balance">
                ONDE NOS
                <br />
                ENCONTRAR.
              </h2>

              <address className="mt-8 not-italic">
                <div className="border-t-2 border-[#171717] pt-6">
                  <p className="font-mono-tech text-xs uppercase tracking-widest text-[#171717]/55">
                    Endereço oficial
                  </p>
                  <p className="mt-2 font-display text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl">
                    {CLUB_INFO.address.street}
                  </p>
                  <p className="mt-1.5 text-lg font-medium text-[#171717]/80">
                    {CLUB_INFO.address.cityLine}
                  </p>
                </div>
              </address>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#171717]/75">
                Ponto de encontro central em Arapongas, de fácil acesso para quem vem conhecer o clube às terças à noite ou aos sábados à tarde.
              </p>
            </div>

            <div className="mt-9">
              <a
                href={CLUB_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center gap-3 border border-[#171717] bg-[#171717] px-7 py-4 text-xs font-extrabold tracking-[0.14em] text-white uppercase transition-colors duration-150 hover:bg-[#A9DDF5] hover:text-[#171717] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717]"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                <span>ABRIR NO MAPA</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-75 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Coluna direita: Fotografia de ambiente sobreposta à prancha gráfica */}
          <div className="relative lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-end">
              {/* Fotografia do ambiente de clube */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="border border-[#171717] bg-white sm:col-span-8"
              >
                <EditorialMedia
                  src={CLUB_ASSETS.locationPhoto.src}
                  alt={CLUB_ASSETS.locationPhoto.alt}
                  aspectClass="aspect-[4/3]"
                  fallbackLabel="Espaço de prática em Arapongas"
                />
                <div className="flex items-center justify-between border-t border-[#171717]/15 px-3.5 py-2">
                  <span className="font-mono-tech text-[10px] text-[#171717]/60">
                    {CLUB_ASSETS.locationPhoto.caption}
                  </span>
                  <span className="font-mono-tech text-[10px] text-[#171717]">
                    CENTRO
                  </span>
                </div>
              </motion.div>

              {/* Prancha gráfica sobreposta clicável para Google Maps */}
              <motion.a
                href={CLUB_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Rua das Pombas, 799 no Google Maps"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative z-10 flex flex-col justify-between border-2 border-[#171717] bg-[#171717] p-5 text-white transition-colors hover:bg-[#171717]/95 sm:col-span-6 sm:-ml-24 sm:mb-6"
              >
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="font-mono-tech text-[10px] tracking-widest text-[#A9DDF5] uppercase">
                    Traçado · Local
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#A9DDF5]" />
                </div>

                {/* Diagrama gráfico minimalista sem coordenadas fictícias */}
                <div className="my-4">
                  <svg
                    viewBox="0 0 260 130"
                    fill="none"
                    className="h-auto w-full"
                    aria-hidden="true"
                  >
                    <line x1="0" y1="40" x2="260" y2="40" stroke="white" strokeOpacity="0.1" />
                    <line x1="0" y1="90" x2="260" y2="90" stroke="white" strokeOpacity="0.1" />
                    <line x1="70" y1="0" x2="70" y2="130" stroke="white" strokeOpacity="0.1" />
                    <line x1="190" y1="0" x2="190" y2="130" stroke="white" strokeOpacity="0.1" />

                    {/* Eixo da rua */}
                    <line x1="16" y1="108" x2="244" y2="28" stroke="#A9DDF5" strokeWidth="2.5" />
                    <line x1="92" y1="14" x2="146" y2="118" stroke="white" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Marcador do número 799 */}
                    <circle cx="118" cy="72" r="18" fill="#A9DDF5" fillOpacity="0.22" />
                    <circle cx="118" cy="72" r="7" fill="#A9DDF5" stroke="#171717" strokeWidth="2" />
                  </svg>
                </div>

                <div className="border-t border-white/15 pt-3">
                  <p className="font-display text-sm font-bold text-white">
                    Rua das Pombas, 799
                  </p>
                  <p className="mt-0.5 font-mono-tech text-[11px] text-[#A9DDF5] group-hover:underline">
                    Abrir rota no Google Maps →
                  </p>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
