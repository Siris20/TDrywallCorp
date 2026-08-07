import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estructura de estado para el menú móvil

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
      className={`fixed top-0 z-[1000] isolation-isolate w-full px-6 lg:px-20 py-4 transition-all duration-500 ${scrolled
        ? "bg-td-white shadow-lg font-bold"
        : "bg-[#132826]"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img src="./logo.webp" alt="Logo" className="h-10 w-auto" />
          <h1 className={`text-xl font-display font-bold transition-colors duration-500 ${scrolled ? "text-td-dark" : "text-white"
            }`}>
            Drywall <span className="text-td-green">Corp</span>
          </h1>
        </Link>

        {/* Links - Escritorio (hidden en móviles, flex en md) */}
        <nav className={`hidden md:flex items-center gap-8 font-display transition-colors duration-500 ${scrolled ? "text-td-dark" : "text-white"
          }`}>
          <Link to="/" className="hover:text-td-green transition-colors">{t('navbar.inicio')}</Link>
          <Link to="/servicios" className="hover:text-td-green transition-colors">{t('navbar.servicios')}</Link>
          <Link to="/proyectos" className="hover:text-td-green transition-colors">{t('navbar.proyectos')}</Link>
          <Link to="/nosotros" className="hover:text-td-green transition-colors">{t('navbar.nosotros')}</Link>
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          {/* Botón Cotizar - Oculto en móviles pequeños para no saturar, visible en sm y más */}
          <Link
            to="/cotizacion"
            className="hidden sm:inline-block bg-td-green text-td-dark px-6 py-2 rounded-xl text-xs font-bold hover:scale-105 transition-all shadow-sm"
          >
            {t('navbar.cotizar')}
          </Link>

          {/* Selector de idioma */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 border px-3 py-2 rounded-xl text-xs font-bold transition-all duration-500 ${scrolled
              ? "border-td-dark/20 text-td-dark hover:bg-td-dark/5"
              : "border-td-white/20 text-td-white hover:bg-td-white/10"
              }`}>
            <span className="material-symbols-outlined !text-sm">language</span> {i18n.language.startsWith('es') ? t('navbar.en') : t('navbar.es')}
          </button>

          {/* Botón Hamburguesa - Solo visible en móviles (md:hidden) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden flex items-center justify-center p-2 rounded-xl transition-colors ${scrolled ? "text-td-dark hover:bg-td-dark/5" : "text-white hover:bg-white/10"
              }`}
          >
            <span className="material-symbols-outlined !text-2xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out border-t ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
          } ${scrolled
            ? "bg-td-white border-td-dark/10 shadow-xl"
            : "bg-[#132826] border-white/10"
          }`}
      >
        <nav className={`flex flex-col p-6 gap-4 font-display ${scrolled ? "text-td-dark" : "text-white"}`}>
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-td-green transition-colors py-2 border-b border-gray-100/10">{t('navbar.inicio')}</Link>
          <Link to="/servicios" onClick={() => setIsOpen(false)} className="hover:text-td-green transition-colors py-2 border-b border-gray-100/10">{t('navbar.servicios')}</Link>
          <Link to="/proyectos" onClick={() => setIsOpen(false)} className="hover:text-td-green transition-colors py-2 border-b border-gray-100/10">{t('navbar.proyectos')}</Link>
          <Link to="/nosotros" onClick={() => setIsOpen(false)} className="hover:text-td-green transition-colors py-2 border-b border-gray-100/10">{t('navbar.nosotros')}</Link>

          {/* Botón de cotizar repetido dentro del menú móvil solo para pantallas muy pequeñas */}
          <Link
            to="/cotizacion"
            onClick={() => setIsOpen(false)}
            className="sm:hidden bg-td-green text-td-dark text-center px-6 py-3 rounded-xl text-xs font-bold mt-2 shadow-sm"
          >
            {t('navbar.cotizar')}
          </Link>
        </nav>
      </div>
    </header>
  );
}