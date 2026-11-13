import { motion } from 'motion/react';
import { CLUB_ASSETS } from '../data/clubData';
import { EditorialMedia } from './EditorialMedia';

export function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho de seção */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-[#171717]/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs font-medium tracking-widest text-[#171717]">
              02 / SOBRE O ATM
            </span>
          </div>
          <span className="font-mono-tech text-xs text-[#171717]/60">
            Comunidade & Esporte · Arapongas, PR
          </span>
        </div>

        {/* Composição assimétrica: Fotografia ampla + Bloco editorial preto sobreposto */}
        <div className="relative grid grid-cols-1 items-center lg:grid-cols-12">
          {/* Fotografia ampla ocupando grande parte da seção */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <div className="relative border border-[#171717]">
              <EditorialMedia
                src={CLUB_ASSETS.manifestoPhoto.src}
                alt={CLUB_ASSETS.manifestoPhoto.alt}
                aspectClass="aspect-[16/10]"
                imgClassName="contrast-[1.03]"
                fallbackLabel="Comunidade praticando tênis de mesa"
              />
              <div className="flex items-center justify-between border-t border-[#171717]/15 bg-white px-4 py-2">
                <span className="font-mono-tech text-[11px] text-[#171717]/60">
                  {CLUB_ASSETS.manifestoPhoto.caption}
                </span>
                <span className="font-mono-tech text-[11px] text-[#171717]">
                  FIG. 01
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bloco contrastante sobreposto em preto com tipografia expressiva */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 -mt-10 mx-3 bg-[#171717] p-7 text-white sm:mx-6 sm:p-10 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mx-0 lg:mt-0 lg:p-11"
          >
            {/* Detalhe superior azul-bebê */}
            <div className="mb-6 flex items-center justify-between">
              <span className="h-[3px] w-14 bg-[#A9DDF5]" aria-hidden="true" />
              <span className="font-mono-tech text-[11px] tracking-widest text-[#A9DDF5]">
                MANIFESTO
              </span>
            </div>

            <h2 className="font-display text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white text-balance">
              UM ESPORTE.
              <br />
              <span className="text-[#A9DDF5]">MUITAS CONEXÕES.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
              O tênis de mesa é o{' '}
              <span className="border-b-2 border-[#A9DDF5] font-semibold text-white">
                ponto de encontro
              </span>
              . Aqui, cada partida é uma oportunidade de aprender, evoluir e conhecer pessoas. Mais do que jogar, queremos{' '}
              <span className="font-semibold text-[#A9DDF5]">
                compartilhar o esporte
              </span>{' '}
              e fortalecer nossa comunidade.
            </p>
          </motion.div>
        </div>

        {/* Três fundamentos institucionais diretos, sem cartões */}
        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-[#171717]/20 pt-8 sm:grid-cols-3">
          <div className="flex items-baseline gap-4">
            <span className="font-mono-tech text-xs font-medium text-[#171717]/45">
              01
            </span>
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-[#171717]">
                Gratuito e acessível
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[#171717]/75">
                Sem fins lucrativos, aberto para quem deseja experimentar ou praticar toda semana.
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-4 sm:border-l sm:border-[#171717]/15 sm:pl-6">
            <span className="font-mono-tech text-xs font-medium text-[#171717]/45">
              02
            </span>
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-[#171717]">
                Todos os níveis
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[#171717]/75">
                Iniciantes e jogadores experientes dividem a mesa em ambiente de troca constante.
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-4 sm:border-l sm:border-[#171717]/15 sm:pl-6">
            <span className="font-mono-tech text-xs font-medium text-[#171717]/45">
              03
            </span>
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-[#171717]">
                Vínculos reais
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[#171717]/75">
                O jogo aproxima pessoas de diferentes idades pela prática coletiva do esporte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
