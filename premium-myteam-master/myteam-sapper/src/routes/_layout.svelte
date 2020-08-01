<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<header class="header">
	<Nav {segment}/>
</header>

<main class="main">
	<slot></slot>
</main>


<style lang='scss' global>
	@import './style/global.scss';
	.header {
		text-align: center;
	}
</style>