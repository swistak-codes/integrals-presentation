<script lang="ts">
  import { Modes } from '../helpers/getMode';
  import Rectangles from './Rectangles.svelte';
  import Trapezoids from './Trapezoids.svelte';
  import MonteCarlo from './MonteCarlo.svelte';

  export let mode: Modes;
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
  {#if mode === Modes.Rectangles}
    <Rectangles />
  {:else if mode === Modes.Trapezoids}
    <Trapezoids />
  {:else if mode === Modes.MonteCarlo}
    <MonteCarlo />
  {/if}
</main>
