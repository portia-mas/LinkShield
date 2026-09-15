const suspiciousKeywords = [
  "login",
  "verify",
  "account",
  "password",
  "secure",
  "update",
  "confirm",
  "bank",
];

export function analyzeUrl(url: string) {
  const parsedUrl = new URL(url);

  const isIpAddress =
    /^(\d{1,3}\.){3}\d{1,3}$/.test(parsedUrl.hostname);

  const foundKeywords = suspiciousKeywords.filter((keyword) =>
  url.toLowerCase().includes(keyword)
);  

  const hasSuspiciousCharacters = url.includes("@");  

  const hostnameParts = parsedUrl.hostname.split(".");
  const hasManySubdomains = hostnameParts.length > 3;

  let riskScore = 0;
  const warnings: string[] = [];

if (!parsedUrl.protocol.startsWith("https")) {
riskScore += 2;
warnings.push("The URL does not use HTTPS.");
}

if (isIpAddress) {
riskScore += 3;
warnings.push("The URL uses an IP address instead of a domain name.");
}

if (url.length > 100) {
  riskScore += 1;
  warnings.push("The URL is unusually long.");
}

if (foundKeywords.length > 0) {
  riskScore += 1;
  warnings.push(
  `The URL contains suspicious keywords: ${foundKeywords.join(", ")}.`
);
}

if (hasSuspiciousCharacters) {
  riskScore += 2;
  warnings.push(
    "The URL contains an @ character, which can be used to make a URL misleading."
  );
}

if (hasManySubdomains) {
  riskScore += 1;
  warnings.push(
    "The URL contains multiple subdomains, which can sometimes be used to make a domain appear more trustworthy."
  );
}

  let riskLevel = "Low";

    if (riskScore >= 4) {
    riskLevel = "High";
    } else if (riskScore >= 2) {
    riskLevel = "Medium";
    }

  const checks = {
    usesHttps: parsedUrl.protocol === "https:",
    isIpAddress,
    isVeryLong: url.length > 100,
    foundKeywords,
    hasSuspiciousCharacters,
    hasManySubdomains,
    riskScore,
    riskLevel,
    warnings,
    
  };

  return checks;
}