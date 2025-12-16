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

    // 🔥 IMPORTANT: triple slash
    const deepLink = `blotopay:///reset?token=${encoded}`;
    const intentLink = `intent:///reset?token=${encoded}#Intent;scheme=blotopay;package=com.yassirira.newapp;end`;

    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.includes("android");
    const isIOS = /iphone|ipad|ipod/.test(ua);

    const storeUrl = isAndroid
      ? ANDROID_PLAY_URL
      : isIOS
      ? IOS_APP_STORE_URL
      : ANDROID_PLAY_URL;

    const start = Date.now();

    if (isAndroid) {
      window.location.href = intentLink;
    } else {
      window.location.href = deepLink;
    }

    const t = setTimeout(() => {
      if (Date.now() - start < 1600) {
        window.location.href = storeUrl;
      }
    }, 1500);

    return () => clearTimeout(t);
  }, [params.token]);

  return null;
}
