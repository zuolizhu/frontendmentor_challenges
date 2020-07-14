<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  export let keyword;

  function removeKeyword(event) {
    dispatch('removeKeyword', event.currentTarget.childNodes[0].innerText);
  }
</script>

<div class="clicked-keyword" on:click={removeKeyword}>
  <span class="keyword-text">{keyword}</span>
  <div class="remove-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
  </div>
</div>

<style type="text/scss">
  .clicked-keyword {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    background-color: var(--color-light-cyan);
    border-radius: .4rem;
    margin: 1.6rem 0 0 1.6rem;
  }
  .keyword-text {
    color: var(--color-dark-cyan);
    padding: .4rem .8rem;
    font-size: 1.3rem;
    line-height: 2.4rem;
    letter-spacing: -.1px;
    font-weight: var(--weight-bold);
  }
  .remove-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-dark-cyan);
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 0 .4rem .4rem 0;
    transition: var(--transition) background-color;
  }
  .clicked-keyword:hover .remove-button {
    background-color: #2B3939;
  }
</style>