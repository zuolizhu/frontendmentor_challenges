<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;
	
</script>

<header class="header">
	<Nav {segment}/>
</header>

<main class="main">
	<slot></slot>
</main>

<Footer {segment}/>

<style lang='scss' global>
	@import './style/global.scss';
	.header {
		text-align: center;
	}
	.main {
		overflow: hidden;
	}
</style>