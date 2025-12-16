"use client";

import { useEffect } from "react";

const ANDROID_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.yassirira.newapp";
const IOS_APP_STORE_URL =
  "https://apps.apple.com/app/idXXXXXXXXX";

export default function ResetPage({
  params,
}: {
  params: { token: string };
}) {
  useEffect(() => {
    const token = params.token;
    if (!token) return;

    const encoded = encodeURIComponent(token);

    // ✅ Correct URLs
    const deepLink = `blotopay:///reset?token=${encoded}`;
    const intentLink = `intent://reset?token=${encoded}#Intent;scheme=blotopay;package=com.yassirira.newapp;end`;

    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.includes("android");
    const isIOS = /iphone|ipad|ipod/.test(ua);

    const storeUrl = isAndroid
      ? ANDROID_PLAY_URL
      : isIOS
      ? IOS_APP_STORE_URL
      : ANDROID_PLAY_URL;

    // ✅ Android works automatically
    if (isAndroid) {
      window.location.href = intentLink;
      return;
    }

    // ⚠️ iOS needs user interaction fallback
    window.location.href = deepLink;

    setTimeout(() => {
      window.location.href = storeUrl;
    }, 2000);
  }, [params.token]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Opening BlotoPay…</h2>
      <p>If the app doesn’t open, tap below:</p>
      <a
        href={`blotopay:///reset?token=${encodeURIComponent(params.token)}`}
        style={{
          display: "inline-block",
          marginTop: 16,
          padding: "12px 20px",
          background: "#000",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
        }}
      >
        Open BlotoPay App
      </a>
    </div>
  );
}
