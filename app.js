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
        projectName: 'Base apparel coming soon',
        previewImageLink: './base-apparel-coming-soon-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/base-apparel-coming-soon-solution-html-css-with-js-form-validation-3-1ir2lMf',
        liveViewLink: './base-apparel-coming-soon-master/index.html'
      },
      {
        id: 4,
        projectName: 'Fylo data storage component',
        previewImageLink: './fylo-data-storage-component-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './fylo-data-storage-component-master/index.html'
      },
      {
        id: 5,
        projectName: 'Intro component with signup form',
        previewImageLink: './intro-component-with-signup-form-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/intro-component-with-signup-form-solution-with-form-validation-cnrjJBoxg',
        liveViewLink: './intro-component-with-signup-form-master/index.html'
      },
      {
        id: 6,
        projectName: 'Ping coming soon page',
        previewImageLink: './ping-coming-soon-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/ping-single-column-coming-soon-solution-pure-html-css-v2HabpTrY',
        liveViewLink: './ping-coming-soon-page-master/index.html'
      },
      {
        id: 7,
        projectName: 'Huddle landing page with alternating feature blocks',
        previewImageLink: './huddle-landing-page-with-alternating-feature-blocks-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/huddle-landing-page-solution-pure-html-css-xSv7GfKN6',
        liveViewLink: './huddle-landing-page-with-alternating-feature-blocks-master/index.html'
      },
      {
        id: 8,
        projectName: 'Coding Bootcamp testimonials slider',
        previewImageLink: './coding-bootcamp-testimonials-slider-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './coding-bootcamp-testimonials-slider-master/index.html'
      },
      {
        id: 9,
        projectName: 'Huddle landing page',
        previewImageLink: './huddle-landing-page-with-alternating-feature-blocks-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './huddle-landing-page-with-alternating-feature-blocks-master/index.html'
      },
      {
        id: 10,
        projectName: 'Huddle landing hero section',
        previewImageLink: './huddle-landing-page-with-single-introductory-section-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './huddle-landing-page-with-single-introductory-section-master/index.html'
      },
      {
        id: 11,
        projectName: 'Fylo landing page',
        previewImageLink: './fylo-landing-page-with-two-column-layout-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './fylo-landing-page-with-two-column-layout-master/index.html'
      },
      {
        id: 12,
        projectName: 'Social media dashboard with theme switcher',
        previewImageLink: './social-media-dashboard-with-theme-switcher-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './social-media-dashboard-with-theme-switcher-master/index.html'
      },
      {
        id: 13,
        projectName: 'Insure Landing page',
        previewImageLink: './insure-landing-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './insure-landing-page-master/index.html'
      },
      {
        id: 14,
        projectName: 'Pricing component with toggle',
        previewImageLink: './pricing-component-with-toggle-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './pricing-component-with-toggle-master/index.html'
      },
      {
        id: 15,
        projectName: 'Project tracking intro component',
        previewImageLink: './project-tracking-intro-component-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './project-tracking-intro-component-master/index.html'
      },
      {
        id: 16,
        projectName: 'Clipboard landing page',
        previewImageLink: './clipboard-landing-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './clipboard-landing-page-master/index.html'
      },
      {
        id: 17,
        projectName: 'Fylo dark theme landing page',
        previewImageLink: './fylo-dark-theme-landing-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './fylo-dark-theme-landing-page-master/index.html'
      },
      {
        id: 18,
        projectName: 'Huddle landing page with curved sections',
        previewImageLink: './huddle-landing-page-with-curved-sections-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './huddle-landing-page-with-curved-sections-master/index.html'
      },
      {
        id: 19,
        projectName: 'Premium Dine',
        previewImageLink: './premium-dine-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './premium-dine-master/index.html'
      },
      {
        id: 20,
        projectName: 'Premium Scoot',
        previewImageLink: './scoot-multi-page-website-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './scoot-multi-page-website-master/index.html'
      },
      {
        id: 21,
        projectName: 'Premium minimalist portfolio',
        previewImageLink: './premium-minimalist-portfolio-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './premium-minimalist-portfolio-master/index.html'
      },
      {
        id: 22,
        projectName: 'Reactive job listings',
        previewImageLink: './static-job-listings-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './static-job-listings-master/index.html'
      },
      {
        id: 23,
        projectName: 'Easybank landing page',
        previewImageLink: './easybank-landing-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './easybank-landing-page-master/index.html'
      },
      {
        id: 24,
        projectName: 'Manage landing page',
        previewImageLink: './manage-landing-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './manage-landing-page-master/index.html'
      },
      {
        id: 25,
        projectName: 'URL Shortening API',
        previewImageLink: './url-shortening-api-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './url-shortening-api-master/index.html'
      },
      {
        id: 26,
        projectName: 'Bookmark landing page',
        previewImageLink: './bookmark-landing-page-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './bookmark-landing-page-master/index.html'
      },
      {
        id: 27,
        projectName: 'Premium Myteam landing page',
        previewImageLink: './premium-myteam-master/design/desktop-preview.jpg',
        solutionLink: 'https://www.frontendmentor.io/solutions/single-price-grid-component-solution-pure-html-css-utility-based-VAMyGbr-4',
        liveViewLink: './premium-myteam-master/'
      }
    ]
  }
});
