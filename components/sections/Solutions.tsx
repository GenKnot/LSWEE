import { getTranslations } from 'next-intl/server';
import VideoPlayer from '@/components/VideoPlayer';

export default async function Solutions() {
  const t = await getTranslations('home');
  
  return (
    <section id="solutions" className="relative py-16 md:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-[0.2em] mb-3 md:mb-4">
            {t('solutions.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent block pb-1">
              {t('solutions.title')}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-4 md:mt-6 px-4">
            {t('solutions.description')}
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <VideoPlayer videoSrc="/BGV.mov" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.raw('solutions.items').map((item: {title: string, description: string}, index: number) => (
            <div key={index} className="group relative bg-white rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 border-2 border-slate-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-300">
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 via-slate-800 to-orange-600 overflow-hidden flex items-center justify-center mb-6 transition-all group-hover:scale-110 shadow-lg">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px),
                      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)
                    `,
                    filter: 'blur(0.5px)',
                  }}></div>
                </div>
                <svg className="relative z-10 w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 md:mb-4 transition-colors">{item.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed transition-colors">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

