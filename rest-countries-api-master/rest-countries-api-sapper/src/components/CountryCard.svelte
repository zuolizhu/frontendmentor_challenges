<script>
  export let country;
  const population = country.population.toLocaleString();
</script>

<li class="country-card">
  <a class="country-card-container" href='./country/{country.alpha3Code}'>
    <img class="country-card__image" src="{country.flag}" alt="country flag">
    <div class="country-card__info">
      <h2 class="country-card__info__name t-name">{country.name}</h2>
      <p class="t-country-info country-card__info__other"><span class="t-semi-bold">Population: </span><span class="t-light"> {population}</span></p>
      <p class="t-country-info country-card__info__other"><span class="t-semi-bold">Region: </span><span class="t-light">{country.region}</span></p>
      <p class="t-country-info country-card__info__other"><span class="t-semi-bold">Capital: </span><span class="t-light">{country.capital}</span></p>
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
    transition: var(--transition) transform, var(--transition) box-shadow;
  }
  .country-card:hover {
    box-shadow: 0 0 1.5rem .6rem rgba(0,0,0,0.02);
    transform: translateY(-2px);
  }
  
  .country-card-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
  }

  .country-card__image {
    width: 100%;
    height: 16rem;
    object-fit: cover;
    object-position: center;
  }

  .country-card__info {
    padding-top: 2.4rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
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