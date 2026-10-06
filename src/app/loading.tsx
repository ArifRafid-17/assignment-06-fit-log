import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-12 px-4">
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-[#ccff00] animate-spin" />
        <div className="absolute w-6 h-6 rounded-full bg-[#ccff00]/10 blur-sm pointer-events-none" />
      </div>
      <p className="text-xs uppercase font-extrabold tracking-widest text-zinc-400">
        Loading FitLog...
      </p>
    </div>
  );
}
