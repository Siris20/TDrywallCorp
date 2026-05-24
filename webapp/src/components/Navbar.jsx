import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 lg:px-20 py-4 transition-all duration-500 ${scrolled
        ? "bg-td-white   shadow-lg font-bold"
        : "bg-[#132826]"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img src="./logo.webp" alt="Logo" className="h-10 w-auto" />
          <h1 className={`text-xl font-display font-bold transition-colors duration-500 ${scrolled ? "text-td-dark" : "text-white"
            }`}>
            Drywall<span className="text-td-green">Contractor</span>
          </h1>
        </Link>

        {/* Links - Ahora cambian de color dinámicamente */}
        <nav className={`hidden md:flex items-center gap-8 font-display transition-colors duration-500 ${scrolled ? "text-td-dark" : "text-white"
          }`}>
          <Link to="/" className="hover:text-td-green transition-colors">{t('navbar.inicio')}</Link>
          <Link to="/servicios" className="hover:text-td-green transition-colors">{t('navbar.servicios')}</Link>
          <Link to="/proyectos" className="hover:text-td-green transition-colors">{t('navbar.proyectos')}</Link>
          <Link to="/nosotros" className="hover:text-td-green transition-colors">{t('navbar.nosotros')}</Link>
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          <Link
            to="/cotizacion"
            className="bg-td-green text-td-dark px-6 py-2 rounded-xl text-xs font-bold hover:scale-105 transition-all shadow-sm"
          >
            {t('navbar.cotizar')}
          </Link>

          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 border px-3 py-2 rounded-xl text-xs font-bold transition-all duration-500 ${scrolled
              ? "border-td-dark/20 text-td-dark hover:bg-td-dark/5"
              : "border-td-white/20 text-td-white hover:bg-td-white/10"
              }`}>
            <span className="material-symbols-outlined !text-sm">language</span> {i18n.language.startsWith('es') ? t('navbar.en') : t('navbar.es')}
          </button>
        </div>
      </div>
    </header>
  );
}