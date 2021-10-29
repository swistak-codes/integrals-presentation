import { writable } from 'svelte/store';
import type { FigureToDraw } from './global';
import { Functions } from './helpers/functionsEnum';

export const func = writable<Functions>(Functions.linear);
export const start = writable<number>(0);
export const end = writable<number>(0);
export const height = writable<number>(0);
export const divisions = writable<number>(5);
export const radius = writable<number>(1);
export const toDraw = writable<FigureToDraw[]>([]);
