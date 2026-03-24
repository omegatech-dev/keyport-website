import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface-container-low text-on-surface py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#00628f] font-headline">Keyport Logistic Lines</span>
          </div>
          <p className="text-sm font-body text-on-surface-variant leading-relaxed">
            {t('footer.tagline')}
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-xl">social_leaderboard</span>
            </a>
            <a className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-xl">language</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline font-bold text-[#00628f]">{t('footer.services')}</h4>
          <ul className="space-y-4 text-sm font-body text-on-surface-variant">
            <li className="hover:text-primary cursor-pointer transition-colors"><Link to="/services">{t('footer.service1')}</Link></li>
            <li className="hover:text-primary cursor-pointer transition-colors"><Link to="/services">{t('footer.service2')}</Link></li>
            <li className="hover:text-primary cursor-pointer transition-colors"><Link to="/services">{t('footer.service3')}</Link></li>
            <li className="hover:text-primary cursor-pointer transition-colors"><Link to="/services">{t('footer.service4')}</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline font-bold text-[#00628f]">{t('footer.company')}</h4>
          <ul className="space-y-4 text-sm font-body text-on-surface-variant">
            <li className="hover:text-primary cursor-pointer transition-colors"><Link to="/about">{t('footer.about')}</Link></li>
            <li className="hover:text-primary cursor-pointer transition-colors">{t('footer.privacy')}</li>
            <li className="hover:text-primary cursor-pointer transition-colors">{t('footer.terms')}</li>
            <li className="hover:text-primary cursor-pointer transition-colors">{t('footer.faqs')}</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline font-bold text-[#00628f]">{t('footer.contact')}</h4>
          <ul className="space-y-4 text-sm font-body text-on-surface-variant">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-sm">location_on</span>
              <span>{t('footer.address')}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">call</span>
              <span>+504 2665-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">mail</span>
              <span>gerencia@keyportlogisticlines.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500 font-label">{t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
