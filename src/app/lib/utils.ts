// Import the required dependencies
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for merging and conditionally applying class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
