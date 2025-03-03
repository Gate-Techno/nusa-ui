"use client";

import * as React from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="fixed top-0 z-50 w-full shadow-md bg-background">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto lg:grid lg:grid-cols-3">
        <h1>navbar</h1>
      </div>

      {mobileMenuOpen && (
        <div className="p-4 shadow-md bg-background lg:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/questions"
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start nanya 👀
            </Link>
            <Link
              href="/login"
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
