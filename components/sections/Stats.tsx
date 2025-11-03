import { getTranslations } from 'next-intl/server';

export default async function Stats() {
  const t = await getTranslations('home');
  
  return (
    <section id="stats" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-[0.2em] mb-3 md:mb-4">
            {t('stats.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            {t('stats.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {t.raw('stats.items').map((item: {value: string, label: string}, index: number) => (
            <div key={index} className="text-center p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-2 md:mb-4">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider font-medium leading-tight">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

