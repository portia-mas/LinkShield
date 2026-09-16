"use client";

import { useState } from "react";
import { analyzeUrl } from "../lib/urlAnalyzer";

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
    setResults(null);

    try {
      const parsedUrl = new URL(url);
      const analysis = analyzeUrl(parsedUrl.toString());

      setResults(analysis);
    } catch {
      setError("Please enter a valid URL.");
    }
  }

  function getRiskStyle() {
    if (!results) return "";

    if (results.riskLevel === "High") {
      return "bg-[#D96B4A] text-white";
    }

    if (results.riskLevel === "Medium") {
      return "bg-[#D99A4A] text-white";
    }

    return "bg-[#7D9B83] text-white";
  }

  return (
    <main className="min-h-screen bg-[#F5F2EC] text-[#263C3D]">


      <nav className="border-b border-[#263C3D]/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#263C3D]/30 bg-[#E7E1D7] text-2xl">
              🛡️
            </div>

            <div>
              <h1 className="font-serif text-2xl font-bold">
                Link<span className="text-[#C96F4A]">Shield</span>
              </h1>

              <p className="hidden text-[10px] uppercase tracking-[0.3em] text-[#526568] sm:block">
                Think before you click
              </p>
            </div>

          </div>

          <div className="flex items-center gap-8 text-sm">
            <span className="border-b-2 border-[#C96F4A] pb-1 font-medium">
              Home
            </span>

            <span className="text-[#526568]">
              About
            </span>

            <span className="hidden border-l border-[#263C3D]/20 pl-8 text-[#526568] md:block">
              🛡 Stay Safe Online
            </span>
          </div>

        </div>
      </nav>


      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        <div>

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#526568]">
            Cybersecurity Tool
          </p>

          <h2 className="max-w-3xl font-serif text-5xl font-bold leading-[1.05] md:text-7xl">

            Think before you click.
            <br />

            <span className="text-[#C96F4A]">
              Check before you trust.
            </span>

          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#526568]">
            LinkShield is a web-based security tool that helps you identify
            potentially suspicious links and websites before visiting them.
          </p>


          <div className="mt-9 rounded-xl border border-[#263C3D]/25 bg-[#FAF8F3] p-2 shadow-sm">

            <div className="flex flex-col gap-2 sm:flex-row">

              <div className="flex flex-1 items-center">

                <span className="px-4 text-xl text-[#526568]">
                  🔗
                </span>

                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full bg-transparent px-2 py-4 text-[#263C3D] outline-none placeholder:text-[#526568]/60"
                />

              </div>

              <button
                onClick={checkUrl}
                className="rounded-lg bg-[#526F6B] px-8 py-4 font-semibold tracking-wide text-white transition hover:bg-[#405A57]"
              >
                CHECK URL →
              </button>

            </div>

          </div>


          {error && (
            <div className="mt-4 rounded-lg border border-[#D96B4A]/30 bg-[#F5DDD5] px-4 py-3 text-sm text-[#A84E36]">
              ⚠️ {error}
            </div>
          )}

        </div>


        <div className="relative flex min-h-[350px] items-center justify-center">

          <div className="absolute h-72 w-72 rounded-full bg-[#526F6B] opacity-90" />

          <div className="absolute right-10 top-5 h-24 w-24 rounded-full bg-[#D58A61]" />

          <div className="relative z-10 w-[85%] max-w-lg">

            <div className="rounded-2xl border-8 border-[#263C3D] bg-[#E7E1D7] p-3 shadow-xl">

              <div className="rounded-lg bg-[#FAF8F3] p-10 text-center">

                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#DDE7DE] text-5xl">
                  🛡️
                </div>

                <h3 className="font-serif text-2xl font-bold">
                  Safe or Suspicious?
                </h3>

                <div className="mx-auto mt-4 h-2 w-32 rounded-full bg-[#526F6B]/30" />

                <div className="mx-auto mt-3 h-2 w-20 rounded-full bg-[#526F6B]/20" />

              </div>

            </div>

            <div className="mx-auto h-4 w-[110%] rounded-b-full bg-[#263C3D]" />

          </div>

          <div className="absolute bottom-4 right-0 max-w-[130px] text-right font-serif text-2xl italic text-[#526568]">
            Safer internet.
            <br />
            Better decisions.
          </div>

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-6 pb-10">

        <div className="rounded-2xl border border-[#263C3D]/20 bg-[#FAF8F3] p-7 shadow-sm">

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.7fr_1.2fr]">


            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#526568]">
                Analysis Results
              </p>

              {!results ? (

                <div className="mt-5 rounded-xl bg-[#EEE9DF] p-7">

                  <div className="flex items-center gap-5">

                    <div className="text-5xl">
                      🛡️
                    </div>

                    <div>

                      <h3 className="font-serif text-2xl font-bold">
                        Enter a URL above
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#526568]">
                        Paste a link and click "Check URL" to see the
                        security analysis.
                      </p>

                    </div>

                  </div>

                </div>

              ) : (

                <div className="mt-5">

                  <div className="rounded-xl bg-[#EEE9DF] p-5">

                    <p className="break-all text-sm text-[#526568]">
                      🔗 {url}
                    </p>

                  </div>

                  <div className="mt-5 flex items-center gap-5">

                    <div
                      className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-full text-4xl font-bold ${getRiskStyle()}`}
                    >
                      {results.riskScore}
                    </div>

                    <div>

                      <p className="font-serif text-3xl font-bold">
                        {results.riskLevel} Risk
                      </p>

                      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#526568]">
                        Risk Score
                      </p>

                    </div>

                  </div>

                </div>

              )}

            </div>


            {/* RISK CHECKS */}

            <div className="border-y border-[#263C3D]/15 py-6 lg:border-x lg:border-y-0 lg:px-8">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#526568]">
                Security Checks
              </p>

              {!results ? (

                <p className="mt-6 text-sm text-[#526568]">
                  Your security checks will appear here after analysing a URL.
                </p>

              ) : (

                <div className="mt-5 space-y-4 text-sm">

                  <CheckItem
                    label="HTTPS"
                    value={results.usesHttps ? "Yes" : "No"}
                    safe={results.usesHttps}
                  />

                  <CheckItem
                    label="IP Address"
                    value={results.isIpAddress ? "Yes" : "No"}
                    safe={!results.isIpAddress}
                  />

                  <CheckItem
                    label="URL Length"
                    value={results.isVeryLong ? "Very Long" : "Normal"}
                    safe={!results.isVeryLong}
                  />

                  <CheckItem
                    label="Suspicious Keywords"
                    value={
                      results.foundKeywords.length > 0
                        ? `Found (${results.foundKeywords.join(", ")})`
                        : "None"
                    }
                    safe={results.foundKeywords.length === 0}
                  />

                  <CheckItem
                    label="Suspicious Characters"
                    value={
                      results.hasSuspiciousCharacters
                        ? "Detected"
                        : "None"
                    }
                    safe={!results.hasSuspiciousCharacters}
                  />

                  <CheckItem
                    label="Multiple Subdomains"
                    value={
                      results.hasManySubdomains
                        ? "Detected"
                        : "None"
                    }
                    safe={!results.hasManySubdomains}
                  />

                </div>

              )}

            </div>



            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#526568]">
                Warnings
              </p>

              {!results || results.warnings.length === 0 ? (

                <div className="mt-5 rounded-xl bg-[#E7EFE8] p-6">

                  <p className="font-serif text-xl font-bold">
                    No warnings
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#526568]">
                    No warning indicators have been detected.
                  </p>

                </div>

              ) : (

                <div className="mt-5 rounded-xl border border-[#D58A61]/30 bg-[#F5E5DC] p-6">

                  <h3 className="font-serif text-xl font-bold">
                    ⚠️ Review these indicators
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-[#526568]">

                    {results.warnings.map((warning, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-[#C96F4A]">●</span>
                        <span>{warning}</span>
                      </li>
                    ))}

                  </ul>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="mb-7 flex items-center gap-5">

          <p className="text-xs font-semibold uppercase tracking-[0.35em]">
            Featured Checks
          </p>

          <div className="h-px flex-1 bg-[#263C3D]/20" />

        </div>


        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <FeatureCard
            icon="🔗"
            title="Link Analysis"
            text="Check suspicious links for common security warning signs."
            color="green"
          />

          <FeatureCard
            icon="🌐"
            title="Website Analysis"
            text="Analyse website URLs for potentially suspicious indicators."
            color="orange"
          />

          <FeatureCard
            icon="🛡️"
            title="Risk Scoring"
            text="Get a risk score and risk level based on multiple indicators."
            color="blue"
          />

          <FeatureCard
            icon="⚠️"
            title="Security Indicators"
            text="Detect common signs that may indicate a suspicious link."
            color="yellow"
          />

        </div>

      </section>


      <footer className="mt-8 bg-[#263C3D] px-6 py-8 text-[#F5F2EC]">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

          <div className="flex items-center gap-3">

            <div className="text-2xl">
              🛡️
            </div>

            <span className="font-serif text-2xl font-bold">
              LinkShield
            </span>

          </div>

          <p className="text-center text-xs uppercase tracking-[0.25em] text-[#D9E0DC]">
            Think before you click. Check before you trust.
          </p>

        </div>

      </footer>

    </main>
  );
}


function CheckItem({
  label,
  value,
  safe,
}: {
  label: string;
  value: string;
  safe: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">

      <span className="text-[#526568]">
        {label}
      </span>

      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          safe
            ? "bg-[#E1ECE3] text-[#52705A]"
            : "bg-[#F5DDD5] text-[#A84E36]"
        }`}
      >
        {safe ? "✓" : "⚠"} {value}
      </span>

    </div>
  );
}


function FeatureCard({
  icon,
  title,
  text,
  color,
}: {
  icon: string;
  title: string;
  text: string;
  color: "green" | "orange" | "blue" | "yellow";
}) {

  const colors = {
    green: "bg-[#E4ECE4]",
    orange: "bg-[#F2E2D8]",
    blue: "bg-[#E2E8EA]",
    yellow: "bg-[#F2E9D7]",
  };

  return (
    <div
      className={`group rounded-xl border border-[#263C3D]/15 p-6 transition hover:-translate-y-1 hover:shadow-md ${colors[color]}`}
    >

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FAF8F3] text-xl shadow-sm">
        {icon}
      </div>

      <h3 className="font-serif text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#526568]">
        {text}
      </p>

      <div className="mt-5 text-lg transition group-hover:translate-x-1">
        →
      </div>

    </div>
  );
}