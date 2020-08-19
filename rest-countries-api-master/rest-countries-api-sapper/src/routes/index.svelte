<script context="module">
	import CountryCard from '../components/CountryCard.svelte';

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

<section class="countries">
	<ul class="countries-grid">
		{#each countries as country}
			<CountryCard country={country}/>
		{/each}
	</ul>
</section>

<style>
	.countries {
		background-color: var(--bg2);
		transition: var(--transition) background-color;
		padding-left: 5.6rem;
		padding-right: 5.5rem;
	}
	@media (min-width: 1380px) {
		.countries {
			padding-left: 0;
			padding-right: 0;
		}
	}

	.countries-grid {
		margin-top: 3.2rem;
		display: grid;
		row-gap: 4rem;
		column-gap: 7.467rem;
		justify-content: center;
		grid-template-columns: repeat(auto-fit, 26.4rem);
		max-width: 128rem;
		margin-left: auto;
		margin-right: auto;
	}
	@media (min-width: 714px) {
		.countries-grid {
			margin-top: 4.8rem;
			row-gap: 7.5rem;
		}
	}
</style>

