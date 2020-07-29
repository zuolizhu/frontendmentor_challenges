<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import SectionIntro from './sections/SectionIntro.svelte';
	import SectionFeatures from './sections/SectionFeatures.svelte';
	import SectionDownload from './sections/SectionDownload.svelte';
	import SectionFAQ from './sections/SectionFAQ.svelte';
	import SectionCta from './sections/SectionCta.svelte';
</script>

<Header />
<main class="main">
	<SectionIntro />
	<SectionFeatures />
	<SectionDownload />
	<SectionFAQ />
	<SectionCta />
</main>
<Footer />

<style type="text/scss">

</style>