<script>
    export let animes
    export let title
</script>

<h1>{title}</h1>
<hr>
{#each animes as anime}
    <h1>{anime.id}</h1>
{/each}
