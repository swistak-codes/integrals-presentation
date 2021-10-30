import { radius } from '../stores';
import { get } from 'svelte/store';
import { Functions } from './functionsEnum';

export type FunctionForIntegral = (x: number) => number;
export type FunctionForArea = (startX: number, endX: number) => number;

export const linear: FunctionForIntegral = (x: number) => x;

export const sinus: FunctionForIntegral = (x: number) => Math.sin(x);

export const circle: FunctionForIntegral = (x: number) => {
  const r = get(radius);
  return Math.sqrt(r * r - x * x);
};

export const linearIntegral: FunctionForArea = (startX, endX) =>
  (endX * endX) / 2 - (startX * startX) / 2;

export const sinusIntegral: FunctionForArea = (startX, endX) =>
  -Math.cos(endX) - -Math.cos(startX);

export const circleIntegral: FunctionForArea = (startX, endX) => {
  const r = get(radius);
  const f = (x) =>
    ((r * r) / 2) * Math.asin(x / Math.abs(r)) +
    (x / 2) * Math.sqrt(r * r - x * x);

  return f(endX) - f(startX);
};

export const functionsMap = {
  [Functions.linear]: linear,
  [Functions.sinus]: sinus,
  [Functions.circle]: circle,
};

export const areaFunctionsMap = {
  [Functions.linear]: linearIntegral,
  [Functions.sinus]: sinusIntegral,
  [Functions.circle]: circleIntegral,
};
