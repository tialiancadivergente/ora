export const TEMPERATURE_TAG_MAP: Record<string, number> = {
  'q': 121097,
  'm': 121097,
  'f': 121097,
  't': 121097,
  't2': 121100,
  'o': 121099,
  'org': 121099
};

export const NORMALIZED_TEMPERATURE_VALUES = ["q", "f", "m", "t", "t2", "org"] as const;

export type NormalizedTemperature =
  (typeof NORMALIZED_TEMPERATURE_VALUES)[number];

export const TEMPERATURE_TAG_MAP_ORO: Record<string, string> = {
  'q': '[ORA] 20JUL26 T',
  'm': '[ORA] 20JUL26 T',
  'f': '[ORA] 20JUL26 T',
  't': '[ORA] 20JUL26 T',
  't2': '[ORA] 20JUL26 T2',
  'o': '[ORA] 20JUL26 O',
  'org': '[ORA] 20JUL26 O'
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
    rawValue === "t2" ||
    rawValue === "org"
  ) {
    return rawValue;
  }

  return undefined;
};
