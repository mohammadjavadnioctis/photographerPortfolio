







function qs(selector, all = false) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs('.timeline-section', true);
const timeline = qs('.timeline');
const line = qs('.timeline-line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * .8;

function scrollHandler(e) {
  const {
    scrollY
  } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

  const dist = targetY - timelineRect.top;
  // console.log(dist);
  // console.log("this is timelineRect.top",timelineRect.top)

  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  sections.forEach(item => {
    // console.log(item);
    const rect = item.getBoundingClientRect(); //     console.log(rect);
   // console.log('item.rect.top', rect.top,'targetY', targetY)
    
    if (rect.top + item.offsetHeight / 5 < targetY) {

      item.classList.add('show-me');
    }
  }); // console.log(up, down);

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);


let timelineContents = document.querySelectorAll('.timeline-content')

timelineContents.forEach(item => {
  console.log(item.children)
  item.children[1].style.position = 'absolute';
  item.children[1].style.right = '0';
  item.children[1].style.zIndex = '1';

})


gsap.registerPlugin(ScrollTrigger)

gsap.from('#top-grid-first-box',{
  scrollTrigger:{
    // markers: true,
    trigger:'#top-grid-first-box',
    // start: 'top  500px',
    // end: 'bottom 10%',
   
    toggleActions: 'play reset play reset',

  },
  duration: 0.5,
  x: '-200%',
 // ease: 'elastic',
});


gsap.from('#top-grid-third-box',{
  scrollTrigger:{
    // markers: true,
    trigger:'#top-grid-third-box',
    // start: 'top  center',
    // end: 'bottom 10%',
   
    toggleActions: 'play reset play reset',

  },
  duration: 0.5,
  x: '-200%',
 // ease: 'elastic',
});


gsap.from('#top-grid-sixth-box',{
  scrollTrigger:{
    // markers: true,
    trigger:'#top-grid-sixth-box',
    // start: 'top  500px',
    // end: 'bottom 10%',
   
    toggleActions: 'play reset play reset',

  },
  delay: 0.2,
  duration: 0.5,
  x: '-200%',
 // ease: 'elastic',
});


gsap.from('#top-grid-second-box',{
  scrollTrigger:{
    // markers: true,
    trigger:'#top-grid-second-box',
    // start: 'top  500px',
    // end: 'bottom 10%',
   
    toggleActions: 'play reset play reset',

  },
  // delay: 0.2,
  duration: 0.5,
  x: '+200%',
 // ease: 'elastic',
});

gsap.from('#top-grid-fifth-box',{
  scrollTrigger:{
    // markers: true,
    trigger:'#top-grid-fourth-box',
    start: 'bottom bottom',
    // end: 'bottom 10%',
   
    toggleActions: 'play none none none',

  },
  delay: 0.2,
  duration: 0.5,
  y: '200%',
  opacity: 0,
 // ease: 'elastic',
});

gsap.from('#top-grid-seventh-box',{
  scrollTrigger:{
    // markers: true,
    trigger:'#top-grid-sixth-box',
     start: 'bottom bottom',
    // end: 'bottom 10%',
   
    toggleActions: 'play none none none',

  },
  delay: 0.2,
  duration: 0.5,
  y: '200%',
  opacity: 0,
  // ease: 'elastic',
});



// image wall





const NUM_ROWS = 4;
const NUM_IMAGES = 3;
const IMAGES = [
'./assets/Images/Guardians-Galaxy-3.jpg',
'./assets/Images/harley quinn fig.gif',
'./assets/Images/birds-of-prey.jpg', 
'./assets/Images/Terminal_2018-min.jpg',
'./assets/Images/joker glitching.gif',
'./assets/Images/kartoon harley quinn.png',
'./assets/Images/suicide squad 2016.jpg',
'./assets/Images/margarot robbie.jpg',
'./assets/Images/suicide squad 2021.jpg',
'./assets/Images/terminal second wallpaper.jpg',

'./assets/Images/Guardians-Galaxy-3.jpg',
'./assets/Images/Mary Queen of Scots.jpg',
'./assets/Images/birds-of-prey.jpg', 
'./assets/Images/Terminal_2018-min.jpg',
'./assets/Images/accidentals/suiceide squad skulls gif.gif',
'./assets/Images/kartoon harley quinn.png',
'./assets/Images/suicide squad 2016.jpg',
'./assets/Images/margarot robbie.jpg',
'./assets/Images/suicide squad 2021.jpg',
'./assets/Images/terminal second wallpaper.jpg',

'./assets/Images/Guardians-Galaxy-3.jpg',
'./assets/Images/Mary Queen of Scots.jpg',
'./assets/Images/birds-of-prey.jpg', 
'./assets/Images/Terminal_2018-min.jpg',
'./assets/Images/joker glitching.gif',
'./assets/Images/kartoon harley quinn.png',
'./assets/Images/suicide squad 2016.jpg',
'./assets/Images/margarot robbie.jpg',
'./assets/Images/suicide squad 2021.jpg',
'./assets/Images/terminal second wallpaper.jpg',

'./assets/Images/Guardians-Galaxy-3.jpg',
'./assets/Images/Mary Queen of Scots.jpg',
'./assets/Images/birds-of-prey.jpg', 
'./assets/Images/Terminal_2018-min.jpg',
'./assets/Images/joker glitching.gif',
'./assets/Images/kartoon harley quinn.png',
'./assets/Images/suicide squad 2016.jpg',
'./assets/Images/margarot robbie.jpg',
'./assets/Images/suicide squad 2021.jpg',
'./assets/Images/terminal second wallpaper.jpg',

'./assets/Images/Guardians-Galaxy-3.jpg',
'./assets/Images/Mary Queen of Scots.jpg',
'./assets/Images/birds-of-prey.jpg', 
'./assets/Images/Terminal_2018-min.jpg',
'./assets/Images/joker glitching.gif',
'./assets/Images/kartoon harley quinn.png',
'./assets/Images/suicide squad 2016.jpg',
'./assets/Images/margarot robbie.jpg',
'./assets/Images/suicide squad 2021.jpg',
'./assets/Images/terminal second wallpaper.jpg',

'./assets/Images/Guardians-Galaxy-3.jpg',
'./assets/Images/Mary Queen of Scots.jpg',
'./assets/Images/birds-of-prey.jpg', 
'./assets/Images/Terminal_2018-min.jpg',
'./assets/Images/joker glitching.gif',
'./assets/Images/kartoon harley quinn.png',
'./assets/Images/suicide squad 2016.jpg',
'./assets/Images/margarot robbie.jpg',
'./assets/Images/suicide squad 2021.jpg',
'./assets/Images/terminal second wallpaper.jpg',

'./assets/Images/Guardians-Galaxy-3.jpg',
'./assets/Images/Mary Queen of Scots.jpg',
'./assets/Images/birds-of-prey.jpg', 
'./assets/Images/Terminal_2018-min.jpg',
'./assets/Images/joker glitching.gif',
'./assets/Images/kartoon harley quinn.png',
'./assets/Images/suicide squad 2016.jpg',
'./assets/Images/margarot robbie.jpg',
'./assets/Images/suicide squad 2021.jpg',
'./assets/Images/terminal second wallpaper.jpg',





];






// for (let i = 0; i < NUM_IMAGES; i++) {
//   let width = (Math.floor(Math.random() * 3) + 2) * 100;
//   let height = (Math.floor(Math.random() * 3) + 2) * 100;
//   IMAGES.push(`http://unsplash.it/${width}/${height}`);
// }

let rows = [];
for (let i = 0; i < NUM_ROWS; i++) {
  let row = document.createElement('div');
  row.classList.add('row');
  rows.push(row);
}

let wall = document.getElementById('wall');
for (let i = 0; i < IMAGES.length; i++) {
  let index = i % rows.length;
  let row = rows[index];
  let onBottomRow = index === rows.length - 1;
  if (onBottomRow) {
    let frame = document.createElement('div');
    frame.classList.add('frame');
    frame.innerHTML = `
      <img src="${IMAGES[i]}">
      <div class="reflection">
        <img src="${IMAGES[i]}">
      </div>
    `;
    row.appendChild(frame);
  } else {
    let img = document.createElement('img');
    img.src = IMAGES[i];
    row.appendChild(img);
  }
}

rows.forEach(row => {
  wall.appendChild(row);
});

let debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this,args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

let scrollPosition = 0;
let scrollWall = debounce(event => {
  scrollPosition -= event.deltaY;
  wall.style.transform = `rotateY(45deg) translateX(${scrollPosition}px)`;
}, 10);





const wallEl = document.querySelector('#wall')

const options = []
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      window.addEventListener('wheel',(event) => {scrollWall(event)});
    }
  })
}
)

observer.observe(wallEl)






// window.addEventListener('wheel',  scrollWall);





// header spacer aligning 
setTimeout(() => {
  const header = document.querySelector('.header')
const headerSpacer = document.querySelector('.spacer')
let headerdimentions = header.getBoundingClientRect()
let headerBottom = headerdimentions.top + headerdimentions.height


headerSpacer.style.top = headerBottom + 10 + 'px' 
}, 1000);

// changing the hero image


const heroImage = document.querySelector('#hero-picture')




















/* hero image transition */


