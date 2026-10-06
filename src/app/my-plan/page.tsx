'use client';

import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { workoutContext } from '@/Context/WorkoutContext';
import { WorkoutType } from '@/app/types';
import { toast } from 'react-toastify';

const MyPlanPage = () => {
  const { todaysplan, settodaysplan, savedworkout, setsavedworkout } =
    useContext(workoutContext) as {
      todaysplan: WorkoutType[];
      settodaysplan: Dispatch<SetStateAction<WorkoutType[]>>;
      savedworkout: WorkoutType[];
      setsavedworkout: Dispatch<SetStateAction<WorkoutType[]>>;
    };

  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
  const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration');
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  // Choose data list based on current active tab
  const currentList = activeTab === 'today' ? (todaysplan || []) : (savedworkout || []);

  // Compute stats dynamically
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce((acc, curr) => acc + (curr.duration || 0), 0);
  const totalCalories = currentList.reduce((acc, curr) => acc + (curr.caloriesBurned || 0), 0);

  // Sorting
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === 'duration') return b.duration - a.duration;
    if (sortBy === 'calories') return b.caloriesBurned - a.caloriesBurned;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const handleRemoveFromToday = (id: number) => {
    settodaysplan(todaysplan.filter((item) => item.id !== id));
    toast.info("Removed from today's plan");
  };

  const handleRemoveFromSaved = (id: number) => {
    setsavedworkout(savedworkout.filter((item) => item.id !== id));
    toast.info('Removed from saved list');
  };

  const handleToggleDone = (id: number) => {
    if (completedIds.includes(id)) {
      setCompletedIds(completedIds.filter((item) => item !== id));
    } else {
      setCompletedIds([...completedIds, id]);
      toast.success('Workout marked as completed! 🔥');
    }
  };

  return (
    <section className="min-h-screen bg-[#0d0f12] text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            MY PLAN
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 bg-[#14171d] border border-white/5 rounded-2xl p-4 sm:p-6 mb-6">
          {/* Exercises */}
          <div className="text-left">
            <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">
              Exercises
            </span>
            <span className="text-2xl sm:text-4xl font-black text-[#ccff00]">
              {totalExercises}
            </span>
          </div>

          {/* Minutes */}
          <div className="text-left">
            <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">
              Minutes
            </span>
            <span className="text-2xl sm:text-4xl font-black text-white">
              {totalMinutes}
            </span>
          </div>

          {/* Calories */}
          <div className="text-left">
            <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">
              Calories
            </span>
            <span className="text-2xl sm:text-4xl font-black text-white">
              {totalCalories}
            </span>
          </div>
        </div>

        {/* Controls: Tabs & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
          {/* Tab Switcher */}
          <div className="inline-flex items-center bg-[#14171d] border border-white/5 p-1 rounded-xl w-fit">
            <button
              type="button"
              onClick={() => setActiveTab('today')}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'today'
                  ? 'bg-[#1e232d] text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'saved'
                  ? 'bg-[#1e232d] text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-zinc-500 font-medium">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'duration' | 'calories' | 'rating')}
              className="bg-[#14171d] border border-white/10 text-white text-xs font-semibold rounded-xl px-3 py-1.5 outline-none focus:border-[#ccff00] cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Workouts List or Empty State */}
        {sortedList.length === 0 ? (
          /* Empty State */
          <div className="bg-[#14171d] border border-white/5 rounded-2xl py-20 px-4 flex flex-col items-center justify-center text-center">
            <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wider mb-2">
              NOTHING HERE YET
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6 max-w-sm">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            >
              Find workouts
            </Link>
          </div>
        ) : (
          /* Workout Rows */
          <div className="space-y-3">
            {sortedList.map((workout) => {
              const isCompleted = completedIds.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className={`bg-[#14171d] border border-white/5 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all ${
                    isCompleted ? 'opacity-60' : 'opacity-100'
                  }`}
                >
                  {/* Left: Thumbnail & Details */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-zinc-900 shrink-0">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h4
                        className={`text-sm sm:text-base font-black uppercase tracking-tight ${
                          isCompleted ? 'line-through text-zinc-400' : 'text-white'
                        }`}
                      >
                        {workout.name}
                      </h4>
                      <p className="text-zinc-400 text-xs mt-0.5">
                        {workout.equipment}
                      </p>

                      {/* Meta chips */}
                      <div className="flex items-center gap-3 mt-2 text-xs text-zinc-400 font-medium">
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2" />
                          </svg>
                          {workout.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {workout.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5 text-[#ccff00] fill-[#ccff00]" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                          {workout.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2.5 self-end md:self-auto shrink-0">
                    {/* View Details */}
                    <Link
                      href={`/workout/${workout.id}`}
                      className="px-3.5 py-2 rounded-xl bg-[#1e232d] hover:bg-[#282e3b] text-white text-xs font-semibold transition-all border border-white/5 active:scale-95"
                    >
                      View Details
                    </Link>

                    {/* Mark as Done (only in Today's Plan) */}
                    {activeTab === 'today' && (
                      <button
                        type="button"
                        onClick={() => handleToggleDone(workout.id)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-all active:scale-95 ${
                          isCompleted
                            ? 'bg-zinc-800 text-zinc-400'
                            : 'bg-[#ccff00] hover:bg-[#b8e600] text-black shadow-[0_0_12px_rgba(204,255,0,0.25)]'
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{isCompleted ? 'Completed' : 'Mark as Done'}</span>
                      </button>
                    )}

                    {/* Delete / Remove (✕) */}
                    <button
                      type="button"
                      onClick={() =>
                        activeTab === 'today'
                          ? handleRemoveFromToday(workout.id)
                          : handleRemoveFromSaved(workout.id)
                      }
                      className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                      aria-label="Remove workout"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default MyPlanPage;