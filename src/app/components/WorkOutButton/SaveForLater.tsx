'use client';

import React, { Dispatch, SetStateAction, useContext } from 'react';
import { WorkoutType } from '@/app/types';
import { workoutContext } from '@/Context/WorkoutContext';
import { toast } from 'react-toastify';

const SaveForLater = ({ workout }: { workout: WorkoutType }) => {
  const { savedworkout, setsavedworkout } = useContext(workoutContext) as {
    savedworkout: WorkoutType[];
    setsavedworkout: Dispatch<SetStateAction<WorkoutType[]>>;
  };

  const isSaved = savedworkout?.some((item) => item.id === workout.id);

  const saveLater = () => {
    if (isSaved) {
      toast.info('Already saved for later');
      return;
    }

    setsavedworkout([...savedworkout, workout]);
    toast.success('Workout saved for later');
  };

  return (
    <div className="w-full sm:w-auto">
      <button
        type="button"
        onClick={saveLater}
        disabled={isSaved}
        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border text-xs tracking-wider transition-all font-semibold ${
          isSaved
            ? 'bg-[#14171d] border-[#ccff00]/40 text-[#ccff00] cursor-default'
            : 'bg-[#14171d] hover:bg-[#1c212b] border-white/10 hover:border-white/20 text-white active:scale-95'
        }`}
      >
        <svg
          className={`w-4 h-4 shrink-0 transition-colors ${
            isSaved ? 'text-[#ccff00] fill-[#ccff00]' : 'text-zinc-400 fill-none'
          }`}
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
        <span>{isSaved ? 'Saved' : 'Save for later'}</span>
      </button>
    </div>
  );
};

export default SaveForLater;