"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function ModalToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    if (!pathname || !searchParams) return;

    const modal = searchParams.get("modal");

    if (modal) {
      router.push(pathname);
    } else {
      router.push(`${pathname}?modal=1`);
    }
  };

  return <button onClick={handleClick}>Toggle</button>;
}
