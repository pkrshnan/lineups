<Grid>
    <Row class="mb-10">
        <Column class="text-center">
            <h1 class="text-4xl font-light mb-5">Lineups.gg</h1>
            <p class="text-xl">The one place to visit for all your Valorant lineups.</p>
        </Column>
    </Row>
    <h2 class="text-xl mb-3">Featured Lineups</h2>
    {#each [...Array(3)] as _item}
        <Row class="mb-4">
            <Column>
                <SkeletonPlaceholder class="w-full"/>
            </Column>
            <Column
                sm={1}
                md={2}
                lg={4}
            >
                <SkeletonText paragraph lines={4} class="w-full"/>
            </Column>
        </Row>
    {/each}
</Grid>

<script lang="ts">
	import {
	    Grid,
	    Row,
	    Column,
	    SkeletonPlaceholder,
	    SkeletonText
	} from "carbon-components-svelte";
</script>
