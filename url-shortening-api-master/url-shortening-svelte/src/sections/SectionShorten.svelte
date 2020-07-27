<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let link = '';
  let errorMsg = '';

  function shorten(event) {
    // prevent empty link submit
    if (link === '') {
      event.target.parentNode.children[0].children[1].classList.add('error');
      errorMsg = 'Please add a link';
      return;
    }
    // validate url
    if (!validURL(link)) {
      event.target.parentNode.children[0].children[1].classList.add('error');
      errorMsg = 'Please add an valid link';
      return;
    }
    // POST url to API
    const data = { url: link };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch('https://rel.ink/api/links/', options)
      .then(res => res.json())
      .then(data => {
        // Sending result to upper component
        dispatch('shortenlink', {
          originalLink: link,
          shortenLink: `https://rel.ink/${data.hashid}`
        });
      })
      .then(() => {
        // Clear input area
        link = '';
      })
      .catch(error => console.log('Error:', error)); 
  }

  function validURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  function removeError(event) {
    if (!event.target.classList.contains('error')) return;
    errorMsg = '';
    event.target.classList.remove('error');
  }
</script>
<section class="shorten">
  <h2 class="sr-only">Shorten function section</h2>
  <div class="container">
    <div class="shorten-container">
      <div class="input-group">
        <label class="sr-only" for="link-input-field">input link downbelow</label>
        <input on:focus={removeError}
        id="link-input-field" class="link-input" bind:value={link} placeholder="Shorten a link here...">
        {#if errorMsg.length > 0}
          <p class="error-msg">{errorMsg}</p>
        {/if}
      </div>
      <button on:click={shorten}
      class="button button--shorten">Shorten It!</button>
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
      align-items: flex-start;
      width: 100%;
      background-image: url(../images/bg-shorten-desktop.svg);
    }
    @media (min-width: 960px) {
      padding: 5.2rem 6.5rem 5.2rem 6.4rem;
    }
  }
  .input-group {
    position: relative;
    margin-bottom: 1.6rem;
    @media (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 2.4rem;
      width: 100%;
    }
  }

  .link-input {
    width: 100%;
    border: 3px solid var(--color-white);
    border-radius: .5rem;
    padding: .3rem 1.3rem;
    font-size: 1.6rem;
    line-height: 3.6rem;
    letter-spacing: .12px;
    font-weight: var(--weight-medium);
    outline: none;
    transition: var(--transition) border-color, var(--transition) color;
    @media (min-width: 768px) {
      padding: 1.3rem 3.05rem .9rem;
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
    transition: var(--transition) color;
    @media (min-width: 768px) {
      font-size: 2rem;
      letter-spacing: .15px;
    }
  }

  .error-msg {
    color: var(--color-red);
    font-weight: var(--weight-medium);
    font-style: italic;
    animation-name: showError;
    animation-duration: 1s;
    margin-top: .4rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: .08px;
    @media (min-width: 960px) {
      font-size: 1.6rem;
      line-height: 1.8rem;
      letter-spacing: .11px;
      position: absolute;
      bottom: -2.6rem;
      margin-top: 0;
    }
  }
  

  @keyframes showError {
    from {opacity: 0;}
    to {opacity: 1;}
  }
</style>