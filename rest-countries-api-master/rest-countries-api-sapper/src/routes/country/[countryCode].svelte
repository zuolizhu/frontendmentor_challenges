<script context="module">
	export async function preload({ params, query }) {
		// the `countryCode` parameter is available because
		// this file is called [countryCode].svelte
		const res = await this.fetch(`https://restcountries.eu/rest/v2/alpha/${params.countryCode}`);
		const data = await res.json();
		
		if (res.status === 200) {
			return { country: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import axios from 'axios';
	export let country;
	
	const languages = country.languages.map(language => language.name).join(', ');
	const currencies = country.currencies.map(currency => currency.name).join(', ');
	const population = country.population.toLocaleString();

	const countriesCode = country.borders;

	

	async function getCountries() {
		const promises = countriesCode.map(async (code) => {
			return await axios
			.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
			.catch(error => console.error(error));
		});
		return await Promise
		.all(promises)
		.catch(error => { 
			console.error(error.message)
		});
	}

	// get all countries from the countries code
	let promises = getCountries();

</script>

<section class="country">
	<a class="btn btn--backarrow" href="./">Back</a>
	<div class="country-details-container">
		<img src="{country.flag}" alt="country flag" class="country-details__flag">
		<div class="country-details">
			<h1 class="t-country-detail-name">{country.name}</h1>
			<div class="country-details__breakdowns">
				<p class="country-details__breakdown t-country-detail">
					<span class="t-semi-bold">Native Name: </span><span class="t-light">{country.nativeName}</span><br>
					<span class="t-semi-bold">Population: </span><span class="t-light">{population}</span><br>
					<span class="t-semi-bold">Region: </span><span class="t-light">{country.region}</span><br>
					<span class="t-semi-bold">Sub Region: </span><span class="t-light">{country.subregion}</span><br>
					<span class="t-semi-bold">Capital: </span><span class="t-light">{country.capital}</span>
				</p>
				<p class="country-details__breakdown t-country-detail">
					<span class="t-semi-bold">Top Level Domain: </span><span class="t-light">{country.topLevelDomain}</span><br>
					<span class="t-semi-bold">Currencies: </span><span class="t-light">{currencies}</span><br>
					<span class="t-semi-bold">Languages: </span><span class="t-light">{languages}</span>
				</p>
			</div>
			<p class="t-borders country-details__border__heading">Border Countries: </p>
			{#await promises}
			<p class="t-country-detail">Fetch data, please wait...</p>
			{:then countries}
				{#if countries.length > 0}
				<div class="country-details__borders">
				{#each countries as country}
					<a class="country-details__border" href="./country/{country.data.alpha3Code}">{country.data.name}</a>
				{/each}
				</div>
				{:else}
					<p class="t-country-detail">No border countries for this country.</p>
				{/if}
			{:catch error}
				<p>{error.message}</p>
			{/await}
		</div>
	</div>
</section>

<style>
	.country {
		padding-top: 4rem;
		padding-bottom: 6.2rem;
		padding-left: 2.8rem;
		padding-right: 2.7rem;
	}
	@media (min-width: 714px) {
		.country {
			padding-left: 5.6rem;
			padding-right: 5.5rem;
			padding-top: 8rem;
			max-width: 127.8rem;
			margin-left: auto;
			margin-right: auto;
		}
	}
	@media (min-width: 1380px) {
		.country {
			padding-left: 0;
			padding-right: 0;
		}
	}

	.country-details-container {
		margin-top: 6.4rem;
	}
	@media (min-width: 714px) {
		.country-details-container {
			margin-top: 8rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-left: auto;
			margin-right: auto;
		}
	}
	@media (min-width: 1080px) {
		.country-details-container {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
		}
	}
	@media (min-width: 1380px) {
		.country-details-container {
			align-items: center;
		}
	}

	.country-details__flag {
		width: 100%;
		height: auto;
		max-width: 56rem;
		max-height: 40.1rem;
		object-fit: cover;
	}
	@media (min-width: 1080px) {
		.country-details__flag {
			width: 50%;
		}
	}

	.country-details {
		margin-top: 4.4rem;
	}
	@media (min-width: 1080px) {
		.country-details {
			width: 45%;
			margin-top: 0;
			max-width: 59.8rem;
		}
	}
	@media (min-width: 1380px) {
		.country-details {
			width: 59.8rem;
		}
	}

	.country-details__breakdowns {
		margin-top: 1.6rem;
		margin-bottom: 3.4rem;
	}
	@media (min-width: 714px) {
		.country-details__breakdowns {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			max-width: 59.8rem;
			margin-top: 2.4rem;
		}
	}
	@media (min-width: 1080px) {
		.country-details__breakdowns {
			flex-flow: column nowrap;
		}
	}
	@media (min-width: 1380px) {
		.country-details__breakdowns {
			flex-flow: row nowrap;
		}
	}

	.country-details__breakdown:nth-child(1) {
		margin-bottom: 3.2rem;
	}

	.country-details__border__heading {
		margin-bottom: 1.6rem;
	}

	.country-details__borders {
		--gap: 1rem;
		display: inline-flex;
		flex-wrap: wrap;
		margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
		width: calc(100% + var(--gap));
	}

	.country-details__border {
		display: inline-flex;
		color: var(--text1);
		padding: .6rem 2.4rem;
		background-color: var(--bg1);
		box-shadow: 0 0 .4rem .1rem rgba(17,21,23,0.25);
		margin: var(--gap) 0 0 var(--gap);
	}
</style>