import { getTranslations } from 'next-intl/server';

export default async function Team() {
  const t = await getTranslations('home');
  
  return (
    <section id="team" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-[0.2em] mb-3 md:mb-4">
            {t('team.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
            {t('team.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-4 md:mt-6 px-4">
            {t('team.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {t.raw('team.members').map((member: {name: string, title: string, description: string, initials: string}, index: number) => (
            <div key={index} className="group relative bg-white rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200">
              <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-blue-600 via-slate-800 to-orange-600 overflow-hidden flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px),
                        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)
                      `,
                      filter: 'blur(0.5px)',
                    }}></div>
                  </div>
                  <span className="relative z-10 text-xl md:text-2xl font-bold text-white">{member.initials}</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-blue-600 font-medium">{member.title}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

