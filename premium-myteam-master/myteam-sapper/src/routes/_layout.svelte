<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<header>
	<Nav {segment}/>
</header>

<main>
	<slot></slot>
</main>


<style lang='scss' global>
	@import './style/global.scss';
</style>