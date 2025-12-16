"use client";

import { useEffect } from "react";

export default function PoolWithIdPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const { pathname, search } = window.location;

    const cleanPathname = pathname.replace(/^\/+/, "");
    const deepLinkPath = search
      ? `${cleanPathname}${search}`
      : cleanPathname;

    // ✅ ONLY THIS
    window.location.href = `blotopay:///${deepLinkPath}`;
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Opening BlotoPay…</h2>
      <p>If the app doesn’t open, tap below:</p>
      <a href={`blotopay:///`}>
        Open BlotoPay App
      </a>
    </div>
  );
}
