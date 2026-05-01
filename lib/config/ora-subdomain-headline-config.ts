export type OraHeadlineVariant = "default" | "gg";

const SUBDOMAIN_TO_HEADLINE_VARIANT: Record<string, OraHeadlineVariant> = {
  apd: "default",
  apdfb: "default",
  apdgg: "gg",
};

function extractSubdomain(hostname?: string): string | null {
  if (!hostname) {
    return null;
  }

  const normalizedHostname = hostname.toLowerCase().split(":")[0];
  const [subdomain] = normalizedHostname.split(".");

  return subdomain ?? null;
}

export function getOraHeadlineVariantByHostname(
  hostname?: string
): OraHeadlineVariant {
  const subdomain = extractSubdomain(hostname);

  if (!subdomain) {
    return "default";
  }

  return SUBDOMAIN_TO_HEADLINE_VARIANT[subdomain] ?? "default";
}
