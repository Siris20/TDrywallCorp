export default function Nosotros() {
  return (
    <div className="bg-[#f6f8f6] dark:bg-[#131f16] font-['Inter',sans-serif] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main className="flex flex-col flex-1">
        {/* 1. Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight">Forjando un legado de precisión desde 2017</h2>
              <div className="prose prose-invert text-slate-400 leading-relaxed max-w-lg">
                <p>
                  Drywall Contractor nació en 2017 con una visión clara: elevar los estándares de la construcción en seco. Lo que comenzó como un pequeño equipo de instaladores apasionados, se ha transformado en una fuerza líder en el sector, reconocida por su puntualidad y detalle.
                </p>
                <p>
                  A lo largo de estos años, hemos completado cientos de proyectos residenciales y comerciales, adaptándonos constantemente a las nuevas tecnologías y materiales. Nuestra meta para 2026 es consolidarnos como la empresa de acabados más confiable del país, integrando procesos sostenibles y eficiencia digital en cada obra que emprendemos.
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
                    <h4 className="text-slate-100 font-bold">Fundación</h4>
                    <p className="text-slate-400 text-sm">Inicio de operaciones con foco residencial.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#28A745] flex items-center justify-center text-slate-900 font-bold">20</div>
                    <div className="w-1 h-full bg-[#28A745]/30 min-h-[40px]"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold">Expansión Comercial</h4>
                    <p className="text-slate-400 text-sm">Primeros proyectos corporativos de gran escala.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#28A745]/20 border border-[#28A745] flex items-center justify-center text-[#28A745] font-bold">23</div>
                    <div className="w-1 h-full bg-[#28A745]/30 min-h-[40px]"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold">Liderazgo Regional</h4>
                    <p className="text-slate-400 text-sm">Certificaciones internacionales de calidad.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#28A745]/10 border-2 border-dashed border-[#28A745] flex items-center justify-center text-[#28A745] font-bold">26</div>
                  </div>
                  <div>
                    <h4 className="text-[#28A745] font-bold">Visión Sostenible</h4>
                    <p className="text-slate-400 text-sm">Referente en construcción ecológica y eficiencia.</p>
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
                <p className="text-slate-400 text-sm">Entregas garantizadas en un rango de 7 a 15 días hábiles, sin comprometer la calidad.</p>
              </div>
              {/* Card 2 */}
              <div className="p-8 rounded-xl bg-[#131f16] border border-[#28A745]/20 hover:border-[#28A745] transition-all group flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-lg bg-[#28A745]/10 flex items-center justify-center mb-6 group-hover:bg-[#28A745] transition-colors">
                  <span className="material-symbols-outlined text-[#28A745] group-hover:text-slate-900 text-3xl">cleaning_services</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">Limpieza Total</h3>
                <p className="text-slate-400 text-sm">Entregamos espacios listos para habitar, libres de polvo y residuos de construcción.</p>
              </div>
              {/* Card 3 */}
              <div className="p-8 rounded-xl bg-[#131f16] border border-[#28A745]/20 hover:border-[#28A745] transition-all group flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-lg bg-[#28A745]/10 flex items-center justify-center mb-6 group-hover:bg-[#28A745] transition-colors">
                  <span className="material-symbols-outlined text-[#28A745] group-hover:text-slate-900 text-3xl">verified</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">Materiales Premium</h3>
                <p className="text-slate-400 text-sm">Trabajamos exclusivamente con las mejores marcas del mercado internacional.</p>
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

        {/* 4. Testimonials */}
        <section className="py-20 px-6 lg:px-20 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Lo que dicen nuestros clientes</h2>
              <p className="text-slate-400 mt-2">La confianza de nuestros clientes es el cimiento de cada obra.</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-[#28A745]/20 flex items-center justify-center text-[#28A745] hover:bg-[#28A745] hover:text-slate-900 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-full border border-[#28A745]/20 flex items-center justify-center text-[#28A745] hover:bg-[#28A745] hover:text-slate-900 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 rounded-2xl bg-[#28A745]/5 border border-[#28A745]/10 relative">
              <span className="material-symbols-outlined text-[#28A745]/30 text-6xl absolute top-4 right-8">format_quote</span>
              <div className="flex text-[#28A745] mb-4">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="text-slate-300 italic mb-8">"Increíble la rapidez. Terminaron mi oficina de 100m2 en tiempo récord y los acabados son simplemente perfectos. Muy recomendados."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#28A745]/20 flex items-center justify-center text-[#28A745] font-bold">RM</div>
                <div>
                  <h4 className="text-slate-100 font-bold">Roberto Méndez</h4>
                  <p className="text-slate-500 text-xs">Director, TechOffice</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="p-8 rounded-2xl bg-[#28A745]/5 border border-[#28A745]/10 relative">
              <span className="material-symbols-outlined text-[#28A745]/30 text-6xl absolute top-4 right-8">format_quote</span>
              <div className="flex text-[#28A745] mb-4">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="text-slate-300 italic mb-8">"Lo que más me sorprendió fue la limpieza. Al final de cada día el sitio estaba ordenado, y al terminar no tuve que contratar a nadie extra."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#28A745]/20 flex items-center justify-center text-[#28A745] font-bold">AS</div>
                <div>
                  <h4 className="text-slate-100 font-bold">Ana Sofía Valera</h4>
                  <p className="text-slate-500 text-xs">Propietaria Residencial</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="p-8 rounded-2xl bg-[#28A745]/5 border border-[#28A745]/10 relative">
              <span className="material-symbols-outlined text-[#28A745]/30 text-6xl absolute top-4 right-8">format_quote</span>
              <div className="flex text-[#28A745] mb-4">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="text-slate-300 italic mb-8">"Profesionalismo de principio a fin. Me asesoraron con los materiales y se encargaron de todos los permisos. Cero dolores de cabeza."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#28A745]/20 flex items-center justify-center text-[#28A745] font-bold">JL</div>
                <div>
                  <h4 className="text-slate-100 font-bold">Juan Luis Castro</h4>
                  <p className="text-slate-500 text-xs">Arquitecto Independiente</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
