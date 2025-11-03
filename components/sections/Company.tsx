import { getTranslations } from 'next-intl/server';
import VideoPlayer from '@/components/VideoPlayer';

export default async function Company() {
  const t = await getTranslations('home');
  
  return (
    <section id="company" className="relative py-16 md:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-[0.2em] mb-3 md:mb-4">
            {t('company.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
            {t('company.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 px-4">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed text-center">
            {t('company.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <VideoPlayer videoSrc="/LSWEE 4.mov" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-slate-800 to-orange-600 overflow-hidden flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px),
                      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)
                    `,
                    filter: 'blur(0.5px)',
                  }}></div>
                </div>
                <svg className="relative z-10 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('company.mission.title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('company.mission.description')}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-slate-800 to-orange-600 overflow-hidden flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px),
                      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)
                    `,
                    filter: 'blur(0.5px)',
                  }}></div>
                </div>
                <svg className="relative z-10 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('company.vision.title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('company.vision.description')}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-slate-800 to-orange-600 overflow-hidden flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px),
                      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)
                    `,
                    filter: 'blur(0.5px)',
                  }}></div>
                </div>
                <svg className="relative z-10 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('company.partnership.title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('company.partnership.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

