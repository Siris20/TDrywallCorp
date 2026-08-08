// ============================================================
//  PRICING CONFIGURATION — Bay Area Drywall Services
// ============================================================

export const SERVICES = [
  {
    id: "framing",
    label: "Framing (Metal / Wood)",
    icon: "view_quilt",
    priceMin: 2.50,
    priceMax: 3.50,
    unit: "ft²",
    description: "Metal or wood stud framing for walls and ceilings.",
  },
  {
    id: "drywall_hanging",
    label: "Drywall Hanging",
    icon: "layers",
    priceMin: 1.50,
    priceMax: 2.50,
    unit: "ft²",
    description: "Hanging and securing drywall sheets to framing.",
  },
  {
    id: "finishing",
    label: "Finishing & Texturing",
    icon: "build",
    unit: "ft²",
    description: "Taping, mudding, and finishing to desired level (Includes hanging).",
    options: [
      {
        id: "level_3",
        label: "Level 3 (Texture)",
        priceMin: 2.50,
        priceMax: 3.50,
        sheetEstimate: "$85 – $120 / sheet (4' x 8')",
        description: "Taping, mudding & texture applied.",
      },
      {
        id: "level_4",
        label: "Level 4 (Smooth)",
        priceMin: 3.50,
        priceMax: 4.50,
        sheetEstimate: "$165 – $215 / sheet (4' x 12')",
        description: "Smooth finish ready for primer / flat paint.",
      },
      {
        id: "level_5",
        label: "Level 5 (Skim-Coat)",
        priceMin: 3.50,
        priceMax: 5.50,
        sheetEstimate: "Premium full skim-coat",
        description: "Ultra smooth finish for high-gloss paint or critical light.",
      },
    ],
  },
];

export const MINIMUM_PROJECT_FEE = 250.00; // Tarifa mínima cobrada por trabajo
export const CURRENCY_SYMBOL = "$";
export const CURRENCY_CODE = "USD";
export const AREA_UNIT = "ft²";

/**
 * Calcula la estimación precisa sin duplicar costos y aplicando el mínimo de proyecto.
 */
export function calculateEstimate(selectedServiceIds, selectedFinishingOptionId = "level_3", area = 0) {
  if (!selectedServiceIds || !selectedServiceIds.length || !area || area <= 0) {
    return { low: 0, high: 0, travel: 0, breakdown: [], isMinimumApplied: false };
  }

  const breakdown = [];
  const includesHanging = selectedServiceIds.includes("drywall_hanging");
  const includesFinishing = selectedServiceIds.includes("finishing");
  const includesFraming = selectedServiceIds.includes("framing");

  // 1. Framing (Siempre se suma de forma independiente si está seleccionado)
  if (includesFraming) {
    const framingService = SERVICES.find((s) => s.id === "framing");
    breakdown.push({
      id: "framing",
      label: framingService.label,
      priceMin: framingService.priceMin,
      priceMax: framingService.priceMax,
      subtotalLow: framingService.priceMin * area,
      subtotalHigh: framingService.priceMax * area,
    });
  }

  // 2. Finishing vs Hanging (Evita cobrar doble)
  if (includesFinishing) {
    const finishingService = SERVICES.find((s) => s.id === "finishing");
    const option = finishingService.options.find((o) => o.id === selectedFinishingOptionId) || finishingService.options[0];

    // Si también seleccionó Hanging, aclaramos que la tarifa de Finishing ya incluye la instalación/colgado.
    const note = includesHanging ? " (Includes Hanging & Finishing)" : "";

    breakdown.push({
      id: `finishing_${option.id}`,
      label: `Finishing: ${option.label}${note}`,
      priceMin: option.priceMin,
      priceMax: option.priceMax,
      subtotalLow: option.priceMin * area,
      subtotalHigh: option.priceMax * area,
    });
  } else if (includesHanging) {
    // Solo si seleccionó Hanging SIN Finishing
    const hangingService = SERVICES.find((s) => s.id === "drywall_hanging");
    breakdown.push({
      id: "drywall_hanging",
      label: hangingService.label,
      priceMin: hangingService.priceMin,
      priceMax: hangingService.priceMax,
      subtotalLow: hangingService.priceMin * area,
      subtotalHigh: hangingService.priceMax * area,
    });
  }

  // 3. Cálculos Totales
  const servicesTotalLow = breakdown.reduce((sum, item) => sum + item.subtotalLow, 0);
  const servicesTotalHigh = breakdown.reduce((sum, item) => sum + item.subtotalHigh, 0);

  const rawLow = servicesTotalLow;
  const rawHigh = servicesTotalHigh;

  // Evaluar si se aplica la tarifa mínima de proyecto
  const isMinimumApplied = rawHigh < MINIMUM_PROJECT_FEE;
  const low = isMinimumApplied ? MINIMUM_PROJECT_FEE : Math.round(rawLow);
  const high = isMinimumApplied ? MINIMUM_PROJECT_FEE + 50 : Math.round(rawHigh);

  return {
    low,
    high,
    breakdown,
    isMinimumApplied,
  };
}