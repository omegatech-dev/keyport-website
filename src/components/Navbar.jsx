import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_12px_32px_rgba(24,28,32,0.06)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={handleNavClick}>
          <img
            alt="Keyport Logistic Lines Logo"
            className="h-10 w-auto group-hover:scale-105 transition-transform"
            src="/assets/images/logo.png"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-headline font-semibold text-sm tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              className={`${isActive(link.path) ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-colors'}`}
              to={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-outline-variant/30 text-xs font-bold font-label hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-sm">language</span>
            {i18n.language.toUpperCase()}
          </button>

          <button
            onClick={() => navigate('/quote')}
            className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-headline font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-sm"
          >
            {t('nav.quote')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
           {/* Language switcher always visible or in menu? Let's keep it visible for quick access even on mobile header maybe? 
               Actually, a clean header is better. Let's put it next to the hamburger. */}
           <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded-lg border border-outline-variant/30 text-[10px] font-bold font-label"
          >
            {i18n.language.toUpperCase()}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-on-surface p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-20 bg-surface z-40 transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden border-t border-outline-variant/10`}
      >
        <div className="flex flex-col p-8 space-y-8 h-full">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                onClick={handleNavClick}
                className={`text-2xl font-headline font-bold ${
                  isActive(link.path) ? 'text-primary' : 'text-on-surface-variant'
                }`}
                to={link.path}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-outline-variant/20 space-y-6">
            <button
              onClick={() => {
                navigate('/quote');
                handleNavClick();
              }}
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline font-black text-lg shadow-lg"
            >
              {t('nav.quote')}
            </button>
            
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
              <span className="font-label font-bold text-sm uppercase tracking-widest text-outline">
                {i18n.language === 'es' ? 'Lenguaje' : 'Language'}
              </span>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-highest font-bold text-sm"
              >
                <span className="material-symbols-outlined text-lg">language</span>
                {i18n.language === 'es' ? 'Español' : 'English'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
