import { Suspense } from "react";
import KitClient from "./KitClient";

export default function Page() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <KitClient />
    </Suspense>
  );
}
