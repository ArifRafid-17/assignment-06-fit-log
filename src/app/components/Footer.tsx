import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-5 h-5 flex items-center justify-center">
            <Image
              src={logo}
              alt="FitLog Logo"
              width={20}
              height={20}
              className="w-5 h-5 object-contain select-none"
            />
          </div>
          <span className="text-white font-extrabold tracking-wider text-xs uppercase">
            FITLOG
          </span>
        </Link>

        {/* Copyright & Tagline */}
        <p className="text-zinc-500 text-xs text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
