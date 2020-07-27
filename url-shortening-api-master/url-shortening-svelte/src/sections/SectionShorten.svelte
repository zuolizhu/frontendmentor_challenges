<script>
  let link = '';
</script>
<section class="shorten">
  <h2 class="sr-only">Shorten function section</h2>
  <div class="container">
    <div class="shorten-container">
      <div class="input-group">
        <label class="sr-only" for="link">input link downbelow</label>
        <input class="link-input" bind:value={link} placeholder="Shorten a link here...">
      </div>
      <button class="button button--shorten">Shorten It!</button>
    </div>
  </div>
</section>

<style type="text/scss">
  .shorten {
    background-color: var(--color-gray-blue);
    position: relative;
    z-index: 1;
  }
  .shorten::before {
    content: '';
    position: absolute;
    background-color: var(--color-white);
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    z-index: -1;
  }
  .container {
    padding: 0 2.4rem;
    max-width: 111rem;
    margin: 0 auto;
    @media (min-width: 1160px) {
      padding: 0;
    }
  }
  .shorten-container {
    background-color: var(--color-dark-violet);
    background-image: url(../images/bg-shorten-mobile.svg);
    background-position: top right;
    background-repeat: no-repeat;
    border-radius: 1rem;
    padding: 2.4rem;
    @media (min-width: 768px) {
      display: inline-flex;
      justify-content: space-between;
      width: 100%;
      background-image: url(../images/bg-shorten-desktop.svg);
    }
    @media (min-width: 960px) {
      padding: 5.2rem 6.5rem 5.2rem 6.4rem;
    }
  }
  .input-group {
    margin-bottom: 1.6rem;
    @media (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 2.4rem;
      width: 100%;
    }
  }
  .link-input {
    width: 100%;
    border: none;
    border-radius: .5rem;
    padding: .6rem 1.6rem;
    font-size: 1.6rem;
    line-height: 3.6rem;
    letter-spacing: .12px;
    font-weight: var(--weight-medium);
    outline: none;
    @media (min-width: 768px) {
      padding: 1.6rem 3.2rem 1.2rem;
      font-size: 2rem;
      letter-spacing: .15px;
      border-radius: 1rem;
    }
  }
  .link-input::placeholder {
    font-size: 1.6rem;
    line-height: 3.6rem;
    letter-spacing: .12px;
    font-weight: var(--weight-medium);
    font-family: 'Poppins', sans-serif;
    color: var(--color-very-dark-blue);
    opacity: .5;
    @media (min-width: 768px) {
      font-size: 2rem;
      letter-spacing: .15px;
    }
  }
</style>