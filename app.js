const app = new Vue({
  el: '#app',
  data:{
    solutions: [
      {
        id: 1,
        projectName: 'Single price grid component',
        techStacks: ['HTML', 'CSS'],
        previewImageLink: './single-price-grid-component-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './single-price-grid-component-master/index.html'
      },
      {
        id: 2,
        techStacks: ['HTML', 'CSS'],
        projectName: 'Four cards feature section',
        previewImageLink: './four-card-feature-section-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/four-card-feature-section-solution-pure-html-css-with-grid-DlDJHRCOM',
        liveViewLink: './four-card-feature-section-master/index.html'
      },
      {
        id: 3,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Base Apparel coming soon page',
        previewImageLink: './base-apparel-coming-soon-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/base-apparel-coming-soon-solution-html-css-with-js-form-validation-3-1ir2lMf',
        liveViewLink: './base-apparel-coming-soon-master/index.html'
      },
      {
        id: 4,
        projectName: 'Intro component with sign-up form',
        previewImageLink: './intro-component-with-signup-form-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/intro-component-with-signup-form-solution-with-form-validation-cnrjJBoxg',
        liveViewLink: './intro-component-with-signup-form-master/index.html'
      },
      {
        id: 5,
        projectName: 'Ping single column coming soon',
        previewImageLink: './ping-coming-soon-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/ping-single-column-coming-soon-solution-pure-html-css-v2HabpTrY',
        liveViewLink: './ping-coming-soon-page-master/index.html'
      },
      {
        id: 6,
        projectName: 'Huddle landing page',
        previewImageLink: './huddle-landing-page-with-alternating-feature-blocks-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/huddle-landing-page-solution-pure-html-css-xSv7GfKN6',
        liveViewLink: './huddle-landing-page-with-alternating-feature-blocks-master/index.html'
      },
      {
        id: 7,
        projectName: 'Huddle single introductory section',
        previewImageLink: './huddle-landing-page-with-single-introductory-section-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/huddle-single-introductory-section-solution-pure-html-css-G6ZustjBN',
        liveViewLink: './huddle-landing-page-with-single-introductory-section-master/index.html'
      },
      {
        id: 8,
        projectName: 'Fylo landing page with flexbox',
        previewImageLink: './fylo-landing-page-with-two-column-layout-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/fylo-landing-page-with-flexbox-pure-html-and-css-25E5DIxoq',
        liveViewLink: './fylo-landing-page-with-two-column-layout-master/index.html'
      },
      {
        id: 9,
        projectName: 'Social media dashboard with theme switcher',
        previewImageLink: './social-media-dashboard-with-theme-switcher-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/social-media-dashboard-with-theme-switcher-pure-html-css-and-js-X8IPflJ-u',
        liveViewLink: './social-media-dashboard-with-theme-switcher-master/index.html'
      },
      {
        id: 10,
        projectName: 'Insure landing page',
        previewImageLink: './insure-landing-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/insure-landing-page-solution-pure-html-css-and-js-30HFiBlU6',
        liveViewLink: './insure-landing-page-master/index.html'
      },
      {
        id: 11,
        projectName: 'Pricing component with toggle',
        previewImageLink: './pricing-component-with-toggle-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/pricing-component-with-toggle-pure-html-css-and-javascript-YA8go6CmQ',
        liveViewLink: './pricing-component-with-toggle-master/index.html'
      },
      {
        id: 12,
        projectName: 'Project tracking intro component solution',
        previewImageLink: './project-tracking-intro-component-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/project-tracking-intro-component-solution-pure-html-css-and-js-LGjIUzpl9',
        liveViewLink: './project-tracking-intro-component-master/index.html'
      },
      {
        id: 13,
        projectName: 'Clipboard landing page',
        previewImageLink: './clipboard-landing-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/clipboard-landing-page-pure-html-and-css-Ll2NP2LQu',
        liveViewLink: './clipboard-landing-page-master/index.html'
      },
      {
        id: 14,
        projectName: 'Fylo dark theme landing page',
        previewImageLink: './fylo-dark-theme-landing-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/fylo-dark-theme-landing-page-pure-html-css-231tiw34g',
        liveViewLink: './fylo-dark-theme-landing-page-master/index.html'
      },
      {
        id: 15,
        projectName: 'Huddle landing page with curved sections',
        previewImageLink: './huddle-landing-page-with-curved-sections-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/huddle-landing-page-with-curved-sections-pure-html-and-css-KnQMiX8tk',
        liveViewLink: './huddle-landing-page-with-curved-sections-master/index.html'
      },
      {
        id: 16,
        projectName: 'Dine restaurant website Solution',
        previewImageLink: './premium-dine-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/dine-restaurant-website-solution-pure-html-css-and-javascript-37i9B66Nh',
        liveViewLink: './premium-dine-master/index.html'
      },
      {
        id: 17,
        projectName: 'Scoot multi-page',
        previewImageLink: './scoot-multi-page-website-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/scoot-multipage-html-scss-and-js-aINhEDoaN',
        liveViewLink: './scoot-multi-page-website-master/index.html'
      },
      {
        id: 18,
        projectName: 'Coding bootcamp testimonials slider with animation',
        previewImageLink: './coding-bootcamp-testimonials-slider-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/coding-bootcamp-testimonials-slider-with-animation-html-css-and-js-q0skRy7H-',
        liveViewLink: './coding-bootcamp-testimonials-slider-master/index.html'
      },
      {
        id: 19,
        projectName: 'Minimalist portfolio',
        previewImageLink: './premium-minimalist-portfolio-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/minimalist-portfolio-html-sass-and-page-transition-with-swupjs-uIdOb9sQy',
        liveViewLink: './premium-minimalist-portfolio-master/index.html'
      },
      {
        id: 20,
        projectName: 'Fylo data storage component',
        previewImageLink: './fylo-data-storage-component-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/fylo-data-storage-component-with-svelte-nIa4Jfw4M',
        liveViewLink: './fylo-data-storage-component-master/index.html'
      },
      {
        id: 21,
        projectName: 'Reactie job listings with filtering',
        previewImageLink: './static-job-listings-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/job-listings-with-filtering-built-with-svelte-M8ZIMVeU7',
        liveViewLink: './static-job-listings-master/index.html'
      },
      {
        id: 22,
        projectName: 'Easybank landing page',
        previewImageLink: './easybank-landing-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/almost-pixel-perfect-easybank-landing-page-pure-html-scss-and-js-w1ygcfOhW',
        liveViewLink: './easybank-landing-page-master/index.html'
      },
      {
        id: 23,
        projectName: 'Manage landing page',
        previewImageLink: './manage-landing-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/manage-landing-page-html-scss-and-js-with-slick-slider-plugin-HxYOgGU3y',
        liveViewLink: './manage-landing-page-master/index.html'
      },
      {
        id: 24,
        projectName: 'URL shortening API landing page',
        previewImageLink: './url-shortening-api-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/url-shortening-api-landing-page-built-with-svelte-9O6Dl8G3a',
        liveViewLink: './url-shortening-api-master/index.html'
      },
      {
        id: 25,
        projectName: 'Bookmark landing page',
        previewImageLink: './bookmark-landing-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/bookmark-landing-page-built-with-svelte-and-scss-G8XNicxj3',
        liveViewLink: './bookmark-landing-page-master/index.html'
      },
      {
        id: 26,
        projectName: 'MyTeam multi-page website',
        previewImageLink: './premium-myteam-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/myteam-multipage-website-built-with-sapper-IE4XmEmFX',
        liveViewLink: './premium-myteam-master/'
      },
      {
        id: 27,
        projectName: 'Chat app css illustration',
        previewImageLink: './chat-app-css-illustration-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/chat-app-css-illustration-html-and-scss-Vlg1zmfTO',
        liveViewLink: './chat-app-css-illustration-master/'
      }
    ]
  }
});
