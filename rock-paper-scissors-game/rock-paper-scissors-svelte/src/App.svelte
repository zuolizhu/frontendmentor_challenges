<script>
  import Score from './components/Score.svelte';
  import Pickings from './components/Pickings.svelte';
  import Rules from './components/Rules.svelte';
  import { onMount } from 'svelte';

  let score;

  function handleUpdateScore(event) {
    score = score + event.detail.score;
    localStorage.setItem('savedScore', score);
  }

  onMount(async () => {
    // init score from local storage
    const savedScore = await localStorage.getItem('savedScore');
    if (savedScore != null) score = parseInt(savedScore);
    // set to 12 by default to match the design
    else score = 12;
	});
</script>

<main class="main">
	<Score score={score} />
  <Pickings on:updateScore={handleUpdateScore} />
  <Rules/>
</main>

<style>
  .main {
    padding: 3.1rem 0 5.6rem;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    max-width: 130.2rem;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .main::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    .main {
      padding: 4.8rem 0 3.2rem;
    }
  }
</style>