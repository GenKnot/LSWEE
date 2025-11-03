'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: '#hero', label: tNav('home') },
    { href: '#solutions', label: tNav('solutions') },
    { href: '#products', label: tNav('products') },
    { href: '#advantages', label: tNav('advantages') },
    { href: '#team', label: tNav('team') },
    { href: '#contact', label: tNav('contact') }
  ];

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
    <footer className="relative bg-slate-950 text-white overflow-hidden">
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">
          <div className="sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">LSWEE</h3>
            <p className="text-sm sm:text-base text-slate-400 mb-4 md:mb-6 max-w-md leading-relaxed">
              {t('description')}
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:info@lasersoldering.ca" 
                className="text-base sm:text-lg text-blue-400 hover:text-blue-300 transition-colors font-medium break-all"
              >
                info@lasersoldering.ca
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 text-slate-300">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {navItems.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 text-slate-300">
              {t('more')}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {navItems.slice(3).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-xs sm:text-sm text-slate-400 text-center md:text-left">
              {t('copyright', { year: currentYear })}
            </p>
            <div className="flex gap-4 md:gap-6 text-xs sm:text-sm text-slate-400">
              <span className="hover:text-white transition-colors cursor-default">
                {t('privacy')}
              </span>
              <span className="hover:text-white transition-colors cursor-default">
                {t('terms')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

