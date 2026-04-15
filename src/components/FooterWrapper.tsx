"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // Don't render the layout footer on the home page because it has its own 
  // footer inside the custom scroll container for snapping compatibility.
  if (pathname === "/") {
    return null;
  }

  return <Footer />;
}
