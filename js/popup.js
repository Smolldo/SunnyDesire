const back = document.querySelector('.popup_cover');
const clsPop = document.querySelector('.close_pop');

window.onload = () =>{
    setTimeout(() =>{
        back.classList.toggle('is-active');
    },2100)
};


const closePop = () => {
    back.classList.toggle('is-active');
};

clsPop.addEventListener('click', closePop);
