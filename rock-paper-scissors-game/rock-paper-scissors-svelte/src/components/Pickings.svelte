<script>
  import { fly, fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  
  let picked = false;
  let housePicked = false;
  let currentPicking = {};
  let theHousePicking = {};
  let showRoundResult = false;
  let result = '';

  const dispatch = createEventDispatcher();

  const PICKINGS = [
    {
      name: 'paper',
      svgUrl: './images/icon-paper.svg',
      beats: 'rock'
    },
    {
      name: 'scissors',
      svgUrl: './images/icon-scissors.svg',
      beats: 'paper'
    },
    {
      name: 'rock',
      svgUrl: './images/icon-rock.svg',
      beats: 'scissors'
    }
  ];

  function handlePick() {
    const clickedPickingName = this.dataset.pickingName;
    const yourPicking = PICKINGS.find(picking => picking.name === clickedPickingName);
    currentPicking = yourPicking;
    picked = true;
    
    roundStart(yourPicking);
  }

  async function roundStart(yourPicking) {
    const housePicking = await randomPick();
    
    theHousePicking = housePicking;
    housePicked = true;
    
    const yourWinner = isWinner(yourPicking, housePicking);
    const houseWinner = isWinner(housePicking, yourPicking);

    roundResult(yourWinner, houseWinner);
  }

  function roundResult(yourWinner, houseWinner) {
    if (!yourWinner && !houseWinner) result = 'tie';
    if (yourWinner && !houseWinner) incrementScore();
    if (!yourWinner && houseWinner) decrementScore();
    
    showRoundResult = true;
  }

  function incrementScore() {
    result = 'you win';
    updateScore(1);
  }

  function decrementScore() {
    result = 'you lose';
    updateScore(-1);
  }

  function isWinner(yourPicking, housePicking) {
    return yourPicking.beats === housePicking.name;
  }

  function randomPick() {
    return new Promise(resolve => {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * PICKINGS.length);
        resolve(PICKINGS[randomIndex]);
      }, 2000);
    })
  }

  function handlePlayagain() {
    picked = false;
    housePicked = false;
    showRoundResult = false;
    result = '';
  }

  function updateScore(score) {
    dispatch('updateScore', {
			score: score
		});
  }
</script>


<div class="pickings">
  {#if picked}
  <div class="comparison-container{showRoundResult === true ? ' expand': ''}">
    <div class="youpicked{result === 'you win' ? ' win':''}">
      <div class="picking picking--{currentPicking.name}">
        <div class="picking__inner">
          <img class="picking-icon" src="{currentPicking.svgUrl}" alt="picking icon">
        </div>
      </div>
      <p class="t-picked picked">You Picked</p>
    </div>
    <div class="housepicked{result === 'you lose' ? ' win':''}">
      {#if housePicked}
      <div class="picking picking--{theHousePicking.name}">
        <div class="picking__inner">
          <img class="picking-icon" src="{theHousePicking.svgUrl}" alt="picking icon">
        </div>
      </div>
      {:else}
        <div class="picking-waiting">
          <div class="loadingio-spinner-ripple-0ww0d4btxgq">
            <div class="ldio-to0kafuso">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      {/if}
      <p class="t-picked picked">The House Picked</p>
    </div>
  </div>
  {:else}
    <div class="pickings-container">
    {#each PICKINGS as picking}
      <div
        on:click={handlePick}
        data-picking-name="{picking.name}"
        class="picking picking--{picking.name}">
        <div class="picking__inner">
          <img class="picking-icon" src="{picking.svgUrl}" alt="picking icon">
        </div>
      </div>
    {/each}
    </div>
  {/if}
  
  {#if showRoundResult}
  <div transition:fly="{{ y: 200, duration: 300 }}" class="round-result">
    <h2 class="t-round-result round-result__result">{result}</h2>
    <button
      on:click={handlePlayagain}
      class="btn btn--playagain">Play Again</button>
  </div>
  {/if}

</div>

<style>

.pickings {
  width: 100%;
}

.pickings-container {
  width: 31.2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: auto;
  margin-right: auto;
  margin-top: 10.5rem;
  row-gap: 1.534rem;
  background-repeat: no-repeat;
  background-image: url(../images/bg-triangle-mobile.svg);
  background-position: top 5.75rem left 54%;
}
@media (min-width: 768px) {
  .pickings-container  {
    width: 47.6rem;
    row-gap: 2.4rem;
    margin-top: 6.4rem;
    background-image: url(../images/bg-triangle.svg);
    background-position: left 52% top 9.2rem;
  }
}

.picking {
  width: 13rem;
  height: 13.3rem;
  border-radius: 50%;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-2) height;
}
@media (min-width: 768px) {
  .picking {
    width: 19.8rem;
    height: 20.3rem;
  }
}

.picking::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 12.678rem;
  border-radius: 50%;
}
@media (min-width: 768px) {
  .picking::before {
    height: 19.4rem;
  }
}

.picking::after {
  content: '';
  position: absolute;
  width: 16.2rem;
  height: 17rem;
  background-color: var(--color-white);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transform: scale(.7);
  transition: var(--transition) opacity, var(--transition) transform;
}
@media (min-width: 768px) {
  .picking::after {
    width: 25.2rem;
    height: 24.8rem;
  }
}

.picking:hover {
  height: 12.678rem;
}
@media (min-width: 768px) {
  .picking:hover {
    height: 19.4rem;
  }
}

.picking:hover::after {
  opacity: .05;
  transform: scale(1);
}

.picking--rock {
  background-color: #9D1634;
  grid-column: 1/3;
  justify-self: center;
}
.picking--rock::before {
  background-image: linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%));
}

.picking--paper {
  background-color: #2A45C2;
  justify-self: start;
}
.picking--paper::before {
  background-image: linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));
}

.picking--scissors {
  background-color: #C76C1B;
  justify-self: end;
}
.picking--scissors::before {
  background-image: linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%));
}

.picking__inner {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: #BABFD4;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -.3rem;
  transition: var(--transition-2) height, var(--transition-2) margin-top;
}
@media (min-width: 768px) {
  .picking__inner {
    width: 15.2rem;
    height: 15.2rem;
    margin-top: -.7rem;
  }
}

.picking:hover .picking__inner {
  height: 9.41rem;
  margin-top: 0;
}
@media (min-width: 768px) {
  .picking:hover .picking__inner {
    height: 14.4rem;
  }
}

.picking__inner::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  width: 9.931rem;
  height: 9.41rem;
  background-image: linear-gradient(0deg, #F3F3F3 0%, #DADADA 98%);
  bottom: 0;
}
@media (min-width: 768px) {
  .picking__inner::before {
    width: 15.2rem;
    height: 14.4rem;
  }
}

.picking-icon {
  position: relative;
  z-index: 2;
}

/* inner icons micro adjustment */
.picking--scissors .picking-icon {
  transform: scale(.89) translateX(-.3rem) translateY(.2rem);
}
@media (min-width: 768px) {
  .picking--scissors .picking-icon {
    transform: scale(1.37) translateY(.3rem) translateX(-.3rem);
  }
}



.picking--paper .picking-icon {
  transform: scale(.89) translateY(.25rem);
}
@media (min-width: 768px) {
  .picking--paper .picking-icon {
    transform: scale(1.37) translateY(.3rem) translateX(-.2rem);
  }
}

.picking--rock .picking-icon {
  transform: scale(.89) translateY(.4rem);
}
@media (min-width: 768px) {
  .picking--rock .picking-icon {
    transform: scale(1.37) translateY(.4rem);
  }
}


.comparison-container {
  margin-top: 10.5rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 32.5rem;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .comparison-container {
    max-width: 62.7rem;
    align-items: flex-start;
    margin-top: 7.2rem;
    transition: var(--transition) max-width;
  }
  .comparison-container.expand {
    max-width: 77rem;
  }
}

.youpicked {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
@media (min-width: 768px) {
  .youpicked {
    flex-flow: column-reverse nowrap;
  }
}

.housepicked {
  width: 14.5rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
@media (min-width: 768px) {
  .housepicked {
    flex-flow: column-reverse nowrap;
    width: 23.1rem;
  }
}

.youpicked .picked,
.housepicked .picked {
  margin-top: 1.7rem;
}
@media (min-width: 768px) {
  .youpicked .picked,
  .housepicked .picked {
    margin-top: 0;
    margin-bottom: 6.3rem;
  }
}

.picking-waiting {
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .10);
  margin-bottom: 1.168rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 768px) {
  .picking-waiting {
    width: 19.8rem;
    height: 19.8rem;
    margin-bottom: 0;
  }
}

.round-result {
  text-align: center;
  margin-top: 6.2rem;
  margin-bottom: 5.2rem;
}
@media (min-width: 768px) {
  .round-result {
    margin-top: -17.5rem;
    margin-bottom: 0;
    position: relative;
    z-index: 10;
  }
}

.round-result__result {
  margin-bottom: 1.6rem;
}


/* loading animation */
@keyframes ldio-to0kafuso {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
    
  }
  100% {
    width: 10rem;
    height: 10rem;
    opacity: 0;
  }
}
@media (min-width: 768px) {
  @keyframes ldio-to0kafuso {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
      
    }
    100% {
      width: 19.8rem;
      height: 19.8rem;
      opacity: 0;
    }
  }

}

.ldio-to0kafuso div {
  position: absolute;
  border-width: 1rem;
  border-style: solid;
  opacity: 1;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ldio-to0kafuso 2s cubic-bezier(0,0.2,0.8,1) infinite;
}
@media (min-width: 768px) {
  .ldio-to0kafuso div {
    border-width: 2rem;
  }
}

.ldio-to0kafuso div:nth-child(1) {
  border-color: hsl(349, 70%, 56%);
}

.ldio-to0kafuso div:nth-child(2) {
  border-color: hsl(230, 89%, 65%);
  animation-delay: -0.5s;
}

.ldio-to0kafuso div:nth-child(3) {
  border-color: hsl(40, 84%, 53%);
  animation-delay: -1s;
}

.loadingio-spinner-ripple-0ww0d4btxgq {
  width: 11rem;
  height: 11rem;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
}
@media (min-width: 768px) {
  .loadingio-spinner-ripple-0ww0d4btxgq {
    width: 19.8rem;
    height: 19.8rem;
  }
}
.ldio-to0kafuso {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}
.ldio-to0kafuso div { box-sizing: content-box; }


.youpicked.win,
.housepicked.win {
  position: relative;
}
.youpicked.win::before,
.housepicked.win::before {
  content: '';
  position: absolute;
  width: 28.8rem;
  height: 28.4rem;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  background-image: url(../images/bg-win-mobile.svg);
  animation: fadeIn 500ms cubic-bezier(0,0.2,0.8,1);
}
@media (min-width: 768px) {
  .youpicked.win::before,
  .housepicked.win::before {
    width: 73rem;
    height: 71.8rem;
    background-image: url(../images/bg-win-desktop.svg);
    top: 67%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.67);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@media (min-width: 768px) {
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(0.67);
    }
  }

}

</style>
