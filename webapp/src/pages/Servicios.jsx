import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Servicios() {
  const { t } = useTranslation();
  return (
    <div className="bg-srv-surface font-body text-srv-on-background antialiased pt-32 pb-20">
      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-8 mb-20">
        <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-srv-on-background tracking-tighter mb-6">
          {t('servicios.header.title1')} <span className="text-srv-primary">{t('servicios.header.title2')}</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl font-body leading-relaxed">
          {t('servicios.header.description')}
        </p>
      </header>

      {/* Services Section: Bento-inspired Asymmetric Layout */}
      <section className="max-w-7xl mx-auto px-8 space-y-24">
        {/* 1. Metal Framing */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 order-2 md:order-1 relative group">
            <div className="absolute -inset-4 bg-srv-primary-container/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] shadow-2xl">
              <img alt="Professional metal framing installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close-up of industrial metal framing for drywall with precise steel studs and vertical alignment in a modern commercial building site" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMxSaMMKI0HqIVlE2uhpkUQV5Ss9dt_LPQmZSmMElHKV-Dexp02reBR7wO56LNry3tkYOpy6CuDGf_f6_MQ3PL-rzl2w87pXbe9noY4OHauNQE_Moa1LQoWUfJHB8wUor-PlMwIDaUUt__QrzyzefyXo49s3ehZpTEKoJtIE7eSl0w4qP_4CJzmkcSDUp5jplqQRtPCumC8iqitctwNIK1Mhbj1bJcaqGFMYtoyryEA9Xf7es8gpzY6eWBKQFFD-dq5Cx2YWOFy1Q" />
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 space-y-6">
            <div className="inline-block bg-[#D8E2FF] px-4 py-1.5 text-srv-on-secondary-fixed rounded-full text-xs font-bold tracking-widest uppercase">
              {t('servicios.fase1.badge')}
            </div>
            <h2 className="font-headline font-extrabold text-4xl text-srv-on-background tracking-tight">{t('servicios.fase1.title')}</h2>
            <p className="text-emerald-700 font-semibold text-xl font-headline italic">{t('servicios.fase1.subtitle')}</p>
            <p className="text-slate-600 leading-relaxed">{t('servicios.fase1.desc')}</p>
            <div className="bg-srv-surface-container-low rounded-2xl p-6 space-y-4 bg-[#F1F3FF]">
              <h4 className="font-headline font-bold text-srv-on-background flex items-center gap-2">
                <span className="material-symbols-outlined text-srv-primary text-[#D4AF37]">account_tree</span> {t('servicios.fase1.processTitle')}
              </h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0"></span>
                  <span>{t('servicios.fase1.li1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0"></span>
                  <span>{t('servicios.fase1.li2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0"></span>
                  <span>{t('servicios.fase1.li3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0"></span>
                  <span>{t('servicios.fase1.li4')}</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex-1 border-t border-slate-200"></div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('servicios.fase1.specialty')}</span>
              <div className="flex-1 border-t border-slate-200"></div>
            </div>
          </div>
        </div>

        {/* 2. Drywall Installation */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-1 md:order-1 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#6FFBBE] text-srv-on-td-green-fixed rounded-full text-xs font-bold tracking-widest uppercase">
              {t('servicios.fase2.badge')}
            </div>
            <h2 className="font-headline font-extrabold text-4xl text-srv-on-background tracking-tight">{t('servicios.fase2.title')}</h2>
            <p className="text-emerald-700 font-semibold text-xl font-headline italic">{t('servicios.fase2.subtitle')}</p>
            <p className="text-slate-600 leading-relaxed">{t('servicios.fase2.desc')}</p>
            <div className="bg-srv-surface-container-low rounded-2xl p-6 space-y-4">
              <h4 className="font-headline font-bold text-srv-on-background flex items-center gap-2">
                <span className="material-symbols-outlined text-srv-primary text-[#D4AF37]">view_quilt</span> {t('servicios.fase2.processTitle')}
              </h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-td-dark">{t('servicios.fase2.li1')}</strong> {t('servicios.fase2.li1Desc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-td-dark">{t('servicios.fase2.li2')}</strong> {t('servicios.fase2.li2Desc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-td-dark">{t('servicios.fase2.li3')}</strong> {t('servicios.fase2.li3Desc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-td-dark">{t('servicios.fase2.li4')}</strong> {t('servicios.fase2.li4Desc')}</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex-1 border-t border-slate-200"></div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('servicios.fase2.types')}</span>
              <div className="flex-1 border-t border-slate-200"></div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-xl text-center shadow-sm">
                <div className="text-slate-400 text-[10px] font-bold uppercase mb-1">{t('servicios.fase2.type1')}</div>
                <div className="h-1.5 w-full bg-slate-200 rounded-full"></div>
              </div>
              <div className="p-3 bg-white rounded-xl text-center shadow-sm">
                <div className="text-emerald-500 text-[10px] font-bold uppercase mb-1">{t('servicios.fase2.type2')}</div>
                <div className="h-1.5 w-full bg-emerald-500/30 rounded-full"></div>
              </div>
              <div className="p-3 bg-white rounded-xl text-center shadow-sm">
                <div className="text-red-500 text-[10px] font-bold uppercase mb-1">{t('servicios.fase2.type3')}</div>
                <div className="h-1.5 w-full bg-red-500/30 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 order-2 md:order-2 relative group">
            <div className="absolute -inset-4 bg-srv-secondary-container/5 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] shadow-2xl">
              <img alt="Drywall sheet installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Experienced contractor lifting a large drywall panel for installation on a clean metal-framed wall in a bright modern interior space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX7TFXJjq55EnJ4VrnkJzJic4LUqdkypRrGyNg87KyHdhpCeiv8ddH-I7e-T4kg1OLCZEnN52MDd5smSr4nwLj-yKMTpWr5HdW0V0peIyegEJ9Y-dGQ4KEU8uUYu9GbJpRw0_sI3vydSgOvOyIcG9RYVLO2shuFGrYkC3ZbJj6ssWSaRNXqodH6kQKxHRIA9An6j1lUjZLIX4qwZztxjy4gQmtnRebiUtkLdVgwJDBHVw83BU644n1UICeXANZ6xcLaheuVC6WE0Y" />
              <div className="absolute bottom-6 left-6 flex gap-2">
                <div className="bg-srv-on-background px-4 py-2 rounded-xl text-white font-bold text-sm">{t('servicios.fase2.zeroWaste')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Drywall Finishing */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 order-2 md:order-1 relative group">
            <div className="absolute -inset-4 bg-srv-primary-container/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] shadow-2xl">
              <img alt="Drywall finishing and sanding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Professional drywall finisher applying smooth compound to a corner joint with a large spatula, soft warm directional lighting highlighting the texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAevCv3Wh3FcLgmhcA1uIdwvMZbce6fuw5pMarYA9omSqRijlwvkkVe1a_iha_WyD1jNwrquzvMkpF9uN3aYNAee01lkxVDzYqf-kEspLGG9i6QTEObdlGlzZAVBmg3CnC46YfAJHF8_50tVHF_JJKKmN8qaQxvGRp10XFF3_yQSfrt6L5jHtB9z0W1MfUsn6PD10gZIwUVZxzXDNYjdeBrEaJKXYjyNlFaSrF7UEIb_GSw7hTFGiZvuJoJPCHHXsA0d2rlox2BbYk" />
              <div className="absolute inset-0 bg-gradient-to-t from-srv-on-background/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-4xl font-extrabold font-headline mb-1 uppercase tracking-tighter text-[#D4AF37]">{t('servicios.fase3.level5')}</div>
                <div className="text-xs font-medium uppercase tracking-[0.3em] opacity-80">{t('servicios.fase3.goldStandard')}</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-srv-on-tertiary-container text-white rounded-full text-xs font-bold tracking-widest uppercase">
              {t('servicios.fase3.badge')}
            </div>
            <h2 className="font-headline font-extrabold text-4xl text-srv-on-background tracking-tight">{t('servicios.fase3.title')}</h2>
            <p className="text-emerald-700 font-semibold text-xl font-headline italic">{t('servicios.fase3.subtitle')}</p>
            <p className="text-slate-600 leading-relaxed">{t('servicios.fase3.desc')}</p>
            <div className="bg-srv-surface-container-low rounded-2xl p-6 space-y-4">
              <h4 className="font-headline font-bold text-srv-on-background flex items-center gap-2">
                <span className="material-symbols-outlined text-srv-primary text-[#D4AF37]">auto_fix_high</span> {t('servicios.fase3.processTitle')}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-td-dark">{t('servicios.fase3.li1')}</strong> {t('servicios.fase3.li1Desc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-td-dark">{t('servicios.fase3.li2')}</strong> {t('servicios.fase3.li2Desc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-td-dark">{t('servicios.fase3.li3')}</strong> {t('servicios.fase3.li3Desc')}</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex-1 border-t border-slate-200"></div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('servicios.fase3.detailers')}</span>
              <div className="flex-1 border-t border-slate-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 max-w-7xl mx-auto px-8">
        <div className="bg-[#132826] rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-srv-primary-container rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-srv-secondary-container rounded-full blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-td-white mb-6 relative z-10">
            {t('servicios.cta.title')}
          </h2>
          <p className="text-td-white/80 max-w-xl mb-10 text-lg relative z-10">
            {t('servicios.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            {/* Botón de Email (Conserva tu estilo blanco con el ícono) */}
            <a
              href="mailto:tdrywallcorporation@gmail.com?subject=Solicitud%20de%20información&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios%20de%20drywall.%20Mi%20nombre%20es:%20"
              className="bg-white text-td-dark px-10 py-4 rounded-xl font-headline font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              {t('servicios.cta.contact')}
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>

            {/* Botón de Llamada (Reemplaza el <Link> por <a> conservando el estilo translúcido) */}
            <a
              href="tel:+14084491687"
              className="bg-[#10B981]/20 border border-white/20 text-white backdrop-blur-md px-10 py-4 rounded-xl font-headline font-bold hover:bg-white/10 transition-all text-center flex items-center justify-center"
            >
              {t('servicios.cta.quote')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
