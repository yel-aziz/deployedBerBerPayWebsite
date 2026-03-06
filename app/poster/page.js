"use client";

import Link from "next/link";
import { useState } from "react";

const POSTER_IMAGE = "/bloto-drive-booster-agence.png";

export default function PosterPage() {
  const [copied, setCopied] = useState(false);

  const fullUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${POSTER_IMAGE}`
      : POSTER_IMAGE;

  const copyLink = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-primary-blue hover:underline mb-8"
        >
          ← Retour à l&apos;accueil
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Affiche Bloto Drive — Booster votre agence
        </h1>
        <p className="text-gray-600 mb-8">
          Lien direct vers l&apos;affiche (partage ou intégration) :
        </p>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <input
            type="text"
            readOnly
            value={fullUrl}
            className="flex-1 min-w-0 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm font-mono"
          />
          <button
            onClick={copyLink}
            className="px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-blue/90 transition text-sm font-medium"
          >
            {copied ? "Copié !" : "Copier le lien"}
          </button>
        </div>
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={POSTER_IMAGE}
            alt="Bloto Drive - Booster votre agence"
            className="w-full h-auto block"
          />
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Lien direct de l&apos;image :{" "}
          <a
            href={POSTER_IMAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-blue hover:underline break-all"
          >
            {POSTER_IMAGE}
          </a>
        </p>
      </div>
    </div>
  );
}
