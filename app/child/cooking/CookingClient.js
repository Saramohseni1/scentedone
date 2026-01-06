"use client";

import { useSearchParams } from "next/navigation";

export default function CookingClient() {
  const params = useSearchParams();

  const country = params.get("country");
  const sweet = params.get("sweet");
  const music = params.get("music");

  return (
    <main className="min-h-screen px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">
        شروع پخت 🍰
      </h1>

      <p>کشور: {country}</p>
      <p>شیرینی: {sweet}</p>
      <p>موسیقی: {music}</p>

      {/* ادامه‌ی دستور پخت */}
    </main>
  );
}
