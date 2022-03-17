// NABVAR
// Selectors

const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar__toggler-container');
const navbarTogglerIcon = document.querySelector('.navbar__toggler');
const navbarContainer = document.querySelector('.navbar__container');
const navbarItemActive = document.querySelector('.navbar__item--active');

// functions

const toggleMenu = () => {
  navbarContainer.classList.toggle('navbar__container--active');
  navbarTogglerIcon.classList.toggle('toggler--active');
  body.classList.toggle('body--overflow');
};

const closeMenu = () => {
  navbarContainer.classList.remove('navbar__container--active');
  navbarTogglerIcon.classList.toggle('toggler--active');
  body.classList.toggle('body--overflow');
};

// Events

navbarToggler.addEventListener('click', toggleMenu);
navbarItemActive.addEventListener('click', closeMenu);

// Event for Scrolling

let scrolling = false;

window.addEventListener('scroll', () => {
  scrolling = true;
});

setInterval(() => {
  if (scrolling) {
    scrolling = false;
    if (window.scrollY === 0) {
      navbar.classList.remove('navbar--scrolled');
      navbarTogglerIcon.classList.remove('toggler--scrolled');
    } else {
      navbar.classList.add('navbar--scrolled');
      navbarTogglerIcon.classList.add('toggler--scrolled');
    }
  }
}, 300);

// DYNAMIC SECTION FOR GUESTS
// Guests Object

const guestsArr = [
  {
    name: 'Amanyire Ricky',
    role: 'Berkman Professor of Entrepreneurial Camping Studies at Harvard Law School',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: './assets/img/guests/g1.webp',
  }, {
    name: 'John Doe',
    role: 'Experienced traveler of Africa with great mastery in knots',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: './assets/img/guests/g2.jpg',
  }, {
    name: 'Annya Taylor joy',
    role: 'Famous adventurer and PHD in biodiversity of the world',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: './assets/img/guests/g3.jpg',
  }, {
    name: 'Jet Lee',
    role: 'Master in the arts of surviving against any adversity',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: './assets/img/guests/g4.jpg',
  }, {
    name: 'Mesut Ozil',
    role: 'We needed to fill this place, she\'s not that special',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: './assets/img/guests/g5.jpg',
  }, {
    name: 'Kevin Sentalo',
    role: 'The great and magnificent bald Lao',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: './assets/img/guests/g6.jpg',
  },
];

// Selectors

const guestsList = document.querySelector('.guests__list');

// Function

const appendGuests = () => {
  for (let i = 0; i < guestsArr.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = `<div class="guests__img-container">
        <span class="guests__decor-img"></span>
        <img src="${guestsArr[i].imgSrc}" alt="Photo of the first guest" class="guests__img">
      </div>
      <div class="guests__info">
        <hgroup>
          <h3 class="guests__name">${guestsArr[i].name}</h3>
          <h4 class="guests__role">${guestsArr[i].role}</h4>
        </hgroup>
        <span class="title-decor title-decor--small"></span>
        <p class="guests__desc">${guestsArr[i].desc}</p>
      </div>`;
    li.classList.add('guests__card');
    guestsList.appendChild(li);
  }
};

// ACCORDION FOR GUESTS
// Selectors

const moreButton = document.querySelector('.guests__accordion');

// Functions

const accordionGuests = () => {
  const guestCards = Array.from(document.querySelectorAll('.guests__card'));
  for (let i = 2; i < guestCards.length; i += 1) {
    guestCards[i].classList.add('guests__card--collapse');
  }
};

const openAccordion = () => {
  const guestCards = Array.from(document.querySelectorAll('.guests__card'));
  if (moreButton.classList.contains('guests__accordion--collapsed')) {
    for (let i = 2; i < guestCards.length; i += 1) {
      guestCards[i].classList.remove('guests__card--collapse');
    }
    moreButton.classList.remove('guests__accordion--collapsed');
    moreButton.innerHTML = 'LESS<span class="fas fa-chevron-up">';
  } else {
    for (let i = 2; i < guestCards.length; i += 1) {
      guestCards[i].classList.add('guests__card--collapse');
    }
    moreButton.classList.add('guests__accordion--collapsed');
    moreButton.innerHTML = 'MORE<span class="fas fa-chevron-down">';
  }
};

// Events for Accordion

moreButton.addEventListener('click', openAccordion);

// Events in window.onload event

window.onload = () => {
  appendGuests();
  accordionGuests();
};
