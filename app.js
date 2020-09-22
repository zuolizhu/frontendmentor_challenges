const app = new Vue({
  el: '#app',
  data:{
    highlightedSolutions: [
      {
        id: 21,
        techStacks: ['HTML', 'CSS', 'JS', 'Svelte'],
        projectName: 'Reactie job listings with filtering',
        previewImageLink: './static-job-listings-master/design/desktop-preview.jpg',
        liveViewLink: './static-job-listings-master/index.html'
      },
{
        id: 24,
        techStacks: ['HTML', 'CSS', 'JS', 'API', 'Svelte'],
        projectName: 'URL shortening API landing page',
        previewImageLink: './url-shortening-api-master/design/desktop-preview.jpg',
        liveViewLink: './url-shortening-api-master/index.html'
      },
      {
        id: 29,
        techStacks: ['HTML', 'CSS', 'JS', 'Svelte'],
        projectName: 'Rock paper scissors game',
        previewImageLink: './rock-paper-scissors-game/design/desktop-preview.jpg',
        liveViewLink: './rock-paper-scissors-game/index.html'
      },
      {
        id: 30,
        techStacks: ['HTML', 'CSS', 'JS', 'API', 'Svelte', 'Sapper'],
        projectName: 'REST Countries API with color theme switcher',
        previewImageLink: './rest-countries-api-master/design/desktop-preview.jpg',
        liveViewLink: 'https://rest-countries-api-sapper.vercel.app/'
      },
      {
        id: 26,
        techStacks: ['HTML', 'CSS', 'JS', 'Svelte', 'Sapper'],
        projectName: 'MyTeam multi-page website',
        previewImageLink: './premium-myteam-master/design/desktop-preview.jpg',
        liveViewLink: 'https://myteam-sapper.vercel.app/'
      },
      {
        id: 19,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Minimalist portfolio',
        previewImageLink: './premium-minimalist-portfolio-master/design/desktop-preview.jpg',
        liveViewLink: './premium-minimalist-portfolio-master/index.html'
      },
      {
        id: 22,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Easybank landing page',
        previewImageLink: './easybank-landing-page-master/design/desktop-preview.jpg',
        liveViewLink: './easybank-landing-page-master/index.html'
      },
      {
        id: 23,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Manage landing page',
        previewImageLink: './manage-landing-page-master/design/desktop-preview.jpg',
        liveViewLink: './manage-landing-page-master/index.html'
      },
{
        id: 25,
        techStacks: ['HTML', 'CSS', 'JS', 'Svelte'],
        projectName: 'Bookmark landing page',
        previewImageLink: './bookmark-landing-page-master/design/desktop-preview.jpg',
        liveViewLink: './bookmark-landing-page-master/index.html'
      }
    ],
    solutions: [
      {
        id: 1,
        projectName: 'Single price grid component',
        techStacks: ['HTML', 'CSS'],
        previewImageLink: './single-price-grid-component-master/design/desktop-preview.jpg',
        liveViewLink: './single-price-grid-component-master/index.html'
      },
      {
        id: 2,
        techStacks: ['HTML', 'CSS'],
        projectName: 'Four cards feature section',
        previewImageLink: './four-card-feature-section-master/design/desktop-preview.jpg',
        liveViewLink: './four-card-feature-section-master/index.html'
      },
      {
        id: 3,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Base Apparel coming soon page',
        previewImageLink: './base-apparel-coming-soon-master/design/desktop-preview.jpg',
        liveViewLink: './base-apparel-coming-soon-master/index.html'
      },
      {
        id: 4,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Intro component with sign-up form',
        previewImageLink: './intro-component-with-signup-form-master/design/desktop-preview.jpg',
        liveViewLink: './intro-component-with-signup-form-master/index.html'
      },
      {
        id: 5,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Ping single column coming soon',
        previewImageLink: './ping-coming-soon-page-master/design/desktop-preview.jpg',
        liveViewLink: './ping-coming-soon-page-master/index.html'
      },
      {
        id: 6,
        techStacks: ['HTML', 'CSS'],
        projectName: 'Huddle landing page',
        previewImageLink: './huddle-landing-page-with-alternating-feature-blocks-master/design/desktop-preview.jpg',
        liveViewLink: './huddle-landing-page-with-alternating-feature-blocks-master/index.html'
      },
      {
        id: 7,
        techStacks: ['HTML', 'CSS'],
        projectName: 'Huddle single introductory section',
        previewImageLink: './huddle-landing-page-with-single-introductory-section-master/design/desktop-preview.jpg',
        liveViewLink: './huddle-landing-page-with-single-introductory-section-master/index.html'
      },
      {
        id: 8,
        techStacks: ['HTML', 'CSS'],
        projectName: 'Fylo landing page with flexbox',
        previewImageLink: './fylo-landing-page-with-two-column-layout-master/design/desktop-preview.jpg',
        liveViewLink: './fylo-landing-page-with-two-column-layout-master/index.html'
      },
      {
        id: 9,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Social media dashboard with theme switcher',
        previewImageLink: './social-media-dashboard-with-theme-switcher-master/design/desktop-preview.jpg',
        liveViewLink: './social-media-dashboard-with-theme-switcher-master/index.html'
      },
      {
        id: 10,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Insure landing page',
        previewImageLink: './insure-landing-page-master/design/desktop-preview.jpg',
        liveViewLink: './insure-landing-page-master/index.html'
      },
      {
        id: 11,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Pricing component with toggle',
        previewImageLink: './pricing-component-with-toggle-master/design/desktop-preview.jpg',
        liveViewLink: './pricing-component-with-toggle-master/index.html'
      },
      {
        id: 12,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Project tracking intro component solution',
        previewImageLink: './project-tracking-intro-component-master/design/desktop-preview.jpg',
        liveViewLink: './project-tracking-intro-component-master/index.html'
      },
      {
        id: 13,
        techStacks: ['HTML', 'CSS'],
        projectName: 'Clipboard landing page',
        previewImageLink: './clipboard-landing-page-master/design/desktop-preview.jpg',
        liveViewLink: './clipboard-landing-page-master/index.html'
      },
      {
        id: 14,
        techStacks: ['HTML', 'CSS'],
        projectName: 'Fylo dark theme landing page',
        previewImageLink: './fylo-dark-theme-landing-page-master/design/desktop-preview.jpg',
        liveViewLink: './fylo-dark-theme-landing-page-master/index.html'
      },
      {
        id: 15,
        techStacks: ['HTML', 'CSS'],
        projectName: 'Huddle landing page with curved sections',
        previewImageLink: './huddle-landing-page-with-curved-sections-master/design/desktop-preview.jpg',
        liveViewLink: './huddle-landing-page-with-curved-sections-master/index.html'
      },
      {
        id: 16,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Dine restaurant website Solution',
        previewImageLink: './premium-dine-master/design/desktop-preview.jpg',
        liveViewLink: './premium-dine-master/index.html'
      },
      {
        id: 17,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Scoot multi-page',
        previewImageLink: './scoot-multi-page-website-master/design/desktop-preview.jpg',
        liveViewLink: './scoot-multi-page-website-master/index.html'
      },
      {
        id: 18,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Coding bootcamp testimonials slider with animation',
        previewImageLink: './coding-bootcamp-testimonials-slider-master/design/desktop-preview.jpg',
        liveViewLink: './coding-bootcamp-testimonials-slider-master/index.html'
      },
      {
        id: 19,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Minimalist portfolio',
        previewImageLink: './premium-minimalist-portfolio-master/design/desktop-preview.jpg',
        liveViewLink: './premium-minimalist-portfolio-master/index.html'
      },
      {
        id: 20,
        techStacks: ['HTML', 'CSS', 'JS', 'Svelte'],
        projectName: 'Fylo data storage component',
        previewImageLink: './fylo-data-storage-component-master/design/desktop-preview.jpg',
        liveViewLink: './fylo-data-storage-component-master/index.html'
      },
      {
        id: 21,
        techStacks: ['HTML', 'CSS', 'JS', 'Svelte'],
        projectName: 'Reactie job listings with filtering',
        previewImageLink: './static-job-listings-master/design/desktop-preview.jpg',
        liveViewLink: './static-job-listings-master/index.html'
      },
      {
        id: 22,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Easybank landing page',
        previewImageLink: './easybank-landing-page-master/design/desktop-preview.jpg',
        liveViewLink: './easybank-landing-page-master/index.html'
      },
      {
        id: 23,
        techStacks: ['HTML', 'CSS', 'JS'],
        projectName: 'Manage landing page',
        previewImageLink: './manage-landing-page-master/design/desktop-preview.jpg',
        liveViewLink: './manage-landing-page-master/index.html'
      },
      {
        id: 24,
        techStacks: ['HTML', 'CSS', 'JS', 'API', 'Svelte'],
        projectName: 'URL shortening API landing page',
        previewImageLink: './url-shortening-api-master/design/desktop-preview.jpg',
        liveViewLink: './url-shortening-api-master/index.html'
      },
      {
        id: 25,
        techStacks: ['HTML', 'CSS', 'JS', 'Svelte'],
        projectName: 'Bookmark landing page',
        previewImageLink: './bookmark-landing-page-master/design/desktop-preview.jpg',
        liveViewLink: './bookmark-landing-page-master/index.html'
      },
      {
        id: 26,
        techStacks: ['HTML', 'CSS', 'JS', 'Svelte', 'Sapper'],
        projectName: 'MyTeam multi-page website',
        previewImageLink: './premium-myteam-master/design/desktop-preview.jpg',
        liveViewLink: 'https://myteam-sapper.vercel.app/'
      },
      {
        id: 27,
        techStacks: ['HTML', 'CSS'],
        projectName: 'Chat app css illustration',
        previewImageLink: './chat-app-css-illustration-master/design/desktop-preview.jpg',
        liveViewLink: './chat-app-css-illustration-master/'
      },
      {
        id: 28,
        techStacks: ['HTML', 'CSS', 'JS', 'Svelte'],
        projectName: 'Article preview component',
        previewImageLink: './article-preview-component-master/design/desktop-preview.jpg',
        liveViewLink: './article-preview-component-master/index.html'
      },
      {
        id: 29,
        techStacks: ['HTML', 'CSS', 'JS', 'Svelte'],
        projectName: 'Rock paper scissors game',
        previewImageLink: './rock-paper-scissors-game/design/desktop-preview.jpg',
        liveViewLink: './rock-paper-scissors-game/index.html'
      },
      {
        id: 30,
        techStacks: ['HTML', 'CSS', 'JS', 'API', 'Svelte', 'Sapper'],
        projectName: 'REST Countries API with color theme switcher',
        previewImageLink: './rest-countries-api-master/design/desktop-preview.jpg',
        liveViewLink: 'https://rest-countries-api-sapper.vercel.app/'
      }
    ]
  }
});
