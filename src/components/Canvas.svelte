<script lang="ts">
  import { func, radius, toDraw } from '../stores';
  import { onMount } from 'svelte';
  import { clear } from '../helpers/canvas/clear';
  import { drawAxis } from '../helpers/canvas/drawAxis';
  import { drawGrid } from '../helpers/canvas/drawGrid';
  import { drawFunction } from '../helpers/canvas/drawFunction';
  import { drawFigure } from '../helpers/canvas/drawFigure';

  let canvas: HTMLCanvasElement;
  const size = 500;

  onMount(() => {
    toDraw.subscribe(() => redraw());
    radius.subscribe(() => redraw());
  });

  const redraw = () => {
    const context = canvas.getContext('2d');
    clear(context, size);
    drawGrid(context, size);
    $toDraw.forEach((figure) => drawFigure(context, size, figure));
    drawFunction(context, size, $func);
    drawAxis(context, size);
  };
</script>

<style>
  div {
    margin-top: 10px;
    width: 100%;
  }
  canvas {
    margin: auto;
    background: white;
  }
</style>

<div>
  <canvas width="{size}" height="{size}" bind:this="{canvas}"></canvas>
</div>
