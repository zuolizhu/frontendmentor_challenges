<script>
	import { slide } from 'svelte/transition';
	import CtaBanner from '../components/CtaBanner.svelte';
	import PageTransition from '../components/PageTransition.svelte';
	let directors = [
		{
			id: 1,
			quote: '“It always amazes me how much talent there is in every corner of the globe.”',
			name: 'Nikita Marks',
			title: 'Founder & CEO',
			image: './images/avatar-nikita.jpg',
			active: false,
			twitter: 'https://twitter.com/',
			linkedin: 'https://www.linkedin.com/'
		},
		{
			id: 2,
			quote: '“Distributed teams required unique processes. You need to approach work in a new way.”',
			name: 'Cristian Duncan',
			title: 'Co-founder & COO',
			image: './images/avatar-christian.jpg',
			active: false,
			twitter: 'https://twitter.com/',
			linkedin: 'https://www.linkedin.com/'
		},
		{
			id: 3,
			quote: '“Technology is at the forefront of enabling distributed teams. That\'s where we come in.”',
			name: 'Cruz Hamer',
			title: 'Co-founder & CTO',
			image: './images/avatar-cruz.jpg',
			active: false,
			twitter: 'https://twitter.com/',
			linkedin: 'https://www.linkedin.com/'
		},
		{
			id: 4,
			quote: '“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”',
			name: 'Drake Heaton',
			title: 'Business Development Lead',
			image: './images/avatar-drake.jpg',
			active: false,
			twitter: 'https://twitter.com/',
			linkedin: 'https://www.linkedin.com/'
		},
		{
			id: 5,
			quote: '“Unique perspectives shape unique products, which is what you need to survive these days.”',
			name: 'Griffin Wise',
			title: 'Lead Marketing',
			image: './images/avatar-griffin.jpg',
			active: false,
			twitter: 'https://twitter.com/',
			linkedin: 'https://www.linkedin.com/'
		},
		{
			id: 6,
			quote: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”',
			name: 'Aden Allan',
			title: 'Head of Talent',
			image: './images/avatar-aden.jpg',
			active: false,
			twitter: 'https://twitter.com/',
			linkedin: 'https://www.linkedin.com/'
		}
	];

	function toggleSwitcher() {
		this.parentNode.classList.toggle('active');
		const targetCard = directors[this.parentNode.dataset.cardId-1];
		targetCard.active = !targetCard.active;
		directors = directors;
	}
</script>

<svelte:head>
	<title>Frontend Mentor | myteam website challenge - About</title>
</svelte:head>
<PageTransition>
<section class="about-intro">
	<div class="container">
		<h1 class="t-intro--page t-white about-intro__heading">About</h1>
		<p class="t-body1 t-white about-intro__body">We help companies build dynamic teams made up of top global talent. 
		Using our network of passionate professionals we drive innovation 
		and deliver incredible outcomes. Talented, diverse teams shape the 
		best products and experiences. We’ll bring those teams to you.</p>
	</div>
</section>

<section class="directors">
	<div class="container">
		<h2 class="t-h2 t-white directors__intro">Meet the directors</h2>
		<div class="director-cards">
		{#each directors as director (director.id)}
			<div class="director-card" data-card-id="{director.id}">
				<div class="director-card__content">
					<div class="director-card__content__avatar">
						<img src="{director.image}" alt="avatar">
					</div>
					<div class="director-card__content__name t-rapture-blue t-card-name">{director.name}</div>
					<div class="director-card__content__title t-white t-card-title">{director.title}</div>
					
					<!-- content will be displayed when button has been clicked -->
					{#if director.active}
						<div transition:slide class="director-card__content__bio">
							<h3 class="director-card__content__bio__name t-rapture-blue t-card-name">{director.name}</h3>
							<p class="director-card__content__bio__quote t-white t-card-quote">{director.quote}</p>
							<div class="director-card__content__bio__socials">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="#FFF" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"/></svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#FFF" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
							</div>
						</div>
					{/if}
				</div>
				<div
				on:click={toggleSwitcher}
				class="director-card__switcher"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#012F34" fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/></svg></div>
			</div>
		{/each}
		</div>
	</div>
</section>

<section class="clients">
	<div class="container">
		<h2 class="t-h2 t-white clients__intro">Some of our clients</h2>
		<div class="clients__list">
			<div class="client-logo">
				<img src="./images/logo-the-verge.png" alt="client logo">
			</div>
			<div class="client-logo">
				<img src="./images/logo-jakarta-post.png" alt="client logo">
			</div>
			<div class="client-logo">
				<img src="./images/logo-the-guardian.png" alt="client logo">
			</div>
			<div class="client-logo">
				<img src="./images/logo-tech-radar.png" alt="client logo">
			</div>
			<div class="client-logo">
				<img src="./images/logo-gadgets-now.png" alt="client logo">
			</div>
		</div>
	</div>
</section>

<CtaBanner/>
</PageTransition>
<style lang="scss">
	// Intro section
	.about-intro {
		overflow: hidden;

		.container {
			text-align: center;
			padding: 8rem 2.4rem 10.8rem;
			position: relative;
			max-width: 144rem;
			margin: 0 auto;
			@media (min-width: 520px) {
				padding: 11.2rem 0;
			}
			@media (min-width: 1080px) {
				display: flex;
				flex-flow: row nowrap;
				padding: 12rem 16.5rem;
				text-align: left;
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
		&__heading {
			@media (min-width: 1080px) {
				width: 31.532%;
				max-width: 35rem;
				margin-right: 3rem;
			}
		}
		&__body {
			margin-top: 1.6rem;
			@media (min-width: 520px) {
				margin: 2.4rem auto 0;
				max-width: 45.7rem;
			}
			@media (min-width: 1080px) {
				width: 65.766%;
				max-width: 73rem;
				margin: 0;
				padding-top: 4rem;
				position: relative;
			}

			&::before {
				@media (min-width: 1080px) {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 5rem;
					height: .4rem;
					background-color: var(--color-light-coral);
				}
			}
		}
	}

	// Directors section
	.directors {
		background-color: var(--color-deep-jungle-green);
	
		.container {
			position: relative;
			padding: 8.8rem 2.4rem;
			@media (min-width: 520px) {
				padding: 8.8rem 3.2rem;
			}
			@media (min-width: 768px) {
				padding: 10rem 9.7rem 10rem 9.8rem;
				margin: 0 auto;
			}
			@media (min-width: 960px) {
				max-width: 111rem;
				padding: 14rem 2.4rem;
			}
			@media (min-width: 1160px) {
				padding: 14rem 0;
			}

			&::before,
			&::after {
				content: '';
				position: absolute;
				background-repeat: no-repeat;
			}
			&::before {
				width: 20rem;
				height: 10rem;
				background-image: url(../images/bg-pattern-about-2-contact-1.svg);
				background-position: bottom right;
				top: 0;
				left: 0;
				transform: translateX(-10rem);
				@media (min-width: 640px) {
					width: 20rem;
					height: 20rem;
				}
			}
			&::after {
				width: 14.7rem;
				height: 10rem;
				background-image: url(../images/bg-pattern-home-4-about-3.svg);
				bottom: 0;
				right: 0;
				@media (min-width: 1200px) {
					transform: translateX(16.5rem);
				}
			}
		}

		&__intro {
			margin-bottom: 4.8rem;
			text-align: center;
		}

		.director-cards {
			display: grid;
			row-gap: 2.4rem;
			max-width: 40rem;
			margin: 0 auto;
			@media (min-width: 768px) {
				max-width: none;
				column-gap: 1.1rem;
				row-gap: 4.8rem;
				grid-template-columns: repeat(2, 1fr);
			}
			@media (min-width: 960px) {
				column-gap: 3rem;
				grid-template-columns: repeat(3, 1fr);
			}
		}

		.director-card {
			text-align: center;
			position: relative;
			padding-bottom: 2.8rem;

			&__content {
				background-color: var(--color-sacramento-state-green);
				padding: 3.2rem 0 5.6rem;
				position: relative;

				&__avatar {
					width: 9.8rem;
					height: 9.8rem;
					display: inline-flex;
					align-items: center;
					border-radius: 50%;
					border: 2px solid #C4FFFE;
					margin-bottom: 1.4rem;

					img {
						width: 100%;
						border-radius: 50%;
					}
				}

				&__avatar,
				&__name,
				&__title {
					opacity: 1;
					transition: 700ms ease-in-out opacity;
				}

				&__bio {
					position: absolute;
					top: 0;
					bottom: 0;
					background-color: var(--color-sacramento-state-green);
					padding: 3.5rem 4rem 0;
					@media (min-width: 768px) {
						padding: 3.5rem 2.3rem 0;
					}
					@media (min-width: 1160px) {
						padding: 3.5rem 4.8rem 0;
					}

					&__quote {
						margin-top: .8rem;
						margin-bottom: 2.4rem;
					}

					&__socials {
						width: 6rem;
						align-items: center;
						display: inline-flex;
						justify-content: space-between;
					}
				}
			}

			&__switcher {
				position: absolute;
				bottom: 0;
				left: 50%;
				outline: none;
				padding: 2rem;
				cursor: pointer;
				border-radius: 50%;
				align-items: center;
				display: inline-flex;
				justify-content: center;
				transform: translateX(-50%) rotate(90deg);
				background-color: var(--color-light-coral);
				transition: var(--transition) background-color, var(--transition) transform;
				&:hover {
					background-color: var(--color-rapture-blue);
				}
			}
		}
		.director-card.active {
			.director-card__switcher {
				transform: translateX(-50%) rotate(225deg);
				background-color: var(--color-rapture-blue);
				&:hover {
					background-color: var(--color-light-coral);
				}
			}

			.director-card__content__avatar,
			.director-card__content__name,
			.director-card__content__title {
				opacity: 0;
			}
		}
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	// Clients section
	.clients {
		text-align: center;
		background-color: var(--color-sacramento-state-green);

		.container {
			position: relative;
			padding: 8.8rem 0;
			@media (min-width: 700px) {
				padding: 10rem 0;
				max-width: 144rem;
				margin: 0 auto;
			}
			@media (min-width: 1080px) {
				padding: 14rem 0;
			}

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 10rem;
				height: 10rem;
				background-image: url(../images/bg-pattern-about-4.svg);
				background-position: bottom right;
				@media (min-width: 700px) {
					width: 20rem;
				}
				@media (min-width: 1080px) {
					height: 20rem;
				}
			}
		}

		&__intro {
			margin-bottom: 6.4rem;
			@media (min-width: 700px) {
				margin-bottom: 4.8rem;
			}
		}

		&__list {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: 36rem;
			@media (min-width: 700px) {
				height: auto;
				padding: 0 3.9rem 0 4rem;
				flex-direction: row;
				max-width: 111rem;
				margin: 0 auto;
			}
			@media (min-width: 1160px) {
				padding: 0;
			}

			.client-logo {
				display: flex;

				&:nth-child(1) {
					width: 14.656rem;
					@media (min-width: 700px) {
						width: 10.3rem;
					}
					@media (min-width: 1080px) {
						width: 16.5rem;
					}
				}				
				&:nth-child(2) {
					width: 16.221rem;
					@media (min-width: 700px) {
						width: 11.4rem;
					}
					@media (min-width: 1080px) {
						width: 18.4rem;
					}
				}
				&:nth-child(3) {
					width: 15.937rem;
					@media (min-width: 700px) {
						width: 11.2rem;
					}
					@media (min-width: 1080px) {
						width: 18rem;
					}
				}
				&:nth-child(4) {
					width: 14.656rem;
					@media (min-width: 700px) {
						width: 10.3rem;
					}
					@media (min-width: 1080px) {
						width: 16.5rem;
					}
				}
				&:nth-child(5) {
					width: 8.68rem;
					@media (min-width: 700px) {
						width: 6.1rem;
					}
					@media (min-width: 1080px) {
						width: 9.8rem;
					}
				}

				img { width: 100%; }
			}
		}
	}
</style>