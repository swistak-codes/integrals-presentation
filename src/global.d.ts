/// <reference types="svelte" />

export type Figure = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

export type FigureToDraw = Figure & {
  strokeColor: string;
  fillColor: string;
};
