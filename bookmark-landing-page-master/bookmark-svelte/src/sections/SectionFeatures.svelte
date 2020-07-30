<script>
  let currentFeature = 0;
  let clickedTabId = 0;
  let animation = '';

  let features = [
    {id: 0, name: 'Simple Bookmarking', highlighted: ' highlighted'},
    {id: 1, name: 'Speedy Searching', highlighted: ''},
    {id: 2, name: 'Easy Sharing', highlighted: ''}
  ];
  const featureDetails = [
    {
      id: 0,
      heading: 'Bookmark in one click',
      body: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
      image: './images/illustration-features-tab-1.svg',
      link: './'
    },
    {
      id: 1,
      heading: 'Intelligent search',
      body: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
      image: './images/illustration-features-tab-2.svg',
      link: './'
    },
    {
      id: 2,
      heading: 'Share your bookmarks',
      body: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      image: './images/illustration-features-tab-3.svg',
      link: './'
    }
  ];

  function switchFeature(event) {
    animation = 'fadeout';
    // use to swap content after animationed
    clickedTabId = event.target.value;
    // reassigned highlighted feature tab
    features.forEach(feature => {
      if (feature.id != clickedTabId) feature.highlighted = '';
      else feature.highlighted = ' highlighted';
    });
    features = features;
  }

  function swapContent() {
    animation = '';
    currentFeature = clickedTabId;
  }

</script>
<section class="features">
  <div class="container">
    <div class="features__intro">
      <h2 class="t-h2">Features</h2>
      <p class="features__intro__body t-body1">Our aim is to make it quick and easy for you to access your favourite websites. 
      Your bookmarks sync between your devices so you can access them on the go.</p>
    </div>
    <div class="features__tab">
      <ul class="features__list">
        {#each features as feature (feature.id)}
          <li class="features__list__item{feature.highlighted}" on:click={switchFeature} value={feature.id}>{feature.name}</li>
        {/each}
      </ul>
    </div>
    <div on:animationend={swapContent} class="feature__content {animation}">
      <div class="feature__content__image">
        <img src="{featureDetails[currentFeature].image}" alt="feature">
      </div>
      <div class="feature__content__text">
        <h2 class="feature__content__heading t-h2">{featureDetails[currentFeature].heading}</h2>
        <p class="t-body1 feature__content__body">{featureDetails[currentFeature].body}</p>
        <a href="./" class="button button--info feature__content__button">More Info</a>
      </div>
    </div>
  </div>
</section>

<style type="text/scss">
  .features {
    position: relative;
    margin-top: 14rem;
    @media (min-width: 920px) {
      margin-top: 8rem;
    }
  }
  .features::after {
    content: '';
    position: absolute;
    width: 82.133%;
    height: 20.3rem;
    left: 0;
    top: 47.4rem;
    z-index: -1;
    background-color: var(--color-soft-blue);
    border-top-right-radius: 31.65rem;
    border-bottom-right-radius: 31.65rem;
    @media (min-width: 920px) {
      height: 35.2rem;
      width: 44.444%;
      top: 42.8rem;
    }
  }

  .container {
    padding: 0 3.2rem 14rem;
    @media (min-width: 920px) {
      padding: 0 3.2rem 23.8rem;
    }
    @media (min-width: 1160px) {
      padding: 0 0 23.4rem;
    }
  }

  .features__intro {
    text-align: center;
    max-width: 54rem;
    margin: 0 auto;

    &__body {
      @media (min-width: 920px) {
        margin-top: 1.6rem;
      }
    }
  }

  .features__tab {
    margin: 4rem 0 7.2rem;
    text-align: center;
    @media (min-width: 920px) {
      margin: 6.9rem auto 7.2rem;
    }
  }

  .features__list {
    text-align: center;
    @media (min-width: 920px) {
      display: inline-flex;
      width: 80%;
      max-width: 73rem;
      justify-content: space-between;
      margin: 0 auto;
      border-bottom: 1px solid rgba(73, 93, 207, .2);
      padding-left: 4.1rem;
      padding-right: 7.05rem;
    }

    &__item {
      font-size: 1.6rem;
      line-height: 1.7rem;
      letter-spacing: .53px;
      color: rgba(36, 42, 69, .75);
      transition: var(--transition) color;
      cursor: pointer;
      padding: 2rem 0;
      border-top: 1px solid rgba(73, 93, 207, .2);
      @media (min-width: 920px) {
        border-top: none;
        padding: 0 0 3.1rem;
      }

      &:last-of-type {
        border-bottom: 1px solid rgba(73, 93, 207, .2);
        @media (min-width: 920px) {
          border-bottom: none;
        }
      }

      &:hover {
        color: var(--color-soft-red);
      }
    }

    &__item:nth-child(2) {
      margin-left: 0;
      @media (min-width: 920px) {
        margin-left: -3rem;
      }
    }

    &__item.highlighted {
      color: rgba(36, 42, 69, 1);
      position: relative;
    }
    &__item.highlighted::after {
      content: '';
      position: absolute;
      background-color: var(--color-soft-red);
      height: .4rem;
      width: 14.3rem;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      animation-name: featureTab;
      animation-duration: .3s;
      @media (min-width: 920px) {
        width: 24.3rem;
      }
    }
  }


  @keyframes featureTab {
    from { opacity: 0; width: 0; }
    to { opacity: 1; width: 14.3rem; }  
  }
  @media (min-width: 920px) {
    @keyframes featureTab {
      from { opacity: 0; width: 0; }
      to { opacity: 1; width: 24.3rem; }  
    }
  }
  

  .feature__content {
    text-align: center;
    animation-duration: .3s;
    animation-name: fadein;
    @media (min-width: 920px) {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 110.6rem;
      margin: 0 auto;
    }

    &__image {
      max-width: 55rem;
      margin: 0 auto 6.9rem;
      @media (min-width: 920px) {
        margin: 0 0 0 -.6rem;
        width: 50%;
        max-width: none;
      }

      img { 
        width: 100%;
        @media (min-width: 1110px) {
          width: auto;
        }
      }
    }

    &__text {
      max-width: 44.5rem;
      margin: 0 auto;
      @media (min-width: 920px) {
        width: 45%;
        text-align: left;
        margin: -.5rem 0 0;
      }
    }

    &__button {
      display: none;
      @media (min-width: 920px) {
        display: inline-block;
      }
    }
    &__body {
      @media (min-width: 920px) {
        margin-top: 1.6rem;
        margin-bottom: 3.2rem;
        letter-spacing: .15px
      }
    }
  }

  .feature__content.fadeout {
    animation-duration: .5s;
    animation-name: fadeout;
  }

  @keyframes fadeout {
    from { opacity: 1; transform: translateX(0); }
    to { opacity: 0; transform: translateX(-10rem); }
  }

  @keyframes fadein {
    from { opacity: 0; transform: translateX(-10rem); }
    to { opacity: 1; transform: translateX(0); }
  }
</style>