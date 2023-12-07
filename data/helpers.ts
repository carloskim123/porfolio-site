import React, { Dispatch } from "react";

// Opens a new browser window or tab with the provided URL.
export const loadNewWindow = (url: string): Window | null => {
    return window.open(url, "_blank");
}
// React.Dispatch<React.SetStateAction<string>>

// Determines the day period (day or night) based on the current time and updates it.
export const currentDayTime = (setDayPeriod: Dispatch<React.SetStateAction<string>>, currentTime: number): void => {
    if (currentTime >= 19 || currentTime <= 6) {
        setDayPeriod("night"); // If the current time is in the evening or early morning, set day period to 'night.'
    } else if (currentTime >= 6 && currentTime <= 19) {
        setDayPeriod("day"); // If the current time is during the day, set day period to 'day.'
    } else {
            setDayPeriod("date not set"); // If the current time doesn't fall within defined ranges, set day period to "date not set"
    }
}

// Selects and sets a random element from the provided array.
export const getRandomFromArray = (setRandom: (random: string) => void, currentArray: { param: string }[]): void => {
    // Check if 'currentArray' is valid and not empty.
    if (Array.isArray(currentArray) && currentArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * currentArray.length);
        setRandom(currentArray[randomIndex].param); // Set 'setRandom' to a random element from 'currentArray.'
    } else {
        console.error('currentArray is not defined or empty'); // Log an error message if 'currentArray' is not a valid array.
    }
}

// Shuffles the elements of the provided array and returns a shuffled version.
export const shuffle = (array: unknown[]): unknown[] => {
    const shuffledArray: unknown[] = [...array]; // Create a copy of the original array.
    const length: number = shuffledArray.length;

    for (let i: number = length - 1; i > 0; i--) {
        const randomIndex: number = Math.floor(Math.random() * (i + 1));

        // Swap elements using destructuring assignment.
        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }

    return shuffledArray; // Return the shuffled array.
}
