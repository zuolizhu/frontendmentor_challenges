<script>
  import { fly, fade } from 'svelte/transition';
  let picked = false;
  let housePicked = false;
  let currentPicking = {};
  let theHousePicking = {};
  let showRoundResult = false;
  let result = 'you win';

  const PICKINGS = [
    {
      name: 'paper',
      svgUrl: '../images/icon-paper.svg',
      beats: 'rock'
    },
    {
      name: 'scissors',
      svgUrl: '../images/icon-scissors.svg',
      beats: 'paper'
    },
    {
      name: 'rock',
      svgUrl: '../images/icon-rock.svg',
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
    console.log('The house is picking, please wait');

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
    console.log('+1');
  }

  function decrementScore() {
    result = 'you lose';
    console.log('-1');
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
  }
</script>


<div class="pickings">
  {#if picked}
  <div class="comparison-container">
    <div class="youpicked">
      <div class="picking picking--{currentPicking.name}">
        <div class="picking__inner">
          <img class="picking-icon" src="{currentPicking.svgUrl}" alt="picking icon">
        </div>
      </div>
      <p class="t-picked picked">You Picked</p>
    </div>
    <div class="housepicked">
      {#if housePicked}
      <div class="picking picking--{theHousePicking.name}">
        <div class="picking__inner">
          <img class="picking-icon" src="{theHousePicking.svgUrl}" alt="picking icon">
        </div>
      </div>
      {:else}
        <div class="picking-waiting"></div>
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
  margin: 10.5rem auto 0;
  row-gap: 1.534rem;
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

.picking-icon {
  position: relative;
  z-index: 2;
}


.comparison-container {
  margin-top: 9.8rem;
  width: 100%;
  padding-left: 2.9rem;
  padding-right: 2.1rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-between;
}

.youpicked {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.youpicked .picked {
  margin-top: 1.7rem;
}

.housepicked {
  width: 14.5rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.housepicked .picked {
  margin-top: 1.7rem;
}

.picking-waiting {
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .10);
  margin-bottom: 1.168rem;
}

.round-result {
  text-align: center;
  margin-top: 6.2rem;
}

.round-result__result {
  margin-bottom: 1.6rem;
}

</style>