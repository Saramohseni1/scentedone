export const dynamic = "force-dynamic";
import { Suspense } from "react";
import StoryClient from "./StoryClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">در حال ساخت داستان...</div>}>
      <StoryClient />
    </Suspense>
  );
}
