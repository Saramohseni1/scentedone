import { Suspense } from "react";
import RecipeClient from "./RecipeClient";

export default function Page() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <RecipeClient />
    </Suspense>
  );
}
