'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function CTA() {
  const t = useTranslations('home');
  
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="cta" className="relative py-16 md:py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px),
            repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(0, 0, 0, 0.2) 8px, rgba(0, 0, 0, 0.2) 16px),
            repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(0, 0, 0, 0.2) 8px, rgba(0, 0, 0, 0.2) 16px)
          `,
          filter: 'blur(3px)',
        }}></div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.25) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(249, 115, 22, 0.35) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.9) 0%, transparent 80%)
          `,
          filter: 'blur(60px)',
        }}></div>
        
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[80px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-slate-900/50 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight">
          {t('cta.title')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
          {t('cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center px-4">
          <a
            href="#contact"
            onClick={handleContactClick}
            className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-blue-600 text-sm sm:text-base font-semibold rounded-xl hover:bg-slate-100 transition-all shadow-2xl hover:scale-105"
          >
            {t('cta.primary')}
          </a>
          <a
            href="/LSWEE TOMORROW'S TECHNOLOGY, TODAY.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 sm:px-10 sm:py-5 border-2 border-white/80 text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
          >
            {t('cta.secondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
