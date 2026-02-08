"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");

    // dispara page_view manual
    // @ts-ignore
    window.gtag?.("config", "G-5RMHKJ7BRV", {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
