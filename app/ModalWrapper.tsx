"use client";

import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

export default function ModalWrapper({ children }: { children: ReactNode }) {
  const params = useSearchParams();

  const modal = params.get("modal");

  return (
    <>
      {children}
      {modal && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            backgroundColor: "black",
            color: "white",
            width: "100%",
            height: "300px",
          }}
        >
          Modal {modal} is open!
        </div>
      )}
    </>
  );
}
