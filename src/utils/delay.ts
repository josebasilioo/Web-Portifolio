// src/utils/delay.ts

/**
 * Returns a promise that resolves after a specified amount of time.
 * @param ms - The number of milliseconds to delay.
 * @returns A promise that resolves after the given time.
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
