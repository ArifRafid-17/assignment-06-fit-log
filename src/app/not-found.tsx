import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-16 px-4 text-center">
      <span className="text-[#ccff00] font-black text-sm uppercase tracking-widest mb-3">
        404 — NOT FOUND
      </span>
      <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
        Workout Not Found
      </h1>
      <p className="text-zinc-400 text-xs sm:text-sm max-w-md mb-8">
        The page or exercise you are looking for doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3.5 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
      >
        Return to Library
      </Link>
    </div>
  );
}
