export default function Preguntas() {
  return (
    <div className="bg-td-white dark:bg-td-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
      <main className="flex flex-1 justify-center py-12 px-6">
        <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
          {/* Hero Section / Title */}
          <div className="flex flex-col gap-4 mb-10 text-center md:text-left">
            <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Preguntas Frecuentes
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal max-w-2xl">
              Todo lo que necesitas saber sobre instalaciones de tablaroca y drywall en Jalisco. Expertos a tu servicio.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="flex flex-col gap-4">
            {/* Q1 */}
            <details className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all duration-300 overflow-hidden" open>
              <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 select-none list-none">
                <p className="text-slate-900 dark:text-slate-100 text-lg font-semibold leading-normal">
                  ¿Cuánto cuesta el m2 de drywall en Jalisco?
                </p>
                <div className="text-td-green transition-transform duration-300 group-open:rotate-180">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                El costo varía según el tipo de placa y acabado, pero oscila entre $250 y $450 MXN por m2. Este precio incluye materiales de alta calidad y mano de obra calificada. Realizamos presupuestos detallados sin compromiso.
              </div>
            </details>
            {/* Q2 */}
            <details className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all duration-300 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 select-none list-none">
                <p className="text-slate-900 dark:text-slate-100 text-lg font-semibold leading-normal">
                  ¿Hacen trabajos en departamentos habitados?
                </p>
                <div className="text-td-green transition-transform duration-300 group-open:rotate-180">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                Sí, nos especializamos en trabajos limpios. Utilizamos sistemas de protección para tus muebles y pisos, minimizando el polvo y el ruido para que la vida en tu hogar se vea afectada lo menos posible durante la remodelación.
              </div>
            </details>
            {/* Q3 */}
            <details className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all duration-300 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 select-none list-none">
                <p className="text-slate-900 dark:text-slate-100 text-lg font-semibold leading-normal">
                  ¿Cuánto tiempo tardan?
                </p>
                <div className="text-td-green transition-transform duration-300 group-open:rotate-180">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                El tiempo de ejecución depende de la complejidad del proyecto. Una habitación estándar puede estar lista en 2-3 días, mientras que proyectos comerciales más grandes se programan por etapas. Siempre cumplimos con los plazos pactados por contrato.
              </div>
            </details>
            {/* Q4 */}
            <details className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all duration-300 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 select-none list-none">
                <p className="text-slate-900 dark:text-slate-100 text-lg font-semibold leading-normal">
                  ¿Cobran por mano de obra o por m2?
                </p>
                <div className="text-td-green transition-transform duration-300 group-open:rotate-180">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                Ofrecemos ambas modalidades. La mayoría de nuestros clientes prefiere el costo por m2 ya que incluye todo el material, pero si ya cuentas con el material, podemos cotizar únicamente el servicio de instalación profesional.
              </div>
            </details>
            {/* Q5 */}
            <details className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all duration-300 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 select-none list-none">
                <p className="text-slate-900 dark:text-slate-100 text-lg font-semibold leading-normal">
                  ¿Dan garantía por escrito?
                </p>
                <div className="text-td-green transition-transform duration-300 group-open:rotate-180">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                Totalmente. Todos nuestros servicios cuentan con garantía por escrito que cubre tanto la calidad de la instalación como los materiales utilizados. Tu inversión está 100% protegida.
              </div>
            </details>
            {/* Q6 */}
            <details className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all duration-300 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 select-none list-none">
                <p className="text-slate-900 dark:text-slate-100 text-lg font-semibold leading-normal">
                  ¿Trabajan fines de semana?
                </p>
                <div className="text-td-green transition-transform duration-300 group-open:rotate-180">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                Entendemos tus horarios. Realizamos trabajos en fines de semana y horarios nocturnos para oficinas o locales comerciales que no pueden interrumpir su operación regular.
              </div>
            </details>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <div className="flex flex-col items-center gap-6 rounded-2xl border-2 border-td-green/20 bg-td-green/5 p-8 text-center md:flex-row md:text-left md:justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-slate-900 dark:text-slate-100 text-xl font-bold">¿Aún tienes dudas?</p>
                <p className="text-slate-600 dark:text-slate-400 text-base font-normal">Si no encontraste la respuesta que buscabas, nuestro equipo técnico te ayudará personalmente.</p>
              </div>
              <button className="flex min-w-[180px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-td-green text-white text-base font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-td-green/20">
                <span className="material-symbols-outlined">chat</span>
                <span>Enviar WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 rounded-xl overflow-hidden h-48 relative border border-slate-200 dark:border-slate-800">
            <img alt="Mapa de cobertura en Jalisco" className="w-full h-full object-cover opacity-50 dark:opacity-30 grayscale" data-alt="Modern abstract map illustration showing Jalisco region" data-location="Guadalajara, Jalisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO5v6WIA-DQVoRNStN3hjiDYp__YlAqjh5aHDK6UC7iwzoZZ3VZwguGiZpHM1qazIjvRHo_hSA7UKCm-XwobUbX3t4BDw1Uk7qjDUhQjn7H3vqOZ1hDdT3GTT43trfjy6ETRF66b3TkAEt8aWq_KyDtsuamsnIEqEQ-Gl_qk5bQz7q5QdJzDphW6Y71-MdYSyCqmTcS3S2XECEAF9yH2ZE64Eh4Mp3EWVRCTDu8gdvmNzIO0Uw8DUxHu6bUnH-DTtC2ZUs3vt9CFo" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                <p className="text-sm font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-td-green text-sm">location_on</span>
                  Cobertura en toda la Zona Metropolitana de Guadalajara
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
