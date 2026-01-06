"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function KitClient() {
  const params = useSearchParams();
  const router = useRouter();

  const country = params.get("country");
  const sweet = params.get("sweet");

  const [showKitDetails, setShowKitDetails] = useState(false);

  function handleBuy() {
    router.push(`/payment?country=${country}&sweet=${sweet}`);
  }

  return (
    <main>
      <h1>کیت شیرینی 🍰</h1>
      <button onClick={handleBuy}>ادامه</button>
    </main>
  );
}
