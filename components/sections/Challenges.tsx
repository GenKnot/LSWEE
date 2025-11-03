import { getTranslations } from 'next-intl/server';

export default async function Challenges() {
  const t = await getTranslations('home');
  
  return (
    <section id="challenges" className="relative py-16 md:py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-[0.2em] mb-3 md:mb-4">
            {t('challenges.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
            {t('challenges.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mt-4 md:mt-6 px-4">
            {t('challenges.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {t.raw('challenges.items').map((item: {title: string, description: string}, index: number) => (
            <div key={index} className="group relative bg-white rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="absolute top-0 left-6 md:left-8 w-12 md:w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-xl md:text-2xl font-bold text-white">{index + 1}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 md:mb-4">{item.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

