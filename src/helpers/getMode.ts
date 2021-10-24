export enum Modes {
  None,
  Rectangles,
  Trapezoids,
  MonteCarlo,
}

export const getMode = () => {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode') || 'None';
  return Modes[mode];
};
