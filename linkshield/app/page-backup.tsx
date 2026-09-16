"use client";

import { useState } from "react";
import { analyzeUrl } from "@/lib/urlAnalyzer";

export default function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [results, setResults] = useState<{
  usesHttps: boolean;
  isIpAddress: boolean;
  isVeryLong: boolean;
  foundKeywords: string[];
  hasSuspiciousCharacters: boolean;
  hasManySubdomains: boolean;
  riskScore: number;
  riskLevel: string;
  warnings: string[];
} | null>(null);

  function checkUrl() {
    setError("");

    try {
      const parsedUrl = new URL(url);

      const analysis = analyzeUrl(parsedUrl.toString());

      setResults(analysis);
    
    } catch {
      setError("Please enter a valid URL.");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-2xl text-center">

        <h1 className="text-5xl font-bold mb-4">
          🛡️ LinkShield
        </h1>

        <p className="text-xl mb-10">
          Think before you click. Check before you trust.
        </p>

        <div className="flex gap-3">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste a suspicious link or website URL..."
            className="flex-1 border rounded-lg px-4 py-3"
          />

          <button
            onClick={checkUrl}
            className="rounded-lg px-6 py-3 font-semibold bg-black text-white"
          >
            Check URL
          </button>
        </div>

        {error && (
          <p className="text-red-600 mt-3">
            {error}
          </p>
        )}

        {results && (
          <div className="mt-8 border rounded-xl p-6 text-left">
            <h2 className="text-2xl font-bold mb-4">
              Analysis Results
            </h2>

            <div className="mb-6">
              <p className="text-lg font-semibold">
                Risk Level: {results.riskLevel}
              </p>

              <p>
                Risk Score: {results.riskScore}
              </p>
            </div>

            <p>
              HTTPS: {results.usesHttps ? "Yes" : "No"}
            </p>

            <p>
              IP Address: {results.isIpAddress ? "Yes" : "No"}
            </p>

            <p>
              Very Long URL: {results.isVeryLong ? "Yes" : "No"}
            </p>

            <p>
              Suspicious Keywords:{" "}
              {results.foundKeywords.length > 0
                ? results.foundKeywords.join(", ")
                : "None detected"}
            </p>

            <p>
              Suspicious Characters:{" "}
              {results.hasSuspiciousCharacters ? "Detected" : "None detected"}
            </p>

            <p>
              Many Subdomains:{" "}
              {results.hasManySubdomains ? "Detected" : "None detected"}
            </p>

          {results.warnings.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">
                Warnings
              </h3>

              <ul className="list-disc pl-5">
                {results.warnings.map((warning, index) => (
                  <li key={index}>{warning}</li>
                ))}
              </ul>
            </div>
          )} 

          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

          <div className="border rounded-xl p-6 text-left">
            <h2 className="text-xl font-semibold mb-2">
              🔗 Link Analysis
            </h2>

            <p>
              Analyse suspicious links for potential security risks.
            </p>
          </div>

          <div className="border rounded-xl p-6 text-left">
            <h2 className="text-xl font-semibold mb-2">
              🌐 Website Analysis
            </h2>

            <p>
              Check websites for potentially suspicious indicators.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}