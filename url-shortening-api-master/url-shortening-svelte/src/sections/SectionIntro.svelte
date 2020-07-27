<section class="intro">
  <div class="container">
    <div class="intro__image">
      <img src="./images/illustration-working.svg" alt="intro working hard">
    </div>
    <div class="intro__content">
      <h1 class="t-h1">More than just shorter links</h1>
      <div class="t-intro-body intro__content__body">Build your brand’s recognition and get detailed insights 
      on how your links are performing.</div>
      <a class="button button--getstarted" href="./">Get Started</a>
    </div>
  </div>
</section>

<style type="text/scss">
  .intro {
    position: relative;
    padding-top: 40rem;
    padding-bottom: 8.7rem;
    @media (min-width: 680px) {
      padding-top: 10rem;
      padding-bottom: 22.2rem;
    }
    @media (min-width: 880px) {
       padding-top: 14.6rem;
    }
    @media (min-width: 960px) {
      padding-bottom: 13.8rem;
    }

    .container {
      padding: 0 2.4rem;
      max-width: 111rem;
      margin: 0 auto;
      @media (min-width: 1160px) {
        padding: 0;
      }
    }

    &__image {
      position: absolute;
      top: 3.7rem;
      width: 50rem;
      height: 33rem;
      @media (min-width: 520px) {
        left: 50%;
        transform: translateX(-50%);
      }
      @media (min-width: 680px) {
        transform: translateX(0);
        width: 73.3rem;
        height: 48.2rem;
        top: 2rem;
        left: 50%;
      }
      @media (min-width: 880px) {
        top: 7.7rem;
        left: 57.65%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }

    &__content {
      text-align: center;
      @media (min-width: 680px) {
        text-align: left;
        width: 50%;
      }
      @media (min-width: 960px) {
        width: 100%;
        max-width: 61.5rem;
      }
      &__body {
        margin: 1.5rem 0 3rem;
        @media (min-width: 680px) {
          margin: 0 0 3.5rem;
        }
      }
    }
  }

</style>