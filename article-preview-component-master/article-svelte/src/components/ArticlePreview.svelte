<script>
  import { slide } from 'svelte/transition';
  let active = false;

  function toggleShare() {
    active = !active;
  }
</script>
<article class="article">
  <div class="article__image">
    <img src="../images/drawers.jpg" alt="drawers">
  </div>
  <div class="article__container">
    <div class="article__content">
      <h1 class="t-article-title">Shift the overall look and feel by adding these wonderful 
      touches to furniture in your home</h1>
      <p class="t-article-body article__content__body">Ever been in a room and felt like something was missing? Perhaps 
      it felt slightly bare and uninviting. I’ve got some simple tips 
      to help you make any room feel complete.</p>
    </div>
    <div class="article__footer">
      <div class="author-avatar">
        <img src="../images/avatar-michelle.jpg" alt="avatar">
      </div>
      <div class="article__footer__info">
        <h2 class="author-name t-author-name">Michelle Appleton</h2>
        <p class="publish-date t-publish-date">28 Jun 2020</p>
      </div>
      <div class="article__footer__share">
        <div
        on:click={toggleShare}
        class="share-button{active ? ' active': ''}">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
        </div>
        {#if active}
          <div transition:slide class="share-tooltip">
            <p class="t-share">SHARE</p>
            <div class="socials">
              <a href="https://www.facebook.com/" class="social">
                <span class="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#FFF" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
              </a>
              <a href="https://twitter.com/" class="social">
                <span class="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><path fill="#FFF" d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.605.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z"/></svg>
              </a>
              <a href="https://www.pinterest.com/" class="social">
                <span class="sr-only">Pinterest</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#FFF" d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"/></svg>
              </a>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</article>

<style>
  .article {
    border-radius: 1rem;
    background-color: var(--color-white);
    box-shadow: 0 4rem 4rem -1rem rgba(201,213,225,0.50);
    position: relative;
    max-width: 32.7rem;
    margin: 0 auto;
  }
  @media (min-width: 900px) {
    .article {
      max-width: 73rem; 
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      position: static;
    }
  }

  .article__image {
    width: 100%;
    display: flex;
    height: 20rem;
  }
  @media (min-width: 900px) {
    .article__image {
      height: 28rem;
      width: 28.5rem;
      min-width: 28.5rem;
      align-self: auto;
    }
  }

  .article__image img {
    width: 100%;
    border-radius: 1rem 1rem 0 0;
  }
  @media (min-width: 900px) {
    .article__image img {
      border-radius: 1rem 0 0 1rem;
      height: 100%;
      object-fit: cover;
    }
  }

  .article__container {
    padding: 3.6rem 3.2rem 2rem;
    position: relative;
  }
  @media (min-width: 900px) {
    .article__container {
      padding: 3.2rem 4rem;
    }
  }

  .article__content__body {
    margin-top: 1.2rem;
    margin-bottom: 3.2rem;
  }
  @media (min-width: 900px) {
    .article__content__body {
      margin-bottom: 2rem;
    }
  }

  .article__footer {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .article__footer__info {
    margin-left: 1.6rem;
    margin-right: auto;
  }

  .author-avatar {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .author-avatar img {
    width: 100%;
    border-radius: 50%;
  }

  .share-button {
    z-index: 2;
    display: flex;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
    border-radius: 50%;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--color-light-gray-blue);
    transition: var(--transition) transform, var(--transition) background-color;
  }

  .share-button > svg > path {
    transition: var(--transition) fill;
  }

  .share-button.active {
    transform: translateY(.8rem);
    background-color: var(--color-dark-blue);
  }
  @media (min-width: 900px) {
    .share-button.active {
      transform: translateY(0);
      background-color: var(--color-dark-blue);
    }
  }

  .share-button.active > svg > path {
    fill: var(--color-white);
  }

  .share-tooltip {
    position: absolute;
    background-color: var(--color-dark-gray-blue);
    left: 0;
    right: 0;
    bottom: 0;
    height: 6.4rem;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    padding: 1.6rem 3.2rem;
    border-radius: 0 0 1rem 1rem;
  }
  @media (min-width: 900px) {
    .share-tooltip {
      height: 5.5rem;
      width: 24.8rem;
      border-radius: 1rem;
      left: -10.8rem;
      top: -8.3rem;
      right: auto;
      bottom: auto;
      box-shadow: 0 1rem 1rem 0 rgba(201,213,225,0.50);
    }
    .share-tooltip::after {
      width: 0;
      height: 0; 
      content: '';
      position: absolute;
      border-left: 1.2rem solid transparent;
      border-right: 1.2rem solid transparent;
      border-top: 1.2rem solid var(--color-dark-gray-blue);
      left: 50%;
      transform: translateX(-50%);
      bottom: -1.2rem;
    }
  }

  .socials {
    width: 9.2rem;
    margin-left: 1.6rem;
    align-items: center;
    display: inline-flex;
    justify-content: space-between;
  }
  .socials > .social {
    display: inline-flex;
    align-items: center;
  }


  .article__footer__share {
    position: static;
  }
  @media (min-width: 900px) {
    .article__footer__share {
      position: relative;
    }
  }
</style>