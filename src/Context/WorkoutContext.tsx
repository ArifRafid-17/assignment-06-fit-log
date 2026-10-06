"use client";
import React, { createContext, useState } from 'react';

export const workoutContext = createContext({});

interface WorkoutContextProps {
    children: React.ReactNode;
}
const WorkoutContext = ({ children }: WorkoutContextProps) => {

    const [todaysplan, settodaysplan] = useState([]);
    const [savedworkout, setsavedworkout] = useState([]);


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
