'use client'

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

const domainGroupId = '5e9ffc00-3d10-46b6-b0e8-496150e3aac5';

export default function CookieBot() {
  const [CookieBotComponent, setCookieBotComponent] = useState<ComponentType<{ domainGroupId: string }> | null>(null);

  useEffect(() => {
    // Import only on client
    import("react-cookiebot").then((mod) => {
      setCookieBotComponent(() => mod.default);
    });
  }, []);

  if (!CookieBotComponent) return null; // render nothing on server

  return <CookieBotComponent domainGroupId={domainGroupId} />;
}
