import React from "react";
import WorkoutCards from "../components/workoutCard"; 
import { WorkoutType } from "../types"; 

const dataFetching = async (): Promise<WorkoutType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    // Optional: add revalidation or cache strategy
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  return res.json();
};

export default async function WorkoutPage() {
  const workouts = await dataFetching();

  return (
    <section id="workouts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
          THE LIBRARY
        </h2>
        <p className="text-zinc-400 text-sm mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout: WorkoutType) => (
          <WorkoutCards key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}