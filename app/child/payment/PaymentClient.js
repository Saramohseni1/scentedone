"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function PaymentClient() {
  const router = useRouter();
  const params = useSearchParams();

  const country = params.get("country");
  const sweet = params.get("sweet");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">پرداخت (فیک) 💳</h1>

      <p className="mb-6">
        پرداخت برای <b>{sweet}</b>
      </p>

      <button
        onClick={() => router.push("/")}
        className="px-8 py-3 bg-green-500 text-white rounded-xl"
      >
        پرداخت موفق
      </button>
    </main>
  );
}
