"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

const ANDROID_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.yassirira.newapp";

export default function ResetPage() {
  const params = useParams();
  const password = params?.password as string | undefined;

  useEffect(() => {
    if (!password) return;

    const encoded = encodeURIComponent(password);

    // ✅ THIS WORKS ON ANDROID
    window.location.href = `blotopay:///reset?token=${encoded}`;

  

  return (
    <div style={{ padding: 20 }}>
      <h2>Opening BlotoPay…</h2>
      <p>If the app doesn’t open, tap below:</p>
      <a
        href={`blotopay:///reset?token=${encodeURIComponent(password ?? "")}`}
      >
        Open BlotoPay App
      </a>
    </div>
  );
}
