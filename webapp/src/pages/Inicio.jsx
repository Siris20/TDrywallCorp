import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <-- Importamos el hook de traducción
import InfiniteMarquee from '../components/InfiniteMarquee';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function Inicio() {
  const { t } = useTranslation(); // <-- Inicializamos la función de traducción
  
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoSectionRef = useRef(null);

  const scrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // 1. Traemos los textos de los proyectos desde el JSON
  const translatedProjects = t('inicio.projectsData', { returnObjects: true });

  // 2. Definimos las imágenes de forma local (esto no se traduce)
  const projectImages = [
    { before: "/imgAD/Antes.png", after: "/imgAD/Despues.png" },
    { before: "/imgAD/Antes2.png", after: "/imgAD/Despues2.png" },
    { before: "/imgAD/Antes3.png", after: "/imgAD/Despues3.png" }
  ];

  // 3. Combinamos los textos traducidos con las imágenes correspondientes
  const projects = translatedProjects.map((proj, index) => ({
    ...proj,
    before: projectImages[index].before,
    after: projectImages[index].after
  }));

  const currentProject = projects[activeProjectIndex];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[120vh] w-full flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Modern construction site with drywall" className="w-full h-full object-cover" data-alt="Interior of a large modern building under construction" src="https://th.bing.com/th/id/OIP.wENzab92ibpoTBz5wDCZDgHaE8?w=243&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" />
          <div className="absolute inset-0 bg-gradient-to-r from-td-dark via-td-dark/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 w-full">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-td-green/20 text-td-green text-xs font-bold uppercase tracking-widest border border-td-green/30">
              {t('inicio.hero.badge')}
            </span>
            <h2 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              {t('inicio.hero.title1')} <span className="text-td-green">{t('inicio.hero.title2')}</span> {t('inicio.hero.title3')}
            </h2>
            <p className="text-slate-300 text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
              {t('inicio.hero.desc')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/proyectos"
                className="bg-td-green text-td-dark px-8 py-4 rounded-xl text-base font-bold hover:shadow-[0_0_20px_rgba(93,230,25,0.4)] transition-all inline-block text-center"
              >
                {t('inicio.hero.btnProjects')}
              </Link>
              <button 
                onClick={scrollToVideo}
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">play_circle</span> {t('inicio.hero.btnProcess')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section (Stats) */}
      <section className="py-12 bg-td-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-td-green/50 transition-colors group">
              <span className="material-symbols-outlined text-td-green text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">construction</span>
              <h3 className="text-3xl font-black text-white">{t('inicio.stats.projects.value')}</h3>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{t('inicio.stats.projects.label')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-td-green/50 transition-colors group">
              <span className="material-symbols-outlined text-td-green text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">history</span>
              <h3 className="text-3xl font-black text-white">{t('inicio.stats.experience.value')}</h3>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{t('inicio.stats.experience.label')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-td-green/50 transition-colors group">
              <span className="material-symbols-outlined text-td-green text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">verified_user</span>
              <h3 className="text-3xl font-black text-white">{t('inicio.stats.delivery.value')}</h3>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{t('inicio.stats.delivery.label')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-td-green/50 transition-colors group">
              <span className="material-symbols-outlined text-td-green text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">cleaning_services</span>
              <h3 className="text-3xl font-black text-white">{t('inicio.stats.cleaning.value')}</h3>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{t('inicio.stats.cleaning.label')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Carousel */}
      <section className="py-24 bg-td-white dark:bg-td-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-2">
              <h2 className="text-td-green font-bold tracking-widest text-sm uppercase">{t('inicio.portfolio.subtitle')}</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white">{t('inicio.portfolio.title')}</h3>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)}
                className="p-3 rounded-full border border-slate-200 dark:border-white/10 dark:text-white hover:bg-td-green hover:text-td-dark transition-all duration-300 shadow-sm active:scale-95"
                aria-label={t('inicio.portfolio.prevAria')}
              >
                <span className="material-symbols-outlined select-none">arrow_back</span>
              </button>
              <button
                onClick={() => setActiveProjectIndex((prev) => (prev + 1) % projects.length)}
                className="p-3 rounded-full border border-slate-200 dark:border-white/10 dark:text-white hover:bg-td-green hover:text-td-dark transition-all duration-300 shadow-sm active:scale-95"
                aria-label={t('inicio.portfolio.nextAria')}
              >
                <span className="material-symbols-outlined select-none">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] md:h-[380px]">
              <BeforeAfterSlider
                beforeImage={currentProject.before}
                afterImage={currentProject.after}
                beforeLabel={t('inicio.portfolio.before')}
                afterLabel={t('inicio.portfolio.after')}
              />
            </div>
            <div className="px-4 text-center">
              <span className="text-xs font-black tracking-widest text-td-green bg-td-green/10 border border-td-green/20 px-3 py-1 rounded-full uppercase">
                {currentProject.service}
              </span>
              <h4 className="mt-2.5 text-xl font-black text-slate-900 dark:text-white leading-tight">
                {currentProject.title}
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section ref={videoSectionRef} className="relative w-full h-[600px] overflow-hidden">      
        <div className="absolute inset-0 bg-td-dark">
          <img alt="Video Background" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB-rjpwN7uJqQrbD2rOCQicpz0a_EgpKxw1GD8ETbk-pqJf7plhi_b8u8W4BE8b-c_VpRP6yl23dmeyYq7yIPG_XtI5cYHPI_Q0FtCXf87WqwC_fuqjVSOmDOLtzaRLZGQ1XnQeKb7_lCo-DfXix19a4eaVZoL1IhV0jzwmnuWmuKqYLJq1kSlCtLGF8ZjfYKwbIjdsimXmLQTDS3UdIABukKwS-ad3SLGbVRbWKJpVPx_lSUIj0i-yRKTztnV7l1erMmzr5vEczQ" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-td-dark via-transparent to-td-dark">
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="h-24 w-24 rounded-full bg-td-green text-td-dark flex items-center justify-center mb-8 hover:scale-110 transition-transform shadow-[0_0_50px_rgba(93,230,25,0.3)]"
          >
            <span className="material-symbols-outlined text-5xl">play_arrow</span>
          </button>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">{t('inicio.video.title')}</h2>
          <p className="text-slate-300 text-lg max-w-xl">{t('inicio.video.desc')}</p>
        </div>
      </section>

      {/* Modal Emergente de Video (No necesita traducción) */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-td-dark/90 backdrop-blur-md animate-fade-in">
          <div className="absolute inset-0" onClick={() => setIsVideoOpen(false)}></div>
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden aspect-video shadow-2xl z-10 border border-white/10">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 bg-td-dark/80 text-white hover:bg-td-green hover:text-td-dark h-10 w-10 rounded-full flex items-center justify-center transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <video 
              src="/videoPublicidad/publi.mp4" 
              controls 
              autoPlay 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Client/Partner Logos */}
      <section className="py-16 bg-white dark:bg-td-dark border-b border-slate-100 dark:border-white/5 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-10">
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm font-bold tracking-widest uppercase">{t('inicio.brands.title')}</p>
        </div>
        <div className="w-full">
          <InfiniteMarquee images={['/Marca1.webp', '/Marca2.webp', '/Marca3.webp', '/Marca4.webp']} />
        </div>
      </section>

      {/* CTA / Closing Section */}
      <section className="py-24 bg-td-green relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-td-dark/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-td-dark max-w-2xl text-center lg:text-left">
              <h2 className="text-5xl font-black tracking-tighter mb-4">{t('inicio.cta.title')}</h2>
              <p className="text-xl font-medium opacity-80">{t('inicio.cta.desc')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:tdrywallcorporation@gmail.com?subject=Solicitud%20de%20información&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios%20de%20drywall.%20Mi%20nombre%20es:%20"
                className="bg-td-dark text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-xl text-center flex justify-center items-center"
              >
                {t('inicio.cta.btnEmail')}
              </a>
              <a 
                href="tel:+14084491687"
                className="bg-transparent border-2 border-td-dark/20 text-td-dark px-10 py-5 rounded-2xl text-lg font-bold hover:bg-td-dark hover:text-white transition-all text-center flex justify-center items-center"
              >
                {t('inicio.cta.btnCall')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}