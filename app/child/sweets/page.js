import { Suspense } from "react";
import SweetsClient from "./SweetsClient";

export default function Page() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <SweetsClient />
    </Suspense>
  );
}
