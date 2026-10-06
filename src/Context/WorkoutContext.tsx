"use client";
import React, { createContext, useEffect, useState } from 'react';
import { WorkoutType } from '@/app/types';

export const workoutContext = createContext({});

interface WorkoutContextProps {
    children: React.ReactNode;
}
const WorkoutContext = ({ children }: WorkoutContextProps) => {
    const [todaysplan, settodaysplan] = useState<WorkoutType[]>([]);
    const [savedworkout, setsavedworkout] = useState<WorkoutType[]>([]);
    const [hydrated, setHydrated] = useState(false);

    // Sync from localStorage after client hydration
    useEffect(() => {
        try {
            const storedPlan = localStorage.getItem('fitlog_todaysplan');
            if (storedPlan) {
                settodaysplan(JSON.parse(storedPlan));
            }
            const storedSaved = localStorage.getItem('fitlog_savedworkout');
            if (storedSaved) {
                setsavedworkout(JSON.parse(storedSaved));
            }
        } catch {
            // LocalStorage inaccessible or parsing failed
        }
        setHydrated(true);
    }, []);

    // Sync to localStorage on state changes
    useEffect(() => {
        if (hydrated) {
            try {
                localStorage.setItem('fitlog_todaysplan', JSON.stringify(todaysplan));
            } catch {
                // Ignore storage quota errors
            }
        }
    }, [todaysplan, hydrated]);

    useEffect(() => {
        if (hydrated) {
            try {
                localStorage.setItem('fitlog_savedworkout', JSON.stringify(savedworkout));
            } catch {
                // Ignore storage quota errors
            }
        }
    }, [savedworkout, hydrated]);

    const sharedData = {
        todaysplan,
        settodaysplan,
        savedworkout,
        setsavedworkout,
    };

    return (
        <workoutContext.Provider value={sharedData}>
            {children}
        </workoutContext.Provider>
    );
};

export default WorkoutContext;
