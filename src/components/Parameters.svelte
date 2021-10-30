<script lang="ts">
  import Container from './shared/Container.svelte';
  import ContainerItem from './shared/ContainerItem.svelte';
  import { func, start, end, height, divisions, radius, mode } from '../stores';
  import { resetStores } from '../helpers/resetStores';
  import { Functions } from '../helpers/functionsEnum';
  import { Modes } from '../helpers/getMode';
  import { AlgorithmMode } from '../algorithms/rectangles';

  func.subscribe((value) => {
    resetStores(value);
  });

  let min: number;
  let max: number;

  $: min = $func === Functions.circle ? -$radius : -5;
  $: max = $func === Functions.circle ? $radius : 5;

  radius.subscribe((value) => {
    if ($func !== Functions.circle) {
      return;
    }
    $start = Math.max(-value, $start);
    $end = Math.min(value, $end);
  });

  export let algorithm: Modes;
</script>

<Container>
  <ContainerItem>
    <label for="function">Funkcja</label>
    <select id="function" bind:value="{$func}">
      <option value="{Functions.linear}">Liniowa</option>
      <option value="{Functions.sinus}">Sinus</option>
      <option value="{Functions.circle}">Okrąg</option>
    </select>
  </ContainerItem>
  <ContainerItem>
    <label for="start">Początek</label>
    <input
      id="start"
      type="number"
      min="{min}"
      max="{max}"
      step="0.01"
      bind:value="{$start}"
    />
  </ContainerItem>
  <ContainerItem>
    <label for="end">Koniec</label>
    <input
      id="end"
      type="number"
      min="{min}"
      max="{max}"
      step="0.01"
      bind:value="{$end}"
    />
  </ContainerItem>
  {#if algorithm === Modes.Rectangles}
    <ContainerItem>
      <label for="mode">Punkt</label>
      <select id="mode" bind:value="{$mode}">
        <option value="{AlgorithmMode.Start}">Początek</option>
        <option value="{AlgorithmMode.End}">Koniec</option>
        <option value="{AlgorithmMode.Middle}">Środek</option>
        <option value="{AlgorithmMode.Minimum}">Minimum</option>
        <option value="{AlgorithmMode.Maximum}">Maksimum</option>
      </select>
    </ContainerItem>
  {/if}
  {#if algorithm === Modes.MonteCarlo}
    <ContainerItem>
      <label for="height">Wysokość</label>
      <input
        id="height"
        type="number"
        min="0"
        max="5"
        step="0.01"
        bind:value="{$height}"
      />
    </ContainerItem>
  {:else}
    <ContainerItem>
      <label for="divisions">Podziały</label>
      <input
        id="divisions"
        type="number"
        min="0"
        step="1"
        bind:value="{$divisions}"
      />
    </ContainerItem>
  {/if}
  {#if $func === Functions.circle}
    <ContainerItem>
      <label for="radius">Promień</label>
      <input
        id="radius"
        type="number"
        min="0.1"
        max="5"
        step="0.1"
        bind:value="{$radius}"
      />
    </ContainerItem>
  {/if}
</Container>
