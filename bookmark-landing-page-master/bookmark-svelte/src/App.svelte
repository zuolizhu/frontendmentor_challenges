<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import SectionIntro from './sections/SectionIntro.svelte';
	import SectionFeatures from './sections/SectionFeatures.svelte';
	import SectionDownload from './sections/SectionDownload.svelte';
</script>

<Header />
<main class="main">
	<SectionIntro />
	<SectionFeatures />
	<SectionDownload />
</main>
<Footer />

<style type="text/scss">

</style>