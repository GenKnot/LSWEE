import { getTranslations } from 'next-intl/server';

export default async function MarketOpportunity() {
  const t = await getTranslations('home');
  
  return (
    <section id="market" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-orange-600 uppercase tracking-[0.2em] mb-3 md:mb-4">
            {t('market.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
            {t('market.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-4 md:mt-6 px-4">
            {t('market.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-3 md:mb-4">
              {t('market.marketSize.value')}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider font-medium">
              {t('market.marketSize.label')}
            </div>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-3 md:mb-4">
              {t('market.cagr.value')}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider font-medium">
              {t('market.cagr.label')}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {t.raw('market.regions').map((region: {title: string, share: string, description: string}, index: number) => (
            <div key={index} className="group relative bg-white rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200">
              <div className="absolute top-0 left-6 md:left-8 w-12 md:w-16 h-1 bg-gradient-to-r from-blue-600 to-orange-500"></div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3 md:mb-4">{region.share}</div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 md:mb-4">{region.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{region.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

