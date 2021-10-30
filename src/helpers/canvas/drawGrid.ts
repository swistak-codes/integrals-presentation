import { getCanvasPosition } from './getPosition';

export const drawGrid = (context: CanvasRenderingContext2D, size: number) => {
  for (let i = -5.5; i < 6; i += 0.5) {
    const { x, y } = getCanvasPosition(i, i, size);
    const isInt = Number.isInteger(i);
    const color = isInt ? '#BBBBBB' : '#DDDDDD';

    context.beginPath();
    context.lineWidth = 1;
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.moveTo(0, y);
    context.lineTo(size, y);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.lineWidth = 1;
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.moveTo(x, 0);
    context.lineTo(x, size);
    context.closePath();
    context.stroke();
  }
};
