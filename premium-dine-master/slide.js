const slideImage = document.getElementById('slide-image');
const slideTitle = document.getElementById('slide-title');
const slideContent = document.getElementById('slide-content');
const events = document.querySelectorAll('li.gathering__event');
const underlines = document.querySelectorAll('div.gathering__event__underline');

const breakPoints = [767, 1200];
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

let suffix = 0;
console.log('current size: ', windowSize);
if (windowSize > breakPoints[0] && windowSize < breakPoints[1]) {
  suffix = 1;
}
else if (windowSize > breakPoints[1]) {
  suffix = 2;
}
console.log('suffix: ', suffix);

slideImage.innerHTML = "";
slideImage.appendChild(generateImageComponent(0, suffix));
events[0].classList.add('active');
underlines[0].classList.add('active');

let slide = 1;
// changing image url
setInterval(() => {
  slideImage.innerHTML = "";
  slideImage.appendChild(generateImageComponent(slide, suffix));
  changeInnerText(slide);
  events[slide].classList.add('active');
  underlines[slide].classList.add('active');
  events.forEach((event, i) => { if (i != slide) event.classList.remove('active'); })
  underlines.forEach((underline, i) => { if (i != slide) underline.classList.remove('active'); })
  if (slide == (slides.length - 1)) slide = 0; else slide++; // reset slide number
}, 5000);

function generateImageComponent(slide, suffix) {
  let newImage = document.createElement("img");
  newImage.setAttribute("class", "gathering__slide__image-container__image");
  newImage.setAttribute("src", slides[slide].image.concat(imageUrlSuffixes[suffix]));
  newImage.setAttribute("alt", "slider image");
  return newImage;
}

function changeInnerText(slide) {
  slideTitle.textContent = slides[slide].name;
	slideContent.textContent = slides[slide].content;
}