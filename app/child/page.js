import { Suspense } from "react";
import ChildClient from "./ChildClient";

export default function Page() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <ChildClient />
    </Suspense>
  );
}
