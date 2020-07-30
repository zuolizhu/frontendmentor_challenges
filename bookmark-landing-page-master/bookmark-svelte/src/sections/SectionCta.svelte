<script>
  let validEmail = '';
  let email;

  const removeErrorStatus = () => validEmail = '';

  function contactSubmit(event) {
    const formElements = event.target.childNodes;
    if (!validateEmail(email)) {
      validEmail = ' error';
    } else {
      email = '';
    }
  }

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
</script>

<section class="cta">
  <div class="container">
    <p class="t-cta-promo">35,000+ already joined</p>
    <h2 class="t-h2 t-h2--white cta__heading">Stay up-to-date with what we’re doing</h2>
    <form on:submit|preventDefault={contactSubmit}
    class="contact-form">
      <div class="contact-form__input-group{validEmail}">
        <label for="email" class="sr-only">Email</label>
        <input on:focus={removeErrorStatus}
        class="contact-form__input-field" bind:value={email} type="text" name="email" id="email" placeholder="Enter your email address">
      </div>
      <input class="button button--contact" type="submit" value="Contact Us">
    </form>
  </div>
</section>

<style type="text/scss">
  .cta {
    text-align: center;
    background-color: var(--color-soft-blue);
    padding: 6rem 0;
    @media (min-width: 768px) {
      padding: 5.8rem 0 7.4rem;
    }

    &__heading {
      line-height: 2.8rem;
      @media (min-width: 768px) {
        line-height: 4rem;
        margin-top: 2.4rem;
      }
    }
  }

  .container {
    max-width: 44.2rem;
    margin: 0 auto;
    padding: 0 3.2rem;
    @media (min-width: 768px) {
      padding: 0;
    }
  }

  .contact-form {
    margin-top: 3.2rem;
    @media (min-width: 768px) {
      margin-top: 3.6rem;
      display: inline-flex;
      width: 100%;
    }

    &__input-field {
      padding: .8rem 1.8rem;
      width: 100%;
      border: 2px solid var(--color-white);
      border-radius: .5rem;
      font-size: 1.4rem;
      line-height: 2.8rem;
      letter-spacing: .25px;
      color: var(--color-very-dark-blue);
      outline: none;
      transition: var(--transition) border-color, 
        var(--transition) background-image;
    }
    &__input-field::placeholder {
      font-size: 1.4rem;
      line-height: 2.8rem;
      letter-spacing: .25px;
      font-weight: var(--weight-regular);
      color: var(--color-very-dark-blue);
      opacity: .25;
    }

    &__input-group {
      margin-bottom: 1.6rem;
      @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 1.6rem;
        width: 100%;
      }
    }

    &__input-group.error {
      position: relative;
      margin-bottom: 3.8rem;
      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }

    &__input-group.error .contact-form__input-field { 
      border-color: var(--color-soft-red);
      background-image: url(../images/icon-error.svg);
      background-repeat: no-repeat;
      color: var(--color-soft-red);
      background-position: right 1.6rem center;
      border-radius: .5rem .5rem 0 0;
    }
    
    &__input-group.error::after {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -2.2rem;
      content: 'Whoops, make sure it’s an email';
      padding: .4rem 0 .6rem;
      background-color: var(--color-soft-red);
      text-align: left;
      padding-left: 1.2rem;
      font-size: 1rem;
      color: var(--color-white);
      line-height: 1.2rem;
      letter-spacing: .25px;
      font-weight: var(--weight-medium);
      font-style: italic;
      border-radius: 0 0 .5rem .5rem;
      animation-name: fadeInError;
      animation-duration: .3s;
    }
  }

  @keyframes fadeInError {
    from { opacity: 0; }
    to { opacity: 1; }
  }

</style>