import { derived, writable } from 'svelte/store';
import type { FigureToDraw } from './global';
import { Functions } from './helpers/functionsEnum';
import { AlgorithmMode } from './algorithms/rectangles';

export const func = writable<Functions>(Functions.linear);
export const start = writable<number>(0);
export const end = writable<number>(0);
export const height = writable<number>(0);
export const mode = writable<AlgorithmMode>(AlgorithmMode.Start);
export const divisions = writable<number>(5);
export const radius = writable<number>(1);
export const toDraw = writable<FigureToDraw[]>([]);

export const allParameters = derived(
  [func, start, end, height, mode, divisions, radius],
  (values) => values,
);
