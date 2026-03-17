export const DEFAULT_QUEST_FORM_VERSION_ID =
  "a9e5538c-ee07-41e4-95a0-862e89adf186";

const QUEST_WHATSAPP_URL_BY_TEMPERATURE = {
  f: "https://redirects.aliancadivergente.com.br/oro-pages-f",
  org: "https://redirects.aliancadivergente.com.br/oro-pages-org",
  m: "https://redirects.aliancadivergente.com.br/oro-pages-m",
  q: "https://redirects.aliancadivergente.com.br/oro-pages-f",
} as const;

type QuestTesteTemperatureKey = keyof typeof QUEST_WHATSAPP_URL_BY_TEMPERATURE;

export function resolveQuestTesteWhatsappUrl(temperature: string): string {
  const normalizedTemperature = temperature.toLowerCase().trim();
  const validKeys = Object.keys(
    QUEST_WHATSAPP_URL_BY_TEMPERATURE
  ) as QuestTesteTemperatureKey[];

  const resolvedKey = validKeys.includes(normalizedTemperature as QuestTesteTemperatureKey)
    ? (normalizedTemperature as QuestTesteTemperatureKey)
    : "f";

  return QUEST_WHATSAPP_URL_BY_TEMPERATURE[resolvedKey];
}
