import type { FunctionForIntegral } from '../helpers/functions';
import type { Figure } from '../global';

export const trapezoids = (
  func: FunctionForIntegral,
  divisions: number,
  startX: number,
  endX: number,
) => {
  // zmienne w których przechowamy odmierzone trapezy i pole
  const trapezoids: Figure[] = [];
  let area = 0;

  // liczymy tyle razy, ile mamy punktów podziału
  for (let i = 0; i < divisions; i++) {
    // obliczamy początek i koniec przedziału
    const x1 = startX + (i / divisions) * (endX - startX);
    const x2 = startX + ((i + 1) / divisions) * (endX - startX);

    // obliczamy wartość funkcji w obu punktach
    const y1 = func(x1);
    const y2 = func(x2);

    // zapisujemy trapez
    trapezoids.push({ x1, x2, y1, y2 });

    // dodajemy pole do sumy dotychczasowych pól
    area += ((y1 + y2) * (x2 - x1)) / 2;
  }

  return {
    trapezoids,
    area,
  };
};
