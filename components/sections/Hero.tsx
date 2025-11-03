'use client';

import Image from 'next/image';
import VideoPlayer from '@/components/VideoPlayer';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('home');

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg"
          alt="LSWEE Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-orange-900/10"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center py-20 md:py-0">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 w-full">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 md:space-y-8 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] drop-shadow-lg hero-title opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {t('hero.title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 font-medium leading-relaxed max-w-lg drop-shadow-md hero-subtitle opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <a
                  href="#solutions"
                  onClick={(e) => handleAnchorClick(e, '#solutions')}
                  className="px-6 py-3 md:px-8 md:py-4 bg-white text-slate-900 text-xs sm:text-sm md:text-base uppercase tracking-wider font-medium hover:bg-slate-100 transition-colors shadow-lg rounded-lg inline-block text-center"
                >
                  {t('hero.cta')}
                </a>
                <a
                  href="#products"
                  onClick={(e) => handleAnchorClick(e, '#products')}
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-white/80 text-white text-xs sm:text-sm md:text-base uppercase tracking-wider font-medium hover:bg-white/10 hover:border-white transition-colors backdrop-blur-sm rounded-lg inline-block text-center"
                >
                  {t('hero.cta2')}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 opacity-0 animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <VideoPlayer />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

