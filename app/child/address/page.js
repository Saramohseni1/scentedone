import { Suspense } from "react";
import AddressClient from "./AddressClient";

export default function Page() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <AddressClient />
    </Suspense>
  );
}
