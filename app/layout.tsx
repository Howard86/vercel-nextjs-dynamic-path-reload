import Link from "next/link";
import ModalWrapper from "./ModalWrapper";
import { DYNAMIC_TEXTS } from "./dynamic/[text]/page";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <nav style={{ display: "flex", gap: "8px" }}>
          {DYNAMIC_TEXTS.map((text) => (
            <Link href={`/dynamic/${text}`} key={text}>
              Go to dynamic/{text}
            </Link>
          ))}
        </nav>
        <Suspense fallback={null}>
          <ModalWrapper>{children}</ModalWrapper>
        </Suspense>
      </body>
    </html>
  );
}
