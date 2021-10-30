<script lang="ts">
  import Parameters from './Parameters.svelte';
  import Canvas from './Canvas.svelte';
  import { Modes } from '../helpers/getMode';
  import { allParameters, toDraw } from '../stores';
  import { areaFunctionsMap, functionsMap } from '../helpers/functions';
  import { BLUE, DARK_BLUE, DARK_GREEN, GREEN } from '../helpers/colors';
  import { trapezoids } from '../algorithms/trapezoids';

  let area: number = null;
  let realArea: number = null;

  allParameters.subscribe(([func, start, end, _, __, divisions, ___]) => {
    const result = trapezoids(functionsMap[func], divisions, start, end);
    area = result.area;
    $toDraw = result.trapezoids.map((rect, i) => ({
      ...rect,
      y3: 0,
      fillColor: i % 2 ? GREEN : BLUE,
      strokeColor: i % 2 ? DARK_GREEN : DARK_BLUE,
    }));
    realArea = areaFunctionsMap[func](start, end);
  });
</script>

<h1>Metoda trapezów</h1>
<Parameters algorithm="{Modes.Trapezoids}" />
<Canvas />
{#if area != null && realArea != null}
  <p>Wynik: {Intl.NumberFormat().format(area)}</p>
  <p>Wynik z wzoru: {Intl.NumberFormat().format(realArea)}</p>
{/if}
