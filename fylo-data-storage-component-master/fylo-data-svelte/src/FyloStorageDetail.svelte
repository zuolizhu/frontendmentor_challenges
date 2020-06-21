<script>
  import { onMount } from 'svelte';

  let randNumber = 0;
  let prorgess = `0%`;
  let leftGB = 0;
  let usedGB = 0;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  setTimeout(() => {
    randNumber = getRandomInt(10, 99);
    prorgess = `${randNumber}%`;
    usedGB = parseInt(1000 * (randNumber/100))
    leftGB = 1000 - usedGB;
  }, 3600);

</script>

<section>
<h2 class="sr-only">Fylo storage detail</h2>
{#if usedGB > 0}
  <p class="t-body1 t-pale-blue info">You’ve used <span class="t-bold">{ usedGB } GB</span> of your storage</p>
{:else}
  <p class="t-body1 t-pale-blue info">Calculating, please wait...</p>
{/if}
<div class="progress-bar-container">
  <div class="progress-bar" style="--progress: { prorgess }">
    <div class="progress-bar-dot"></div>
  </div>
</div>
<div class="status">
  <p class="t-body2 t-bold t-pale-blue">0 GB</p>
  <p class="t-body2 t-bold t-pale-blue">1000 GB</p>
</div>

<div class="status-number">
  <p class="t-number">{ leftGB }</p>
  <p class="t-unit">GB LEFT</p>
</div>

</section>

<style>
  section {
    background-color: var(--color-dark-blue);
    border-radius: 1rem;
    padding: 3.2rem 3.2rem 5.2rem;
    text-align: center;
    position: relative;
    max-width: 67rem;
    box-shadow: 0 7.5rem 10rem -3rem rgba(0, 0, 0, .25);
  }
  @media (min-width: 960px) {
    section {
      min-width: 54rem;
      margin-left: 3rem;
      padding: 4rem 4rem 4rem 3.9rem;
      max-height: 15.4rem;
    }
  }

  .status {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
  }
  .progress-bar-container {
    height: 2rem;
    width: 100%;
    background-color: var(--color-very-dark-blue);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    margin-top: 1.6rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 960px) {
    .progress-bar-container {
      margin-bottom: .3rem;
    }
  }

  .progress-bar {
    margin-left: .3rem;
    width: var(--progress);
    height: 1.4rem;
    border-radius: 1rem;
    background: linear-gradient(90deg, hsl(6, 100%, 80%), hsl(335, 100%, 65%));
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    transition: var(--transition) width;
  }
  .progress-bar-dot {
    background-color: var(--color-white);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: .2rem; 
  }


  @media (min-width: 960px) {
    .info {
      text-align: left;
    }
  }


  .status-number {
    background-color: var(--color-white);
    width: 18.3rem;
    border-radius: 1rem;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    display: flex;
    align-items: center;
    padding: 1.6rem 2.4rem;
    text-align: center;
  }
  @media (min-width: 960px) {
    .status-number {
      border-radius: 1rem 1rem 0 1rem;
      top: 0;
      right: 4rem;
      bottom: auto;
      left: auto;
      transform: translate(0, -4.7rem);
    }
    .status-number:after {
      content: '';
      width: 2.266rem;
      height: 2.266rem;
      background-color: var(--color-white);
      position: absolute;
      bottom: 0;
      right: 0;
      clip-path: polygon(100% 0, 0 0, 100% 100%);
      transform: translateY(2.2rem);
    }
  }

  .status-number p:first-child {
    margin-right: .8rem;
  }
</style>