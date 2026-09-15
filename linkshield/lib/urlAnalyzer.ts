export function analyzeUrl(url: string) {
  const parsedUrl = new URL(url);

  const isIpAddress =
    /^(\d{1,3}\.){3}\d{1,3}$/.test(parsedUrl.hostname);

  const checks = {
    usesHttps: parsedUrl.protocol === "https:",
    isIpAddress,
    isVeryLong: url.length > 100,
  };

  return checks;
}