import activityTrainingImg from '../assets/images/activity_training_rally_1794606482384.jpg';
import logoImg from '../assets/images/atm_arapongas_logo_1794606480476.jpg';
import galleryCommunityImg from '../assets/images/gallery_community_play_1794606484536.jpg';
import galleryRacketBallImg from '../assets/images/gallery_racket_ball_1794606482484.jpg';
import galleryServeFocusImg from '../assets/images/gallery_serve_focus_1794606713452.jpg';
import galleryTablesHallImg from '../assets/images/gallery_tables_hall_1794606483970.jpg';
import heroCinematicImg from '../assets/images/hero_cinematic_action_1794606711701.jpg';
import heroTableTennisImg from '../assets/images/hero_table_tennis_1794606481926.jpg';
import locationAtmosphereImg from '../assets/images/location_club_atmosphere_1794606712685.jpg';
import manifestoCommunityImg from '../assets/images/manifesto_community_wide_1794606712744.jpg';

export interface ActivityItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  courtFocus: 'rally' | 'footwork' | 'match' | 'technique' | 'community';
}

export interface ScheduleSession {
  id: string;
  day: string;
  dayShort: string;
  timeRange: string;
  period: string;
  focus: string;
}

export interface GalleryFrame {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  aspectRatio: '16/9' | '3/4' | '4/3' | '1/1';
  gridClass: string;
  isIllustrative: boolean;
}

/**
 * Dados institucionais centralizados do ATM Arapongas.
 * Estrutura preparada para substituição direta das imagens ilustrativas
 * pelas fotografias oficiais do clube.
 */
export const CLUB_ASSETS = {
  logo: {
    src: logoImg,
    alt: 'Logotipo oficial do ATM Arapongas — mascote araponga segurando duas raquetes de tênis de mesa dentro de emblema circular',
  },
  heroPhoto: {
    src: heroCinematicImg,
    alt: 'Jogador de tênis de mesa em movimento executando golpe ofensivo com raquete e bolinha em suspensão sobre a mesa',
    caption: 'Ilustração editorial — ação esportiva em quadra',
  },
  manifestoPhoto: {
    src: manifestoCommunityImg,
    alt: 'Pessoas de diferentes idades jogando tênis de mesa em mesas alinhadas sob luz natural',
    caption: 'Ilustração editorial — prática aberta entre gerações',
  },
  activitiesMainPhoto: {
    src: activityTrainingImg,
    alt: 'Atleta em movimento executando forehand com bola branca sobre a rede',
    caption: 'Ilustração editorial — ritmo de treinamento',
  },
  activitiesSecondaryPhoto: {
    src: heroTableTennisImg,
    alt: 'Dois jogadores em partida de tênis de mesa em ginásio comunitário',
    caption: 'Ilustração editorial — disputa de pontos na mesa',
  },
  locationPhoto: {
    src: locationAtmosphereImg,
    alt: 'Mesa de tênis de mesa com raquetes e bolinhas prontas ao lado de janelas iluminadas',
    caption: 'Ilustração editorial — ambiente de acolhimento para prática',
  },
  closingPhoto: {
    src: galleryServeFocusImg,
    alt: 'Detalhe de saque no tênis de mesa com bola branca lançada ao ar e raquete posicionada',
    caption: 'Ilustração editorial — início de ponto',
  },
} as const;

export const CLUB_INFO = {
  name: 'ATM Arapongas',
  fullTitle: 'ATM Arapongas — Tênis de Mesa',
  city: 'Arapongas',
  state: 'Paraná',
  country: 'Brasil',
  locationShort: 'Arapongas · PR',
  locationFull: 'Arapongas — Paraná, Brasil.',
  nature:
    'Comunidade gratuita e sem fins lucrativos dedicada à prática do tênis de mesa, à integração entre pessoas e ao incentivo ao esporte.',
  address: {
    street: 'Rua das Pombas, 799',
    neighborhood: 'Centro',
    cityLine: 'Centro — Arapongas, Paraná.',
    cityStateCountry: 'Arapongas — Paraná, Brasil.',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+das+Pombas+799+Centro+Arapongas+PR',
  },
  whatsapp: {
    displayNumber: '(43) 99672-7780',
    url: 'https://wa.me/5543996727780?text=Ol%C3%A1%21%20Conheci%20o%20ATM%20Arapongas%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20clube.',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Sobre o ATM', href: '#manifesto' },
  { label: 'Atividades', href: '#atividades' },
  { label: 'Horários', href: '#agenda' },
  { label: 'Localização', href: '#onde-estamos' },
  { label: 'Galeria', href: '#galeria' },
] as const;

export const ACTIVITIES: ActivityItem[] = [
  {
    id: 'pratica',
    index: '01',
    title: 'Prática esportiva',
    subtitle: 'Mesas abertas para todos os níveis',
    description:
      'Sessões livres e orientadas para quem está pegando na raquete pela primeira vez ou já joga regularmente.',
    courtFocus: 'rally',
  },
  {
    id: 'treinamentos',
    index: '02',
    title: 'Treinamentos',
    subtitle: 'Ritmo, regularidade e coordenação',
    description:
      'Exercícios em dupla e sequências de golpes para ganhar controle de bola, movimentação e tempo de reação.',
    courtFocus: 'footwork',
  },
  {
    id: 'partidas',
    index: '03',
    title: 'Partidas amistosas',
    subtitle: 'Competitividade saudável na mesa',
    description:
      'Jogos entre participantes com rodízio de mesas para colocar o treino em prática e trocar experiências.',
    courtFocus: 'match',
  },
  {
    id: 'desenvolvimento',
    index: '04',
    title: 'Desenvolvimento técnico',
    subtitle: 'Fundamentos e leitura de jogo',
    description:
      'Aperfeiçoamento de empunhadura, saque, recepção, efeito e posicionamento ao redor da mesa.',
    courtFocus: 'technique',
  },
  {
    id: 'integracao',
    index: '05',
    title: 'Integração entre participantes',
    subtitle: 'Esporte como ponto de encontro',
    description:
      'Convivência respeitosa entre jovens, adultos e veteranos que compartilham o interesse pelo tênis de mesa em Arapongas.',
    courtFocus: 'community',
  },
];

export const SCHEDULE_SESSIONS: ScheduleSession[] = [
  {
    id: 'terca',
    day: 'TERÇA-FEIRA',
    dayShort: 'TER',
    timeRange: '19:30 — 21:30',
    period: 'Encontro noturno',
    focus: 'Prática esportiva contínua, treinamentos em mesa e rodízio de partidas.',
  },
  {
    id: 'sabado',
    day: 'SÁBADO',
    dayShort: 'SÁB',
    timeRange: '15:00 — 17:00',
    period: 'Encontro da tarde',
    focus: 'Partidas amistosas, desenvolvimento técnico e acolhimento de novos participantes.',
  },
];

export const GALLERY_FRAMES: GalleryFrame[] = [
  {
    id: 'salao',
    src: galleryTablesHallImg,
    alt: 'Salão esportivo amplo com mesas de tênis de mesa dispostas em perspectiva',
    caption: 'Ambiente de prática coletiva com múltiplas mesas e fluxo dinâmico entre partidas.',
    category: 'Espaço & Mesas',
    aspectRatio: '16/9',
    gridClass: 'lg:col-span-8',
    isIllustrative: true,
  },
  {
    id: 'convivencia',
    src: galleryCommunityImg,
    alt: 'Dois praticantes de idades diferentes conversando ao lado da mesa com raquetes nas mãos',
    caption: 'Convivência entre gerações nos intervalos de jogo.',
    category: 'Comunidade',
    aspectRatio: '3/4',
    gridClass: 'lg:col-span-4 lg:row-span-2',
    isIllustrative: true,
  },
  {
    id: 'equipamento',
    src: galleryRacketBallImg,
    alt: 'Duas raquetes clássicas de madeira e borracha preta ao lado de uma bolinha branca sobre a mesa',
    caption: 'Madeira, borracha e bola 40+: foco nos fundamentos do jogo.',
    category: 'Equipamento',
    aspectRatio: '4/3',
    gridClass: 'lg:col-span-4',
    isIllustrative: true,
  },
  {
    id: 'saque',
    src: galleryServeFocusImg,
    alt: 'Detalhe aproximado da mão lançando a bolinha branca no momento do saque com raquete preparada',
    caption: 'Precisão no lançamento e preparação do saque na linha de fundo.',
    category: 'Movimento',
    aspectRatio: '1/1',
    gridClass: 'lg:col-span-4',
    isIllustrative: true,
  },
];
