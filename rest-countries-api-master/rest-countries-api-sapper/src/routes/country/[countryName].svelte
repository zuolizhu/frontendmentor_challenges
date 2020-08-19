<script context="module">
	export async function preload({ params, query }) {
		// the `countryName` parameter is available because
		// this file is called [countryName].svelte
		const res = await this.fetch(`https://restcountries.eu/rest/v2/name/${params.countryName}`);
		const data = await res.json();

		if (res.status === 200) {
			return { country: data[0] };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let country;
</script>

<a href="./">Back</a>
<h1>{ country.name }</h1>
<p>Native Name: {country.nativeName}</p>