import InfiniteMarquee from '../components/InfiniteMarquee';

export default function Inicio() {
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
      <section className="py-24 bg-td-white dark:bg-td-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-2">
              <h2 className="text-td-green font-bold tracking-widest text-sm uppercase">Portafolio</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white">Nuestros Resultados</h3>
            </div>
            <div className="flex gap-2">
              <button className="p-3 rounded-full border border-slate-200 dark:border-white/10 dark:text-white hover:bg-td-green hover:text-td-dark transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="p-3 rounded-full border border-slate-200 dark:border-white/10 dark:text-white hover:bg-td-green hover:text-td-dark transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Project 1 */}
            <div className="group relative bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative w-full sm:w-1/2 overflow-hidden h-64 sm:h-auto">
                  <img alt="Before" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbVKhLXC3JhMpRUkCdMpGLyt5QWLbqE6F63CNO4Dpf9gM-zuxYmbIKdWYaP_YjxlGpshZ6kKUmOoY-x6JoqbMAbBuheeC8TQEgPUDdZrc8IbXP1ZcbMvg-6Ri3_K-Ot0pF6CvRH922XY53KwIQ3u_PpXXjELG4f8uk6OIAjpv4S9FnjoPewwVXFVtqE1s9PyQUm4Te04OYbiD0Wz0GLCbaOc_KnycZgzVNj7NoKRQvGAha--Gj63iCPB5AleeGc7t2SOlF06ZiD20" />
                  <div className="absolute top-4 left-4 bg-td-dark/80 text-white px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-sm">ANTES</div>
                </div>
                <div className="relative w-full sm:w-1/2 overflow-hidden h-64 sm:h-auto">
                  <img alt="After" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAab9gBixA0lkpDpRrV8np3h8aDyQ6lZjFFi2pI83YZfYAeiLaxhE5zlW5Ajy8MgkRKqNfjSdaPwvmsl-aT24a7xJCRAFdQuDrhCwWS74eN6XNlTyT4O4whcvl99fJmcbKgMlWui7G_zKlelhjmtu6PnAFzN8n4xP8bR4hRe9WRBSrh8vjVu-tdpDG8t1HEOSP6TjXYoRNM8L8vcpVnO10F3YAluNRPnnS92WTRUsz-BTH8NLVQvdETX7TCiOJRx3msjnlWbDeSCDs" />
                  <div className="absolute top-4 right-4 bg-td-green text-td-dark px-3 py-1 rounded-lg text-xs font-bold">DESPUÉS</div>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group relative bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative w-full sm:w-1/2 overflow-hidden h-64 sm:h-auto">
                  <img alt="Before 2" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrbJvQPK2LnmgdtY5Fp7eptci3ghWKhyW8Z4GwI4oGwK1LkJrDPkSRY0qzjlKLdcScwyhDukGbiG14C2FqBHaXtm-vKrDW5mrAr-p4y7JXDFklAmVhzszUkJnZga9zVKc9yiipmiHs29wFBCB7lZrSqz3FBhspPZ5q22T8MWBjwpbd-e46K-xRHTNv4m6NDn7JpSCixDkzJSF5Cb0PXdt2Fit0WCkScsVcj_uy_wz-3Ety9th3g4ozhcqMgeqmroCRN0N5fISXv7Q" />
                  <div className="absolute top-4 left-4 bg-td-dark/80 text-white px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-sm">ANTES</div>
                </div>
                <div className="relative w-full sm:w-1/2 overflow-hidden h-64 sm:h-auto">
                  <img alt="After 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiOzhotOAsQxOX6XUTxFNSxKWK4yBhXaLRDctIvIFcidBPkXOHHK9IvI-x2tghqmo0XhHIyVxOkdHI9h-xSVfysCaXi6yc-MPGZcsOjD_siiQacPWVTDPO_awUcnuI8xs1-UXX1bzVGwyyRmWi1iT1MnkY4kiweaUcIBRu3CXg6urfBXANQRB5VrU1XTA6up8pjJsLfuLDfLeUZgDSFqoiY4jyjAFpP-4ITRf6tI25gFQqPsfkBq4q9r4U6mfZ3I99cFqpdmREDrM" />
                  <div className="absolute top-4 right-4 bg-td-green text-td-dark px-3 py-1 rounded-lg text-xs font-bold">DESPUÉS</div>
                </div>
              </div>
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
