import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-td-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-accent-lime">
              <span className="material-symbols-outlined text-3xl">architecture</span>
              <h2 className="text-white text-xl font-bold tracking-tight">Drywall<span className="text-accent-lime">Inc</span></h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Comprometidos con la excelencia en la construcción ligera y acabados de primera calidad en todo México.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-lime hover:text-background-dark transition-all">
                <span className="material-symbols-outlined text-sm">social_leaderboard</span>
              </a>
              <a href="#" className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-lime hover:text-background-dark transition-all">
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-accent-lime transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-accent-lime transition-colors">Servicios</Link></li>
              <li><Link to="/proyectos" className="hover:text-accent-lime transition-colors">Proyectos</Link></li>
              <li><Link to="/nosotros" className="hover:text-accent-lime transition-colors">Nosotros</Link></li>
              <li><Link to="/preguntas" className="hover:text-accent-lime transition-colors">Preguntas</Link></li>
              <li><Link to="/cotizacion" className="hover:text-accent-lime transition-colors">Cotizar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/servicios" className="hover:text-accent-lime transition-colors">Metal Framing Structures</Link></li>
              <li><Link to="/servicios" className="hover:text-accent-lime transition-colors">Drywall Installation</Link></li>
              <li><Link to="/servicios" className="hover:text-accent-lime transition-colors">Drywall Finishing</Link></li>
              <li><Link to="/servicios" className="hover:text-accent-lime transition-colors">Proximamente: Acabados Finales</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-accent-lime">location_on</span>
                315 Catmint Street Manteca, CA 95337 LIC# 1113380
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-accent-lime">call</span>
                (408)-449-1687
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-accent-lime">call</span>
                (209)-292-7330
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-accent-lime">mail</span>
                tdrywallcorporation@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 TDrywall Contractor. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
