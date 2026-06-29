// ============================================================
//  PRICING CONFIGURATION — Edit prices here
// ============================================================
//  All prices are in USD ($) per square foot (ft²).
//  Modify the values below to reflect your real costs.
// ============================================================

/**
 * SERVICE PRICES (USD per ft²)
 * 
 * Each service has:
 *   - label       : Display name shown in the UI
 *   - icon        : Material Symbols icon name
 *   - pricePerFt2 : Your price per square foot in USD
 *   - description : Short description for the user
 */
export const SERVICES = [
  {
    id: "framing",
    label: "Framing",
    icon: "view_quilt",
    pricePerFt2: 3.50,          // <-- CHANGE THIS to your real price
    description: "Metal or wood stud framing for walls and ceilings.",
  },
  {
    id: "drywall_installation",
    label: "Drywall Installation",
    icon: "layers",
    pricePerFt2: 2.75,          // <-- CHANGE THIS to your real price
    description: "Hanging and securing drywall sheets to framing.",
  },
  {
    id: "finishing",
    label: "Finishing",
    icon: "build",
    pricePerFt2: 2.25,          // <-- CHANGE THIS to your real price
    description: "Taping, mudding, sanding, and texturing to a paint-ready surface.",
  },
];

/**
 * TRAVEL / MOBILIZATION COST (flat fee in USD)
 * This is added once to every quote, regardless of area or service.
 */
export const TRAVEL_COST = 75.00;   // <-- CHANGE THIS to your real travel cost

/**
 * ESTIMATE RANGE FACTOR
 * The calculator shows a price range: [low, high].
 * - lowFactor  multiplies the base price to get the low end
 * - highFactor multiplies the base price to get the high end
 * 
 * Example: base $500, lowFactor 0.9, highFactor 1.15
 *   → shown as "$450 – $575"
 */
export const ESTIMATE_LOW_FACTOR  = 0.90;   // <-- 10% below base
export const ESTIMATE_HIGH_FACTOR = 1.15;   // <-- 15% above base

/**
 * CURRENCY SYMBOL displayed in the UI
 */
export const CURRENCY_SYMBOL = "$";
export const CURRENCY_CODE   = "USD";

/**
 * AREA UNIT displayed in the UI
 */
export const AREA_UNIT = "ft²";

// ============================================================
//  CALCULATION LOGIC — You normally don't need to change this
// ============================================================

/**
 * Calculates the estimated price range for selected services + area.
 *
 * @param {string[]} selectedServiceIds - Array of selected service IDs
 * @param {number}   area               - Area in ft²
 * @returns {{ low: number, high: number, base: number, travel: number, breakdown: Array }}
 */
export function calculateEstimate(selectedServiceIds, area) {
  if (!selectedServiceIds.length || !area || area <= 0) {
    return { low: 0, high: 0, base: 0, travel: 0, breakdown: [] };
  }

  const breakdown = SERVICES
    .filter((s) => selectedServiceIds.includes(s.id))
    .map((s) => ({
      id: s.id,
      label: s.label,
      pricePerFt2: s.pricePerFt2,
      subtotal: s.pricePerFt2 * area,
    }));

  const servicesTotal = breakdown.reduce((sum, item) => sum + item.subtotal, 0);
  const base = servicesTotal + TRAVEL_COST;

  return {
    base,
    travel: TRAVEL_COST,
    low: Math.round(base * ESTIMATE_LOW_FACTOR),
    high: Math.round(base * ESTIMATE_HIGH_FACTOR),
    breakdown,
  };
}
