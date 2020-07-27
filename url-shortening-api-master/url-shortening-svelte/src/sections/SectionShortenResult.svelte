<script>
  export let Links;
</script>

<section class="shorten-result">
  <div class="container">
    <h2 class="sr-only">Shorten result section</h2>
    
    {#if Links.length > 0}
    <div class="links">
      {#each Links as link (link)}
        <div class="link-container">
          <p class="link t-link t-link--original" current={link.originalLink}>{link.originalLink}</p>
          <p class="link link--shorten t-link t-link--shorten" current={link.shortenLink}>{link.shortenLink}</p>
          <button class="button button--copy copy-button">Copy</button>
        </div>
      {/each}
    </div>
    {/if}
  </div>
</section>

<style type="text/scss">
  .shorten-result {
    background-color: var(--color-gray-blue);
    padding-bottom: 12.6rem;
  }

  .container {
    padding: 0 2.4rem;
    max-width: 111rem;
    margin: 0 auto;
    @media (min-width: 1160px) {
      padding: 0;
    }
  }
  .links {
    padding-top: 2.4rem;
  }

  .link-container {
    width: 100%;
    background-color: var(--color-white);
    border-radius: .5rem;
    padding: 1.6rem 2.4rem 1.6rem 3.2rem;
    @media (min-width: 768px) {
      display: inline-flex;
      align-items: center;
    }
    &:not(:last-of-type) {
      margin-bottom: 1.6rem;
    }
  }
  

  .link {
    &--shorten {
      @media (min-width: 768px) {
        margin-left: auto;
      }
    }
  }
  .copy-button {
    margin-top: .8rem;
    @media (min-width: 768px) {
      margin-top: 0;
      margin-left: 2.4rem;
    }
  }
</style>