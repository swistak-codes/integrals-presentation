import type { FunctionForIntegral } from '../helpers/functions';

const random = (a: number, b: number) => a + Math.random() * (b - a);

export function* monteCarlo(
  func: FunctionForIntegral,
  startX: number,
  endX: number,
  rectY: number,
) {
  // obliczamy pole prostokąta, w którym strzelamy
  const rectArea = (endX - startX) * rectY;

  // zmienne w których przechowamy ile prób wykonaliśmy i ile razy trafiliśmy
  let allShots = 0;
  let onTarget = 0;

  // nie ograniczymy się z liczbą iteracji
  while (true) {
    // zwiększamy liczbę prób
    allShots++;

    // losujemy punkt
    const x = random(startX, endX);
    const y = random(0, rectY);

    // sprawdzamy czy trafiliśmy pod wykres funkcji
    const isOnTarget = y <= func(x);

    // jeśli tak, to zwiększamy licznik trafień
    if (isOnTarget) {
      onTarget++;
    }

    // obliczamy prawdopodobieństwo trafienia pod figurę
    const probability = onTarget / allShots;
    // obliczamy aktualne pole na podstawie prawdopobieństwa
    const currentArea = rectArea * probability;

    // zwracamy aktualny rezultat
    yield {
      x,
      y,
      isOnTarget,
      probability,
      currentArea,
    };
  }
}
