"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-2 md:p-10">
      <header>
        <h1>Welcome to The Unit Converter</h1>
      </header>
      <Link
        key="Converter"
        href="/worksheet"
        className="flex h-[48px] items-center justify-center gap-2 rounded-md bg-sky-100 p-2 text-sm font-medium hover:bg-sky-200 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <p>Start Converting!</p>
      </Link>
    </main>
  );
}
