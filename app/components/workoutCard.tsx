import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkoutType } from "../types";

interface Props {
  workout: WorkoutType;
}

const WorkOutCard = ({ workout }: Props) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block bg-[#14171d] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Exercise Image */}
      <div className="relative w-full aspect-[16/10] bg-zinc-900 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col justify-between">
        <div>
          {/* Muscle Groups Badges */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            {workout.muscleGroups?.map((group, index) => (
              <span
                key={index}
                className="bg-[#ccff00] text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Workout Title */}
          <h3 className="text-white font-black text-base sm:text-lg uppercase tracking-tight line-clamp-1 group-hover:text-[#ccff00] transition-colors">
            {workout.name}
          </h3>

          {/* Equipment Subtitle */}
          <p className="text-zinc-400 text-xs mt-1 line-clamp-1">
            {workout.equipment}
          </p>
        </div>

        {/* Bottom Meta Bar: Duration, Calories & Rating */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-medium">
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2" />
            </svg>
            <span>{workout.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-[#ccff00] fill-[#ccff00]"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="text-zinc-200 font-semibold">{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkOutCard;