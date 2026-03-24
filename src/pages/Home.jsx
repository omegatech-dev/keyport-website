import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import Reveal from '../components/Reveal';

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f8fafc]">
        {/* Animated Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-[0.85] saturate-[1.1]"
            style={{ animation: 'slow-zoom 30s ease-in-out infinite alternate' }}
            alt={t('alt.hero_car')}
            src="/assets/images/car-carrier-4k.jpg"
          />
          {/* Enhanced Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 to-[#f8fafc]/20 lg:via-[#f8fafc]/80 lg:to-transparent"></div>
          {/* Subtle Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl space-y-10">
            <Reveal animation="animate-fade-up" className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary"></span>
                <span className="text-primary font-label text-xs font-bold uppercase tracking-[0.3em]">
                  {t('home.hero_tag')}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-headline font-black text-on-surface leading-[0.95] tracking-[-0.04em]">
                <Trans
                  i18nKey="home.hero_title"
                  components={[<span key="0" className="text-primary" />]}
                />
              </h1>

              <p className="text-xl md:text-2xl text-on-surface-variant font-body leading-relaxed max-w-xl opacity-90 border-l-4 border-primary/20 pl-6">
                {t('home.hero_desc')}
              </p>
            </Reveal>

            <Reveal animation="animate-fade-up" delay="delay-200" className="flex flex-wrap gap-5">
              <button
                onClick={() => navigate('/quote')}
                className="group relative px-10 py-5 bg-primary text-white rounded-2xl font-headline font-bold text-lg overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(0,98,143,0.3)] hover:-translate-y-1"
              >
                <div className="relative z-10 flex items-center gap-3">
                  {t('home.hero_cta')}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-container to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button className="px-10 py-5 bg-white text-primary border-2 border-primary/10 rounded-2xl font-headline font-bold text-lg flex items-center gap-3 hover:bg-white hover:border-primary/30 transition-all hover:-translate-y-1 shadow-sm">
                <span className="material-symbols-outlined">chat</span>
                {t('home.hero_whatsapp')}
              </button>
            </Reveal>

            <Reveal animation="animate-fade-up" delay="delay-400" className="flex items-center gap-8 pt-8 border-t border-outline-variant/30">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-12 h-12 rounded-full border-4 border-[#f8fafc] bg-surface-container shadow-lg flex items-center justify-center`}>
                    <span className="material-symbols-outlined text-primary/40 text-sm">person</span>
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-[#f8fafc] bg-primary text-white flex items-center justify-center text-xs font-bold shadow-lg">
                  {t('home.stats_clients')}
                </div>
              </div>
              <div>
                <p className="text-lg font-headline font-bold text-on-surface leading-tight">
                  {t('home.stats_vehicles_monthly')}
                </p>
                <p className="text-sm font-label text-on-surface-variant uppercase tracking-widest font-bold opacity-60">
                  {t('home.stats_monthly_tag')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal animation="animate-fade-up" delay="delay-100" className="p-10 bg-surface-container-lowest rounded-2xl space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h3 className="text-2xl font-headline font-bold">{t('home.features.trust')}</h3>
              <p className="text-on-surface-variant leading-relaxed">{t('home.features.trust_desc')}</p>
            </Reveal>
            <Reveal animation="animate-fade-up" delay="delay-200" className="p-10 bg-primary text-on-primary rounded-2xl space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">security</span>
              </div>
              <h3 className="text-2xl font-headline font-bold">{t('home.features.security')}</h3>
              <p className="text-primary-fixed leading-relaxed">{t('home.features.security_desc')}</p>
            </Reveal>
            <Reveal animation="animate-fade-up" delay="delay-300" className="p-10 bg-surface-container-lowest rounded-2xl space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">speed</span>
              </div>
              <h3 className="text-2xl font-headline font-bold">{t('home.features.efficiency')}</h3>
              <p className="text-on-surface-variant leading-relaxed">{t('home.features.efficiency_desc')}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface" id="services">
        <div className="max-w-7xl mx-auto px-8">
          <Reveal animation="animate-fade-in" className="mb-16 max-w-2xl">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6">{t('home.services_title')}</h2>
            <p className="text-lg text-on-surface-variant font-body">{t('home.services_desc')}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Service 1 */}
            <Reveal animation="animate-scale-in" className="md:col-span-8 bg-surface-container-lowest rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm group">
              <div className="w-full md:w-1/2 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/assets/images/auction-banner.png"
                  alt={t('alt.auction')}
                />
              </div>
              <div className="p-10 flex flex-col justify-center w-full md:w-1/2">
                <span className="text-primary font-label font-bold text-xs uppercase tracking-tighter mb-2">{t('home.step1')}</span>
                <h3 className="text-2xl font-headline font-bold mb-4">{t('home.auction_title')}</h3>
                <p className="text-on-surface-variant mb-6">{t('home.auction_desc')}</p>
                <Link className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all" to="/services">
                  {t('home.more')} <span className="material-symbols-outlined">trending_flat</span>
                </Link>
              </div>
            </Reveal>
            {/* Service 2 */}
            <Reveal animation="animate-fade-up" delay="delay-100" className="md:col-span-4 bg-surface-container-high rounded-3xl p-10 flex flex-col justify-between hover:bg-surface-container-highest transition-colors">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-6">local_shipping</span>
                <h3 className="text-xl font-headline font-bold mb-3">{t('home.shipping_title')}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{t('home.shipping_desc')}</p>
              </div>
            </Reveal>
            {/* Service 3 */}
            <Reveal animation="animate-fade-up" delay="delay-200" className="md:col-span-4 bg-primary text-on-primary rounded-3xl p-10 flex flex-col justify-between shadow-xl">
              <div>
                <span className="material-symbols-outlined text-4xl mb-6 text-white">directions_boat</span>
                <h3 className="text-xl font-headline font-bold mb-3">{t('home.maritime_title')}</h3>
                <p className="text-sm text-primary-fixed leading-relaxed text-white/90">{t('home.maritime_desc')}</p>
              </div>
            </Reveal>
            {/* Service 4 & 5 */}
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Reveal animation="animate-slide-right" delay="delay-100" className="bg-surface-container-low rounded-3xl p-8 border-l-4 border-primary">
                <h3 className="text-xl font-headline font-bold mb-3">{t('home.customs_title')}</h3>
                <p className="text-sm text-on-surface-variant">{t('home.customs_desc')}</p>
              </Reveal>
              <Reveal animation="animate-fade-up" delay="delay-300" className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-headline font-bold mb-3">{t('home.license_title')}</h3>
                <p className="text-sm text-on-surface-variant">{t('home.license_desc')}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="py-24 bg-surface-container-low overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-8 relative">
          <span className="absolute -right-20 -bottom-20 material-symbols-outlined text-[30rem] text-outline-variant/10 pointer-events-none select-none">directions_boat</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal animation="animate-slide-right" className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-headline font-extrabold text-on-surface">{t('home.about_title')}</h2>
                <div className="w-20 h-1.5 bg-primary rounded-full"></div>
              </div>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary">rocket_launch</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold mb-2">{t('home.mission_title')}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{t('home.mission_desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary">visibility</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold mb-2">{t('home.vision_title')}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{t('home.vision_desc')}</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal animation="animate-scale-in" delay="delay-200" className="relative">
              <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-2xl relative z-10 border border-outline-variant/10">
                <h4 className="text-2xl font-headline font-bold mb-6 text-primary">{t('home.objective_title')}</h4>
                <p className="text-on-surface font-body text-lg leading-relaxed mb-8">{t('home.objective_desc')}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface p-4 rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-1">{t('home.stats_delivery_val')}</div>
                    <div className="text-xs font-label text-on-surface-variant uppercase font-bold">{t('home.stats_delivery')}</div>
                  </div>
                  <div className="bg-surface p-4 rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-1">{t('home.stats_exp_val')}</div>
                    <div className="text-xs font-label text-on-surface-variant uppercase font-bold">{t('home.stats_exp')}</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-container/30 rounded-full blur-3xl"></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-8">
          <Reveal animation="animate-fade-up" className="text-center mb-16">
            <h2 className="text-3xl font-headline font-extrabold mb-4">{t('home.faq_title')}</h2>
            <p className="text-on-surface-variant">{t('home.faq_desc')}</p>
          </Reveal>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} animation="animate-fade-up" delay={`delay-${i}00`} className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
                <div className="flex justify-between items-center cursor-pointer group">
                  <h4 className="text-lg font-bold font-headline group-hover:text-primary transition-colors">{t(`home.faq_q${i}`)}</h4>
                  <span className="material-symbols-outlined text-primary">expand_more</span>
                </div>
                <p className="mt-4 text-on-surface-variant leading-relaxed">{t(`home.faq_a${i}`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
