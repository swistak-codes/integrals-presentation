/// <reference types="svelte" />

export type Figure = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

export type FigureToDraw = Figure & {
  y3: number;
  strokeColor: string;
  fillColor: string;
};
