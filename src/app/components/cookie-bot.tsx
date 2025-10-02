'use client'

import ReactCookieBot from "react-cookiebot";

const domainGroupId = '5e9ffc00-3d10-46b6-b0e8-496150e3aac5';

export default function CookieBot() {
  return (
      <ReactCookieBot domainGroupId={domainGroupId}/>
  );
}
