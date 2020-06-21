<script>
	import FyloMenu from './FyloMenu.svelte';
	import FyloStorageDetail from './FyloStorageDetail.svelte';
</script>

<main>
	<div class="container">
		<FyloMenu/>
		<FyloStorageDetail/>
	</div>
	<div class="attribution">
		Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
		Coded by <a href="https://github.com/zuolizhu" target="_blank">Connor Zhu</a>.
	</div>
</main>

<style>
	.container {
		display: flex;
		flex-direction: column;
		padding: 12.7rem 2.5rem 0;
		max-width: 72rem;
    margin: 0 auto;
	}
	@media (min-width: 960px) {
		.container {
			flex-direction: row;
			min-width: 92rem;
			padding: 28.9rem 0 0;
			align-items: flex-end;
		}
	}

	.attribution {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		color: var(--color-pale-blue);
	}
	@media (max-width: 959px) {
		.attribution {
			font-size: 1.2rem
		}
	}


	.attribution a {
		text-decoration: none;
		background: linear-gradient(90deg, hsl(6, 100%, 80%), hsl(335, 100%, 65%));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>