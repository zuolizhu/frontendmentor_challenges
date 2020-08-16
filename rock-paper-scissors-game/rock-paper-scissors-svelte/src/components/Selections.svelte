<script>
  const SELECTIONS = [
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
</script>


<div class="selections">

  <div class="selections-container">
  {#each SELECTIONS as selection}
    <div class="selection selection--{selection.name}">
      <div class="selection__inner">
        <img class="selection-icon" src="{selection.svgUrl}" alt="selection icon">
      </div>
    </div>
  {/each}
  </div>
  You Picked
  The House Picked

  You Win
  You Lose

  Play Again
</div>

<style>

.selections-container {
  width: 31.2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10.5rem auto 0;
  row-gap: 1.534rem;
}

.selection {
  width: 13rem;
  height: 13.3rem;
  border-radius: 50%;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.selection::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 12.678rem;
  border-radius: 50%;
}

.selection::after {
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

.selection:hover::after {
  opacity: .05;
  transform: scale(1);
}

.selection--rock {
  background-color: #9D1634;
  grid-column: 1/3;
  justify-self: center;
}
.selection--rock::before {
  background-image: linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%));
}

.selection--paper {
  background-color: #2A45C2;
  justify-self: start;
}
.selection--paper::before {
  background-image: linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));
}

.selection--scissors {
  background-color: #C76C1B;
  justify-self: end;
}
.selection--scissors::before {
  background-image: linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%));
}

.selection__inner {
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

.selection__inner::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  width: 9.931rem;
  height: 9.41rem;
  background-image: linear-gradient(0deg, #F3F3F3 0%, #DADADA 98%);
  bottom: 0;
}

.selection-icon {
  position: relative;
  z-index: 2;
}

</style>