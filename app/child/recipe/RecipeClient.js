"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function RecipeClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const country = searchParams.get("country");
  const sweet = searchParams.get("sweet");

  if (!country || !sweet) {
    return (
      <div className="p-10 text-center text-red-600">
        اطلاعات ناقص است
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 flex flex-col items-center px-6 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-extrabold text-purple-700 mb-6"
      >
        دستور پخت 🍰
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-xl max-w-md w-full"
      >
        <p className="mb-3">
          <strong>کشور:</strong> {country}
        </p>
        <p className="mb-6">
          <strong>شیرینی:</strong> {sweet}
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          اینجا متن دستور پخت مرحله‌به‌مرحله قرار می‌گیرد.
        </p>

        <button
          onClick={() =>
            router.push(`/child/address?country=${country}&sweet=${sweet}`)
          }
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-full py-3 rounded-xl"
        >
          ادامه
        </button>
      </motion.div>
    </main>
  );
}
