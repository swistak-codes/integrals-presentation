import { writable } from 'svelte/store';
import { Functions } from './helpers/functions';

export const func = writable<Functions>(Functions.linear);
export const start = writable<number>(0);
export const end = writable<number>(0);
export const height = writable<number>(0);
export const divisions = writable<number>(5);
