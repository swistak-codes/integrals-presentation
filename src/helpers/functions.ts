export type FunctionForIntegral = (x: number) => number;

export const linear: FunctionForIntegral = (x: number) => x;

export const sinus: FunctionForIntegral = (x: number) => Math.sin(x);

export const circle: FunctionForIntegral = (x: number) => Math.sqrt(1 - x * x);
