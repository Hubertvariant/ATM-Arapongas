import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SCHEDULE_SESSIONS } from '../data/clubData';

export function ScheduleSection() {
  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-[#171717] py-16 text-white sm:py-24 lg:py-28"
    >
      {/* Malha gráfica sutil inspirada em marcações de mesa */}
      <svg
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        aria-hidden="true"
      >
        <line x1="720" y1="0" x2="720" y2="600" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
        <line x1="0" y1="300" x2="1440" y2="300" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
        <circle cx="720" cy="300" r="140" stroke="#A9DDF5" strokeOpacity="0.22" strokeWidth="1" />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho do painel esportivo */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="font-mono-tech text-xs font-medium tracking-widest text-[#A9DDF5]">
              04 / A AGENDA DO CLUBE
            </span>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold leading-[0.94] tracking-[-0.035em] text-white text-balance">
              QUANDO A MESA
              <br />
              ESTÁ ABERTA.
            </h2>
          </div>

          <div className="border-l-2 border-[#A9DDF5] pl-5 lg:col-span-5 lg:justify-self-end">
            <p className="font-mono-tech text-[11px] uppercase tracking-widest text-[#A9DDF5]">
              Programação semanal
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/80">
              Escolha um dia, venha conhecer o clube e experimentar o tênis de mesa.
            </p>
          </div>
        </div>

        {/* Painel editorial de horários sem cards genéricos */}
        <div className="border-t-2 border-b-2 border-white/25">
          {SCHEDULE_SESSIONS.map((session, idx) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 items-center gap-6 py-9 sm:py-12 lg:grid-cols-12 lg:gap-8 ${
                idx > 0 ? 'border-t border-white/15' : ''
              }`}
            >
              {/* Sigla monumental do dia */}
              <div className="flex items-center justify-between lg:col-span-3">
                <span className="font-display text-6xl font-extrabold leading-none tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
                  {session.dayShort}
                </span>
                <span className="h-3 w-3 rounded-full bg-[#A9DDF5] lg:hidden" aria-hidden="true" />
              </div>

              {/* Dia oficial e descrição */}
              <div className="lg:col-span-4">
                <span className="font-mono-tech text-[11px] uppercase tracking-widest text-[#A9DDF5]">
                  {session.period}
                </span>
                <h3 className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {session.day}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
                  {session.focus}
                </p>
              </div>

              {/* Horário em escala de placar com destaque azul-bebê */}
              <div className="flex items-center justify-between border-t border-white/10 pt-5 lg:col-span-5 lg:justify-end lg:border-t-0 lg:pt-0">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="hidden h-10 w-[2px] bg-[#A9DDF5]/60 lg:inline-block"
                  />
                  <span className="font-mono-tech text-3xl font-medium tracking-tight text-[#A9DDF5] tabular-nums sm:text-5xl">
                    {session.timeRange}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Barra inferior com chamada ao local */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#A9DDF5]" aria-hidden="true" />
            <p className="font-mono-tech text-xs tracking-wide text-white/75">
              Entrada gratuita · Não é necessário ter raquete própria para começar
            </p>
          </div>

          <a
            href="#onde-estamos"
            className="group inline-flex min-h-11 items-center gap-2 border border-[#A9DDF5] px-5 py-2.5 text-xs font-bold tracking-wider text-[#A9DDF5] uppercase transition-colors hover:bg-[#A9DDF5] hover:text-[#171717] whitespace-nowrap shrink-0"
          >
            <span>Ver onde jogamos</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
