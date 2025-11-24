"use client";

import { useEffect } from "react";

// TODO: replace with your real store URLs
const ANDROID_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.yassirira.newapp";
const HUAWEI_APPGALLERY_URL =
  "https://appgallery.huawei.com/#/app/CXXXXXXXX"; // change this
const IOS_APP_STORE_URL =
  "https://apps.apple.com/app/idXXXXXXXXX"; // change this

export default function PoolPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.includes("android");
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isHuawei = ua.includes("huawei") || ua.includes("honor");

    // Current URL in the browser
    const { pathname, search } = window.location;
    // "/pool/cmh564sbg0000twlk1qj28fx1" -> "pool/cmh564sbg0000twlk1qj28fx1"
    const cleanPathname = pathname.replace(/^\/+/, "");

    // keep query params if any: ?user=yassir&ref=123
    const deepLinkPath = search ? `${cleanPathname}${search}` : cleanPathname;

    // 🔹 What the app will receive, e.g.:
    // blotopay://pool/cmh564sbg0000twlk1qj28fx1?user=yassir
    const appUrl = `blotopay://${deepLinkPath}`;

    // Android intent URL
    const intentUrl = `intent://${deepLinkPath}#Intent;scheme=blotopay;package=com.yassirira.newapp;end`;

    // Choose which store to fallback to
    const storeUrl = isAndroid
      ? isHuawei
        ? HUAWEI_APPGALLERY_URL
        : ANDROID_PLAY_URL
      : isIOS
      ? IOS_APP_STORE_URL
      : ANDROID_PLAY_URL; // default

    const start = Date.now();

    // 1) Try to open the app
    if (isAndroid) {
      window.location.href = intentUrl;
    } else {
      window.location.href = appUrl;
    }

    // 2) If app is not installed, after ~1.5s redirect to store
    const timer = window.setTimeout(() => {
      if (Date.now() - start < 1600) {
        window.location.href = storeUrl;
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // No UI needed, just redirect logic
  return null;
}
