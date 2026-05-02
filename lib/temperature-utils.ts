export const TEMPERATURE_TAG_MAP: Record<string, number> = {
  'q': 120826,
  'm': 120826,
  'f': 120826,
  't': 120826,
  'o': 120828,
  'org': 120828
};

export const NORMALIZED_TEMPERATURE_VALUES = ["q", "f", "m", "t", "org"] as const;

export type NormalizedTemperature =
  (typeof NORMALIZED_TEMPERATURE_VALUES)[number];

export const TEMPERATURE_TAG_MAP_ORO: Record<string, string> = {
  'q': '[ORA_ELTON] MAI26 Quente',
  'm': '[ORA_ELTON] MAI26 Morno',
  'f': '[ORA_ELTON] MAI26 FRIO',
  't': '[ORA_ELTON] MAI26 Trafego',
  'o': '[ORA_ELTON] MAI26 ORGANICO',
  'org': '[ORA_ELTON] MAI26 ORGANICO'
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
