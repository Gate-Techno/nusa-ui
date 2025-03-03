"use client";

import * as React from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="fixed top-0 z-50 w-full shadow-md bg-background">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto lg:grid lg:grid-cols-3">
        <button
          className="block lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            // CLOSE MENU
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            // OPEN MENU
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-text"
            >
              <path d="M17 6.1H3" />
              <path d="M21 12.1H3" />
              <path d="M15.1 18H3" />
            </svg>
          )}
        </button>
        <h1>Navbar</h1>
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
              href="/"
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&#39;s Start
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
