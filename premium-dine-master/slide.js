const slideImage = document.getElementById('slide-image');
const slideTitle = document.getElementById('slide-title');
const slideBody = document.getElementById('slide-body');
const breakPoints = [768, 1200];
const windowSize = window.innerWidth;

const slides = [
  {
    'name': 'Family Gathering',
    'content': 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
    'image': './images/homepage/family-gathering-'
  },
  {
    'name': 'Special Events',
    'content': 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
    'image': './images/homepage/special-events-'
  },
  {
    'name': 'Social Events',
    'content': 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
    'image': './images/homepage/social-events-'
  }
];
const imageUrlSuffixes = ['mobile@2x.jpg', 'tablet@2x.jpg', 'desktop@2x.jpg'];

let slide = 1;

// changing image url
setInterval(() => {
  slideImage.innerHTML = "";
  slideImage.appendChild(generateImageComponent(slide));
  slideTitle.textContent = slides[slide].name;
  slideBody.textContent = slides[slide].content;
  if (slide == (slides.length - 1)) slide = 0; else slide++; // reset slide number
}, 3000);

function generateImageComponent(slide) {
  let newImage = document.createElement("img");
  newImage.setAttribute("class", "gathering__slide__image-container__image");
  newImage.setAttribute("src", slides[slide].image.concat(imageUrlSuffixes[slide]));
  return newImage;
}