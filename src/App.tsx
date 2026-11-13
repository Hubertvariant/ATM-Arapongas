import { ActivitiesSection } from './components/ActivitiesSection';
import { FinalInviteSection } from './components/FinalInviteSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LocationSection } from './components/LocationSection';
import { ManifestoSection } from './components/ManifestoSection';
import { ScheduleSection } from './components/ScheduleSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:border focus:border-[#171717] focus:bg-[#A9DDF5] focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:text-[#171717]"
      >
        Ir para o conteúdo principal
      </a>

      <Header />

      <main id="conteudo-principal">
        <HeroSection />
        <ManifestoSection />
        <ActivitiesSection />
        <ScheduleSection />
        <LocationSection />
        <GallerySection />
        <FinalInviteSection />
      </main>

      <Footer />
    </div>
  );
}
