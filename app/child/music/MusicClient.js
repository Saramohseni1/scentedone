"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function MusicClient() {
  const router = useRouter();
  const params = useSearchParams();

  const country = params.get("country");
  const sweet = params.get("sweet");

  const [selectedMusic, setSelectedMusic] = useState(null);

  const MUSIC_DB = {
    گز: ["موسیقی سنتی آرام", "نوای اصفهان"],
    سوهان: ["موسیقی ملایم سنتی", "آرامش‌زا ایرانی"],
    "شیرینی نارگیلی": ["لایت مدرن", "موزیک آرام اقیانوسی"],

    ماکارون: ["French Chill", "Soft Piano"],
    کرواسان: ["Paris Cafe", "Lo-fi"],
    اکلر: ["Jazz Light", "Piano Soft"],

    تیرامیسو: ["Italian Lo-fi", "Classic Quartet"],
    کانولی: ["Italian Jazz", "Soft Loop"],
    بیسکوتی: ["Cafe Jazz", "Piano Italy"],

    موجی: ["Zen Japan", "Lo-fi Japan"],
    دورایاکی: ["Anime Soft", "Melancholic"],
    تایاکی: ["Zen Garden", "Soft Calm"],

    چوروز: ["Latin Relax", "Cafe Mexico"],
    "کیک تریس لچس": ["Spanish Guitar", "Pop Soft"],
    "پن دولسه": ["Latin Chill", "Romantic Soft"],
  };

  const musics = MUSIC_DB[sweet] || [];

  function handleContinue() {
    if (!selectedMusic) return;
    router.push(
      `/child/cooking?country=${country}&sweet=${sweet}&music=${selectedMusic}`
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6">انتخاب موسیقی 🎵</h1>

      <div className="grid gap-4 w-full max-w-md">
        {musics.map((m) => (
          <div
            key={m}
            onClick={() => setSelectedMusic(m)}
            className={`cursor-pointer p-4 rounded-xl border ${
              selectedMusic === m ? "border-pink-500" : "border-gray-300"
            }`}
          >
            {m}
          </div>
        ))}
      </div>

      <button
        onClick={handleContinue}
        disabled={!selectedMusic}
        className="mt-8 px-8 py-3 bg-pink-500 text-white rounded-xl disabled:bg-gray-400"
      >
        ادامه
      </button>
    </main>
  );
}
