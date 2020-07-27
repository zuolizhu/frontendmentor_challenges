<script>
  export let Links;

  function handleCopy(event) {
    const copyLink = event.target.value;
    navigator.clipboard.writeText(copyLink)
    .then(function() {
      console.log('copied: ', copyLink);
    }, function() {
      console.log('error during copying');
    })
    .then(function() {
      event.target.classList.add('copied');
      event.target.textContent = 'Copied!';
      setTimeout(() => {
        event.target.classList.remove('copied');
        event.target.textContent = 'Copy';
      }, 3000);
    })
  }

</script>

<section class="shorten-result">
  <div class="container">
    <h2 class="sr-only">Shorten result section</h2>
    
    {#if Links.length > 0}
    <div class="links">
      {#each Links as link (link)}
        <div class="link-container">
          <p class="link t-link link--original t-link--original" current={link.originalLink}>{link.originalLink}</p>
          <p class="link link--shorten t-link t-link--shorten" current={link.shortenLink}>{link.shortenLink}</p>
          <button
          on:click={handleCopy}
          value={link.shortenLink}
          class="button button--copy copy-button">Copy</button>
        </div>
      {/each}
    </div>
    {/if}
  </div>
</section>

<style type="text/scss">
  .shorten-result {
    background-color: var(--color-gray-blue);
      padding-bottom: 8.6rem;
    @media (min-width: 768px) {
      padding-bottom: 12.6rem;
    }
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
    position: relative;
    padding: .6rem 1.6rem 1.6rem;
    @media (min-width: 768px) {
      padding: 1.6rem 2.4rem 1.6rem 3.2rem;
      display: inline-flex;
      align-items: center;
    }
    &:not(:last-of-type) {
      margin-bottom: 2.4rem;
      @media (min-width: 768px) {
        margin-bottom: 1.6rem;
      }
    }
  }
  .link-container::after {
    @media (max-width: 767px) {
      content: '';
      width: 100%;
      position: absolute;
      height: .1rem;
      background-color: var(--color-grayish-violet);
      opacity: .25;
      top: 4.8rem;
      left: 0;
    }
    @media (min-width: 768px) {
      content: none;
    }
  }
  

  .link {
    &--original {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      @media (max-width: 767px) {
        margin-bottom: 1.3rem;
      }
      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }
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