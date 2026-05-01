export default function Proyectos() {
  return (
    <div className="bg-[#f9f9ff] font-body text-[#141b2b]">
      <main className="pt-20">
        {/* Header Section with Background */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Drywall texture background" className="w-full h-full object-cover opacity-10 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCySXYuKlxLyFeinmQuEk-cINA4j6d1DTj17s6XXT10Vs90yFGLv8aLTRz7VB2Yj2K4KlMiDUNxRPrg3vDgmCoJ3v7B2IhWsdVkTcZc5hUmcSejnJwMNzTAq1fs-IEBIuKk8lqPhJn9xQCYrGVBhv8q-d8RHqWZmSiUkSkc65aMe1DgErG8Op1JdPvUbjN1U5bY_7e1fO1AwsKk_QxXKtKMNhv42W4Olu5_iqymTboyhtLIVkk9LKtJvirVAed1fAThg1EGRQdAWY4" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9f9ff] via-[#f9f9ff]/90 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <header className="mb-12">
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-[#141b2b] tracking-tighter mb-4">
                Portafolio de <span className="text-[#006c49]">Proyectos</span>
              </h1>
              <p className="text-lg text-[#3c4a42] max-w-2xl leading-relaxed">
                Explora nuestra maestría en acabados estructurales. Cada proyecto refleja nuestra precisión técnica y compromiso con la calidad arquitectónica.
              </p>
            </header>
            {/* Filters */}
            <div className="flex overflow-x-auto pb-4">
              <div className="flex gap-3 bg-[#f1f3ff] p-2 rounded-full border border-[#bbcabf]/10">
                <button className="px-6 py-2 rounded-full font-headline font-bold text-sm bg-[#006c49] text-white transition-all shadow-md">All Projects</button>
                <button className="px-6 py-2 rounded-full font-headline font-bold text-sm text-[#3c4a42] hover:bg-[#e1e8fd] transition-all">Drywall Installation</button>
                <button className="px-6 py-2 rounded-full font-headline font-bold text-sm text-[#3c4a42] hover:bg-[#e1e8fd] transition-all">Drywall Finishing</button>
                <button className="px-6 py-2 rounded-full font-headline font-bold text-sm text-[#3c4a42] hover:bg-[#e1e8fd] transition-all">Metal Framing</button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Project Card 1 */}
            <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer transform transition-transform duration-500 hover:scale-[1.05] shadow-xl">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern minimalist living room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlzXjLPIKAetUUeaFyWvuBsoUIQu-9Xcmj0yjw2UOZA1Y4Dm6h5lVKE-_1gXTIm4nLszHy2adSufUORYzTXENnfQngVE8tiWmXpbr_fdaZQOLjwcHclkOcU6u0Tzc7yf8q6fkK_jLajxXlMY1sKyj4pI-3_wBRy1GRRIiUFQUvKFGYTDF5WJuI8UlZhjw0QuhoE1EHvLyvHoyyiXBGSG5_MebRHF6jhXdeGdeP4zNQNaG_eYBYwssaMjZ6tZ7mcZhH6eCdcvwjtGM" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-[#006c49]/90 text-white px-3 py-1 rounded-full text-xs font-bold font-headline backdrop-blur-md">Drywall</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-headline font-bold text-xl leading-tight">Residencia San Marcos</h3>
                <p className="text-white/70 text-sm mt-1">Acabados nivel 5 premium</p>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer transform transition-transform duration-500 hover:scale-[1.05] shadow-xl">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Professional commercial interior showing complex metal framing structures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXgTgXvJg8b-tqcN3u1SNYj5AxssXREqMTuhe2pjmpgRPt15ZU-VD_kbexWACAGf1PIxuQvYHXVBKHy9oiofmQEwmfyDUB_zt2s0RVz3-QdJcTbsX_kJDFIZIT1bvVfGl0nbTdZIbLHnQ-oanoFR4RXHZEEp1mAyilGZ4D5m62w1s4kHizSHrZqdr6ElmAGzMFdj---DthU9GXZDTwC22mIIDNValF3doh1hsS2vR1Ybor_g-Dorqri-roWRcRzVAdif95Z63uFHk" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-[#0058be]/90 text-white px-3 py-1 rounded-full text-xs font-bold font-headline backdrop-blur-md">Framing</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-headline font-bold text-xl leading-tight">Corporativo Alfa</h3>
                <p className="text-white/70 text-sm mt-1">Estructura metálica y aislamiento</p>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer transform transition-transform duration-500 hover:scale-[1.05] shadow-xl">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="High precision drywall finishing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChQS6aQkfSLnqdP0ufuTOOxpdjMlyH_T78bTtI8Rt4T6gmzGNcKGy9IsZ1yAq4EPTMWgUVEuBpinDN8PSaEt4Yg74SpABG2G0khraNs9MtA5RqZR_Iu_dGrBZfkUwuXZhqIbiKd3d9aYjXAUxWXpRQYZ06P4Bb17exeAyo7xwZlvLi6mW2xr6Z5LbMyl4cKPaYciXBdy4DFUjkcfaHJahS4rMaYl579Iq90PpqLSWuHAhNy27qYuMLH_SFqxSGKv8SRfX4ZWHdgKs" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-emerald-800/90 text-white px-3 py-1 rounded-full text-xs font-bold font-headline backdrop-blur-md">Finishing</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-headline font-bold text-xl leading-tight">Villa Marítima</h3>
                <p className="text-white/70 text-sm mt-1">Texturizado personalizado y pintura</p>
              </div>
            </div>
            {/* Project Card 4 */}
            <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer transform transition-transform duration-500 hover:scale-[1.05] shadow-xl">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Interior architectural photography of a large museum space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpyMsOZGB8lGdsOLp0QzDUMYwCH_4OehwAcM7HsyBcSUmUriksLvusDXSQeUUQWWeJtPBNfGtQ1VJ3DaXF3nkSr99XHARNx7BJE6nww4syJzXF5qD01H0qsxG4e34TsHSxkMk1c3QhfbsnU0FyPjh3puHCFCsROONChPBRmZ5BjkeGrVNNUuDg-0byxY55SdAUmiFLtu1uPJyu0K8zMncIt5_40QZTbHC8RIejlhXDKK_S8PzPWZVKCg6f_r4fb-w6PcRzT4g8Ywo" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-[#006c49]/90 text-white px-3 py-1 rounded-full text-xs font-bold font-headline backdrop-blur-md">Drywall</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-headline font-bold text-xl leading-tight">Galería de Arte</h3>
                <p className="text-white/70 text-sm mt-1">Instalación de paneles de gran formato</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-[#006c49] font-bold tracking-widest text-sm uppercase block mb-2">Opiniones</span>
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-[#141b2b] tracking-tighter">Testimonios de Clientes</h2>
              </div>
              <p className="text-[#3c4a42] max-w-md">La confianza de nuestros clientes es el cimiento de cada estructura que construimos.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-6xl text-[#006c49]">format_quote</span>
                </div>
                <div className="flex gap-1 mb-6">
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-[#3c4a42] leading-relaxed italic mb-8 grow">
                  "El acabado nivel 5 que realizaron en mi sala es simplemente espectacular. No hay una sola imperfección bajo las luces, un trabajo verdaderamente profesional."
                </p>
                <div className="flex items-center gap-4">
                  <img alt="Michael Dawson" className="w-14 h-14 rounded-full object-cover border-2 border-[#006c49]/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG9ChfHjxcPiMeaIGHm9oGRd8T7lrdpxVXM-eoQlpydhtX4xmaoceLi1GHeUfnvqlMcOsyKLvt2ru0EPhCPMrvZQ6X_Z4UhpIoYxNWP9YReLNQHK858fY60uf0l6k66_GQ07AKP8JeCm-h3j-i3Tx7hrkeJzTQeIK-bOzCioB2_vJ3axD0sWOQdWdNFVGL6OMS2AgCgK-knihK2RUH-J-EV1ft6Q8ckKdJ5OWUkr5IMySw_CblM2XTiDdIwJbznDw_Wcf0UTTlX_4" />
                  <div>
                    <h4 className="font-headline font-bold text-[#141b2b]">Michael Dawson</h4>
                    <p className="text-xs font-bold text-[#006c49] uppercase tracking-wider">Drywall Finishing</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-6xl text-[#006c49]">format_quote</span>
                </div>
                <div className="flex gap-1 mb-6">
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-[#3c4a42] leading-relaxed italic mb-8 grow">
                  "Impresionada con la rapidez y limpieza del equipo durante la instalación. Transformaron todo el sótano en tiempo récord y sin dejar polvo."
                </p>
                <div className="flex items-center gap-4">
                  <img alt="Sophia Martinez" className="w-14 h-14 rounded-full object-cover border-2 border-[#006c49]/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH_egNrEJiV0LWVuNZ2QmdDElLIW7J-c-omSXifQmM3Pivvo7ZmdRbdUZ88eXjlqxWD3qlDPccV8dIMKuLx6VCClYWA6tOy7lygueFVA_8-oJFL8RDsNETMIo_4n2pjlGip0ixYJ-LtauILpYHamAytNM0Mqb94r5O4qugnmbNpaICJRwR-uo3NLFJSOJFziOuE6FBUyfDr-mRBXVbfXRqsZKtny03CtWavFC794AIwxcG1WUOh33luFD5Ey6OJfBpoqWLS7xFAgk" />
                  <div>
                    <h4 className="font-headline font-bold text-[#141b2b]">Sophia Martinez</h4>
                    <p className="text-xs font-bold text-[#006c49] uppercase tracking-wider">Drywall Installation</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-6xl text-[#006c49]">format_quote</span>
                </div>
                <div className="flex gap-1 mb-6">
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-[#3c4a42] leading-relaxed italic mb-8 grow">
                  "La precisión técnica en el entramado metálico para nuestras nuevas oficinas fue vital para el proyecto arquitectónico. Altamente recomendados."
                </p>
                <div className="flex items-center gap-4">
                  <img alt="Daniel Smith" className="w-14 h-14 rounded-full object-cover border-2 border-[#006c49]/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjgN_vUZkIh6mJXlWWdgsAt-duszd1bynhKm-BhmYfxCRbX3wiXAlC-OqTUWXYrEaZjWuS64ER50UE9sM5SY8oHNBkPg7_P1MerGqHb_YwYIFy_HSA2gd1clYh1W3P43Kt7G6F48ZQfYnkmlLTFSdgFIDxlOd23EHiigoeviAEzdBU2RmATZwwcHl0oupcdgPojGBM7Y7GMLs31EWeXD-lTVxlFIqUt_TFWn0bCSb_L9Pwg-OGo6HmsEBe7xgjf1_bPm0jFTh8Rxs" />
                  <div>
                    <h4 className="font-headline font-bold text-[#141b2b]">Daniel Smith</h4>
                    <p className="text-xs font-bold text-[#006c49] uppercase tracking-wider">Metal Framing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
