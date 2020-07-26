<script>
	import Header from './components/Header.svelte';
	import SectionIntro from './sections/SectionIntro.svelte';
	import SectionShorten from './sections/SectionShorten.svelte';
	import SectionShortenResult from './sections/SectionShortenResult.svelte';
	import SectionFeatures from './sections/SectionFeatures.svelte';
	import SectionCta from './sections/SectionCta.svelte';
	import Footer from './components/Footer.svelte';
</script>

<Header />
<main class="main">
	<SectionIntro />
	<SectionShorten />
	<SectionShortenResult />
	<SectionFeatures />
	<SectionCta />
</main>
<Footer />

<style type="text/scss">
	.main {
		overflow-x: hidden; 
	}
	
</style>