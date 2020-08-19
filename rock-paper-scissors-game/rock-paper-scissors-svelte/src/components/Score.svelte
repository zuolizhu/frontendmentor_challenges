<script>
  export let score = 12;
</script>

<div class="score-board-padding">
  <div class="score-board">
    <div class="score-board__logo-container">
      <img class="score-board__logo" src="./images/logo.svg" alt="site logo">
    </div>
    <div class="score-board__number">
      <p class="t-score">Score</p>
      <p class="t-score-number">{score}</p>
    </div>
  </div>
</div>


<style>
  .score-board-padding {
    padding: 0 3.1rem;
    width: 100%;
    max-width: 70.2rem;
  }
  @media (min-width: 768px) {
    .score-board-padding {
      padding: 0;
    }
  }

  .score-board {
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: .5rem;
    justify-content: space-between;
    padding: 1.1rem 1rem 1rem 2rem;
    border: .3rem solid rgba(255, 255, 255, .29);
  }
  @media (min-width: 768px) {
    .score-board {
      border-radius: 1.5rem;
      padding: 1.6rem 2.2rem 1.6rem 2.9rem;
    }
  }

  .score-board__logo-container {
    width: 8.4rem;
    height: 4.8rem;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .score-board__logo-container {
      width: 16rem;
      height: 9.6rem;
    }
  }

  .score-board__logo {
    width: 100%;
  }

  .score-board__number {
    width: 8rem;
    display: flex;
    height: 7.2rem;
    padding: 1rem 0;
    align-items: center;
    border-radius: .4rem;
    justify-content: space-between;
    flex-flow: column nowrap;
    box-shadow: 0 .3rem .3rem 0 rgba(0,0,0,0.20);
    background-image: linear-gradient(0deg, #F3F3F3 0%, #FFFFFF 100%);
  }
  @media (min-width: 768px) {
    .score-board__number {
      width: 15rem;
      height: 11.4rem;
      border-radius: .8rem;
      padding: 1.6rem 0 1.5rem;
    }
  }
</style>