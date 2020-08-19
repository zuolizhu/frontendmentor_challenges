<script>
	export let segment;

	import { createEventDispatcher } from 'svelte';

	let currentTheme = 'light-mode';

	function switchTheme() {
		const body = window.document.body;
		if (body.classList.contains('light')) {
			body.classList.replace('light', 'dark');
			currentTheme = 'dark-mode';
		} else {
			body.classList.replace('dark', 'light');
			currentTheme = 'light-mode';
		}
	}
</script>

<nav class="navbar">
	<span class="sr-only" aria-current="{segment === undefined ? 'page' : undefined}">Page navigation bar</span>
	<h1 class="t-brand">Where is the world?</h1>
	<button class="btn btn--mode {currentTheme} t-switch navbar__button" on:click={switchTheme}>Dark Mode</button>
</nav>

<style>
	.navbar {
		height: 8rem;
		padding: 3rem 1.6rem;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background-color: var(--bg1);
		transition: var(--transition) background-color;
		box-shadow: 0 .2rem .4rem 0 rgba(0,0,0,0.06);
	}

	.navbar__button {
		display: inline-flex;
	}
	.navbar__button::before {
		content: '';
		width: 1.6rem;
		height: 1.6rem;
		background-repeat: no-repeat;
		background-position: center;
		margin-right: .8rem;
		transition: var(--transition) background;
	}
	.light-mode.navbar__button::before {
		background-image: url(../images/moon-light.svg);
	}
	.dark-mode.navbar__button::before {
		background-image: url(../images/moon-dark.svg);
	}
	
</style>