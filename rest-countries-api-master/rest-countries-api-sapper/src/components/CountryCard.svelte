<script>
  export let country;
</script>

<li class="country-card">
  <a class="country-card-container" rel='prefetch' href='./country/{country.name}'>
    <img class="country-card__image" loading="lazy" src="{country.flag}" alt="">
    <div class="country-card__info">
      <h2 class="country-card__info__name t-name">{country.name}</h2>
      <p class="t-country-info country-card__info__other"><span class="t-semi-bold">Population:</span><span class="t-light">{country.population}</span></p>
      <p class="t-country-info country-card__info__other"><span class="t-semi-bold">Region:</span><span class="t-light">{country.region}</span></p>
      <p class="t-country-info country-card__info__other"><span class="t-semi-bold">Capital:</span><span class="t-light">{country.capital}</span></p>
    </div>
  </a>
</li>

<style>
  .country-card {
    width: 26.4rem;
    height: 33.6rem;
    overflow: hidden;
    border-radius: .5rem;
    box-shadow: 0 0 .7rem .2rem rgba(0,0,0,0.03); 
  }
  
  .country-card-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
  }

  .country-card__image {
    object-fit: cover;
    width: 100%;
    height: 16rem;
  }

  .country-card__info {
    padding-top: 2.4rem;
    padding-left: 2.4rem;
    padding-bottom: 4.6rem;
    background-color: var(--bg1);
    transition: var(--transition) background-color;
  }

  .country-card__info__name {
    margin-bottom: 1.6rem;
  }

  .country-card__info__other:not(:last-of-type) {
    margin-bottom: .8rem;
  }
</style>