import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  SERVICES,
  TRAVEL_COST,
  CURRENCY_SYMBOL,
  CURRENCY_CODE,
  AREA_UNIT,
  calculateEstimate,
} from "../pricingConfig";

// --- Leaflet marker icon fix (Vite compatibility) ---
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const DEFAULT_CENTER = [37.7975, -121.2160];
const DEFAULT_ZOOM = 9;

function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return position ? <Marker position={position} /> : null;
}

export default function Cotizacion() {
  const { t } = useTranslation();

  const [selectedServices, setSelectedServices] = useState([]);
  const [area, setArea] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zone, setZone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(DEFAULT_CENTER);

  const estimate = useMemo(
    () => calculateEstimate(selectedServices, parseFloat(area) || 0),
    [selectedServices, area]
  );

  const hasEstimate = estimate.base > 0;

  function toggleService(id) {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }

  function formatUSD(value) {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  function handleSubmit(e) {
  e.preventDefault();

  // 1. Filtramos y limpiamos datos
  const serviceNames = SERVICES
    .filter((s) => selectedServices.includes(s.id))
    .map((s) => s.label)
    .join(", ");

  const estimateStr = `${CURRENCY_SYMBOL}${formatUSD(estimate.low)} – ${CURRENCY_SYMBOL}${formatUSD(estimate.high)} ${CURRENCY_CODE}`;

  // 2. Construimos el array de partes solo con lo que existe
  const lines = [
    t('cotizacion.whatsappMessage.greeting'), 
    serviceNames ? `*Servicios:* ${serviceNames}` : null,
    area ? `*Área:* ${area} ${AREA_UNIT}` : null,
    hasEstimate ? `*Estimado:* ${estimateStr}` : null,
    name ? `*Nombre:* ${name}` : null,
    phone ? `*Teléfono:* ${phone}` : null,
    zone ? `*Zona:* ${zone}` : null,
    location ? `*Ubicación:* https://www.google.com/maps?q=${location[0]},${location[1]}` : null,
    description ? `*Detalles adicionales:* ${description}` : null
  ];

  // 3. Filtramos los nulos y unimos con saltos de línea
  const message = lines.filter(Boolean).join("\n");

  window.open(`https://wa.me/14084491687?text=${encodeURIComponent(message)}`, "_blank");
}

  return (
    <div className="bg-td-white dark:bg-td-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main className="flex-1">
        <section className="bg-slate-100 dark:bg-slate-900/50 py-28 px-4">
          <div className="mx-auto max-w-5xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {t('cotizacion.hero.title')}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
              {t('cotizacion.hero.subtitle')}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10">
          <div className="lg:col-span-7 space-y-10">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-td-green">calculate</span>
                <h3 className="text-xl font-bold">{t('cotizacion.calculator.title')}</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-1">{t('cotizacion.calculator.serviceType')}</label>
                  <p className="text-xs text-slate-500 mb-3">{t('cotizacion.calculator.serviceDesc')}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {SERVICES.map((service) => {
                      const isActive = selectedServices.includes(service.id);
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => toggleService(service.id)}
                          className={`group relative flex flex-col items-center justify-center gap-2 rounded-xl p-4 text-center transition-all duration-200 cursor-pointer ${isActive ? "border-2 border-td-green bg-td-green/10 shadow-md shadow-td-green/10 scale-[1.02]" : "border border-slate-200 dark:border-slate-700 hover:border-td-green/50 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                        >
                          {isActive && (<span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-td-green text-white text-xs">✓</span>)}
                          <span className={`material-symbols-outlined text-2xl transition-colors ${isActive ? "text-td-green" : "text-slate-400 group-hover:text-td-green/70"}`}>{service.icon}</span>
                          <span className="text-sm font-bold">{service.label}</span>
                          <span className="text-[10px] text-slate-500 leading-tight">{service.description}</span>
                          <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${isActive ? "bg-td-green/20 text-td-green" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`}>{CURRENCY_SYMBOL}{service.pricePerFt2.toFixed(2)}/{AREA_UNIT}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold mb-2">{t('cotizacion.calculator.areaLabel')} ({AREA_UNIT})</label>
                    <div className="relative">
                      <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 py-3 pl-4 pr-12 focus:border-td-green focus:ring-td-green focus:outline-none transition-colors" placeholder="e.g. 250" type="number" min="0" value={area} onChange={(e) => setArea(e.target.value)} />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">{AREA_UNIT}</span>
                    </div>
                  </div>

                  <div className={`flex-1 rounded-lg border p-4 text-center transition-all duration-500 ${hasEstimate ? "bg-td-green/10 border-td-green/30 scale-100" : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"}`}>
                    <p className="text-xs font-bold uppercase tracking-wider text-td-green">{t('cotizacion.calculator.estPrice')}</p>
                    {hasEstimate ? (
                      <p className="text-2xl font-black text-slate-900 dark:text-white transition-all duration-300">{CURRENCY_SYMBOL}{formatUSD(estimate.low)} – {CURRENCY_SYMBOL}{formatUSD(estimate.high)} <span className="text-xs font-normal">{CURRENCY_CODE}</span></p>
                    ) : (
                      <p className="text-lg font-bold text-slate-400 dark:text-slate-500">— —</p>
                    )}
                  </div>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ${hasEstimate ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="rounded-lg border border-slate-200 dark:border-slate-700 divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                    {estimate.breakdown.map((item) => (
                      <div key={item.id} className="flex items-center justify-between px-4 py-3">
                        <span className="text-slate-600 dark:text-slate-400">{item.label} <span className="text-xs text-slate-400">({CURRENCY_SYMBOL}{item.pricePerFt2.toFixed(2)} × {area} {AREA_UNIT})</span></span>
                        <span className="font-bold">{CURRENCY_SYMBOL}{formatUSD(Math.round(item.subtotal))}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-800/50">
                      <span className="text-slate-600 dark:text-slate-400">{t('cotizacion.calculator.travelMobilization')}</span>
                      <span className="font-bold">{CURRENCY_SYMBOL}{formatUSD(TRAVEL_COST)}</span>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3 bg-td-green/5 font-bold">
                      <span>{t('cotizacion.calculator.estTotal')}</span>
                      <span className="text-td-green text-lg">{CURRENCY_SYMBOL}{formatUSD(estimate.low)} – {CURRENCY_SYMBOL}{formatUSD(estimate.high)}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 italic">{t('cotizacion.calculator.disclaimer')}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-td-green">edit_note</span>
                <h3 className="text-xl font-bold">{t('cotizacion.form.title')}</h3>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <div className="space-y-2"><label className="text-sm font-medium">{t('cotizacion.form.fullName')}</label><input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-2.5 px-3 focus:border-td-green focus:ring-td-green focus:outline-none transition-colors" type="text" value={name} onChange={(e) => setName(e.target.value)} /></div>
                <div className="space-y-2"><label className="text-sm font-medium">{t('cotizacion.form.phone')}</label><input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-2.5 px-3 focus:border-td-green focus:ring-td-green focus:outline-none transition-colors" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
                <div className="space-y-2"><label className="text-sm font-medium">{t('cotizacion.form.zone')}</label><input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-2.5 px-3 focus:border-td-green focus:ring-td-green focus:outline-none transition-colors" type="text" placeholder={t('cotizacion.form.zonePlaceholder')} value={zone} onChange={(e) => setZone(e.target.value)} /></div>
                <div className="space-y-2"><label className="text-sm font-medium">{t('cotizacion.form.whatsapp')}</label><input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-2.5 px-3 focus:border-td-green focus:ring-td-green focus:outline-none transition-colors" placeholder={t('cotizacion.form.whatsappPlaceholder')} type="text" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} /></div>
                <div className="md:col-span-2 space-y-2"><label className="text-sm font-medium">{t('cotizacion.form.desc')}</label><textarea className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-2.5 px-3 focus:border-td-green focus:ring-td-green focus:outline-none transition-colors" placeholder={t('cotizacion.form.descPlaceholder')} rows={3} value={description} onChange={(e) => setDescription(e.target.value)} /></div>
                <div className="md:col-span-2 pt-4">
                  <button className="group flex w-full items-center justify-center gap-3 rounded-xl bg-td-green px-8 py-4 text-lg font-bold text-white shadow-lg shadow-td-green/30 transition-all hover:scale-[1.02] hover:bg-td-green/90 active:scale-[0.98]" type="submit"><span className="material-symbols-outlined">send</span>{t('cotizacion.form.submitBtn')}</button>
                  <p className="mt-3 text-center text-sm text-slate-500">{t('cotizacion.form.submitDesc')}</p>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-xl bg-slate-900 p-6 text-white shadow-xl dark:bg-td-green/10 dark:border dark:border-td-green/20">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-td-green/20 text-td-green"><span className="material-symbols-outlined text-3xl">call</span></div>
                <div>
                  <p className="text-sm font-medium text-slate-300">{t('cotizacion.sidebar.directLine')}</p>
                  <a className="text-2xl font-black hover:text-td-green transition-colors" href="tel:3121234567">(312) 123-4567</a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="p-4 border-b border-slate-100 dark:border-slate-800"><h4 className="font-bold flex items-center gap-2"><span className="material-symbols-outlined text-td-green">location_on</span> {t('cotizacion.sidebar.jobLoc')}</h4></div>
              <div className="relative z-0" style={{ height: "280px" }}>
                <MapContainer center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM} style={{ height: "100%", width: "100%" }} scrollWheelZoom={true}>
                  <TileLayer attribution='&copy; <a href="https://carto.com/">CARTO</a>' url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                  <LocationMarker position={location} setPosition={setLocation} />
                </MapContainer>
              </div>
              <div className="p-3 space-y-2">
                <p className="text-xs text-slate-500 dark:text-slate-400">{t('cotizacion.sidebar.mapHint')}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
                <span className="material-symbols-outlined text-td-green">history</span>
                <div>
                  <h5 className="text-sm font-bold">{t('cotizacion.sidebar.trustTitle')}</h5>
                  <p className="text-xs text-slate-500">{t('cotizacion.sidebar.trustDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}