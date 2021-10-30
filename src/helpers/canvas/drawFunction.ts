import { getCanvasPosition, getCartesianPosition } from './getPosition';
import { Functions } from '../functionsEnum';
import { functionsMap } from '../functions';

export const drawFunction = (
  context: CanvasRenderingContext2D,
  size: number,
  funcName: Functions,
) => {
  const func = functionsMap[funcName];
  const resolution = funcName === Functions.circle ? 0.1 : 1;
  for (let x = 0; x < size; x += resolution) {
    const { x: funcX } = getCartesianPosition(x, 0, size);
    const funcY = func(funcX);
    const { y } = getCanvasPosition(0, funcY, size);

    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = 'red';
    context.rect(x, y, 1, 1);
    context.closePath();
    context.stroke();
  }
};
