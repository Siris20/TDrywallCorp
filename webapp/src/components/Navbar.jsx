import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        ? "td-white/50 backdrop-blur-md shadow-lg font-bold"
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
          <Link to="/" className="hover:text-td-green transition-colors">Inicio</Link>
          <Link to="/servicios" className="hover:text-td-green transition-colors">Servicios</Link>
          <Link to="/proyectos" className="hover:text-td-green transition-colors">Proyectos</Link>
          <Link to="/nosotros" className="hover:text-td-green transition-colors">Nosotros</Link>
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          <Link
            to="/cotizacion"
            className="bg-td-green text-td-dark px-6 py-2 rounded-xl text-xs font-bold hover:scale-105 transition-all shadow-sm"
          >
            COTIZAR
          </Link>

          <button className={`flex items-center gap-2 border px-3 py-2 rounded-xl text-xs font-bold transition-all duration-500 ${scrolled
            ? "border-td-dark/20 text-td-dark hover:bg-td-dark/5"
            : "border-td-white/20 text-td-white hover:bg-td-white/10"
            }`}>
            <span className="material-symbols-outlined !text-sm">language</span> ES
          </button>
        </div>
      </div>
    </header>
  );
}