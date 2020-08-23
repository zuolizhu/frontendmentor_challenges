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
<header class="header">
	<nav class="navbar">
		<span class="sr-only" aria-current="{segment === undefined ? 'page' : undefined}">Page navigation bar</span>
		<h1 class="t-brand">Where in the world?</h1>
		<button name="themeSwitch" class="btn btn--mode {currentTheme} t-switch navbar__button" on:click={switchTheme}>Dark Mode</button>
	</nav>
</header>

<style>
	.header {
		background-color: var(--bg1);
		transition: var(--transition) background-color;
		box-shadow: 0 .2rem .4rem 0 rgba(0,0,0,0.06);
		height: 8rem;
		padding: 3rem 1.6rem;
		width: 100%;
		text-align: center;
	}
	@media (min-width: 714px) {
		.header {
			padding-left: 5.6rem;
    	padding-right: 5.5rem;
			padding-top: 2.3rem;
			padding-bottom: 2.5rem;
		}
	}
	@media (min-width: 1380px) {
		.header {
			padding-left: 0;
    	padding-right: 0;
		}
	}

	.navbar {
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 127.9rem;
	}

	.navbar__button {
		display: inline-flex;
		padding: 0;
		cursor: pointer;
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
	@media (min-width: 467px) {
		.navbar__button::before {
			width: 2rem;
			height: 2rem;
		}
	}
	.light-mode.navbar__button::before {
		background-image: url(../images/moon-light.svg);
	}
	.dark-mode.navbar__button::before {
		background-image: url(../images/moon-dark.svg);
	}
	
</style>