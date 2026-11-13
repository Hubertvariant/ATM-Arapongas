import { Maximize2, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { GALLERY_FRAMES, GalleryFrame } from '../data/clubData';
import { EditorialMedia } from './EditorialMedia';

export function GallerySection() {
  const [selectedFrame, setSelectedFrame] = useState<GalleryFrame | null>(null);

  useEffect(() => {
    if (!selectedFrame) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedFrame(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedFrame]);

  return (
    <section
      id="galeria"
      className="border-t border-[#171717]/15 bg-white py-16 text-[#171717] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho com faixa de destaque em azul-bebê */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="inline-block bg-[#A9DDF5] px-2.5 py-1 font-mono-tech text-xs font-medium tracking-widest text-[#171717]">
              06 / GALERIA
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-extrabold leading-[0.94] tracking-[-0.035em] text-[#171717] text-balance">
              UM POUCO DO
              <br />
              NOSSO JOGO.
            </h2>
          </div>

          <div className="border-l-2 border-[#171717] pl-4 lg:col-span-5 lg:justify-self-end">
            <p className="text-xs leading-relaxed text-[#171717]/80 sm:text-sm">
              <strong>Ilustrações visuais de referência:</strong> fotografias representativas do universo do tênis de mesa. Estrutura preparada para receber os registros oficiais do ATM Arapongas.
            </p>
          </div>
        </div>

        {/* Grade assimétrica com fotografia principal grande e recortes variados */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-7">
          {GALLERY_FRAMES.map((frame, index) => {
            const aspectMap: Record<GalleryFrame['aspectRatio'], string> = {
              '16/9': 'aspect-[16/9]',
              '3/4': 'aspect-[3/4]',
              '4/3': 'aspect-[4/3]',
              '1/1': 'aspect-square',
            };

            return (
              <motion.figure
                key={frame.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex flex-col ${frame.gridClass} ${
                  index === 2 ? 'lg:-mt-4' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedFrame(frame)}
                  aria-label={`Ampliar ilustração visual: ${frame.category}`}
                  className="relative block w-full overflow-hidden border border-[#171717] bg-[#171717]/5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717]"
                >
                  <EditorialMedia
                    src={frame.src}
                    alt={frame.alt}
                    aspectClass={aspectMap[frame.aspectRatio]}
                    imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    fallbackLabel={frame.category}
                  />

                  {/* Etiqueta discreta identificando referência ilustrativa */}
                  <span className="absolute top-3 left-3 bg-[#171717]/85 px-2 py-0.5 font-mono-tech text-[10px] tracking-wider text-white uppercase">
                    Ilustração · {frame.category}
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center border border-[#171717] bg-[#A9DDF5] text-[#171717] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </button>

                <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-[#171717]/15 pt-2.5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono-tech text-xs font-medium text-[#171717]">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-snug text-[#171717]/80">
                      {frame.caption}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>

      {/* Lightbox para ampliação suave */}
      {selectedFrame && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedFrame.category}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]/92 p-4 sm:p-8"
          onClick={() => setSelectedFrame(null)}
        >
          <div
            className="relative w-full max-w-4xl border border-white/25 bg-white p-3 sm:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4 border-b border-[#171717]/15 pb-3">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[#171717]">
                {selectedFrame.category} · Ilustração visual de referência
              </span>
              <button
                type="button"
                onClick={() => setSelectedFrame(null)}
                aria-label="Fechar visualização ampliada"
                className="inline-flex h-10 w-10 items-center justify-center border border-[#171717]/25 text-[#171717] transition-colors hover:border-[#171717] hover:bg-[#A9DDF5]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[72vh] overflow-hidden bg-[#171717]/5">
              <img
                src={selectedFrame.src}
                alt={selectedFrame.alt}
                referrerPolicy="no-referrer"
                className="mx-auto max-h-[70vh] w-auto object-contain"
              />
            </div>
            <p className="mt-3 text-sm text-[#171717]/85">
              {selectedFrame.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
