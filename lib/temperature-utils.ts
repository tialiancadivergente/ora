export const TEMPERATURE_TAG_MAP: Record<string, number> = {
  'q': 120867,
  'm': 120867,
  'f': 120867,
  't': 120867,
  'o': 120868,
  'org': 120868
};

export const NORMALIZED_TEMPERATURE_VALUES = ["q", "f", "m", "t", "org"] as const;

export type NormalizedTemperature =
  (typeof NORMALIZED_TEMPERATURE_VALUES)[number];

export const TEMPERATURE_TAG_MAP_ORO: Record<string, string> = {
  'q': '[AUTO] [ORA] [JUN26] Quente',
  'm': '[AUTO] [ORA] [JUN26] Morno',
  'f': '[AUTO] [ORA] [JUN26] FRIO',
  't': '[[AUTO] [ORA] [JUN26] Trafego',
  'o': '[AUTO] [ORA] [JUN26] ORGANICO',
  'org': '[AUTO] [ORA] [JUN26] ORGANICO'
};

export const getTagIdByTemperature = (temperature: string): number | null => {
  return TEMPERATURE_TAG_MAP[temperature] || null;
};

export const getTagByTemperatureOro = (temperature: string): string | null => {
  return TEMPERATURE_TAG_MAP_ORO[temperature] || null;
};

export const isValidTemperature = (temperature: string): boolean => {
  return temperature in TEMPERATURE_TAG_MAP;
};

export const getValidTemperatures = (): string[] => {
  return Object.keys(TEMPERATURE_TAG_MAP);
};

export const normalizeTemperature = (
  value: string | string[] | undefined
): NormalizedTemperature | undefined => {
  const rawValue = Array.isArray(value) ? value[0] : value;
  if (!rawValue) return undefined;

  if (rawValue === "o") {
    return "org";
  }

  if (
    rawValue === "q" ||
    rawValue === "f" ||
    rawValue === "m" ||
    rawValue === "t" ||
    rawValue === "org"
  ) {
    return rawValue;
  }

  return undefined;
};
