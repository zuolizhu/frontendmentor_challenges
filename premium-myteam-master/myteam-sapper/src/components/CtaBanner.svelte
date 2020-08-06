<section class="cta">
  <div class="container">
    <div class="content-wrap">
      <h2 class="t-h2 t-sacramento-state-green cta__text">Ready to get started?</h2>
      <a href="./contact" class="button button--contact button--contact--cta t-sacramento-state-green">contact us</a>
    </div>
  </div>
</section>

<style lang="scss">
  .cta {
    background-color: var(--color-light-coral);
    text-align: center;
    .container {
      width: 100%;
      padding: 8.3rem 2.4rem;
      background-repeat: no-repeat;
      background-position: bottom -2rem left;
      background-image: url(../images/bg-pattern-home-6-about-5.svg);
      @media (min-width: 520px) {
        padding: 7.5rem 0;
      }
      @media (min-width: 1300px) {
        max-width: 144rem;
        padding: 7.6rem 26rem 7.6rem 26.3rem;
        margin: 0 auto;
        background-position: bottom left;
      }
    }
    .content-wrap {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      @media (min-width: 768px) {
        flex-flow: row nowrap;
        justify-content: space-between;
        max-width: 57.3rem;
        margin: 0 auto;
      }
      @media (min-width: 960px) {
        max-width: 91.7rem;
      }
      .cta__text {
        margin-bottom: 2.4rem;
        @media (min-width: 768px) {
          margin-bottom: 0;
        }
      }
    }
  }
</style>