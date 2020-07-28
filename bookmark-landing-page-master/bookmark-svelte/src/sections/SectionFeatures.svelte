<script>
  let currentFeature = 0;
  let features = [
    {id: 0, name: 'Simple Bookmarking', hightlight: true},
    {id: 1, name: 'Speedy Searching', hightlight: false},
    {id: 2, name: 'Easy Sharing', hightlight: false}
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
    currentFeature = event.target.value;
    features.forEach(feature => {
      if (feature.id != currentFeature) {
        feature.hightlight = false;
      } else {
        feature.hightlight = true;
      }
    });
    features = features;
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
          {#if feature.hightlight}
            <li class="features__list__item highlighted" on:click={switchFeature} value={feature.id}>{feature.name}</li>
          {:else}
            <li class="features__list__item" on:click={switchFeature} value={feature.id}>{feature.name}</li>
          {/if}
        {/each}
      </ul>
    </div>
    <div class="feature__content">
      <div class="feature__content__image">
        <img src="{featureDetails[currentFeature].image}" alt="feature">
      </div>
      <h2 class="feature__content__heading t-h2">{featureDetails[currentFeature].heading}</h2>
      <p class="t-body1">{featureDetails[currentFeature].body}</p>
    </div>
  </div>
</section>

<style type="text/scss">
  .features {
    position: relative;
    margin-top: 14rem;
    @media (min-width: 768px) {
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
  }

  .container {
    padding: 0 3.2rem;
  }

  .features__intro {
    text-align: center;

    &__body {
      @media (min-width: 768px) {
        margin-top: 1.6rem;
      }
    }
  }

  .features__tab {
    margin: 4rem 0 7.2rem;
    text-align: center;
  }

  .features__list {
    text-align: center;
    @media (min-width: 768px) {
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
      @media (min-width: 768px) {
        border-top: none;
        padding: 0 0 3.2rem;
      }

      &:last-of-type {
        border-bottom: 1px solid rgba(73, 93, 207, .2);
        @media (min-width: 768px) {
          border-bottom: none;
        }
      }

      &:hover {
        color: var(--color-soft-red);
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
      width: 45.981%;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      animation-name: featureTab;
      animation-duration: .3s;
      @media (min-width: 768px) {
        width: 150%;
      }
    }
  }

  @keyframes featureTab {
    from { opacity: 0; width: 0; }
    to { opacity: 1; width: 45.981%; }
  }

  .feature__content {
    text-align: center;
    &__image {
      margin-bottom: 6.9rem;
      img { 
        width: 100%;
        @media (min-width: 768px) {
          width: auto;
        }
      }
    }
  }
</style>