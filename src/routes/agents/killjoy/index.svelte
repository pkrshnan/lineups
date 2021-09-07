<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';

    export const load: Load = async ({ fetch }) => {
      const res = await fetch('/agents/killjoy/info');
      const data = await res.json();

      return { props: { agent: data } };
    };
</script>

<script lang="ts">
  import {
    Grid,
    Row,
    Column,
    Dropdown,
  } from "carbon-components-svelte";

  import LineupList from '$lib/LineupList/index.svelte';

  import type { Agent } from '$lib/types';

  export let agent: Agent;
  let lineupAbilities = agent.abilities.filter((ability) => ability.has_lineups);
</script>

<Grid>
  <Row>
    <Column>
      <div class="header">
        <h1 class="title">{ agent.name }</h1>
        <h2 class="role">{ agent.role } </h2>
        <h3 class="subtitle">{ agent.description }</h3>
      </div>
      {#each agent.abilities as ability}
        <div class="ability">
          <Row>
            <Column sm={1} md={2} lg={2}>
              <img class="ability-icon" src={`../../images/killjoy/${ability.name.toLowerCase()}.png`} alt={ability.name} />
            </Column>
            <Column>
              <h3 class:link-to-ability={ability.has_lineups} class="ability-title">{ ability.name }</h3>
              <p class="ability-description"> { ability.description }</p>
            </Column>
          </Row>
        </div>
      {/each}
    </Column>
    <Column sm={0} md={4} lg={5}>
      <img src="../../images/killjoy/killjoy.png" alt="Killjoy">
    </Column>
  </Row>

  <Row>
    <h2 class="section-title">Lineups</h2>
    <div class="map-filter">
      <span class="mr-5">Map:</span>
      <Dropdown></Dropdown>
    </div>
  </Row>

  {#each lineupAbilities as ability}
    <Row>
      <div class="lineups">
        <h2 class="lineups-title">{ability.name}</h2>
        <LineupList ability_id={ability.id} />
      </div>
    </Row>
  {/each}
</Grid>

<style>
  .title {
    @apply text-4xl;
    @apply font-light;
    @apply mb-2;
  }

  .section-title {
    @apply text-3xl;
    @apply mb-3;
    @apply w-full;
  }

  .lineups-title {
    @apply text-2xl;
    @apply mb-3;
  }

  .subtitle {
    @apply text-xl;
    @apply max-w-3xl;
  }

  .role {
    @apply text-lg;
    @apply uppercase;
    @apply mb-5;
    @apply font-bold;
    @apply italic;
    @apply text-purple-400;
  }

  .header {
    @apply mb-10;
  }

  .ability {
    @apply mb-8;
    @apply max-w-3xl;
  }

  .ability-title {
    @apply text-xl;
    @apply font-bold;
  }

  .ability-description {
    @apply text-base;
  }

  .link-to-ability {
    @apply text-yellow-300;
  }

  .lineups {
    @apply mb-10;
    @apply w-full;
  }

  .map-filter {
    @apply flex;
    @apply items-center;
    @apply w-full;
  }
</style>
