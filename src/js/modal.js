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
    openModalBtn: document.querySelector('[product-card-modal-open]'),
    closeModalBtn: document.querySelector('[product-card-modal-close]'),
    modal: document.querySelector('[product-card-modal]'),
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

