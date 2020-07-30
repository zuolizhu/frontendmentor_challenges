<section class="intro">
  <div class="intro__image">
    <img src="./images/illustration-hero.svg" alt="intro">
  </div>
  <div class="container">
    <div class="intro__content">
      <h1 class="t-h1">A Simple Bookmark Manager</h1>
      <p class="t-body1 intro__content__body">A clean and simple interface to organize your favourite websites. Open a new 
      browser tab and see your sites load instantly. Try it for free.</p>
      <div class="getin-buttons">
        <button class="button button--chrome">Get it on Chrome</button>
        <button class="button button--firefox">Get it on Firefox</button>
      </div>
    </div>
  </div>
</section>

<style type="text/scss">
  .intro {
    padding-top: 8rem;
    position: relative;
    @media (min-width: 768px) {
      padding-top: 11.5rem;
    }
    @media (min-width: 880px) {
      padding-top: 18.5rem;
      padding-bottom: 12.3rem;
    }
  }
  .intro::after {
    content: '';
    position: absolute;
    width: 81.067%;
    background-color: var(--color-soft-blue);
    height: 20.3rem;
    right: 0;
    top: 13.2rem;
    z-index: -2;
    border-top-left-radius: 31.65rem;
    border-bottom-left-radius: 31.65rem;
    @media (min-width: 768px) {
      height: 35.2rem;
      width: 35.764%;
      top: 10rem;
    }
    @media (min-width: 960px) {
      top: auto;
      bottom: 0;
    }
  }

  .container {
    padding: 0 3.2rem;
    max-width: 111rem;
    margin: 0 auto;
    @media (min-width: 1160px) {
      padding: 0;
    }
  }

  .intro {
    &__image {
      @media (min-width: 768px) {
        position: absolute;
        left: 50.7%;
        z-index: -1;
        top: 10.4rem;
        max-width: 67.7rem;

      }
      img {
        width: 100%;
      }
    }

    &__content {
      text-align: center;
      @media (min-width: 768px) {
        text-align: left;
        max-width: 53rem;
        width: 50%;
      }

      &__body {
        margin-top: 1.6rem;
        margin-bottom: 3.2rem;
        @media (min-width: 768px) {
          margin-top: 2.4rem;
        }
      }

      .getin-buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1.4rem;
        max-width: 40rem;
        margin: 0 auto;
        @media (min-width: 768px) {
          max-width: 34.3rem;
          margin: 0;
        }
      }
    }
  }
</style>