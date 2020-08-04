<svelte:head>
	<title>Frontend Mentor | myteam website challenge - About</title>
</svelte:head>

<section class="about-intro">
	<div class="container">
		<h1 class="t-intro--page t-white">About</h1>
		<p class="t-body1 t-white about-intro__body">We help companies build dynamic teams made up of top global talent. 
		Using our network of passionate professionals we drive innovation 
		and deliver incredible outcomes. Talented, diverse teams shape the 
		best products and experiences. We’ll bring those teams to you.</p>
	</div>
</section>

<style lang="scss">
	// Intro section
	.about-intro {
		overflow: hidden;

		.container {
			text-align: center;
			padding: 8rem 2.4rem 10.8rem;
			position: relative;
			@media (min-width: 520px) {
				padding: 11.2rem 0;
			}
		}
		.container::before {
			content: '';
			position: absolute;
			right: 0;
			bottom: 0;
			width: 20rem;
			height: 20rem;
			transform: translate(10rem, 10rem);
			background-repeat: no-repeat;
			background-image: url(../images/bg-pattern-about-1-mobile-nav-1.svg);
			@media (min-width: 700px) {
				transform: translate(10rem, 0);
			}
		}

		&__body {
			margin-top: 1.6rem;
			@media (min-width: 520px) {
				margin: 2.4rem auto 0;
				max-width: 45.7rem;
			}
		}
	}
</style>