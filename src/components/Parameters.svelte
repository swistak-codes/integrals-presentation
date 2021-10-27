<script lang="ts">
  import Container from './shared/Container.svelte';
  import ContainerItem from './shared/ContainerItem.svelte';
  import { func, start, end, height, divisions } from '../stores';
  import { resetStores } from '../helpers/resetStores';
  import { Functions } from '../helpers/functions';

  func.subscribe((value) => {
    resetStores(value);
  });

  export let isMonteCarlo: boolean;
</script>

<Container>
  <ContainerItem>
    <label for="function">Funkcja</label>
    <select id="function" bind:value="{func}">
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
      min="-5"
      max="5"
      step="0.01"
      bind:value="{start}"
    />
  </ContainerItem>
  <ContainerItem>
    <label for="end">Koniec</label>
    <input
      id="end"
      type="number"
      min="-5"
      max="5"
      step="0.01"
      bind:value="{end}"
    />
  </ContainerItem>
  {#if isMonteCarlo}
    <ContainerItem>
      <label for="height">Wysokość</label>
      <input
        id="height"
        type="number"
        min="0"
        max="5"
        step="0.01"
        bind:value="{height}"
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
        bind:value="{divisions}"
      />
    </ContainerItem>
  {/if}
</Container>
