<script>
	import Header from './components/Header.svelte';
	import SectionIntro from './sections/SectionIntro.svelte';
	import SectionShorten from './sections/SectionShorten.svelte';
	import SectionShortenResult from './sections/SectionShortenResult.svelte';
	import SectionFeatures from './sections/SectionFeatures.svelte';
	import SectionCta from './sections/SectionCta.svelte';
	import Footer from './components/Footer.svelte';


	let Links = [];

	function handleShortenLink(event) {
		const Link = {
			originalLink: event.detail.originalLink,
			shortenLink: event.detail.shortenLink
		}
		// Limit links to show: 3
		if (Links.length < 3) {
			Links.unshift(Link);
		} else {
			Links.pop();
			Links.unshift(Link);
		}
		Links = Links;
	}

</script>

<Header />
<main class="main">
	<SectionIntro />
	<SectionShorten on:shortenlink={handleShortenLink} />
	<SectionShortenResult Links={Links} />
	<SectionFeatures />
	<SectionCta />
</main>
<Footer />

<style type="text/scss">
	.main {
		overflow-x: hidden; 
	}
	
</style>