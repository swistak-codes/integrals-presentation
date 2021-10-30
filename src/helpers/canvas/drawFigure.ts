import type { FigureToDraw } from '../../global';
import { getCanvasPosition } from './getPosition';

export const drawFigure = (
  context: CanvasRenderingContext2D,
  size: number,
  figure: FigureToDraw,
) => {
  const { x: x1, y: y1 } = getCanvasPosition(figure.x1, figure.y1, size);
  const { x: x2, y: y2 } = getCanvasPosition(figure.x2, figure.y2, size);
  const { y: y3 } = getCanvasPosition(0, figure.y3, size);

  context.beginPath();
  context.lineWidth = 1;
  context.lineCap = 'round';
  context.strokeStyle = figure.strokeColor;
  context.fillStyle = figure.fillColor;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.lineTo(x2, y3);
  context.lineTo(x1, y3);
  context.lineTo(x1, y1);
  context.closePath();
  context.fill();
  context.stroke();
};
