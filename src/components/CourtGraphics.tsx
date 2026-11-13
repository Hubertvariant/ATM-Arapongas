export function TableBaselineDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex items-center py-2 ${className}`} aria-hidden="true">
      <div className="h-[1px] w-full bg-[#171717]/20" />
      <div className="mx-3 flex shrink-0 items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full border border-[#171717] bg-[#A9DDF5]" />
        <span className="h-3 w-[1px] bg-[#171717]/40" />
      </div>
      <div className="h-[1px] w-full bg-[#171717]/20" />
    </div>
  );
}

export function BallTrajectoryGraphic({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 110"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Linha da mesa */}
      <line x1="8" y1="92" x2="352" y2="92" stroke="#171717" strokeOpacity="0.22" strokeWidth="1.2" />
      {/* Rede */}
      <line x1="180" y1="68" x2="180" y2="96" stroke="#171717" strokeWidth="1.5" />
      <line x1="176" y1="68" x2="184" y2="68" stroke="#A9DDF5" strokeWidth="2.5" />
      {/* Trajetória em quique da bolinha */}
      <path
        d="M 24 44 Q 95 14 146 90 Q 178 46 218 42 Q 268 38 302 90 Q 324 58 344 46"
        stroke="#171717"
        strokeOpacity="0.35"
        strokeWidth="1.25"
        strokeDasharray="4 4"
      />
      {/* Ponto de impacto na mesa */}
      <circle cx="146" cy="92" r="3" fill="#171717" />
      <circle cx="302" cy="92" r="3" fill="#171717" />
      {/* Bolinha em movimento */}
      <circle cx="236" cy="40" r="6.5" fill="#A9DDF5" stroke="#171717" strokeWidth="1.5" />
    </svg>
  );
}

export function CourtDiagramByFocus({
  focus,
}: {
  focus: 'rally' | 'footwork' | 'match' | 'technique' | 'community';
}) {
  const paths: Record<typeof focus, { d: string; ball: [number, number]; label: string }> = {
    rally: {
      d: 'M 28 70 Q 110 22 192 72 Q 115 98 34 42',
      ball: [130, 44],
      label: 'Troca contínua de golpes',
    },
    footwork: {
      d: 'M 32 82 L 72 44 L 116 84 L 168 42 L 198 74',
      ball: [168, 42],
      label: 'Deslocamento lateral e base',
    },
    match: {
      d: 'M 24 28 Q 110 18 196 86 M 196 32 Q 110 62 28 84',
      ball: [112, 46],
      label: 'Cruzamentos e leitura de ponto',
    },
    technique: {
      d: 'M 36 86 C 72 24, 148 24, 188 64',
      ball: [148, 36],
      label: 'Arco de efeito e controle',
    },
    community: {
      d: 'M 42 58 A 68 32 0 1 1 178 58 A 68 32 0 1 1 42 58',
      ball: [110, 26],
      label: 'Rodízio aberto nas mesas',
    },
  };

  const active = paths[focus];

  return (
    <div className="border border-white/15 bg-white/[0.03] p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="font-mono-tech text-[11px] uppercase tracking-widest text-white/60">
          Leitura tática de mesa
        </span>
        <span className="font-mono-tech text-[11px] text-[#A9DDF5]">
          {active.label}
        </span>
      </div>
      <svg viewBox="0 0 220 110" fill="none" className="w-full" aria-hidden="true">
        {/* Mesa retangular vista superior */}
        <rect x="14" y="14" width="192" height="82" stroke="white" strokeOpacity="0.35" strokeWidth="1.2" />
        {/* Linha central */}
        <line x1="14" y1="55" x2="206" y2="55" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
        {/* Rede */}
        <line x1="110" y1="8" x2="110" y2="102" stroke="#A9DDF5" strokeWidth="1.5" />
        {/* Trajetória específica da atividade */}
        <path
          d={active.d}
          stroke="#A9DDF5"
          strokeWidth="1.75"
          strokeDasharray="4 3"
        />
        <circle
          cx={active.ball[0]}
          cy={active.ball[1]}
          r="5"
          fill="#A9DDF5"
          stroke="#171717"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
