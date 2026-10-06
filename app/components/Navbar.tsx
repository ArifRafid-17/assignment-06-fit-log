'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../assets/logo.png";


interface NavbarProps {
  planCount?: number;
  savedCount?: number;
  initialTab?: 'workouts' | 'my-plan';
}

export default function Navbar({
  planCount = 0,
  savedCount = 0,
  initialTab = 'workouts',
}: NavbarProps) {
  const [activeTab, setActiveTab] = useState<'workouts' | 'my-plan'>(initialTab);

  return (
    <header className="w-full bg-[#0d0f12] border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Left: Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-6 h-6 flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
            {/* Dumbbell Icon */}
            <Image
              src={logo}
              alt="FitLog Logo"
              width={24}
              height={24}
              priority
              className="w-6 h-6 object-contain select-none"
            />
          </div>
          <span className="text-white font-extrabold tracking-wider text-base uppercase">
            FITLOG
          </span>
        </Link>

        {/* Center: Navigation Switcher */}
        <nav className="flex items-center bg-[#15181f]/80 p-1 rounded-xl border border-white/5">
          <button
            type="button"
            onClick={() => setActiveTab('workouts')}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === 'workouts'
                ? 'bg-[#1e232d] text-[#ccff00] shadow-sm'
                : 'text-zinc-400 hover:text-white'
              }`}
          >
            Workouts
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('my-plan')}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === 'my-plan'
                ? 'bg-[#1e232d] text-[#ccff00] shadow-sm'
                : 'text-zinc-400 hover:text-white'
              }`}
          >
            My Plan
          </button>
        </nav>

        {/* Right: Status Badges / Counters */}
        <div className="flex items-center gap-5">
          {/* Plan Counter */}
          <Link
            href="/plan"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
              Plan
            </span>
            <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-[#ccff00] text-black text-xs font-bold leading-none shadow-[0_0_10px_rgba(204,255,0,0.3)]">
              {planCount}
            </span>
          </Link>

          {/* Saved Counter */}
          <Link
            href="/saved"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
              Saved
            </span>
            <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full border border-white/50 text-white text-xs font-semibold leading-none">
              {savedCount}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}