"use client";

import { useState } from "react";
import { analyzeUrl } from "@/lib/urlAnalyzer";

export default function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  function checkUrl() {
    setError("");

    try {
      const parseUrl = new URL(url);

      const results = analyzeUrl(parseUrl.toString());

      console.log(results);
    
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