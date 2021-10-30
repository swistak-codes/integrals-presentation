<script lang="ts">
  import Parameters from './Parameters.svelte';
  import Canvas from './Canvas.svelte';
  import { allParameters, toDraw } from '../stores';
  import { rectangles } from '../algorithms/rectangles';
  import { areaFunctionsMap, functionsMap } from '../helpers/functions';
  import { Modes } from '../helpers/getMode';
  import { BLUE, DARK_BLUE, DARK_GREEN, GREEN } from '../helpers/colors';

  let area: number = null;
  let realArea: number = null;

  allParameters.subscribe(([func, start, end, _, mode, divisions, __]) => {
    const result = rectangles(functionsMap[func], mode, divisions, start, end);
    area = result.area;
    $toDraw = result.rectangles.map((rect, i) => ({
      ...rect,
      y3: 0,
      fillColor: i % 2 ? GREEN : BLUE,
      strokeColor: i % 2 ? DARK_GREEN : DARK_BLUE,
    }));
    realArea = areaFunctionsMap[func](start, end);
  });
</script>

<h1>Metoda prostokątów</h1>
<Parameters algorithm="{Modes.Rectangles}" />
<Canvas />
{#if area != null && realArea != null}
  <p>Wynik: {Intl.NumberFormat().format(area)}</p>
  <p>Wynik z wzoru: {Intl.NumberFormat().format(realArea)}</p>
{/if}
