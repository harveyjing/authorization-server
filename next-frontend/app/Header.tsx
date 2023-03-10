import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between">
      <nav>
        <Link href="/api/hello">demo</Link>
        <Link href="/api/hello">about</Link>
        <Link href="/api/hello">resume</Link>
      </nav>
      <div>
        <a href={""} className="bg-red-300 rounded p-2 m-1">Sign Up</a>
        <a href={"/api/login/github"} className="bg-green-500 rounded p-2 m-1">Sing In</a>
      </div>
    </div>
  );
}
