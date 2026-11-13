import { CLUB_ASSETS, CLUB_INFO, NAV_LINKS } from '../data/clubData';
import { EditorialMedia } from './EditorialMedia';

export function Footer() {
  return (
    <footer className="border-t-2 border-[#171717] bg-white py-12 text-[#171717] sm:py-16">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Bloco institucional com logotipo oficial */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#171717]/20 bg-white">
                <EditorialMedia
                  src={CLUB_ASSETS.logo.src}
                  alt={CLUB_ASSETS.logo.alt}
                  fit="contain"
                  className="h-full w-full bg-white"
                />
              </div>
              <div>
                <p className="font-display text-lg font-extrabold tracking-tight text-[#171717]">
                  {CLUB_INFO.fullTitle}
                </p>
                <p className="mt-0.5 font-mono-tech text-xs text-[#171717]/70">
                  {CLUB_INFO.city}, {CLUB_INFO.state}
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#171717]/75">
              Comunidade gratuita e sem fins lucrativos dedicada à prática do tênis de mesa, à integração entre pessoas e ao incentivo ao esporte.
            </p>
          </div>

          {/* Navegação pelas seções */}
          <div className="md:col-span-4">
            <p className="font-mono-tech text-[11px] uppercase tracking-widest text-[#171717]/55">
              Seções
            </p>
            <nav
              aria-label="Navegação do rodapé"
              className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm font-medium"
            >
              <a
                href="#abertura"
                className="text-[#171717]/80 transition-colors hover:text-[#171717] hover:underline decoration-[#A9DDF5] decoration-2 underline-offset-4"
              >
                Abertura
              </a>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#171717]/80 transition-colors hover:text-[#171717] hover:underline decoration-[#A9DDF5] decoration-2 underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato direto e endereço oficial */}
          <div className="md:col-span-3">
            <p className="font-mono-tech text-[11px] uppercase tracking-widest text-[#171717]/55">
              Contato & Local
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href={CLUB_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 font-semibold text-[#171717] underline decoration-[#A9DDF5] decoration-2 underline-offset-4 transition-colors hover:bg-[#A9DDF5] px-1 -ml-1"
              >
                WhatsApp · {CLUB_INFO.whatsapp.displayNumber}
              </a>
              <p className="text-[#171717]/75">
                {CLUB_INFO.address.street} · {CLUB_INFO.address.neighborhood}
                <br />
                {CLUB_INFO.address.cityStateCountry}
              </p>
            </div>
          </div>
        </div>

        {/* Colofão editorial inferior */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[#171717]/15 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono-tech text-xs text-[#171717]/60">
            {CLUB_INFO.fullTitle} · Clube comunitário gratuito e sem fins lucrativos.
          </p>
          <p className="font-mono-tech text-xs text-[#171717]/50">
            Terças 19:30–21:30 · Sábados 15:00–17:00
          </p>
        </div>
      </div>
    </footer>
  );
}
