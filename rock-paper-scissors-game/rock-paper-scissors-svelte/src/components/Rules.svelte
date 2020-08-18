<script>
  import { fade } from 'svelte/transition';
  
  let active = false;
  
  function openModal() {
    active = !active;
  }
</script>

<div class="rules">
  <button
    on:click={openModal}
    class="btn btn--rules t-rules">rules</button>
</div>

{#if active}
<div 
  on:click={openModal} 
  transition:fade="{{ duration: 270 }}"
  class="fullscreen-modal">
  <div class="fullscreen-modal-container">
    <h2 class="t-rules-modal fullscreen-modal__text">Rules</h2>
    <div class="t-rules-modal fullscreen-modal__rules">
      <img src="./images/image-rules.svg" alt="rules">
    </div>
    <svg class="fullscreen-modal__close" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#3B4262" fill-rule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/></svg>
  </div>
</div>
{/if}

<style>
  .rules {
    margin-top: auto;
  }
  @media (min-width: 768px) {
    .rules {
      align-self: flex-end;
      margin-right: 3.2rem;
    }
  }
  @media (min-width: 1330px) {
    .rules {
      margin-right: 0;
    }
  }

  .fullscreen-modal {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    display: block;
    position: fixed;
  }
  @media (min-width: 768px) {
    .fullscreen-modal {
      display: flex;
      align-items: center;
      justify-items: center;
      background-color: rgba(0, 0, 0, .50);
    }
  }

  .fullscreen-modal-container {
    width: 100%;
    height: 100%;
    background-color: var(--color-white);
    display: grid;
    padding: 9.5rem 3.5rem 6.5rem;
    justify-items: center;
    grid-auto-rows: min-content;
  }
  @media (min-width: 768px) {
    .fullscreen-modal-container {
      max-width: 40rem;
      max-height: 41.5rem;
      margin: 0 auto;
      padding: 3.2rem;
      grid-template-columns: repeat(2, 1fr);
      border-radius: .8rem;
    }
  }

  .fullscreen-modal__rules {
    margin-top: 11.3rem;
    margin-bottom: 15.4rem;
  }
  @media (min-width: 768px) {
    .fullscreen-modal__rules {
      margin-bottom: 0;
      margin-top: 4.8rem;
      grid-row: 2/3;
      grid-column: 1/3;
    }
  }

  @media (min-width: 768px) {
    .fullscreen-modal__text {
      justify-self: start;
    }
  }
  
  @media (min-width: 768px) {
    .fullscreen-modal__close {
      justify-self: end;      
    }
  }
</style>