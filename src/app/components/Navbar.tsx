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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: 'workouts' | 'my-plan') => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#0d0f12] border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          
          {/* Left: Brand / Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-6 h-6 flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
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

          {/* Center: Navigation Switcher (Desktop) */}
          <nav className="hidden md:flex items-center bg-[#15181f]/80 p-1 rounded-xl border border-white/5">
            <button
              type="button"
              onClick={() => handleTabClick('workouts')}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'workouts'
                  ? 'bg-[#1e232d] text-[#ccff00] shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Workouts
            </button>
            <button
              type="button"
              onClick={() => handleTabClick('my-plan')}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'my-plan'
                  ? 'bg-[#1e232d] text-[#ccff00] shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              My Plan
            </button>
          </nav>

          {/* Right: Status Badges & Mobile Menu Toggle */}
          <div className="flex items-center gap-3.5 sm:gap-5">
            {/* Plan Counter */}
            <Link
              href="/plan"
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
              href="/saved"
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
            <button
              type="button"
              onClick={() => handleTabClick('workouts')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'workouts'
                  ? 'bg-[#1e232d] text-[#ccff00]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Workouts
            </button>
            <button
              type="button"
              onClick={() => handleTabClick('my-plan')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'my-plan'
                  ? 'bg-[#1e232d] text-[#ccff00]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              My Plan
            </button>
          </div>
        )}

      </div>
    </header>
  );
}