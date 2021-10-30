import type { FunctionForIntegral } from '../helpers/functions';
import type { Figure } from '../global';

export enum AlgorithmMode {
  Start,
  Middle,
  End,
  Minimum,
  Maximum,
}

export const rectangles = (
  func: FunctionForIntegral,
  mode: AlgorithmMode,
  divisions: number,
  startX: number,
  endX: number,
) => {
  // zmienne, w których przechowamy odmierzone prostokąty i pole
  const rectangles: Figure[] = [];
  let area = 0;

  // liczymy tyle razy, ile mamy punktów podziału
  for (let i = 0; i < divisions; i++) {
    // obliczamy początek i koniec przedziału
    const x1 = startX + (i / divisions) * (endX - startX);
    const x2 = startX + ((i + 1) / divisions) * (endX - startX);

    // wyznaczamy punkt względem którego obliczymy pole wycinka figury
    let point = 0;
    switch (mode) {
      case AlgorithmMode.Start:
        point = x1;
        break;
      case AlgorithmMode.Middle:
        point = (x1 + x2) / 2;
        break;
      case AlgorithmMode.End:
        point = x2;
        break;
      case AlgorithmMode.Minimum:
        point = Math.min(x1, x2);
        break;
      case AlgorithmMode.Maximum:
        point = Math.max(x1, x2);
        break;
    }

    // obliczamy wartość funkcji we wskazanym punkcie
    const y = func(point);

    // zapisujemy prostokąt
    rectangles.push({ x1, x2, y1: y, y2: y });

    // dodajemy pole do sumy dotychczasowych pól
    area += (x2 - x1) * y;
  }

  return {
    rectangles,
    area,
  };
};
