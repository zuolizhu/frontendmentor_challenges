<script>
  import Socials from './Socials.svelte';
</script>

<footer class="footer">
  <div class="container">
    <a href="./index.html" class="branding">
      <span class="sr-only">footer logo</span>
      <img src="../images/logo-bookmark-footer.svg" alt="footer logo">
    </a>
    <ul class="footer-menu">
      <li class="footer-menu__item">
        <a class="t-footer-menu__item" href="./">Features</a>
      </li>
      <li class="footer-menu__item">
        <a class="t-footer-menu__item" href="./">Pricing</a>
      </li>
      <li class="footer-menu__item">
        <a class="t-footer-menu__item" href="./">Contact</a>
      </li>
    </ul>
    <Socials />
  </div>
</footer>

<style type="text/scss">
  .footer {
    text-align: center;
    background-color: var(--color-very-dark-blue);
    padding: 4rem 0 4.3rem;
    @media (min-width: 720px) {
      padding: 3.2rem 0 3.1rem;
    }
  }

  .container {
    @media (min-width: 720px) {
      display: inline-flex;
      width: 100%;
      justify-content: flex-start;
      padding: 0 3.2rem;
      max-width: 111rem;
      margin: 0 auto;
    }
    @media (min-width: 1160px) {
      padding: 0;
    }
  }

  .footer-menu {
    margin: 3rem auto 4.7rem;

    @media (min-width: 720px) {
      display: inline-flex;
      width: 29.6rem;
      margin: 0 auto 0 6.3rem;
      justify-content: space-between;
    }

    &__item:not(:last-of-type) {
      margin-bottom: 2.7rem;
      @media (min-width: 720px) {
        margin-bottom: 0;
      }
    }

    &__item:nth-child(2) {
      margin-left: -.5rem;
    }
  }

  
</style>