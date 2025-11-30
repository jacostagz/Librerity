// src/lib/utils/price.ts
export function formatCOP(value: number) {
  return value.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });
}
