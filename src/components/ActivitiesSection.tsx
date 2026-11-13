import { motion } from 'motion/react';
import { useState } from 'react';
import { ACTIVITIES, CLUB_ASSETS } from '../data/clubData';
import { CourtDiagramByFocus } from './CourtGraphics';
import { EditorialMedia } from './EditorialMedia';

export function ActivitiesSection() {
  const [activeId, setActiveId] = useState<string>(ACTIVITIES[0].id);
  const activeItem =
    ACTIVITIES.find((item) => item.id === activeId) ?? ACTIVITIES[0];

  return (
    <section
      id="atividades"
      className="relative overflow-hidden border-t border-[#171717]/15 bg-white py-16 text-[#171717] sm:py-24 lg:py-28"
    >
      {/* Linhas diagonais gráficas sutis evocando deslocamento e trajetória */}
      <svg
        viewBox="0 0 1440 700"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <line
          x1="-80"
          y1="620"
          x2="820"
          y2="-40"
          stroke="#171717"
          strokeOpacity="0.06"
          strokeWidth="1.5"
        />
        <line
          x1="480"
          y1="740"
          x2="1480"
          y2="40"
          stroke="#A9DDF5"
          strokeOpacity="0.65"
          strokeWidth="2"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho assimétrico */}
        <div className="mb-12 grid grid-cols-1 gap-6 border-b border-[#171717] pb-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="font-mono-tech text-xs font-medium tracking-widest text-[#171717]">
              03 / ATIVIDADES DO CLUBE
            </span>
            <h2 className="mt-3 font-display text-[clamp(2.1rem,4.6vw,3.8rem)] font-extrabold leading-[0.94] tracking-[-0.035em] text-[#171717] text-balance">
              DINÂMICA NA MESA.
              <br />
              RITMO EM GRUPO.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#171717]/75 lg:col-span-5 lg:justify-self-end">
            Cinco frentes que estruturam cada encontro do ATM — da primeira batida na bola ao jogo amistoso entre participantes.
          </p>
        </div>

        {/* Composição dinâmica: fotografias sobrepostas à esquerda + índice interativo à direita */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Coluna esquerda: Duas fotografias sobrepostas com recorte editorial */}
          <div className="lg:col-span-6">
            <div className="relative pb-12 sm:pb-16">
              {/* Fotografia de base (larga) */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[88%] border border-[#171717] bg-[#171717]"
              >
                <EditorialMedia
                  src={CLUB_ASSETS.activitiesMainPhoto.src}
                  alt={CLUB_ASSETS.activitiesMainPhoto.alt}
                  aspectClass="aspect-[4/3]"
                  imgClassName="transition-transform duration-500 hover:scale-[1.03]"
                  fallbackLabel="Treinamento de Tênis de Mesa"
                />
                <div className="flex items-center justify-between bg-[#171717] px-3.5 py-2 text-white">
                  <span className="font-mono-tech text-[10px] tracking-wider text-white/75">
                    {CLUB_ASSETS.activitiesMainPhoto.caption}
                  </span>
                  <span className="font-mono-tech text-[10px] text-[#A9DDF5]">
                    01
                  </span>
                </div>
              </motion.div>

              {/* Fotografia sobreposta deslocada diagonalmente */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 -mt-20 ml-auto w-[58%] border-2 border-[#171717] bg-white p-1.5 sm:-mt-28 sm:w-[54%]"
              >
                <div className="border-t-4 border-[#A9DDF5]">
                  <EditorialMedia
                    src={CLUB_ASSETS.activitiesSecondaryPhoto.src}
                    alt={CLUB_ASSETS.activitiesSecondaryPhoto.alt}
                    aspectClass="aspect-[4/3]"
                    imgClassName="transition-transform duration-500 hover:scale-[1.03]"
                    fallbackLabel="Disputa de partida comunitária"
                  />
                </div>
                <div className="flex items-center justify-between px-2 pt-2 pb-1">
                  <span className="font-mono-tech text-[10px] text-[#171717]/70">
                    {CLUB_ASSETS.activitiesSecondaryPhoto.caption}
                  </span>
                  <span className="font-mono-tech text-[10px] font-bold text-[#171717]">
                    02
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Leitura tática conectada à atividade selecionada */}
            <div className="bg-[#171717] text-white">
              <CourtDiagramByFocus focus={activeItem.courtFocus} />
            </div>
          </div>

          {/* Coluna direita: Lista editorial numerada das 5 atividades */}
          <div className="lg:col-span-6">
            <ul className="divide-y divide-[#171717]/15 border-t border-b border-[#171717]">
              {ACTIVITIES.map((activity) => {
                const isSelected = activity.id === activeItem.id;
                return (
                  <li key={activity.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(activity.id)}
                      onMouseEnter={() => setActiveId(activity.id)}
                      aria-pressed={isSelected}
                      className={`group flex w-full items-start justify-between gap-5 px-4 py-6 text-left transition-colors duration-150 ${
                        isSelected
                          ? 'bg-[#171717] text-white'
                          : 'bg-white text-[#171717] hover:bg-[#A9DDF5]/25'
                      } focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#171717]`}
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span
                          className={`font-mono-tech text-sm font-medium ${
                            isSelected ? 'text-[#A9DDF5]' : 'text-[#171717]/45'
                          }`}
                        >
                          {activity.index}
                        </span>
                        <div>
                          <h3 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
                            {activity.title}
                          </h3>
                          <p
                            className={`mt-1 text-xs font-semibold tracking-wide uppercase ${
                              isSelected ? 'text-[#A9DDF5]' : 'text-[#171717]/60'
                            }`}
                          >
                            {activity.subtitle}
                          </p>
                          <p
                            className={`mt-2.5 text-sm leading-relaxed ${
                              isSelected ? 'text-white/80' : 'text-[#171717]/75'
                            }`}
                          >
                            {activity.description}
                          </p>
                        </div>
                      </div>

                      <span
                        aria-hidden="true"
                        className={`mt-2 h-3 w-3 shrink-0 rounded-full border transition-colors ${
                          isSelected
                            ? 'border-[#A9DDF5] bg-[#A9DDF5]'
                            : 'border-[#171717]/30 bg-transparent group-hover:border-[#171717]'
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
