<script lang="ts">
  import type { Lineup } from '$lib/types';

  export let lineup: Lineup;
</script>

<img src={lineup.link} alt={lineup.description}>
