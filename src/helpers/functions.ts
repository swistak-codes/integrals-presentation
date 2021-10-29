import { radius } from '../stores';
import { get } from 'svelte/store';
import { Functions } from './functionsEnum';

export type FunctionForIntegral = (x: number) => number;

export const linear: FunctionForIntegral = (x: number) => x;

export const sinus: FunctionForIntegral = (x: number) => Math.sin(x);

export const circle: FunctionForIntegral = (x: number) => {
  const r = get(radius);
  return Math.sqrt(r * r - x * x);
};

export const functionsMap = {
  [Functions.linear]: linear,
  [Functions.sinus]: sinus,
  [Functions.circle]: circle,
};
