import { Suspense } from "react";
import PaymentClient from "./PaymentClient";

export default function Page() {
  return (
    <Suspense fallback={<div>در حال اتصال به پرداخت...</div>}>
      <PaymentClient />
    </Suspense>
  );
}
