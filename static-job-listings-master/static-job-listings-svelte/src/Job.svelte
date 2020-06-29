<script>
  export let id; 
  export let logo; 
  export let company;
  export let isNew;
  export let isFeatured;
  export let JobTitle;
  export let postTime;
  export let jobType;
  export let location;
  export let keywords;
  // highlight first 2 cards
  let isHighlighted = id < 3 ? ' border-highlighted' : '';
</script>
<div class="job-card{isHighlighted}">
  <div class="company-logo">
    <img class="company-logo_img" src={logo} alt="{company} logo.">
  </div>
  <div class="job-info">
    <p class="t-company-name">{company}</p>
    {#if isNew}<p class="job-tag job-tag--new">new!</p>{/if}
    {#if isFeatured}<p class="job-tag job-tag--featured">featured</p>{/if}
  </div>
</div>

<style type="text/scss">
  .company-logo_img {
    width: 4.8rem;
    height: 4.8rem;
    transform: translateY(-50%);

    @media (min-width: 640px) {
      width: 8.8rem;
      height: 8.8rem;
      transform: translateY(0);
    }
  }
  .job-card {
    cursor: pointer;
    background-color: var(--color-white);
    border-radius: .5rem;
    padding-left: 1.9rem;
    border-left: .5rem solid transparent;
    box-shadow: 0 1.5rem 2rem -.5rem var(--color-card-shadow);
    transition: var(--transition) border-color;
    &:hover {
      border-color: var(--color-dark-cyan);
    }
    
    // highlight first 2 cards
    &.border-highlighted {
      border-color: var(--color-dark-cyan);
    }

    @media (min-width: 640px) {
      padding-left: 3.5rem;
    }
  }

  .job-card:not(:last-of-type) {
    margin-bottom: 4rem;
  }

  .job-tag {
    font-size: 1.1rem;
    line-height: 1.4rem;
    font-weight: var(--weight-bold);
    letter-spacing: -0.08px;
    text-transform: uppercase;
    padding: .7rem .8rem .3rem;
    border-radius: 1.2rem;
    display: inline-block;
    color: var(--color-white);
    margin-right: .8rem;
    &--new {
      background-color: #5CA5A5;
    }
    &--featured {
      background-color: #2B3939;
    }
  }
</style>