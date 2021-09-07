<script lang="ts">
  import type { Lineup } from '$lib/types';
  import LineupPreview from './LineupPreview.svelte';
  import { onMount } from 'svelte';

  export let ability_id: number;
  let lineups: Lineup[] = [];

  onMount(async () => {
    const res = await fetch(`http://localhost:3000/ability/${ability_id}/lineups`);
    const data = await res.json();

    if (res.ok) {
      lineups = data;
    }
  });

</script>

{#if lineups.length === 0}
  <div class="lineup-preview">No lineups are here... yet.</div>
{:else}
  <div>
    {#each lineups as lineup (lineup.id)}
      <LineupPreview {lineup} />
    {/each}
  </div>
{/if}
