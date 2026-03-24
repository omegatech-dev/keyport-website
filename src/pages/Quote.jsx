import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';

const QuotePage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCode: '+504',
    phone: '',
    year: '',
    make: '',
    model: '',
    vin: '',
    service: 'Subasta Copart/IAAI',
    destination: 'Honduras'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('quote.alert_sent'));
    // Reset form or redirect
  };

  return (
    <div className="bg-surface min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden min-h-[450px] flex items-center asymmetric-hero">
        <div className="absolute inset-0 opacity-20">
          <img
            alt={t('alt.logistics_ship')}
            className="w-full h-full object-cover"
            src="/assets/images/quote-hero.png"
          />
        </div>
        <div className="relative container mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
          <Reveal animation="animate-fade-up">
            <span className="font-label text-primary-fixed uppercase tracking-widest text-sm mb-4 block font-black">
              {t('quote.hero_tag')}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 font-headline tracking-tighter">
              {t('quote.hero_title')}
            </h1>
            <p className="text-lg text-primary-fixed opacity-90 max-w-xl font-medium">
              {t('quote.hero_desc')}
            </p>
          </Reveal>
          <Reveal animation="animate-scale-in" delay="delay-300" className="hidden md:flex justify-end">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">verified_user</span>
                <div>
                  <p className="text-white font-bold">{t('quote.secure_badge_title')}</p>
                  <p className="text-primary-fixed text-xs font-label">{t('quote.secure_badge_desc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">support_agent</span>
                <div>
                  <p className="text-white font-bold">{t('quote.support_badge_title')}</p>
                  <p className="text-primary-fixed text-xs font-label">{t('quote.support_badge_desc')}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-8 -mt-16 relative z-10 pb-24">
        <div className="bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/10 overflow-hidden grid lg:grid-cols-12">
          {/* Form Sidebar/Context */}
          <div className="lg:col-span-4 bg-surface-container-low p-10 border-r border-outline-variant/10">
            <Reveal animation="animate-slide-right">
              <h3 className="text-2xl font-bold mb-8 text-on-background">{t('quote.guide_title')}</h3>
            </Reveal>
            <div className="space-y-8">
              {[1, 2, 3].map((step) => (
                <Reveal key={step} animation="animate-fade-up" delay={`delay-${step}00`} className="flex gap-4">
                  <div className={`w-8 h-8 rounded-full ${step === 1 ? 'bg-primary text-white' : 'bg-surface-container-highest text-on-surface'} flex items-center justify-center font-bold text-sm shrink-0`}>
                    {step}
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm ${step === 1 ? 'text-primary' : 'text-on-surface'}`}>{t(`quote.guide_step${step}_title`)}</h4>
                    <p className="text-sm text-on-surface-variant mt-1">{t(`quote.guide_step${step}_desc`)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal animation="animate-scale-in" delay="delay-400" className="mt-16 p-6 rounded-lg bg-primary/5 border border-primary/10">
              <p className="text-xs font-label text-primary uppercase tracking-widest mb-2 font-bold">{t('quote.help_box_tag')}</p>
              <p className="text-sm text-on-surface mb-4">{t('quote.help_box_desc')}</p>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                <span className="material-symbols-outlined text-sm">call</span>
                {t('quote.help_box_cta')}
              </button>
            </Reveal>
          </div>

          {/* Main Form Area */}
          <div className="lg:col-span-8 p-10 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Personal Info */}
              <Reveal animation="animate-fade-up" className="space-y-6">
                <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
                  <span className="material-symbols-outlined text-primary">person</span>
                  <h2 className="text-xl font-bold text-on-background">{t('quote.section_personal')}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="font-label text-xs font-semibold uppercase tracking-wider text-outline">{t('quote.form_name')}</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-colors p-3 focus:ring-0"
                      placeholder={t('quote.form_name_ph')}
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-label text-xs font-semibold uppercase tracking-wider text-outline">{t('quote.form_email')}</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-colors p-3 focus:ring-0"
                      placeholder={t('quote.form_email_ph')}
                      type="email"
                      required
                    />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="font-label text-xs font-semibold uppercase tracking-wider text-outline">{t('quote.form_phone')}</label>
                    <div className="flex gap-2">
                      <select
                        name="phoneCode"
                        value={formData.phoneCode}
                        onChange={handleInputChange}
                        className="bg-surface-container-low border-0 border-b-2 border-transparent p-3 focus:ring-0"
                      >
                        <option>+504</option>
                        <option>+502</option>
                        <option>+1</option>
                      </select>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-colors p-3 focus:ring-0"
                        placeholder={t('quote.form_phone_ph')}
                        type="tel"
                        required
                      />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Vehicle Info */}
              <Reveal animation="animate-fade-up" delay="delay-100" className="space-y-6">
                <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
                  <span className="material-symbols-outlined text-primary">directions_car</span>
                  <h2 className="text-xl font-bold text-on-background">{t('quote.section_vehicle')}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <label className="font-label text-xs font-semibold uppercase tracking-wider text-outline">{t('quote.form_year')}</label>
                    <input
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-colors p-3 focus:ring-0"
                      placeholder="2024"
                      type="number"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-label text-xs font-semibold uppercase tracking-wider text-outline">{t('quote.form_make')}</label>
                    <input
                      name="make"
                      value={formData.make}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-colors p-3 focus:ring-0"
                      placeholder="Toyota"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-label text-xs font-semibold uppercase tracking-wider text-outline">{t('quote.form_model')}</label>
                    <input
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-colors p-3 focus:ring-0"
                      placeholder="Hilux"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1 md:col-span-3">
                    <label className="font-label text-xs font-semibold uppercase tracking-wider text-outline">{t('quote.form_vin')}</label>
                    <input
                      name="vin"
                      value={formData.vin}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-colors p-3 focus:ring-0"
                      placeholder={t('quote.form_vin_ph')}
                      type="text"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Service & Destination */}
              <Reveal animation="animate-fade-up" delay="delay-200" className="space-y-6">
                <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
                  <span className="material-symbols-outlined text-primary">public</span>
                  <h2 className="text-xl font-bold text-on-background">{t('quote.section_destination')}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="font-label text-xs font-semibold uppercase tracking-wider text-outline">{t('quote.form_service')}</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-colors p-3 focus:ring-0"
                    >
                      <option value="auction">{t('quote.service_auction')}</option>
                      <option value="pickup">{t('quote.service_pickup')}</option>
                      <option value="customs">{t('quote.service_customs')}</option>
                      <option value="license">{t('quote.service_license')}</option>
                      <option value="all-in">{t('quote.service_all_in')}</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="font-label text-xs font-semibold uppercase tracking-wider text-outline">{t('quote.form_destination')}</label>
                    <div className="flex gap-4 p-1">
                      {['Honduras', 'Guatemala'].map((dest) => (
                        <label key={dest} className="flex-1 cursor-pointer group">
                          <input
                            type="radio"
                            name="destination"
                            value={dest}
                            checked={formData.destination === dest}
                            onChange={handleInputChange}
                            className="hidden peer"
                          />
                          <div className="p-3 bg-surface-container-low rounded-lg flex items-center justify-center gap-2 peer-checked:bg-primary peer-checked:text-white transition-all shadow-sm border border-transparent peer-checked:border-primary">
                            <span className="font-bold">{t(`quote.form_${dest.toLowerCase()}`)}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Final Action */}
              <Reveal animation="animate-scale-in" delay="delay-300" className="pt-8">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-container text-white px-12 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
                >
                  {t('quote.form_submit')}
                </button>
                <p className="text-xs text-outline mt-4 font-label text-center md:text-left leading-relaxed">
                  {t('quote.privacy_note')}
                </p>
              </Reveal>
            </form>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className="bg-surface-container-low py-24 relative overflow-hidden">
        {/* Background watermark */}
        <Reveal animation="animate-fade-in" className="absolute -bottom-10 -right-10 select-none pointer-events-none">
          <span className="material-symbols-outlined text-[20rem] text-outline-variant opacity-5 rotate-12">
            local_shipping
          </span>
        </Reveal>
        <div className="container mx-auto px-8 grid md:grid-cols-3 gap-12 text-center relative z-10">
          <Reveal animation="animate-fade-up" delay="delay-100" className="p-8">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">verified_user</span>
            <h4 className="text-xl font-bold mb-2 text-on-background">{t('quote.footer_secure_title')}</h4>
            <p className="text-on-surface-variant text-sm">{t('quote.footer_secure_desc')}</p>
          </Reveal>
          <Reveal animation="animate-fade-up" delay="delay-200" className="p-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">speed</span>
            <h4 className="text-xl font-bold mb-2 text-on-background">{t('quote.footer_response_title')}</h4>
            <p className="text-on-surface-variant text-sm">{t('quote.footer_response_desc')}</p>
          </Reveal>
          <Reveal animation="animate-fade-up" delay="delay-300" className="p-8">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">location_on</span>
            <h4 className="text-xl font-bold mb-2 text-on-background">{t('quote.footer_tracking_title')}</h4>
            <p className="text-on-surface-variant text-sm">{t('quote.footer_tracking_desc')}</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;
