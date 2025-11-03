'use client';

import { useTranslations } from 'next-intl';

export default function Advantages() {
  const t = useTranslations('home');
  
  return (
    <section id="advantages" className="relative py-16 md:py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
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
            radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.9) 0%, transparent 80%)
          `,
          filter: 'blur(60px)',
        }}></div>
        
        <div className="absolute w-[600px] h-[600px] bg-orange-600/30 rounded-full blur-[100px] animate-float-slow" style={{ top: '20%', left: '70%' }}></div>
        <div className="absolute w-[500px] h-[500px] bg-orange-500/25 rounded-full blur-[90px] animate-float-slow" style={{ bottom: '10%', right: '10%', animationDuration: '25s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[80px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-slate-900/50 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-[0.2em] mb-3 md:mb-4">
            {t('advantages.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
            {t('advantages.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mt-4 md:mt-6 px-4">
            {t('advantages.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {t.raw('advantages.items').map((item: {title: string, description: string}, index: number) => (
            <div key={index} className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-orange-600/20 rounded-xl md:rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full flex flex-col">
                <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-3 md:mb-4">0{index + 1}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed flex-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
