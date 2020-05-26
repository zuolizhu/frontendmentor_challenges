const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const quote = document.getElementById('quote');
const name = document.getElementById('name');
const title = document.getElementById('title');
const slideImage = document.getElementById('slide-image');

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      
      node.removeEventListener('animationend', handleAnimationEnd);
      
      resolve('Animation ended');
    }
    
    node.addEventListener('animationend', handleAnimationEnd);
});

let currentTestimonial = 0;

btnPrev.onclick = () => {
  swapContent();
}

btnNext.onclick = () => {
  swapContent();
}

function swapContent() {
  if (currentTestimonial != 1) {
    animateCSS('#quote', 'fadeOut').then(() => {
      quote.textContent = `“ If you want to lay the best foundation possible I’d recommend taking this course. 
      The depth the instructors go into is incredible. I now feel so confident about 
      starting up as a professional developer. ”`;
    }).then(() => {
      animateCSS('#quote', 'fadeInUp');
    });
    animateCSS('#name', 'fadeOut').then(() => {
      name.textContent = `John Tarkpor`;
    }).then(() => {
      animateCSS('#name', 'fadeInDown');
    });
    animateCSS('#title', 'fadeOut').then(() => {
      title.textContent = `Junior Front-end Developer`;
    }).then(() => {
      animateCSS('#title', 'fadeInUp');
    });
    animateCSS('#slide-image', 'fadeOut').then(() => {
      slideImage.src = `./images/image-john.jpg`;
    }).then(() => {
      animateCSS('#slide-image', 'fadeIn');
    });
    currentTestimonial++;
  } else {
    animateCSS('#quote', 'fadeOut').then(() => {
      quote.textContent = `“ I’ve been interested in coding for a while but never taken the jump, until now. 
      I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
      excited about the future. ”`;
    }).then(() => {
      animateCSS('#quote', 'fadeInUp');
    });
    animateCSS('#name', 'fadeOut').then(() => {
      name.textContent = `Tanya Sinclair`;
    }).then(() => {
      animateCSS('#name', 'fadeInDown');
    });
    animateCSS('#title', 'fadeOut').then(() => {
      title.textContent = `UX Engineer`;
    }).then(() => {
      animateCSS('#title', 'fadeInUp');
    });
    animateCSS('#slide-image', 'fadeOut').then(() => {
      slideImage.src = `./images/image-tanya.jpg`;
    }).then(() => {
      animateCSS('#slide-image', 'fadeIn');
    });
    currentTestimonial--;
  }
}