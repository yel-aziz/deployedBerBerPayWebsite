"use client";

import { useEffect } from "react";

const ANDROID_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.yassirira.newapp";
const HUAWEI_APPGALLERY_URL =
  "https://appgallery.huawei.com/#/app/CXXXXXXXX";
const IOS_APP_STORE_URL =
  "https://apps.apple.com/app/idXXXXXXXXX";

export default function PoolWithIdPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.includes("android");
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isHuawei = ua.includes("huawei") || ua.includes("honor");

    const { pathname, search } = window.location;

    const cleanPathname = pathname.replace(/^\/+/, "");
    const deepLinkPath = search ? `${cleanPathname}${search}` : cleanPathname;

    const appUrl = `blotopay://${deepLinkPath}`;
    const intentUrl = `intent://${deepLinkPath}#Intent;scheme=blotopay;package=com.yassirira.newapp;end`;

    const storeUrl = isAndroid
      ? isHuawei
        ? HUAWEI_APPGALLERY_URL
        : ANDROID_PLAY_URL
      : isIOS
      ? IOS_APP_STORE_URL
      : ANDROID_PLAY_URL;

    const start = Date.now();

    if (isAndroid) {
      window.location.href = intentUrl;
    } else {
      window.location.href = appUrl;
    }

    const t = setTimeout(() => {
      if (Date.now() - start < 1600) {
        window.location.href = storeUrl;
      }
    }, 1500);

    return () => clearTimeout(t);
  }, []);

  return null;
}
