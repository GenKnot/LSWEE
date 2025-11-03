'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations('home.contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert(t('form.success'));
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-24">
          <span className="inline-block text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-[0.2em] mb-3 md:mb-4">
            {t('subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-4 md:mt-6 px-4">
            {t('description')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 lg:space-y-8">
            <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-7 bg-slate-50 border-2 border-slate-200 rounded-xl md:rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all text-base md:text-lg font-medium"
                  placeholder={t('form.namePlaceholder')}
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-7 bg-slate-50 border-2 border-slate-200 rounded-xl md:rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all text-base md:text-lg font-medium"
                  placeholder={t('form.emailPlaceholder')}
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-7 bg-slate-50 border-2 border-slate-200 rounded-xl md:rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all text-base md:text-lg font-medium"
                placeholder={t('form.subjectPlaceholder')}
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-7 bg-slate-50 border-2 border-slate-200 rounded-xl md:rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all resize-none text-base md:text-lg font-medium"
                placeholder={t('form.messagePlaceholder')}
              />
            </div>

            <div className="pt-4 md:pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full px-6 py-4 md:px-8 md:py-6 bg-gradient-to-r from-blue-600 via-slate-800 to-orange-600 text-white text-base md:text-lg font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
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
                <span className="relative z-10">{isSubmitting ? t('form.submitting') : t('form.submit')}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
