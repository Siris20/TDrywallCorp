import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'TDRywall Corp',
        text: 'Mira los servicios profesionales de TDRywall Corp.',
        url: window.location.href,
      });
    } catch (err) {
      console.log('Error al compartir', err);
    }
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert('¡Enlace copiado al portapapeles!');
  }
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-td-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-accent-lime">
              <img src="./logo.webp" alt="Logo" className="h-10 w-auto" />
              <h2 className="text-white text-xl font-bold tracking-tight">
                Drywall <span className="text-accent-lime">Corp</span>
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handleShare} 
                className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-lime hover:text-background-dark transition-all"
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </button>
            </div>
          </div>

          {/* Columna Enlaces */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.links.title')}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-accent-lime transition-colors">{t('footer.links.home')}</Link></li>
              <li><Link to="/servicios" className="hover:text-accent-lime transition-colors">{t('footer.links.services')}</Link></li>
              <li><Link to="/proyectos" className="hover:text-accent-lime transition-colors">{t('footer.links.projects')}</Link></li>
              <li><Link to="/nosotros" className="hover:text-accent-lime transition-colors">{t('footer.links.about')}</Link></li>
              <li><Link to="/preguntas" className="hover:text-accent-lime transition-colors">{t('footer.links.faq')}</Link></li>
              <li><Link to="/cotizacion" className="hover:text-accent-lime transition-colors">{t('footer.links.quote')}</Link></li>
            </ul>
          </div>

          {/* Columna Servicios */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.services.title')}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/servicios" className="hover:text-accent-lime transition-colors">{t('footer.services.metalFraming')}</Link></li>
              <li><Link to="/servicios" className="hover:text-accent-lime transition-colors">{t('footer.services.installation')}</Link></li>
              <li><Link to="/servicios" className="hover:text-accent-lime transition-colors">{t('footer.services.finishing')}</Link></li>
              <li><Link to="/servicios" className="hover:text-accent-lime transition-colors">{t('footer.services.painting')}</Link></li>
            </ul>
          </div>

          {/* Columna Contacto */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.contact.title')}</h4>
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

        {/* Derechos */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}