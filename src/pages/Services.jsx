import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-surface font-body text-on-surface overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale-[20%] brightness-[0.4]"
            alt={t('alt.ship')}
            src="/assets/images/services-hero.png"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <Reveal animation="animate-fade-up" className="max-w-3xl">
            <span className="font-label text-primary-fixed uppercase tracking-[0.2em] text-sm mb-4 block">
              {t('services.hero_tag')}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6">
              {t('services.hero_title')}
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-10 max-w-2xl">
              {t('services.hero_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold transition-all hover:bg-primary-container"
              >
                {t('services.hero_cta')}
              </Link>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold transition-all hover:bg-white/20">
                {t('services.hero_rates')}
              </button>
            </div>
          </Reveal>
        </div>
        {/* Decorative Watermark */}
        <Reveal animation="animate-fade-in" delay="delay-500" className="absolute -bottom-20 -right-20 opacity-[0.03] select-none pointer-events-none">
          <span className="material-symbols-outlined text-[40rem]">directions_boat</span>
        </Reveal>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <Reveal animation="animate-slide-right" className="mb-16">
          <h2 className="font-headline text-3xl font-extrabold text-on-surface mb-2">
            {t('services.title')}
          </h2>
          <div className="w-20 h-1.5 bg-primary"></div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Service Card */}
          <Reveal animation="animate-scale-in" className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl relative overflow-hidden group shadow-sm border border-outline-variant/10">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">{t('services.auction_title')}</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-md">
                  {t('services.auction_desc')}
                </p>
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-4 font-label text-sm uppercase tracking-wider text-primary font-bold">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  {t('services.auction_feature1')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  {t('services.auction_feature2')}
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Side Service Card */}
          <Reveal animation="animate-fade-up" delay="delay-100" className="md:col-span-4 bg-surface-container-low p-8 rounded-xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 bg-primary text-on-primary rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">{t('services.pickup_title')}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {t('services.pickup_desc')}
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-outline-variant/20">
              <span className="font-label text-xs font-bold text-primary">{t('services.coverage')}</span>
            </div>
          </Reveal>

          {/* Bottom Row Service Cards */}
          <Reveal animation="animate-fade-up" delay="delay-200" className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl border-b-4 border-primary shadow-sm h-full">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-4">sailing</span>
            <h3 className="font-headline text-xl font-bold mb-3">{t('services.maritime_title')}</h3>
            <p className="text-on-surface-variant text-sm mb-4">
              {t('services.maritime_desc')}
            </p>
            <div className="bg-secondary-container/30 p-3 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
                location_on
              </span>
              <span className="text-xs font-bold text-on-secondary-container">{t('services.tracking')}</span>
            </div>
          </Reveal>

          <Reveal animation="animate-fade-up" delay="delay-300" className="md:col-span-4 bg-primary text-on-primary p-8 rounded-xl shadow-lg ring-1 ring-white/10">
            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">description</span>
            <h3 className="font-headline text-xl font-bold mb-3">{t('services.customs_title')}</h3>
            <p className="text-white/80 text-sm mb-6">
              {t('services.customs_desc')}
            </p>
            <Link to="/contact" className="text-primary-fixed font-bold text-sm flex items-center gap-2 group">
              {t('home.more')} <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </Reveal>

          <Reveal animation="animate-fade-up" delay="delay-400" className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20 shadow-sm">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">badge</span>
            <h3 className="font-headline text-xl font-bold mb-3">{t('services.license_title')}</h3>
            <p className="text-on-surface-variant text-sm">
              {t('services.license_desc')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal animation="animate-scale-in" className="relative">
            <div className="bg-surface-container-highest aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt={t('alt.logistics_bg')}
                src="/assets/images/services-logistics.png"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-10 rounded-xl shadow-xl hidden lg:block">
              <span className="text-white font-headline text-4xl font-black block">+15</span>
              <span className="text-primary-fixed font-label text-xs uppercase tracking-widest">{t('services.years_exp')}</span>
            </div>
          </Reveal>
          <Reveal animation="animate-slide-right" className="delay-200">
            <span className="font-label text-primary uppercase tracking-widest text-sm mb-4 block">
              {t('services.why_tag')}
            </span>
            <h2 className="font-headline text-4xl font-black mb-8 leading-tight">
              {t('services.why_title')}
            </h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg mb-2">{t('services.why_expertise')}</h4>
                  <p className="text-on-surface-variant text-sm">{t('services.why_expertise_desc')}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg mb-2">{t('services.why_reach')}</h4>
                  <p className="text-on-surface-variant text-sm">{t('services.why_reach_desc')}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg mb-2">{t('services.why_transparency')}</h4>
                  <p className="text-on-surface-variant text-sm">{t('services.why_transparency_desc')}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <Reveal animation="animate-fade-up" className="text-center mb-16">
          <h2 className="font-headline text-3xl font-extrabold mb-4">{t('services.process_title')}</h2>
          <p className="text-on-surface-variant">{t('services.process_desc')}</p>
        </Reveal>
        <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/20 -translate-y-1/2 hidden md:block"></div>
          
          {[1, 2, 3, 4, 5].map((step) => (
            <Reveal key={step} animation="animate-fade-up" delay={`delay-${step}00`} className="relative z-10 bg-surface text-center flex-1">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 ${step === 3 ? 'bg-primary border-primary text-white' : 'bg-white border-surface-container-low text-primary'}`}>
                <span className="font-headline font-black">0{step}</span>
              </div>
              <h4 className="font-bold mb-2">{t(`services.step${step}_title`)}</h4>
              <p className="text-xs text-on-surface-variant px-4">{t(`services.step${step}_desc`)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-8">
        <Reveal animation="animate-fade-up" className="max-w-5xl mx-auto bg-primary-fixed-dim rounded-2xl p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/watermark-bg.png')] bg-cover bg-center grayscale group-hover:scale-110 transition-transform duration-700"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-on-surface mb-6">
              {t('services.cta_title')}
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
              {t('services.cta_desc')}
            </p>
            <Link
              to="/quote"
              className="bg-primary text-on-primary px-10 py-5 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl inline-block"
            >
              {t('services.cta_button')}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Services;
