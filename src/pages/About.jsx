import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-background text-on-background font-body overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt={t('alt.honduras_map')}
            className="w-full h-full object-cover grayscale-[10%] brightness-[0.5]"
            src="/assets/images/honduras-map-bg.png"
          />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <Reveal animation="animate-fade-up" className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-primary/20 text-primary-fixed font-label text-sm font-semibold tracking-wider rounded-full mb-6 uppercase">
              {t('about.hero_tag')}
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white font-headline leading-tight tracking-tighter mb-8">
              <Trans
                i18nKey="about.hero_title"
                components={[<span key="0" className="text-primary-fixed" />]}
              />
            </h1>
            <p className="text-xl text-surface-container-high font-body max-w-2xl leading-relaxed">
              {t('about.hero_desc')}
            </p>
          </Reveal>
        </div>
        {/* Decorative Element */}
        <Reveal animation="animate-fade-in" delay="delay-500" className="absolute bottom-0 right-0 p-12 opacity-10 hidden lg:block">
          <span className="material-symbols-outlined text-[20rem] text-white">directions_boat</span>
        </Reveal>
      </section>

      {/* Our History Content */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <Reveal animation="animate-slide-right" className="lg:w-1/2">
              <h2 className="text-4xl font-black text-on-surface font-headline tracking-tighter mb-8">
                {t('about.history_title')}
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>{t('about.history_p1')}</p>
                <p>
                  <Trans
                    i18nKey="about.history_p2"
                    components={[<span key="0" className="text-primary font-bold" />]}
                  />
                </p>
              </div>
            </Reveal>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <Reveal animation="animate-scale-in" delay="delay-100" className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-center aspect-square shadow-sm">
                <span className="text-5xl font-black text-primary mb-2 tracking-tighter">15+</span>
                <span className="font-label text-on-secondary-container uppercase tracking-widest text-xs font-bold">
                  {t('about.stats_exp_years')}
                </span>
              </Reveal>
              <Reveal animation="animate-scale-in" delay="delay-200" className="bg-primary rounded-xl p-8 flex flex-col justify-center aspect-square text-on-primary relative overflow-hidden shadow-lg">
                <span className="text-5xl font-black mb-2 tracking-tighter relative z-10">5k+</span>
                <span className="font-label uppercase tracking-widest text-xs font-bold relative z-10">
                  {t('about.stats_vehicles')}
                </span>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-8xl opacity-20">
                  local_shipping
                </span>
              </Reveal>
              <Reveal animation="animate-fade-up" delay="delay-300" className="col-span-2 bg-surface-container-highest rounded-xl p-8 flex items-center gap-6 shadow-sm border border-outline-variant/10">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary">public</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-on-surface">{t('about.stats_network_title')}</h4>
                  <p className="text-on-surface-variant text-sm">{t('about.stats_network_desc')}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-8">
          <Reveal animation="animate-fade-up" className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-on-surface font-headline tracking-tighter mb-4">
              {t('about.team_title')}
            </h2>
            <p className="text-on-surface-variant font-body">{t('about.team_desc')}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CEO Card - Featured */}
            <Reveal animation="animate-fade-up" className="lg:col-span-2 bg-surface rounded-2xl overflow-hidden shadow-[0_12px_48px_rgba(24,28,32,0.08)] border border-outline-variant/10 flex flex-col md:flex-row group">
              <div className="md:w-1/2 h-80 md:h-auto overflow-hidden">
                <img
                  alt={t('alt.ceo_portrait')}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  src="/assets/images/keylin-orellana.png"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
                  {t('about.ceo_role')}
                </span>
                <h3 className="text-3xl font-black text-on-surface font-headline mb-4 tracking-tight">
                  {t('about.ceo_name')}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  {t('about.ceo_desc')}
                </p>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70">mail</span>
                  <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70">link</span>
                </div>
              </div>
            </Reveal>
            {/* Team Member 2 */}
            <Reveal animation="animate-fade-up" delay="delay-100" className="bg-surface rounded-2xl p-6 shadow-[0_8px_32px_rgba(24,28,32,0.04)] border border-outline-variant/10 flex flex-col group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6">
                <img
                  alt={t('alt.ops_portrait')}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  src="/assets/images/roberto-mendez.png"
                />
              </div>
              <span className="text-secondary font-bold text-[10px] uppercase tracking-widest mb-1 block">
                {t('about.ops_role')}
              </span>
              <h4 className="text-xl font-bold text-on-surface font-headline mb-2">{t('about.ops_name')}</h4>
              <p className="text-on-surface-variant text-xs leading-relaxed">{t('about.ops_desc')}</p>
            </Reveal>
            {/* Team Member 3 */}
            <Reveal animation="animate-fade-up" delay="delay-200" className="bg-surface rounded-2xl p-6 shadow-[0_8px_32px_rgba(24,28,32,0.04)] border border-outline-variant/10 flex flex-col group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6">
                <img
                  alt={t('alt.specialist_portrait')}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  src="/assets/images/elena-castillo.png"
                />
              </div>
              <span className="text-secondary font-bold text-[10px] uppercase tracking-widest mb-1 block">
                {t('about.spec_role')}
              </span>
              <h4 className="text-xl font-bold text-on-surface font-headline mb-2">{t('about.spec_name')}</h4>
              <p className="text-on-surface-variant text-xs leading-relaxed">{t('about.spec_desc')}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline-variant/20 overflow-hidden rounded-2xl">
            {/* Mission */}
            <Reveal animation="animate-fade-in" className="bg-surface-container-lowest p-12 lg:p-20 group hover:bg-primary transition-colors duration-500">
              <div className="mb-8 h-16 w-16 bg-primary-fixed rounded-xl flex items-center justify-center group-hover:bg-on-primary transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">flag</span>
              </div>
              <h3 className="text-3xl font-black text-on-surface font-headline mb-6 group-hover:text-on-primary transition-colors tracking-tight">
                {t('about.mission_title')}
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed group-hover:text-on-primary/80 transition-colors">
                {t('about.mission_desc')}
              </p>
            </Reveal>
            {/* Vision */}
            <Reveal animation="animate-fade-in" delay="delay-100" className="bg-surface-container-lowest p-12 lg:p-20 group hover:bg-primary transition-colors duration-500">
              <div className="mb-8 h-16 w-16 bg-primary-fixed rounded-xl flex items-center justify-center group-hover:bg-on-primary transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
              </div>
              <h3 className="text-3xl font-black text-on-surface font-headline mb-6 group-hover:text-on-primary transition-colors tracking-tight">
                {t('about.vision_title')}
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed group-hover:text-on-primary/80 transition-colors">
                {t('about.vision_desc')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none flex items-center justify-center">
          <span className="material-symbols-outlined text-[40rem]">architecture</span>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <Reveal animation="animate-fade-up" className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-on-surface font-headline tracking-tighter mb-4">
              {t('about.values_title')}
            </h2>
            <p className="text-on-surface-variant font-body">{t('about.values_desc')}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((val) => (
              <Reveal
                key={val}
                animation="animate-fade-up"
                delay={`delay-${val}00`}
                className="p-8 bg-surface-container-lowest rounded-xl shadow-[0_12px_32px_rgba(24,28,32,0.04)] text-center border border-outline-variant/10"
              >
                <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    {val === 1 ? 'search_check' : val === 2 ? 'bolt' : 'person_celebrate'}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-on-surface font-headline mb-3">
                  {t(`about.value${val}_title`)}
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{t(`about.value${val}_desc`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Objectives Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <Reveal animation="animate-fade-in" className="flex items-end justify-between mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-on-surface font-headline tracking-tighter mb-4">
                {t('about.objectives_title')}
              </h2>
              <p className="text-on-surface-variant">{t('about.objectives_desc')}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Reveal animation="animate-fade-up" className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/10 shadow-sm">
              <span className="font-label text-primary font-bold text-xs uppercase tracking-widest mb-4 block">
                {t('about.obj1_tag')}
              </span>
              <h3 className="text-2xl font-bold font-headline text-on-surface mb-4">
                {t('about.obj1_title')}
              </h3>
              <p className="text-on-secondary-container">{t('about.obj1_desc')}</p>
            </Reveal>
            <Reveal animation="animate-scale-in" delay="delay-100" className="bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-end relative overflow-hidden shadow-lg">
              <span className="material-symbols-outlined absolute top-4 right-4 text-6xl opacity-20">
                trending_down
              </span>
              <h3 className="text-2xl font-bold font-headline mb-2">{t('about.obj2_title')}</h3>
              <p className="text-sm opacity-90">{t('about.obj2_desc')}</p>
            </Reveal>
            <Reveal animation="animate-fade-up" delay="delay-200" className="bg-surface-container-highest p-10 rounded-xl flex flex-col justify-center shadow-sm">
              <h3 className="text-xl font-bold font-headline text-on-surface mb-2">{t('about.obj3_title')}</h3>
              <p className="text-on-surface-variant text-sm">{t('about.obj3_desc')}</p>
            </Reveal>
            <Reveal animation="animate-fade-up" delay="delay-300" className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/10 md:col-span-1 shadow-sm">
              <h3 className="text-xl font-bold font-headline text-on-surface mb-2">{t('about.obj4_title')}</h3>
              <p className="text-on-surface-variant text-sm">{t('about.obj4_desc')}</p>
            </Reveal>
            <Reveal animation="animate-fade-up" className="md:col-span-3 bg-[#181c20] text-white p-10 rounded-xl flex items-center gap-8 relative overflow-hidden shadow-2xl">
              <div className="shrink-0">
                <img
                  alt={t('alt.ceo_quote')}
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                  src="/assets/images/about-team-placeholder.png"
                />
              </div>
              <div>
                <p className="text-lg italic font-body mb-2 text-surface-container-high">
                  {t('about.quote_text')}
                </p>
                <span className="font-bold text-primary-fixed">{t('about.ceo_name')} — {t('about.quote_author')}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <Reveal animation="animate-fade-up" className="bg-gradient-to-br from-primary to-primary-container rounded-2xl p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/watermark-bg.png')] bg-cover bg-center grayscale group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white font-headline tracking-tighter mb-8 leading-tight">
                {t('about.cta_title')}
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-headline font-black rounded-lg hover:bg-surface-container-lowest transition-all scale-100 active:scale-95 shadow-xl"
                >
                  {t('about.cta_contact')}
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-10 py-4 border-2 border-white/30 text-white font-headline font-black rounded-lg hover:bg-white/10 transition-all"
                >
                  {t('about.cta_services')}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
