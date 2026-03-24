import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';

const ContactPage = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-surface min-h-screen pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 text-white">
          <img
            alt={t('alt.logistics_bg')}
            className="w-full h-full object-cover grayscale brightness-[0.3]"
            src="/assets/images/contact-hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 w-full">
          <Reveal animation="animate-fade-up" className="max-w-2xl">
            <span className="font-label text-primary-fixed font-semibold uppercase tracking-[0.2em] mb-4 block text-primary">
              {t('contact.hero_tag')}
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white tracking-tight leading-tight mb-6">
              {t('contact.hero_title')}
            </h1>
            <p className="text-lg text-slate-200 font-body max-w-lg mb-8 leading-relaxed">
              {t('contact.hero_desc')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info & Cards (Left Column) */}
          <div className="lg:col-span-5 space-y-12">
            <Reveal animation="animate-slide-right" className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">
                {t('contact.info_title')}
              </h2>
              <div className="w-16 h-1.5 bg-primary rounded-full"></div>
            </Reveal>

            {/* Bento Contact Info */}
            <div className="grid grid-cols-1 gap-6">
              {/* Address Card */}
              <Reveal animation="animate-fade-up" delay="delay-100" className="p-8 bg-surface-container-low rounded-2xl border-l-4 border-primary group hover:bg-surface-container-lowest transition-all duration-300 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                  <div>
                    <h3 className="font-headline font-bold text-lg mb-1">{t('contact.address_title')}</h3>
                    <p className="text-on-surface-variant font-body leading-relaxed">{t('contact.address_value')}</p>
                  </div>
                </div>
              </Reveal>

              {/* Communication Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Reveal animation="animate-fade-up" delay="delay-200" className="p-8 bg-surface-container-low rounded-2xl group hover:bg-surface-container-lowest transition-all duration-300 shadow-sm border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">call</span>
                  <h3 className="font-headline font-bold text-lg mb-2">{t('contact.phone_title')}</h3>
                  <div className="space-y-1">
                    <p className="text-on-surface-variant font-label text-sm font-semibold tracking-wider">8921-3401</p>
                    <p className="text-on-surface-variant font-label text-sm font-semibold tracking-wider">8777-0513</p>
                  </div>
                </Reveal>
                <Reveal animation="animate-fade-up" delay="delay-300" className="p-8 bg-surface-container-low rounded-2xl group hover:bg-surface-container-lowest transition-all duration-300 shadow-sm border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">mail</span>
                  <h3 className="font-headline font-bold text-lg mb-2">{t('contact.email_title')}</h3>
                  <p className="text-on-surface-variant font-label text-xs sm:text-sm break-all font-semibold">gerencia@keyportlogisticlines.com</p>
                </Reveal>
              </div>

              {/* WhatsApp CTA Card */}
              <Reveal animation="animate-fade-up" delay="delay-400">
                <a
                  className="block p-8 bg-primary rounded-2xl text-on-primary hover:opacity-95 transition-all transform hover:-translate-y-1 shadow-[0_12px_48px_rgba(0,98,143,0.3)] group"
                  href="https://wa.me/50489213401"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <span className="material-symbols-outlined text-4xl">chat</span>
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-xl">{t('contact.whatsapp_title')}</h3>
                        <p className="text-primary-fixed text-sm opacity-90">{t('contact.whatsapp_desc')}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-3xl transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <Reveal animation="animate-scale-in" delay="delay-200" className="bg-surface-container-lowest p-10 lg:p-14 rounded-3xl shadow-[0_24px_64px_rgba(24,28,32,0.08)] border border-outline-variant/10 h-full">
              <div className="mb-10">
                <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight mb-4">
                  {t('contact.form_title')}
                </h2>
                <p className="text-on-surface-variant font-body leading-relaxed max-w-md">
                  {t('contact.form_desc')}
                </p>
              </div>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">
                      {t('contact.form_name')}
                    </label>
                    <input
                      className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body placeholder:text-slate-400"
                      placeholder={t('contact.form_name_ph')}
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">
                      {t('contact.form_email')}
                    </label>
                    <input
                      className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body placeholder:text-slate-400"
                      placeholder={t('contact.form_email_ph')}
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">
                      {t('contact.form_phone')}
                    </label>
                    <input
                      className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body placeholder:text-slate-400"
                      placeholder={t('contact.form_phone_ph')}
                      type="tel"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">
                      {t('contact.form_subject')}
                    </label>
                    <select className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body appearance-none cursor-pointer">
                      <option>{t('contact.subject_quote')}</option>
                      <option>{t('contact.subject_general')}</option>
                      <option>{t('contact.subject_other')}</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">
                    {t('contact.form_message')}
                  </label>
                  <textarea
                    className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body placeholder:text-slate-400 resize-none"
                    placeholder={t('contact.form_message_ph')}
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  className="w-full bg-primary text-on-primary py-5 rounded-2xl font-headline font-black text-lg flex items-center justify-center gap-3 hover:opacity-95 transition-all shadow-lg hover:shadow-primary/20 scale-100 active:scale-95 group"
                  type="submit"
                >
                  {submitted ? t('contact.form_sent') : t('contact.form_submit')}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="w-full py-24 bg-surface-container-low relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
            <Reveal animation="animate-slide-right" className="max-w-2xl">
              <h2 className="text-4xl font-headline font-black text-on-surface tracking-tighter mb-6 underline decoration-primary decoration-8 underline-offset-4">
                {t('contact.map_title')}
              </h2>
              <p className="text-on-surface-variant font-body text-lg leading-relaxed">
                {t('contact.map_desc')}
              </p>
            </Reveal>
            <Reveal animation="animate-fade-in" delay="delay-500" className="flex gap-4">
              <button className="bg-surface-container-highest p-5 rounded-full hover:bg-primary hover:text-on-primary transition-all shadow-md active:scale-90">
                <span className="material-symbols-outlined text-2xl">directions</span>
              </button>
            </Reveal>
          </div>

          <Reveal animation="animate-scale-in" delay="delay-200" className="h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl relative grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 border-8 border-white group">
            {/* Google Maps Embed */}
            <div className="absolute inset-0 bg-slate-200">
              <iframe
                title="Google Maps Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Keyport%20Logistic%20Lines%20Puerto%20Cortes&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="group-hover:scale-105 transition-transform duration-[2000ms]"
              ></iframe>
              <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            </div>

            {/* Map Pin Floating Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 mb-3 animate-bounce border border-primary/10">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-on-primary shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-2xl">local_shipping</span>
                </div>
                <span className="font-headline font-black text-on-surface">{t('contact.map_hq')}</span>
              </div>
              <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-2xl ring-4 ring-primary/20"></div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
