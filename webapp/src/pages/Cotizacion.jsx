import { useState, useMemo } from "react";
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

// --- Map defaults (Manteca, CA — service area reaches San Jose) ---
const DEFAULT_CENTER = [37.7975, -121.2160];
const DEFAULT_ZOOM = 9;

/** Click-to-place marker on the map */
function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return position ? <Marker position={position} /> : null;
}

export default function Cotizacion() {
  // --- State ---
  const [selectedServices, setSelectedServices] = useState([]);
  const [area, setArea] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zone, setZone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(DEFAULT_CENTER);

  // --- Derived estimate ---
  const estimate = useMemo(
    () => calculateEstimate(selectedServices, parseFloat(area) || 0),
    [selectedServices, area]
  );

  const hasEstimate = estimate.base > 0;

  // --- Handlers ---
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

    const serviceNames = SERVICES
      .filter((s) => selectedServices.includes(s.id))
      .map((s) => s.label)
      .join(", ");

    const message =
      `¡Hola! Me gustaría una cotización para:\n` +
      `• Servicios: ${serviceNames || "No seleccionado"}\n` +
      `• Área: ${area || "N/A"} ${AREA_UNIT}\n` +
      `• Estimado: ${CURRENCY_SYMBOL}${formatUSD(estimate.low)} – ${CURRENCY_SYMBOL}${formatUSD(estimate.high)} ${CURRENCY_CODE}\n` +
      `• Nombre: ${name}\n` +
      `• Teléfono: ${phone}\n` +
      `• Zona: ${zone}\n` +
      `• Ubicación: https://www.google.com/maps?q=${location[0]},${location[1]}\n` +
      `• Detalles: ${description}`;

    const encoded = encodeURIComponent(message);
    // Replace with your real WhatsApp number
    // window.open(`https://wa.me/14084491687?text=${encoded}`, "_blank");
    window.open(`https://wa.me/523441031335?text=${encoded}`, "_blank");
  }

  return (
    <div className="bg-td-white dark:bg-td-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main className="flex-1">
        {/* Hero Header */}
        <section className="bg-slate-100 dark:bg-slate-900/50 py-28 px-4">
          <div className="mx-auto max-w-5xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Get Your Project Quote
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
              Get an instant estimate for your drywall project. Select your services, enter your area, and receive a price range immediately.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 py-10">
          {/* Left Column: Interactive Calculator & Contact */}
          <div className="lg:col-span-7 space-y-10">
            {/* 1. Interactive Calculator */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-td-green">calculate</span>
                <h3 className="text-xl font-bold">Budget Calculator</h3>
              </div>

              <div className="space-y-6">
                {/* Service Type Selection (multi-select) */}
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Service Type
                  </label>
                  <p className="text-xs text-slate-500 mb-3">
                    Select one or more services to include in your estimate.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {SERVICES.map((service) => {
                      const isActive = selectedServices.includes(service.id);
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => toggleService(service.id)}
                          className={`
                            group relative flex flex-col items-center justify-center gap-2 rounded-xl p-4 text-center
                            transition-all duration-200 cursor-pointer
                            ${isActive
                              ? "border-2 border-td-green bg-td-green/10 shadow-md shadow-td-green/10 scale-[1.02]"
                              : "border border-slate-200 dark:border-slate-700 hover:border-td-green/50 hover:bg-slate-50 dark:hover:bg-slate-800"
                            }
                          `}
                        >
                          {/* Checkmark badge */}
                          {isActive && (
                            <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-td-green text-white text-xs">
                              ✓
                            </span>
                          )}
                          <span
                            className={`material-symbols-outlined text-2xl transition-colors ${isActive ? "text-td-green" : "text-slate-400 group-hover:text-td-green/70"
                              }`}
                          >
                            {service.icon}
                          </span>
                          <span className="text-sm font-bold">{service.label}</span>
                          <span className="text-[10px] text-slate-500 leading-tight">
                            {service.description}
                          </span>
                          <span
                            className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${isActive
                              ? "bg-td-green/20 text-td-green"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                              }`}
                          >
                            {CURRENCY_SYMBOL}{service.pricePerFt2.toFixed(2)}/{AREA_UNIT}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Area Input */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold mb-2">
                      Estimated Area ({AREA_UNIT})
                    </label>
                    <div className="relative">
                      <input
                        id="area-input"
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 py-3 pl-4 pr-12 focus:border-td-green focus:ring-td-green focus:outline-none transition-colors"
                        placeholder="e.g. 250"
                        type="number"
                        min="0"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                        {AREA_UNIT}
                      </span>
                    </div>
                  </div>

                  {/* Estimated Price Display */}
                  <div
                    className={`flex-1 rounded-lg border p-4 text-center transition-all duration-500 ${hasEstimate
                      ? "bg-td-green/10 border-td-green/30 scale-100"
                      : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                      }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-td-green">
                      Estimated Price
                    </p>
                    {hasEstimate ? (
                      <p className="text-2xl font-black text-slate-900 dark:text-white transition-all duration-300">
                        {CURRENCY_SYMBOL}{formatUSD(estimate.low)} – {CURRENCY_SYMBOL}{formatUSD(estimate.high)}{" "}
                        <span className="text-xs font-normal">{CURRENCY_CODE}</span>
                      </p>
                    ) : (
                      <p className="text-lg font-bold text-slate-400 dark:text-slate-500">
                        — —
                      </p>
                    )}
                  </div>
                </div>

                {/* Breakdown (visible when there is an estimate) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${hasEstimate ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="rounded-lg border border-slate-200 dark:border-slate-700 divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                    {estimate.breakdown.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between px-4 py-3"
                      >
                        <span className="text-slate-600 dark:text-slate-400">
                          {item.label}{" "}
                          <span className="text-xs text-slate-400">
                            ({CURRENCY_SYMBOL}{item.pricePerFt2.toFixed(2)} × {area} {AREA_UNIT})
                          </span>
                        </span>
                        <span className="font-bold">
                          {CURRENCY_SYMBOL}{formatUSD(Math.round(item.subtotal))}
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-800/50">
                      <span className="text-slate-600 dark:text-slate-400">
                        Travel / Mobilization
                      </span>
                      <span className="font-bold">
                        {CURRENCY_SYMBOL}{formatUSD(TRAVEL_COST)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3 bg-td-green/5 font-bold">
                      <span>Estimated Total</span>
                      <span className="text-td-green text-lg">
                        {CURRENCY_SYMBOL}{formatUSD(estimate.low)} – {CURRENCY_SYMBOL}{formatUSD(estimate.high)}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  *Prices are estimates and depend on site conditions and final finishes.
                </p>
              </div>
            </div>

            {/* 2. Contact Form */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-td-green">edit_note</span>
                <h3 className="text-xl font-bold">Project Details</h3>
              </div>
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    id="name-input"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-2.5 px-3 focus:border-td-green focus:ring-td-green focus:outline-none transition-colors"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone / Cell</label>
                  <input
                    id="phone-input"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-2.5 px-3 focus:border-td-green focus:ring-td-green focus:outline-none transition-colors"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Zone / Area</label>
                  <input
                    id="zone-input"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-2.5 px-3 focus:border-td-green focus:ring-td-green focus:outline-none transition-colors"
                    type="text"
                    placeholder="e.g. Downtown, Suburbs..."
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">WhatsApp</label>
                  <input
                    id="whatsapp-input"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-2.5 px-3 focus:border-td-green focus:ring-td-green focus:outline-none transition-colors"
                    placeholder="WhatsApp number"
                    type="text"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium">Brief Description</label>
                  <textarea
                    id="description-input"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-2.5 px-3 focus:border-td-green focus:ring-td-green focus:outline-none transition-colors"
                    placeholder="Tell us more about what you need..."
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 pt-4">
                  <button
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-td-green px-8 py-4 text-lg font-bold text-white shadow-lg shadow-td-green/30 transition-all hover:scale-[1.02] hover:bg-td-green/90 active:scale-[0.98]"
                    type="submit"
                  >
                    <span className="material-symbols-outlined">send</span>
                    Send via WhatsApp
                  </button>
                  <p className="mt-3 text-center text-sm text-slate-500">
                    You'll receive a response within 30 minutes (business hours).
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Sidebar Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Call */}
            <div className="rounded-xl bg-slate-900 p-6 text-white shadow-xl dark:bg-td-green/10 dark:border dark:border-td-green/20">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-td-green/20 text-td-green">
                  <span className="material-symbols-outlined text-3xl">call</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">Direct Line</p>
                  <a
                    className="text-2xl font-black hover:text-td-green transition-colors"
                    href="tel:3121234567"
                  >
                    (312) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Job Location Map */}
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-td-green">location_on</span>
                  Job Location
                </h4>
              </div>
              <div
                className="w-full"
                style={{ height: "280px" }}
              >
                <MapContainer
                  center={DEFAULT_CENTER}
                  zoom={DEFAULT_ZOOM}
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                  />
                  <LocationMarker position={location} setPosition={setLocation} />
                </MapContainer>
              </div>
              <div className="p-3 space-y-2">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Click on the map to pin the work location.
                </p>
                {location && (
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 px-3 py-2 text-sm">
                    <span className="material-symbols-outlined text-base text-td-green">pin_drop</span>
                    <span className="text-slate-600 dark:text-slate-400 font-mono text-xs">
                      {location[0].toFixed(4)}, {location[1].toFixed(4)}
                    </span>
                    <a
                      href={`https://www.google.com/maps?q=${location[0]},${location[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-td-green hover:underline text-xs font-semibold flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      Maps
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
                <span className="material-symbols-outlined text-td-green">history</span>
                <div>
                  <h5 className="text-sm font-bold">15 Years of Experience</h5>
                  <p className="text-xs text-slate-500">
                    Certified specialists in lightweight construction systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
