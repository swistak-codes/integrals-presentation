import { divisions, end, height, radius, start, toDraw } from '../stores';
import { Functions } from './functionsEnum';

export const resetStores = (func: Functions) => {
  start.set(0);
  divisions.set(5);
  toDraw.set([]);
  radius.set(1);
  switch (func) {
    case Functions.linear:
      end.set(5);
      height.set(5);
      break;
    case Functions.sinus:
      end.set(3.14);
      height.set(1);
      break;
    case Functions.circle:
      end.set(1);
      height.set(1);
      break;
  }
};
