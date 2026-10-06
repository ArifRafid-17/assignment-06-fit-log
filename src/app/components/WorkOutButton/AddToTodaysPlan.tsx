'use client';

import React, { Dispatch, SetStateAction, useContext } from 'react';
import { WorkoutType } from '@/app/types';
import { workoutContext } from '@/Context/WorkoutContext';
import { toast } from 'react-toastify';

const AddToTodaysPlan = ({ workout }: { workout: WorkoutType }) => {
  const { todaysplan, settodaysplan } = useContext(workoutContext) as {
    todaysplan: WorkoutType[];
    settodaysplan: Dispatch<SetStateAction<WorkoutType[]>>;
  };

  const isAdded = todaysplan?.some((item) => item.id === workout.id);

  const addToToday = () => {
    if (isAdded) {
      toast.info("Already added to today's plan");
      return;
    }

    settodaysplan([...todaysplan, workout]);
    toast.success("Workout added to today's plan");
  };

  return (
    <div>
      <button
        type="button"
        onClick={addToToday}
        disabled={isAdded}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)] ${
          isAdded
            ? 'bg-[#ccff00]/70 text-black cursor-default'
            : 'bg-[#ccff00] hover:bg-[#b8e600] text-black active:scale-95'
        }`}
      >
        {isAdded ? (
          /* Checkmark Icon when added */
          <svg
            className="w-4 h-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          /* Calendar Icon when not yet added */
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
        )}
        <span>{isAdded ? 'Added to plan' : "Add to today's plan"}</span>
      </button>
    </div>
  );
};

export default AddToTodaysPlan;