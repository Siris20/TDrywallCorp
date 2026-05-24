import React, { useState } from 'react';
import InfiniteMarquee from '../components/InfiniteMarquee';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function Inicio() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects = [
    {
      title: "Instalación Residencial Premium",
      service: "Acabados de Alta Gama",
      description: "Transformación completa de sala de estar y techos. Se instaló drywall con aislamiento acústico de alta calidad, acabados perfectos listos para pintura y un sistema integrado de iluminación empotrada led.",
      tags: ["Residencial", "Aislamiento Acústico", "Plafón Premium"],
      before: "/imgAD/Antes.png",
      after: "/imgAD/Despues.png",
      details: [
        { label: "Tiempo de entrega", value: "5 Días Hábiles" },
        { label: "Material principal", value: "USG Sheetrock® Firecode" },
        { label: "Nivel de acabado", value: "Nivel 5 (Exquisitez Total)" }
      ]
    },
    {
      title: "Estructuras Comerciales Modernas",
      service: "Muros Divisorios y Plafones",
      description: "Desarrollo completo de oficinas corporativas con divisiones acústicas. Diseñado para un aislamiento acústico superior entre oficinas, cumpliendo estrictas normas de seguridad contra incendios.",
      tags: ["Comercial", "Muros Divisorios", "Resistente al Fuego"],
      before: "/imgAD/Antes2.png",
      after: "/imgAD/Despues2.png",
      details: [
        { label: "Tiempo de entrega", value: "10 Días Hábiles" },
        { label: "Material principal", value: "Panel de Yeso Rh / Acústico" },
        { label: "Nivel de acabado", value: "Nivel 4 (Estándar Comercial)" }
      ]
    },
    {
      title: "Cajillos de Luz Indirecta & Diseño",
      service: "Remodelación Estética",
      description: "Remodelación decorativa de techos a doble nivel con integración de cajillos para iluminación LED indirecta, logrando un ambiente sofisticado, cálido y moderno en espacios comunes.",
      tags: ["Diseño de Interiores", "Luz Indirecta", "Remodelación"],
      before: "/imgAD/Antes3.png",
      after: "/imgAD/Despues3.png",
      details: [
        { label: "Tiempo de entrega", value: "7 Días Hábiles" },
        { label: "Material principal", value: "Drywall Flexible & Suspensiones" },
        { label: "Nivel de acabado", value: "Nivel 5 (Superficie Perfecta)" }
      ]
    }
  ];

  const currentProject = projects[activeProjectIndex];
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Modern construction site with drywall" className="w-full h-full object-cover" data-alt="Interior of a large modern building under construction" src="https://th.bing.com/th/id/OIP.wENzab92ibpoTBz5wDCZDgHaE8?w=243&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" />
          <div className="absolute inset-0 bg-gradient-to-r from-td-dark via-td-dark/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 w-full">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-td-green/20 text-td-green text-xs font-bold uppercase tracking-widest border border-td-green/30">Ofrecemos Todos los Servicios de Drywall </span>
            <h2 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Expertos en <span className="text-td-green">Instalación</span> de Drywall Profesional
            </h2>
            <p className="text-slate-300 text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
              Transformamos tus espacios con acabados de alta gama, rapidez garantizada y la máxima calidad técnica en el mercado.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-td-green text-td-dark px-8 py-4 rounded-xl text-base font-bold hover:shadow-[0_0_20px_rgba(93,230,25,0.4)] transition-all">
                VER PROYECTOS
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span> NUESTRO PROCESO
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
              <h3 className="text-3xl font-black text-white">+25</h3>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Proyectos realizados</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-td-green/50 transition-colors group">
              <span className="material-symbols-outlined text-td-green text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">history</span>
              <h3 className="text-3xl font-black text-white">23 Años</h3>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Experiencia sólida</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-td-green/50 transition-colors group">
              <span className="material-symbols-outlined text-td-green text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">verified_user</span>
              <h3 className="text-3xl font-black text-white">7 - 14 Dias</h3>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Entrega a tiempo</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-td-green/50 transition-colors group">
              <span className="material-symbols-outlined text-td-green text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">cleaning_services</span>
              <h3 className="text-3xl font-black text-white">100%</h3>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Limpieza final (segun contrato)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Carousel */}
      <section className="py-24 bg-td-white dark:bg-td-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-2">
              <h2 className="text-td-green font-bold tracking-widest text-sm uppercase">Portafolio</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white">Nuestros Resultados</h3>
            </div>
            {/* Arrows */}
            <div className="flex gap-3">
              <button 
                onClick={() => setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)}
                className="p-3 rounded-full border border-slate-200 dark:border-white/10 dark:text-white hover:bg-td-green hover:text-td-dark transition-all duration-300 shadow-sm active:scale-95"
                aria-label="Proyecto Anterior"
              >
                <span className="material-symbols-outlined select-none">arrow_back</span>
              </button>
              <button 
                onClick={() => setActiveProjectIndex((prev) => (prev + 1) % projects.length)}
                className="p-3 rounded-full border border-slate-200 dark:border-white/10 dark:text-white hover:bg-td-green hover:text-td-dark transition-all duration-300 shadow-sm active:scale-95"
                aria-label="Proyecto Siguiente"
              >
                <span className="material-symbols-outlined select-none">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Interactive Widescreen Before/After Slider */}
          <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
            <div className="h-[350px] sm:h-[450px] md:h-[550px]">
              <BeforeAfterSlider 
                beforeImage={currentProject.before} 
                afterImage={currentProject.after} 
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
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-td-dark">
          <img alt="Video Background" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB-rjpwN7uJqQrbD2rOCQicpz0a_EgpKxw1GD8ETbk-pqJf7plhi_b8u8W4BE8b-c_VpRP6yl23dmeyYq7yIPG_XtI5cYHPI_Q0FtCXf87WqwC_fuqjVSOmDOLtzaRLZGQ1XnQeKb7_lCo-DfXix19a4eaVZoL1IhV0jzwmnuWmuKqYLJq1kSlCtLGF8ZjfYKwbIjdsimXmLQTDS3UdIABukKwS-ad3SLGbVRbWKJpVPx_lSUIj0i-yRKTztnV7l1erMmzr5vEczQ" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-td-dark via-transparent to-td-dark">
          <button className="h-24 w-24 rounded-full bg-td-green text-td-dark flex items-center justify-center mb-8 hover:scale-110 transition-transform shadow-[0_0_50px_rgba(93,230,25,0.3)]">
            <span className="material-symbols-outlined text-5xl">play_arrow</span>
          </button>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">Mira cómo transformamos espacios</h2>
          <p className="text-slate-300 text-lg max-w-xl">Un vistazo rápido a nuestro equipo en acción y la calidad que entregamos en cada m².</p>
        </div>
      </section>

      {/* Client/Partner Logos */}
      <section className="py-16 bg-white dark:bg-td-dark border-b border-slate-100 dark:border-white/5 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-10">
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm font-bold tracking-widest uppercase">LA MEJOR CALIDAD EN NUESTROS MATERIALES</p>
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
              <h2 className="text-5xl font-black tracking-tighter mb-4">¿Listo para tu proyecto?</h2>
              <p className="text-xl font-medium opacity-80">Solicita hoy mismo un presupuesto sin compromiso y hablemos de cómo mejorar tu propiedad.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-td-dark text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-xl">
                HABLAR CON UN EXPERTO
              </button>
              <button className="bg-transparent border-2 border-td-dark/20 text-td-dark px-10 py-5 rounded-2xl text-lg font-bold hover:bg-td-dark hover:text-white transition-all">
                LLAMAR AHORA
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
