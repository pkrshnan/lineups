<script lang="ts">
  import {
    Grid,
    Row,
    Column,
    SkeletonPlaceholder,
    Dropdown,
  } from "carbon-components-svelte";

  type Ability = {
    title: string,
    description: string,
    icon_path: string
    lineups: boolean 
  }

  const abilities: Array<Ability> = [
    {
      title: "Nanoswarm",
      description: "Molotov grenade that travels 59m at peak distance and does 15 damage per second for 6 seconds.",
      icon_path: "../../images/killjoy/nanoswarm.png",
      lineups: true
    },
    {
      title: "Alarmbot",
      description: "Placeable bot that detects the presence of nearby enemies and makes them vulnerable (take 2x as much damage) for a short period.",
      icon_path: "../../images/killjoy/alarmbot.png",
      lineups: false 
    },
    {
      title: "Turret",
      description: "Placeable bot that shoots 180 degrees for an infinite range at any enemies.",
      icon_path: "../../images/killjoy/turret.png",
      lineups: false
    },
    {
      title: "Lockdown",
      description: "Placeable bot that charges up for 10 seconds and then disables any enemies that are in the radius when it explodes for 6 seconds.",
      icon_path: "../../images/killjoy/lockdown.png",
      lineups: true 
    },
  ]

  const abilitiesWithLineups = abilities.filter(ability => ability.lineups)
</script>

<Grid>
  <Row>
    <Column>
      <div class="header">
        <h1 class="title">Killjoy</h1>
        <h2 class="role">Sentinel</h2>
        <h3 class="subtitle">
          The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.
        </h3>
      </div>
      {#each abilities as ability}
        <div class="ability">
          <Row>
            <Column sm={1} md={2} lg={2}>
              <img class="ability-icon" src={ability.icon_path} alt={ability.title} />
            </Column>
            <Column>
              <h3 class:link-to-ability={ability.lineups} class="ability-title">{ ability.title }</h3>
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

  {#each abilitiesWithLineups as ability}
    <Row>
      <div class="lineups">
        <h2 class="lineups-title">{ability.title}</h2>
        <SkeletonPlaceholder class="w-full"/>
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
