<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
	
</script>

<style>
	.main {
		padding-bottom: 6.5rem;
	}
	@media (min-width: 714px) {
		.main {
			padding-bottom: 4.5rem;
		}
	}
</style>

<Nav {segment}/>

<main class="main">
	<slot></slot>
</main>
