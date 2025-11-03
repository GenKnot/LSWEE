'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  type NavItem = { href: string; label: string };
  
  const navItems: NavItem[] = [
    { href: '#hero', label: t('home') },
    { href: '#solutions', label: t('solutions') },
    { href: '#products', label: t('products') },
    { href: '#advantages', label: t('advantages') },
    { href: '#team', label: t('team') }
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

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    } else {
      router.push(`/${locale}#contact`);
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/Laser Soldering (2)..png"
              alt="LSWEE - Laser Soldering Wisdom Energy Equipment"
              width={200}
              height={41}
              className="h-auto w-auto max-h-10"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md relative group text-slate-700 hover:text-blue-600"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-200 scale-x-0 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <a 
              href="#contact"
              onClick={handleContactClick}
              className="relative px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-blue-600 via-slate-800 to-orange-600 text-white rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px),
                    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)
                  `,
                  filter: 'blur(0.5px)',
                }}></div>
              </div>
              <span className="relative z-10">{t('contact')}</span>
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div 
        className={`lg:hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen border-t border-slate-200' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-4 bg-white/95 backdrop-blur-md space-y-2 relative overflow-visible">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                handleAnchorClick(e, item.href);
                setMobileOpen(false);
              }}
              className="block px-4 py-3 text-sm font-medium rounded-lg transition-colors text-slate-700 hover:bg-slate-50"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 pb-2 flex items-center justify-between border-t border-slate-200 relative" style={{ zIndex: 50 }}>
            <div className="relative" style={{ zIndex: 50 }}>
              <LanguageSwitcher />
            </div>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  router.push(`/${locale}#contact`);
                }
              }}
              className="relative px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-blue-600 via-slate-800 to-orange-600 text-white rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px),
                    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)
                  `,
                  filter: 'blur(0.5px)',
                }}></div>
              </div>
              <span className="relative z-10">{t('contact')}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' }
  ];

  const currentLang = languages.find(lang => lang.code === locale) || languages[0];

  const handleChange = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale || '/'}`);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.label}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 lg:z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 lg:left-auto lg:right-0 bottom-full mb-2 lg:bottom-auto lg:top-full lg:mt-2 w-[200px] sm:w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-[60]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleChange(lang.code)}
                className={`w-full flex items-center space-x-3 px-4 py-2.5 text-sm transition-colors whitespace-nowrap ${
                  locale === lang.code
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="text-lg flex-shrink-0">{lang.flag}</span>
                <span className="flex-1 text-left">{lang.label}</span>
                {locale === lang.code && (
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

