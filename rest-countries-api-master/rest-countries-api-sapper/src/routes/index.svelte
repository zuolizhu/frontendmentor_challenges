<script context="module">
	import CountryCard from '../components/CountryCard.svelte';
	import { slide } from 'svelte/transition';

	export function preload() {
		return this.fetch(`https://restcountries.eu/rest/v2/all`).then(r => r.json()).then(countries => {
			return { countries };
		});
	}
</script>

<script>
	export let countries;

	let currentFilteredCountries = countries;
	let searchTerm = '';
	let active = false;
	let currentSelectedRegion = '';

	$: filteredCountries = searchTerm.length === 0 ? currentFilteredCountries : 
	currentFilteredCountries.filter(country => country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

	function handleDropdown() {
		active = !active;
	}

	function filterByRegion() {
		if (currentSelectedRegion !== this.textContent) {
			currentSelectedRegion = this.textContent;
		} else {
			currentSelectedRegion = '';
		}
		if (currentSelectedRegion === '') {
			currentFilteredCountries = countries;
		} else {
			currentFilteredCountries = countries.filter(country => country.region.indexOf(currentSelectedRegion) !== -1);
		}

		active = false;
	}
</script>

<svelte:head>
	<title>Frontend Mentor | REST Countries API with color theme switcher</title>
</svelte:head>

<div class="filters-group">
	<div class="searchbar-container">
		<label class="sr-only" for="searchCountry">Country Name</label>
		<input class="searchbar" id="searchCountry" name="searchCountry" placeholder="Search for a country…" bind:value={searchTerm}>
	</div>
	<div class="dropdown-container">
		<div class="dropdown" on:click={handleDropdown}>{currentSelectedRegion === '' ? 'Filter by Region' : currentSelectedRegion}</div>
		{#if active}
		<div transition:slide class="dropdown-menu">
			<ul class="regions">
				<li on:click={filterByRegion} class="region">Africa</li>
				<li on:click={filterByRegion} class="region">America</li>
				<li on:click={filterByRegion} class="region">Asia</li>
				<li on:click={filterByRegion} class="region">Europe</li>
				<li on:click={filterByRegion} class="region">Oceania</li>
			</ul>
		</div>
		{/if}
	</div>
</div>
<section class="countries">
	<ul class="countries-grid">
		{#each filteredCountries as country}
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

	.filters-group {
		text-align: center;
		margin-top: 2.4rem;
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	}
	@media (min-width: 714px) {
		.filters-group {
			text-align: left;
			padding-left: 5.6rem;
			padding-right: 5.5rem;
			max-width: 128rem;
			margin-left: auto;
			margin-right: auto;
			margin-top: 4.8rem;
		}
	}
	@media (min-width: 800px) {
		.filters-group {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}
	}
	@media (min-width: 1380px) {
		.filters-group {
			padding: 0;
		}
	}

	.searchbar-container {
		width: 100%;
		max-width: 48rem;
		border-radius: .5rem;
		padding: 1.4rem 3.2rem;
		background-color: var(--bg1);
		transition: var(--transition) background-color;
		box-shadow: 0 .2rem .9rem 0 rgba(0,0,0,0.05);
	}
	@media (min-width: 714px) {
		.searchbar-container {
			padding: 1.7rem 3.2rem;
		}
	}

	.searchbar {
		border: none;
		outline: none;
		width: 100%;
		padding: 0;
		padding-left: 4.2rem;
		background-repeat: no-repeat;
		background-color: transparent;
		background-image: var(--search);
		background-position: left center;
		transition: var(--transition) background;
	}

	.searchbar,
	.searchbar::placeholder {
		opacity: .77;
		font-size: 1.2rem;
		line-height: 2rem;
		color: var(--text1);
		font-weight: var(--weight-regular);
		font-family: 'Nunito Sans', sans-serif;
		transition: var(--transition) opacity, var(--transition) color;
	}
	@media (min-width: 714px) {
		.searchbar,
		.searchbar::placeholder {
			font-size: 1.4rem;
		}
	}

	.searchbar:focus::placeholder {
		opacity: 1;
	}

	.dropdown {
		width: 20rem;
		cursor: pointer;
		text-align: left;
		font-size: 1.2rem;
		line-height: 2rem;
		color: var(--text1);
		border-radius: .5rem;
		background-color: var(--bg1);
		background-repeat: no-repeat;
		background-image: var(--dropdown);
		font-weight: var(--weight-regular);
		padding: 1.4rem 1.9rem 1.4rem 2.4rem;
		background-position: right 1.8rem center;
		box-shadow: 0 .2rem .9rem 0 rgba(0,0,0,0.05);
		transition: var(--transition) background, var(--transition) color;
	}
	@media (min-width: 800px) {
		.dropdown {
			font-size: 1.4rem;
			padding: 1.8rem 1.8rem 1.8rem 2.4rem;
		}
	}

	.dropdown-container {
		margin-top: 4rem;
		position: relative;
	}
	@media (min-width: 800px) {
		.dropdown-container {
			margin-top: 0;
		}
	}

	.dropdown-menu {
		left: 0;
		top: 5.2rem;
		width: 20rem;
		text-align: left;
		position: absolute;
		border-radius: .5rem;
		padding: 1.6rem 2.4rem;
		background-color: var(--bg1);
		box-shadow: 0 .2rem .9rem 0 rgba(0,0,0,0.05);
		transition: var(--transition) background-color;
	}
	@media (min-width: 800px) {
		.dropdown-menu {
			top: 6rem;
		}
	}

	.dropdown-menu .regions .region:not(:last-of-type) {
		margin-bottom: .8rem;
	}

	.dropdown-menu .regions .region {
		cursor: pointer;
		font-size: 1.2rem;
		line-height: 1.6rem;
		color: var(--text1);
		font-weight: var(--weight-regular);
		transition: var(--transition) color;
	}
	@media (min-width: 800px) {
		.dropdown-menu .regions .region {
			font-size: 1.4rem;
			line-height: 2rem;
		}
	}

</style>

