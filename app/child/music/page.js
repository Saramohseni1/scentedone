import { Suspense } from "react";
import MusicClient from "./MusicClient";

export default function MusicPage() {
  return (
    <Suspense fallback={<div>در حال بارگذاری موسیقی...</div>}>
      <MusicClient />
    </Suspense>
  );
}
