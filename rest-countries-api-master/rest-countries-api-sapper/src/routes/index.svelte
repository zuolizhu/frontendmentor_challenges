<script context="module">
	export function preload() {
		return this.fetch(`https://restcountries.eu/rest/v2/all`).then(r => r.json()).then(countries => {
			return { countries };
		});
	}
</script>

<script>
	export let countries;
</script>

<svelte:head>
	<title>Frontend Mentor | REST Countries API with color theme switcher</title>
</svelte:head>

<h1>All Countries</h1>

<ul>
	{#each countries as country}
		<li><a rel='prefetch' href='./country/{country.name}'>{country.name}</a></li>
	{/each}
</ul>