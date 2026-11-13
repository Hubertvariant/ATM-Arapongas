import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { CLUB_ASSETS, CLUB_INFO, NAV_LINKS } from '../data/clubData';
import { EditorialMedia } from './EditorialMedia';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#171717]/15 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
        {/* Zona 1: Marca (logotipo + nome em uma linha) */}
        <a
          href="#abertura"
          className="flex shrink-0 items-center gap-3 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717]"
        >
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#171717]/15 bg-white">
            <EditorialMedia
              src={CLUB_ASSETS.logo.src}
              alt={CLUB_ASSETS.logo.alt}
              fit="contain"
              priority
              className="h-full w-full bg-white"
            />
          </div>
          <span className="font-display text-base font-extrabold tracking-tight text-[#171717] whitespace-nowrap shrink-0">
            ATM ARAPONGAS
          </span>
        </a>

        {/* Zona 2: Links de navegação (desktop) */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm font-medium text-[#171717]/80 transition-colors duration-150 hover:text-[#171717] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717]"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#A9DDF5] transition-transform duration-200 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Zona 3: Ação principal + gatilho mobile */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={CLUB_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center border border-[#171717] bg-[#171717] px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase transition-colors duration-150 hover:bg-[#A9DDF5] hover:text-[#171717] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]"
          >
            Falar no WhatsApp
          </a>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center border border-[#171717]/20 text-[#171717] transition-colors hover:border-[#171717] lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu editorial mobile */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#171717]/15 bg-white px-5 py-6 lg:hidden"
        >
          <nav aria-label="Navegação móvel" className="flex flex-col divide-y divide-[#171717]/10">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between py-3.5 text-base font-semibold text-[#171717] transition-colors hover:text-[#171717]/70"
              >
                <span>{link.label}</span>
                <span className="font-mono-tech text-xs text-[#171717]/45">
                  0{idx + 2}
                </span>
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-[#171717]/15">
            <a
              href={CLUB_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex min-h-11 w-full items-center justify-center border border-[#171717] bg-[#171717] px-5 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-[#A9DDF5] hover:text-[#171717]"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
