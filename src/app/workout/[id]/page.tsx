import React from 'react';
import Image from 'next/image';
import { WorkoutType } from '@/app/types';

interface props {
  params: Promise<{ id: string }>;
}

const getWorkout = async (id: string): Promise<WorkoutType> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch workout details');
  }

  return res.json();
};

const IdPage = async ({ params }: props) => {
  const { id } = await params;
  const workout = await getWorkout(id);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
        
        {/* Left: Workout Image */}
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-[#14171d] border border-white/5">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Right: Workout Content */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-white leading-tight">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-3">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="flex flex-wrap items-center gap-2 mt-5">
            {workout.muscleGroups?.map((group, index) => (
              <span
                key={index}
                className="bg-[#ccff00] text-black text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Details Table */}
          <div className="mt-8 bg-[#14171d] border border-white/5 rounded-2xl p-5 sm:p-6 divide-y divide-white/5">
            <div className="flex items-center justify-between pb-3 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                EQUIPMENT
              </span>
              <span className="text-white font-medium">{workout.equipment}</span>
            </div>

            <div className="flex items-center justify-between py-3 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                DIFFICULTY
              </span>
              <span className="text-white font-medium">{workout.difficulty}</span>
            </div>

            <div className="flex items-center justify-between py-3 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                SETS
              </span>
              <span className="text-white font-medium">{workout.sets}</span>
            </div>

            <div className="flex items-center justify-between py-3 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                REPS
              </span>
              <span className="text-white font-medium">{workout.reps}</span>
            </div>

            <div className="flex items-center justify-between py-3 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                DURATION
              </span>
              <span className="text-white font-medium">{workout.duration} min</span>
            </div>

            <div className="flex items-center justify-between py-3 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                CALORIES
              </span>
              <span className="text-white font-medium">{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center justify-between pt-3 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                RATING
              </span>
              <span className="text-white font-medium">{workout.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-white font-black uppercase text-sm sm:text-base tracking-wider mb-4">
              INSTRUCTIONS
            </h2>

            <ol className="space-y-3">
              {workout.instructions?.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                >
                  <span className="text-zinc-500 font-bold select-none shrink-0">
                    {index + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-9">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs tracking-wider uppercase transition-all active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="12" y1="14" x2="12" y2="18" />
                <line x1="10" y1="16" x2="14" y2="16" />
              </svg>
              <span>Add to today&apos;s plan</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#14171d] hover:bg-[#1c212b] border border-white/10 hover:border-white/20 text-white font-semibold text-xs tracking-wider transition-all active:scale-95"
            >
              <svg
                className="w-4 h-4 shrink-0 text-zinc-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              <span>Save for later</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IdPage;