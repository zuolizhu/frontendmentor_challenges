<script>
  import '../node_modules/normalize.css/normalize.css';
	import JobList from './JobList.svelte';
	import Header from './Header.svelte';
</script>

<Header/>
<main class="main">
	<JobList/>
</main>

<style type="text/scss">
	.main {
		background-color: var(--color-background);
		@media (min-width: 960px) {
			padding-bottom: 12rem;
		}
	}
</style>