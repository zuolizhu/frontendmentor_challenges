<script>
	import { fly, fade } from 'svelte/transition';

	// won't use segment in this project
	export let segment;
	
	let burgerActive = false;
	function handleBurger() {
		burgerActive = !burgerActive;
	}
</script>

<style lang="scss">
	.site-logo {
		height: 3.2rem;
		@media (min-width: 960px) {
			height: 4rem;
		}
		&__container {
			width: 12.8rem;
			height: 3.2rem;
			display: inline-flex;
			align-items: center;
			@media (min-width: 960px) {
				width: 16rem;
				height: 4rem;
			}
			img { width: 100%; }
		}
	}
	.main-nav {
		list-style-type: none;
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 4.8rem 2.4rem 0;
		position: relative;
		@media (min-width: 768px) {
			padding: 6.4rem 4rem 0 3.9rem;
			max-width: 111rem;
		}
		@media (min-width: 1024px) {
			padding: 7.3rem 4rem 0 3.9rem;
		}
		@media (min-width: 1160px) {
			padding: 7.3rem 0 0;
		}
	}
	.desktop-nav {
		display: none;
		@media (min-width: 520px) {
			display: inline-flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			margin-left: 4.8rem;
		}
		@media (min-width: 560px) {
			justify-content: flex-start;
		}
		@media (min-width: 1024px) {
			margin-left: 8rem;
		}

		&__item {
			@media (min-width: 560px) {
				&:nth-child(2) {
					margin-left: 4rem;
				}
				&:nth-child(3) {
					margin-left: auto;
				}
			}
		}
	}
	.button--burger {
		@media (max-width: 519px) {
			display: inline-flex;
			position: relative;
			z-index: 10;
			padding: 0;
		}
		@media (min-width: 520px) {
			display: none;
		}
	}

	.mobile-nav-block {
		@media (max-width: 519px) {
			display: block;
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			height: 100vh;
			background-color: rgba(0, 0, 0, .5);
			z-index: 1;
		}
		@media (min-width: 520px) {
			display: none;
		}
	}

	.mobile-nav {
		display: block;
		position: absolute;
		background-color: var(--color-plice-blue);
		background-image: url(../images/bg-pattern-about-1-mobile-nav-1.svg);
		background-repeat: no-repeat;
		background-position: right -10rem bottom;
		top: 0;
		bottom: 0;
		right: 0;
		width: 68%;
		padding-top: 11.2rem;
		padding-left: 4.8rem;

		&__item:nth-child(1) {
			margin-bottom: 2.4rem;
		}
		&__item:nth-child(2) {
			margin-bottom: 3.6rem;
		}
	}

	.desktop-nav__item:hover > .t-hover-color {
		color: var(--color-light-coral);
	}
</style>

<nav class="main-nav">
	<!-- logo -->
	<a class="site-logo" href=".">
		<span class="sr-only">site logo</span>
		<div class="site-logo__container">
			<img src="./images/logo.svg" alt="site logo">
		</div>
	</a>
	<!-- tablet/desktop menu -->
	<ul class="desktop-nav">
		<li class="desktop-nav__item"><a class="t-main-nav t-white t-hover-color" aria-current="{segment === undefined ? 'page' : undefined}" href="./">home</a></li>
		<li class="desktop-nav__item"><a class="t-main-nav t-white t-hover-color" aria-current="{segment === 'about' ? 'page' : undefined}" href="./about">about</a></li>
		<li class="desktop-nav__item"><a class="t-main-nav t-white button button--contact" aria-current="{segment === 'contact' ? 'page' : undefined}" href="./contact">contact us</a></li>
	</ul>
	<!-- mobile burger -->
	<button
		on:click={handleBurger}
		aria-label="trigger button to open the side menu"
		title="trigger button to open the side menu"
		class="button button--burger">
		{#if burgerActive}
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17"><path fill="#FFF" fill-rule="evenodd" d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"/></svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"/></g></svg>
		{/if}
	</button>
	<!-- mobile menu -->
	{#if burgerActive}
		<div
			on:click={handleBurger}
			transition:fade 
			class="mobile-nav-block">
			<ul transition:fly="{{x: 200}}" class="mobile-nav">
				<li class="mobile-nav__item"><a class="t-main-nav t-white" aria-current="{segment === undefined ? 'page' : undefined}" href="./">home</a></li>
				<li class="mobile-nav__item"><a class="t-main-nav t-white" aria-current="{segment === 'about' ? 'page' : undefined}" href="./about">about</a></li>
				<li class="mobile-nav__item"><a class="t-main-nav t-white button button--contact" aria-current="{segment === 'contact' ? 'page' : undefined}" href="./contact">contact us</a></li>
			</ul>
		</div>
	{/if}
</nav>
