export default function Cotizacion() {
  return (
    <div className="bg-td-white dark:bg-td-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main className="flex-1">
        {/* Hero Header */}
        <section className="bg-slate-100 dark:bg-slate-900/50 py-10 px-4">
          <div className="mx-auto max-w-5xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Cotiza tu Proyecto</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
              Obtén un estimado inmediato y solicita una visita técnica en Zapopan, Guadalajara y zona metropolitana.
            </p>
          </div>
        </section>
        <div className="mx-auto max-w-5xl px-4 py-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Interactive Calculator & Contact */}
          <div className="lg:col-span-7 space-y-10">
            {/* 1. Calculadora Interactiva */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-td-green">calculate</span>
                <h3 className="text-xl font-bold">Calculadora de Presupuesto</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">Tipo de Servicio</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button className="flex flex-col items-center justify-center gap-1 rounded-lg border-2 border-td-green bg-td-green/5 p-3 text-center transition-all">
                      <span className="material-symbols-outlined text-td-green">view_quilt</span>
                      <span className="text-[11px] font-bold">Muros</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700 p-3 text-center hover:border-td-green/50 transition-all">
                      <span className="material-symbols-outlined">layers</span>
                      <span className="text-[11px] font-bold">Plafones</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700 p-3 text-center hover:border-td-green/50 transition-all">
                      <span className="material-symbols-outlined">build</span>
                      <span className="text-[11px] font-bold">Reparación</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700 p-3 text-center hover:border-td-green/50 transition-all">
                      <span className="material-symbols-outlined">architecture</span>
                      <span className="text-[11px] font-bold">Diseño</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold mb-2">Área Estimada (m²)</label>
                    <div className="relative">
                      <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 py-3 pl-4 pr-12 focus:border-td-green focus:ring-td-green" placeholder="Ej. 25" type="number" />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">m²</span>
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg bg-td-green/10 border border-td-green/20 p-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-wider text-td-green">Precio Estimado</p>
                    <p className="text-2xl font-black text-slate-900 dark:text-white">$7,500 - $9,200 <span className="text-xs font-normal">MXN</span></p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 italic">*Los precios son estimativos y dependen de las condiciones del sitio y acabados finales.</p>
              </div>
            </div>
            {/* 2. Formulario de Contacto */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-td-green">edit_note</span>
                <h3 className="text-xl font-bold">Detalles del Proyecto</h3>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nombre Completo</label>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-td-green focus:ring-td-green" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Teléfono / Celular</label>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-td-green focus:ring-td-green" type="tel" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Zona / Municipio</label>
                  <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-td-green focus:ring-td-green">
                    <option>Seleccionar zona...</option>
                    <option>Zapopan</option>
                    <option>Guadalajara</option>
                    <option>Tlaquepaque</option>
                    <option>Tonalá</option>
                    <option>Tlajomulco</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">WhatsApp</label>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-td-green focus:ring-td-green" placeholder="Número de WhatsApp" type="text" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium">Descripción breve</label>
                  <textarea className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-td-green focus:ring-td-green" placeholder="Cuéntanos más sobre lo que necesitas..." rows={3}></textarea>
                </div>
                {/* 3. Botón Destacado WhatsApp */}
                <div className="md:col-span-2 pt-4">
                  <button className="group flex w-full items-center justify-center gap-3 rounded-xl bg-td-green px-8 py-4 text-lg font-bold text-white shadow-lg shadow-td-green/30 transition-all hover:scale-[1.02] hover:bg-td-green/90" type="submit">
                    <span className="material-symbols-outlined">send</span>
                    Enviar por WhatsApp
                  </button>
                  <p className="mt-3 text-center text-sm text-slate-500">Recibirás respuesta en menos de 30 minutos (Horario comercial).</p>
                </div>
              </form>
            </div>
          </div>
          {/* Right Column: Sidebar Map & Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Llamada Directa */}
            <div className="rounded-xl bg-slate-900 p-6 text-white shadow-xl dark:bg-td-green/10 dark:border dark:border-td-green/20">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-td-green/20 text-td-green">
                  <span className="material-symbols-outlined text-3xl">call</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">Atención Directa</p>
                  <a className="text-2xl font-black hover:text-td-green transition-colors" href="tel:3312345678">33 1234 5678</a>
                </div>
              </div>
            </div>
            {/* Map Section */}
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-td-green">location_on</span>
                  Zona de Cobertura
                </h4>
              </div>
              <div className="aspect-square w-full relative group">
                <img className="h-full w-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Mapa de cobertura en Zapopan y Guadalajara" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnUTBJ9Vn4_xruNgOditi4xrtmSLimFEp5u4IecxVsx7V8PQocP8eYTW5Ji2ZQJENCIM988HSos4aqInvRf5lDbw1xRNZREmkvGbAJQ0_D1bnAC4N-urJoLyYmBXymEBR1fMg7XDA-Z-cl7S1lJYVCOKyObgZxRZE6Hx6Hg0wUdsakwTrAYy5yZkRChtKl4elqqDi1X-LcZkkHLiR_U1eh7ACz0NoEgVT_CNmww7pinGM5OYsXBxJ_WlIg5rPfQAqdzPfYZ-4UB1Y" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-td-green/30 animate-ping"></div>
                    <div className="relative h-4 w-4 rounded-full bg-td-green border-2 border-white"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 dark:bg-slate-900/90 p-3 text-xs backdrop-blur-sm">
                  <p className="font-bold mb-1">Áreas principales:</p>
                  <ul className="grid grid-cols-2 gap-1 text-slate-600 dark:text-slate-400">
                    <li>• Valle Real</li>
                    <li>• Puerta de Hierro</li>
                    <li>• Providencia</li>
                    <li>• Ciudad del Sol</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
                <span className="material-symbols-outlined text-td-green">verified</span>
                <div>
                  <h5 className="text-sm font-bold">Garantía por Escrito</h5>
                  <p className="text-xs text-slate-500">Todos nuestros trabajos incluyen póliza de garantía de 12 meses.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
                <span className="material-symbols-outlined text-td-green">history</span>
                <div>
                  <h5 className="text-sm font-bold">15 Años de Experiencia</h5>
                  <p className="text-xs text-slate-500">Especialistas certificados en sistemas constructivos ligeros.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
