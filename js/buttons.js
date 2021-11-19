//modal window
(() => {
    const refs = {
      openModalBtn: document.querySelectorAll('.reserve_btn'),
      closeModalBtn: document.querySelector('.closeModal__button'),
      modal: document.querySelector('.backdrop'),
    };
  
    refs.openModalBtn.forEach(e =>{
      e.addEventListener('click', toggleModal);
    });
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

 //callback button
 (() => {
  const callbackRefs = {
    openCallBack: document.querySelector('.open_callback'),
    closeCallBack: document.querySelector('.close_callback'),
    callback: document.querySelector('.callback_cover')
  };

  callbackRefs.openCallBack.addEventListener('click', toggleCallBack);
  callbackRefs.closeCallBack.addEventListener('click', toggleCallBack);

  function toggleCallBack() {
    callbackRefs.callback.classList.toggle('is-active');
  }
})();

(() => {
  const menuBtnRef = document.querySelector(".open_menu_btn")
  const mobileMenuRef = document.querySelector(".mobile_menu")
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })
})()


 const rdMr1 = document.querySelector('.readmore1');
 const rdMr2 = document.querySelector('.readmore2');
 const rdMr3 = document.querySelector('.readmore3');
 const text1 = document.querySelector('.t1');
 const text2 = document.querySelector('.t2');
 const text3 = document.querySelector('.t3');

 if (window.screen.width < 767) 
 {
  text1.classList.add('no-more');
  text2.classList.add('no-more');
  text3.classList.add('no-more');
 }


  rdMr1.addEventListener('click', () =>{
    text1.classList.toggle('no-more')
  })

  rdMr2.addEventListener('click', () =>{
    text2.classList.toggle('no-more')
})

rdMr3.addEventListener('click', () =>{
  text3.classList.toggle('no-more')
})

