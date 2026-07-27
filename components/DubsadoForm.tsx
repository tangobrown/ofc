"use client";

import Script from "next/script";
import { useRef } from "react";

declare global {
  interface Window {
    iFrameResize?: (options: Record<string, unknown>, target?: HTMLElement) => void;
  }
}

/**
 * Embedded Dubsado enquiry form. The iframe auto-resizes to its content via
 * iframe-resizer (v3.5.14, matched to the script Dubsado injects inside the
 * iframe). Loaded client-side once the resizer library is ready.
 */
export default function DubsadoForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const runResize = () => {
    setTimeout(() => {
      if (window.iFrameResize && iframeRef.current) {
        window.iFrameResize(
          { checkOrigin: false, heightCalculationMethod: "taggedElement" },
          iframeRef.current,
        );
      }
    }, 30);
  };

  return (
    <>
      <iframe
        ref={iframeRef}
        src="https://hello.dubsado.com/public/form/view/620095a44d2c23d5cb3b0272"
        title="Contact form"
        style={{ width: "1px", minWidth: "100%", border: 0 }}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js"
        strategy="afterInteractive"
        onReady={runResize}
      />
    </>
  );
}
