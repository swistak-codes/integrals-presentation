import { getPosition } from './getPosition';

export const drawAxis = (context: CanvasRenderingContext2D, size: number) => {
  const center = Math.floor(size / 2);

  drawVerticalAxis(context, center, size);
  drawHorizontalAxis(context, center, size);
  drawVerticalScale(context, size);
  drawHorizontalScale(context, size);
};

const drawVerticalAxis = (
  context: CanvasRenderingContext2D,
  center: number,
  size: number,
) => {
  context.beginPath();
  context.lineWidth = 3;
  context.lineCap = 'round';
  context.strokeStyle = 'black';
  context.moveTo(center, size);
  context.lineTo(center, 0);
  context.lineTo(center - 5, 10);
  context.moveTo(center, 0);
  context.lineTo(center + 5, 10);
  context.stroke();

  context.font = '14px sans-serif';
  context.fillText('y', center - 20, 10);
};

const drawHorizontalAxis = (
  context: CanvasRenderingContext2D,
  center: number,
  size: number,
) => {
  context.beginPath();
  context.lineWidth = 3;
  context.lineCap = 'round';
  context.strokeStyle = 'black';
  context.moveTo(0, center);
  context.lineTo(size, center);
  context.lineTo(size - 10, center - 5);
  context.moveTo(size, center);
  context.lineTo(size - 10, center + 5);
  context.stroke();

  context.font = '14px sans-serif';
  context.fillText('x', size - 10, center + 20);
};

const drawVerticalScale = (context: CanvasRenderingContext2D, size: number) => {
  for (let i = -5.5; i < 6; i += 0.5) {
    const { x, y } = getPosition(0, i, size);
    const isInt = Number.isInteger(i);
    const length = isInt ? 9 : 7;

    context.beginPath();
    context.lineWidth = isInt ? 2 : 1;
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.moveTo(x - length, y);
    context.lineTo(x + length, y);
    context.stroke();

    if (isInt && i !== 0) {
      context.font = '14px sans-serif';
      context.fillText('' + i, x + 14, y + 4);
    }
  }
};

const drawHorizontalScale = (
  context: CanvasRenderingContext2D,
  size: number,
) => {
  for (let i = -5.5; i < 6; i += 0.5) {
    const { x, y } = getPosition(i, 0, size);
    const isInt = Number.isInteger(i);
    const length = isInt ? 9 : 7;

    context.beginPath();
    context.lineWidth = isInt ? 2 : 1;
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.moveTo(x, y - length);
    context.lineTo(x, y + length);
    context.stroke();

    if (isInt && i !== 0) {
      context.font = '14px sans-serif';
      context.fillText('' + i, x - 4, y + 24);
    }
  }
};
