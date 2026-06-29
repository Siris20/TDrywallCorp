export default function Nosotros() {
  return (
    <div className="bg-[#131f16] font-['Inter',sans-serif] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main className="flex flex-col flex-1">
        {/* 1. Hero Section */}
        <section className="relative w-full h-[100vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" data-alt="Professional construction team in uniform posing together" style={{ backgroundImage: 'linear-gradient(rgba(19, 31, 22, 0.7), rgba(19, 31, 22, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWrYHXi0Llfx7-WaywpaKbtfvcXVvxW2Hv9xgKOy-nD3g59mnSUOtyqvx61uqCCFiWTdjZcJONYym0C8QLWBe8um3xG-aseGQA4g7EzP2v8IIlZIW230Q0N5VyCw2H7cs9cIQzdA2be2d3kkLOJbPCAPuWAOBSDSwdoG2tdDwzN5KdgsgA5lqV8Qv2lwkqCpun0MYvVxJKD4ZnCAhkCEKTrGQhzmkQ2fFMJ-ICYUzOZWnWt66wPm94vRFWIxKs3ISiJksebU7yU78")' }}></div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-slate-100 text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
              El equipo que deja todo perfecto
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
              Profesionales dedicados a la excelencia en construcción en seco y acabados de alta calidad.
            </p>
          </div>
        </section>

        {/* 2. Our History */}
        <section className="py-20 px-6 lg:px-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#28A745]/20 text-[#28A745] text-xs font-bold uppercase tracking-wider mb-2">Trayectoria</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight">Forjando un legado de precisión desde 1999</h2>
              <div className="prose prose-invert text-slate-400 leading-relaxed max-w-lg">
                <p>
                  Drywall Contractor nació de la pasión y la experiencia acumulada durante más de dos décadas en la industria. Lo que comenzó en 1999 como un camino de aprendizaje y maestría en las técnicas de construcción en seco, se consolidó en 2021 con el firme propósito de elevar nuestro compromiso con los estandares mas elevados del sector. Nuestra prioridad es combinar la sabiduría del oficio con el rigor técnico que solo una empresa con licencia profesional puede garantizar.
                </p>
                <p className="text-4xl md:text-4xl font-black leading-tight tracking-tight my-6 text-center text-td-green">
                  " 25 Años en el sector "
                </p>
              </div>
            </div>
            <div className="relative bg-[#28A745]/5 rounded-2xl p-8 border border-[#28A745]/10 overflow-hidden group">
              <div className="flex flex-col gap-8 relative z-10">
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#28A745] flex items-center justify-center text-slate-900 font-bold">17</div>
                    <div className="w-1 h-full bg-[#28A745]/30 min-h-[40px]"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold">El Comienzo</h4>
                    <p className="text-slate-400 text-sm">Inicio de una trayectoria de aprendizaje profundo en todas las etapas del drywall, dominando desde la estructura hasta los acabados finos.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#28A745] flex items-center justify-center text-slate-900 font-bold">20</div>
                    <div className="w-1 h-full bg-[#28A745]/30 min-h-[40px]"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold">Formalización y Visión</h4>
                    <p className="text-slate-400 text-sm">Registro oficial y comienzo del proceso de certificación profesional para dar el salto de instalador experimentado a contratista con licencia.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#28A745]/20 border border-[#28A745] flex items-center justify-center text-[#28A745] font-bold">23</div>
                    <div className="w-1 h-full bg-[#28A745]/30 min-h-[40px]"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold">Licencia y Liderazgo</h4>
                    <p className="text-slate-400 text-sm">Obtención del certificado oficial de contratista, garantizando seguridad, cumplimiento de normas y respaldo legal en cada obra.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#28A745]/10 border-2 border-dashed border-[#28A745] flex items-center justify-center text-[#28A745] font-bold">26</div>
                  </div>
                  <div>
                    <h4 className="text-[#28A745] font-bold">El Futuro</h4>
                    <p className="text-slate-400 text-sm">Consolidarnos como el referente local en acabados de alta gama y especialistas en Build-Outs para franquicias, garantizando el cumplimiento estricto de los estándares corporativos y tiempos de entrega críticos.</p>
                  </div>
                </div>
              </div>
              {/* Graphic element in background */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#28A745]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* 3. Differentiators */}
        <section className="py-20 bg-[#131f16]/50 border-y border-[#28A745]/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100">¿Por qué elegirnos?</h2>
              <div className="w-20 h-1.5 bg-[#28A745] mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="p-8 rounded-xl bg-[#131f16] border border-[#28A745]/20 hover:border-[#28A745] transition-all group flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-lg bg-[#28A745]/10 flex items-center justify-center mb-6 group-hover:bg-[#28A745] transition-colors">
                  <span className="material-symbols-outlined text-[#28A745] group-hover:text-slate-900 text-3xl">speed</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">Rapidez</h3>
                <p className="text-slate-400 text-sm">Entregas en un rango de 7 a 15 días hábiles, sin comprometer la calidad.</p>
              </div>
              {/* Card 2 */}
              <div className="p-8 rounded-xl bg-[#131f16] border border-[#28A745]/20 hover:border-[#28A745] transition-all group flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-lg bg-[#28A745]/10 flex items-center justify-center mb-6 group-hover:bg-[#28A745] transition-colors">
                  <span className="material-symbols-outlined text-[#28A745] group-hover:text-slate-900 text-3xl">cleaning_services</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">Limpieza Total</h3>
                <p className="text-slate-400 text-sm">Entregamos espacios libres de polvo y residuos de construcción.</p>
              </div>
              {/* Card 3 */}
              <div className="p-8 rounded-xl bg-[#131f16] border border-[#28A745]/20 hover:border-[#28A745] transition-all group flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-lg bg-[#28A745]/10 flex items-center justify-center mb-6 group-hover:bg-[#28A745] transition-colors">
                  <span className="material-symbols-outlined text-[#28A745] group-hover:text-slate-900 text-3xl">verified</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">Materiales Premium</h3>
                <p className="text-slate-400 text-sm">Trabajamos con las mejores marcas o con las espesificadas por el cliente.</p>
              </div>
              {/* Card 4 */}
              <div className="p-8 rounded-xl bg-[#131f16] border border-[#28A745]/20 hover:border-[#28A745] transition-all group flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-lg bg-[#28A745]/10 flex items-center justify-center mb-6 group-hover:bg-[#28A745] transition-colors">
                  <span className="material-symbols-outlined text-[#28A745] group-hover:text-slate-900 text-3xl">shield</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">Permisos y Seguros</h3>
                <p className="text-slate-400 text-sm">Cumplimos con toda la normativa vigente y seguros para su total tranquilidad.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
