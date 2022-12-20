// Read more modal
(() => {
  const refs = {
    openModalBtn: document.querySelector('[read-more-modal-open]'),
    closeModalBtn: document.querySelector('[read-more-modal-close]'),
    modal: document.querySelector('[read-more-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleBackdropModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('body-fixed')
  }
  function toggleBackdropModal(e) {
    
    if(e.target.classList[0] === "backdrop"){
     document.body.classList.toggle('body-fixed')
    refs.modal.classList.toggle('is-hidden');
   }
  }
})();

// our locotion modal
(() => {
  const refs = {
    openModalBtn: document.querySelector('[location-modal-open]'),
    closeModalBtn: document.querySelector('[location-modal-close]'),
    modal: document.querySelector('[location-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleBackdropModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('body-fixed')
  }
  function toggleBackdropModal(e) {
    
    if(e.target.classList[0] === "backdrop"){
     document.body.classList.toggle('body-fixed')
    refs.modal.classList.toggle('is-hidden');
   }
  }
})();

// franchise modal
(() => {
  const refs = {
    openModalBtn: document.querySelector('[franchise-modal-open]'),
    closeModalBtn: document.querySelector('[franchise-modal-close]'),
    modal: document.querySelector('[franchise-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleBackdropModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('body-fixed')
  }
  function toggleBackdropModal(e) {
    
    if(e.target.classList[0] === "backdrop"){
     document.body.classList.toggle('body-fixed')
    refs.modal.classList.toggle('is-hidden');
   }
  }
})();


// product info madal
(() => {
  const refs = {
    openModalBtn: document.querySelector('[prod-modal-open]'),
    closeModalBtn: document.querySelector('[prod-modal-close]'),
    modal: document.querySelector('[prod-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleBackdropModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('body-fixed')
  }
  function toggleBackdropModal(e) {
    
    if(e.target.classList[0] === "backdrop"){
     document.body.classList.toggle('body-fixed')
    refs.modal.classList.toggle('is-hidden');
   }
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[prod-modal-open2]'),
    closeModalBtn: document.querySelector('[prod-modal-close]'),
    modal: document.querySelector('[prod-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleBackdropModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('body-fixed')
  }
  function toggleBackdropModal(e) {
    
    if(e.target.classList[0] === "backdrop"){
     document.body.classList.toggle('body-fixed')
    refs.modal.classList.toggle('is-hidden');
   }
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[prod-modal-open3]'),
    closeModalBtn: document.querySelector('[prod-modal-close]'),
    modal: document.querySelector('[prod-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleBackdropModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('body-fixed')
  }
  function toggleBackdropModal(e) {
    
    if(e.target.classList[0] === "backdrop"){
     document.body.classList.toggle('body-fixed')
    refs.modal.classList.toggle('is-hidden');
   }
  }
})();

// header scroll
window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.querySelector('[data-header]');
  const headerOffsetTrigger = header.offsetHeight;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add('header--transparent');
  } else {
    header.classList.remove('header--transparent');
  }
}

// mobile menu
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLink = document.querySelectorAll('.mobile-menu__link');
  const buyNowBtn = document.querySelector('.buy-now-button--tablet-none');

  

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
closeMenuLink.forEach(item => item.addEventListener("click", toggleMenu));
buyNowBtn.addEventListener("click", toggleMenu);
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// buy now modal
(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-now-modal-open]'),
    closeModalBtn: document.querySelector('[buy-now-modal-close]'),
    modal: document.querySelector('[buy-now-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleBackdropModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('body-fixed')
  }
  function toggleBackdropModal(e) {
    
    if(e.target.classList[0] === "backdrop"){
     document.body.classList.toggle('body-fixed')
    refs.modal.classList.toggle('is-hidden');
   }
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-now-modal-open2]'),
    closeModalBtn: document.querySelector('[buy-now-modal-close2]'),
    modal: document.querySelector('[buy-now-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleBackdropModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('body-fixed')
  }
  function toggleBackdropModal(e) {
    
    if(e.target.classList[0] === "backdrop"){
     document.body.classList.toggle('body-fixed')
    refs.modal.classList.toggle('is-hidden');
   }
  }
})();

