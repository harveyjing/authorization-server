'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import HeaderLogin from "./header-login";

export default function Header() {
  const { data, status } = useSession();
  return (
    <div className="flex justify-between">
      <nav>
        <Link href="/api/hello">demo</Link>
        <Link href="/api/hello">about</Link>
        <Link href="/api/hello">resume</Link>
      </nav>
      <div>
       <HeaderLogin />
      </div>
    </div>
  );
}
