<script>
  import Score from './components/Score.svelte';
  import Selections from './components/Selections.svelte';
  import Rules from './components/Rules.svelte';

</script>

<main class="main">
	<Score/>
  <Selections/>
  <Rules/>
</main>

<style>
  .main {
    padding: 3.2rem 0 5.6rem;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
</style>