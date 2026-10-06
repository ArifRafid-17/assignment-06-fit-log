'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from "../assets/logo.png";
import { workoutContext } from '@/Context/WorkoutContext';
import { WorkoutType } from '../types';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { todaysplan, savedworkout } = useContext(workoutContext) as {
    todaysplan?: WorkoutType[];
    savedworkout?: WorkoutType[];
  };

  const planCount = todaysplan?.length || 0;
  const savedCount = savedworkout?.length || 0;

  const isMyPlan = pathname === '/my-plan';
  const isWorkouts = pathname === '/' || pathname.startsWith('/workout');

  return (
    <header className="w-full bg-[#0d0f12] border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          
          {/* Left: Brand / Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-6 h-6 shrink-0 flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
              <Image
                src={logo}
                alt="FitLog Logo"
                width={24}
                height={24}
                priority
                unoptimized
                className="w-6 h-6 object-contain select-none"
              />
            </div>
            <span className="text-white font-extrabold tracking-wider text-base uppercase">
              FITLOG
            </span>
          </Link>

          {/* Center: Navigation Switcher (Desktop) */}
          <nav className="hidden md:flex items-center bg-[#15181f]/80 p-1 rounded-xl border border-white/5">
            <Link
              href="/"
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isWorkouts
                  ? 'bg-[#1e232d] text-[#ccff00] shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Workouts
            </Link>
            <Link
              href="/my-plan"
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isMyPlan
                  ? 'bg-[#1e232d] text-[#ccff00] shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              My Plan
            </Link>
          </nav>

          {/* Right: Status Badges & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-5 shrink-0">
            {/* Plan Counter */}
            <Link
              href="/my-plan?tab=today"
              className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer"
            >
              <span className="text-xs sm:text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                Plan
              </span>
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-[#ccff00] text-black text-xs font-bold leading-none shadow-[0_0_10px_rgba(204,255,0,0.3)]">
                {planCount}
              </span>
            </Link>

            {/* Saved Counter */}
            <Link
              href="/my-plan?tab=saved"
              className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer"
            >
              <span className="text-xs sm:text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                Saved
              </span>
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full border border-white/50 text-white text-xs font-semibold leading-none">
                {savedCount}
              </span>
            </Link>

            {/* Hamburger Button for Mobile */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="p-1.5 text-zinc-400 hover:text-white md:hidden transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-white/5 space-y-1">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                isWorkouts
                  ? 'bg-[#1e232d] text-[#ccff00]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Workouts
            </Link>
            <Link
              href="/my-plan?tab=today"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                isMyPlan
                  ? 'bg-[#1e232d] text-[#ccff00]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Today&apos;s Plan</span>
              <span className="px-2 py-0.5 rounded-full bg-[#ccff00] text-black text-xs font-bold">
                {planCount}
              </span>
            </Link>
            <Link
              href="/my-plan?tab=saved"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <span>Saved Workouts</span>
              <span className="px-2 py-0.5 rounded-full border border-white/30 text-white text-xs font-semibold">
                {savedCount}
              </span>
            </Link>
          </div>
        )}

      </div>
    </header>
  );
}