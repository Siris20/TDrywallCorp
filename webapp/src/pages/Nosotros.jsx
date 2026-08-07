import { useTranslation } from "react-i18next";

export default function Nosotros() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#131f16] font-['Inter',sans-serif] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main className="flex flex-col flex-1">
        {/* 1. Hero Section */}
        <section className="relative w-full h-[100vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            data-alt="Professional construction team in uniform posing together" 
            style={{ backgroundImage: 'linear-gradient(rgba(19, 31, 22, 0.7), rgba(19, 31, 22, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWrYHXi0Llfx7-WaywpaKbtfvcXVvxW2Hv9xgKOy-nD3g59mnSUOtyqvx61uqCCFiWTdjZcJONYym0C8QLWBe8um3xG-aseGQA4g7EzP2v8IIlZIW230Q0N5VyCw2H7cs9cIQzdA2be2d3kkLOJbPCAPuWAOBSDSwdoG2tdDwzN5KdgsgA5lqV8Qv2lwkqCpun0MYvVxJKD4ZnCAhkCEKTrGQhzmkQ2fFMJ-ICYUzOZWnWt66wPm94vRFWIxKs3ISiJksebU7yU78")' }}
          ></div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-slate-100 text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
              {t('nosotros.hero.title')}
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
              {t('nosotros.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* 2. Our History */}
        <section className="py-20 px-6 lg:px-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#28A745]/20 text-[#28A745] text-xs font-bold uppercase tracking-wider mb-2">
                {t('nosotros.history.badge')}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
                {t('nosotros.history.title')}
              </h2>
              <div className="prose prose-invert text-slate-400 leading-relaxed max-w-lg">
                <p>{t('nosotros.history.description')}</p>
                <p className="text-4xl md:text-4xl font-black leading-tight tracking-tight my-6 text-center text-td-green">
                  {t('nosotros.history.highlight')}
                </p>
              </div>
            </div>
            
            <div className="relative bg-[#28A745]/5 rounded-2xl p-8 border border-[#28A745]/10 overflow-hidden group">
              <div className="flex flex-col gap-8 relative z-10">
                
                {/* Timeline Item 1 */}
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#28A745] flex items-center justify-center text-slate-900 font-bold">17</div>
                    <div className="w-1 h-full bg-[#28A745]/30 min-h-[40px]"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold">{t('nosotros.history.timeline.start.title')}</h4>
                    <p className="text-slate-400 text-sm">{t('nosotros.history.timeline.start.desc')}</p>
                  </div>
                </div>
                
                {/* Timeline Item 2 */}
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#28A745] flex items-center justify-center text-slate-900 font-bold">20</div>
                    <div className="w-1 h-full bg-[#28A745]/30 min-h-[40px]"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold">{t('nosotros.history.timeline.formalization.title')}</h4>
                    <p className="text-slate-400 text-sm">{t('nosotros.history.timeline.formalization.desc')}</p>
                  </div>
                </div>
                
                {/* Timeline Item 3 */}
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#28A745]/20 border border-[#28A745] flex items-center justify-center text-[#28A745] font-bold">23</div>
                    <div className="w-1 h-full bg-[#28A745]/30 min-h-[40px]"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold">{t('nosotros.history.timeline.license.title')}</h4>
                    <p className="text-slate-400 text-sm">{t('nosotros.history.timeline.license.desc')}</p>
                  </div>
                </div>
                
                {/* Timeline Item 4 */}
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#28A745]/10 border-2 border-dashed border-[#28A745] flex items-center justify-center text-[#28A745] font-bold">26</div>
                  </div>
                  <div>
                    <h4 className="text-[#28A745] font-bold">{t('nosotros.history.timeline.future.title')}</h4>
                    <p className="text-slate-400 text-sm">{t('nosotros.history.timeline.future.desc')}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{t('nosotros.differentiators.title')}</h2>
              <div className="w-20 h-1.5 bg-[#28A745] mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Card 1 */}
              <div className="p-8 rounded-xl bg-[#131f16] border border-[#28A745]/20 hover:border-[#28A745] transition-all group flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-lg bg-[#28A745]/10 flex items-center justify-center mb-6 group-hover:bg-[#28A745] transition-colors">
                  <span className="material-symbols-outlined text-[#28A745] group-hover:text-slate-900 text-3xl">speed</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{t('nosotros.differentiators.cards.speed.title')}</h3>
                <p className="text-slate-400 text-sm">{t('nosotros.differentiators.cards.speed.desc')}</p>
              </div>
              
              {/* Card 2 */}
              <div className="p-8 rounded-xl bg-[#131f16] border border-[#28A745]/20 hover:border-[#28A745] transition-all group flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-lg bg-[#28A745]/10 flex items-center justify-center mb-6 group-hover:bg-[#28A745] transition-colors">
                  <span className="material-symbols-outlined text-[#28A745] group-hover:text-slate-900 text-3xl">cleaning_services</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{t('nosotros.differentiators.cards.cleaning.title')}</h3>
                <p className="text-slate-400 text-sm">{t('nosotros.differentiators.cards.cleaning.desc')}</p>
              </div>
              
              {/* Card 3 */}
              <div className="p-8 rounded-xl bg-[#131f16] border border-[#28A745]/20 hover:border-[#28A745] transition-all group flex flex-col items-center text-center"> 
                <div className="w-14 h-14 rounded-lg bg-[#28A745]/10 flex items-center justify-center mb-6 group-hover:bg-[#28A745] transition-colors">
                  <span className="material-symbols-outlined text-[#28A745] group-hover:text-slate-900 text-3xl">verified</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{t('nosotros.differentiators.cards.materials.title')}</h3>
                <p className="text-slate-400 text-sm">{t('nosotros.differentiators.cards.materials.desc')}</p>
              </div>
              
              {/* Card 4 */}
              <div className="p-8 rounded-xl bg-[#131f16] border border-[#28A745]/20 hover:border-[#28A745] transition-all group flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-lg bg-[#28A745]/10 flex items-center justify-center mb-6 group-hover:bg-[#28A745] transition-colors">
                  <span className="material-symbols-outlined text-[#28A745] group-hover:text-slate-900 text-3xl">shield</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{t('nosotros.differentiators.cards.insurance.title')}</h3>
                <p className="text-slate-400 text-sm">{t('nosotros.differentiators.cards.insurance.desc')}</p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}