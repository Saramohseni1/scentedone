import { Suspense } from "react";
import CookingClient from "./CookingClient";

export default function CookingPage() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <CookingClient />
    </Suspense>
  );
}
