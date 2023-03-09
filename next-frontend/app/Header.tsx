import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <nav>
        <Link href="/api/hello">demo</Link>
        <Link href="/api/hello">about</Link>
        <Link href="/api/hello">resume</Link>
      </nav>
    </div>
  );
}
