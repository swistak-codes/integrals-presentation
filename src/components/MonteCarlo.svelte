<script lang="ts">
  import Parameters from './Parameters.svelte';
  import Canvas from './Canvas.svelte';
  import { Modes } from '../helpers/getMode';
  import { allParameters, toDraw } from '../stores';
  import { monteCarlo } from '../algorithms/monteCarlo';
  import { areaFunctionsMap, functionsMap } from '../helpers/functions';
  import Container from './shared/Container.svelte';
  import Button from './shared/Button.svelte';
  import ContainerItem from './shared/ContainerItem.svelte';
  import { BLUE, GREEN } from '../helpers/colors';

  let fps = 10;
  let isAnimating = false;
  let atOnce = 10;

  let area: number = null;
  let realArea: number = null;
  let probability: number = null;
  let tries: number = null;
  let onTarget: number = null;
  let iterator;

  allParameters.subscribe(([func, start, end, height, _, __, ___]) => {
    $toDraw = [];
    tries = 0;
    onTarget = 0;
    probability = 0;
    realArea = areaFunctionsMap[func](start, end);
    iterator = monteCarlo(functionsMap[func], start, end, height);
  });

  const goToNext = () => {
    const results = [];
    for (let i = 0; i < atOnce; i++) {
      results.push(iterator.next());
    }
    results.forEach(({ value }) => {
      probability = value.probability;
      area = value.currentArea;
      tries++;
      if (value.isOnTarget) {
        onTarget++;
      }
      $toDraw = [
        ...$toDraw,
        {
          x1: value.x,
          y1: value.y,
          x2: value.x,
          y2: value.y,
          y3: value.y,
          strokeColor: value.isOnTarget ? GREEN : BLUE,
          fillColor: value.isOnTarget ? GREEN : BLUE,
        },
      ];
    });
  };

  const animate = async () => {
    isAnimating = true;
    while (isAnimating) {
      goToNext();
      await new Promise((resolve) =>
        setTimeout(resolve, Math.round(1000 / fps)),
      );
    }
  };

  const stopPlaying = () => {
    isAnimating = false;
  };
</script>

<h1>Metoda Monte Carlo</h1>
<Parameters algorithm="{Modes.MonteCarlo}" />
<Canvas />
{#if probability != null}
  <p>
    Prób: {tries}; trafionych: {onTarget} (prawdopodobieństwo: {Intl.NumberFormat().format(
      probability,
    )})
  </p>
{/if}
{#if area != null}
  <p>Wynik: {Intl.NumberFormat().format(area)}</p>
{/if}
{#if realArea != null}
  <p>Wynik ze wzoru: {Intl.NumberFormat().format(realArea)}</p>
{/if}
<Container>
  <Button disabled="{isAnimating || !iterator}" on:click="{goToNext}"
    >Następny krok</Button
  >
  <ContainerItem>
    <label for="atOnce">Liczba prób</label>
    <input
      id="atOnce"
      name="elements"
      type="number"
      min="1"
      max="100"
      bind:value="{atOnce}"
      disabled="{isAnimating}"
    />
  </ContainerItem>
  <ContainerItem>
    <label for="fps">Prędkość animacji</label>
    <input
      id="fps"
      name="elements"
      type="number"
      min="1"
      max="30"
      bind:value="{fps}"
      disabled="{isAnimating}"
    />
  </ContainerItem>
  {#if !isAnimating}
    <Button disabled="{!iterator}" on:click="{animate}">Odtwórz animację</Button
    >
  {:else}
    <Button on:click="{stopPlaying}">Pauza</Button>
  {/if}
</Container>
