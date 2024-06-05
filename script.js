//tipyng efect
const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
  loop: true,
});

//digitação
typewriter
  .typeString("Procurando Um Desenvolvedor FrontEnd?")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Aqui estão alguns projetos. ")
  .pauseFor(2500)
  .deleteChars(10)
  .typeString("Sinta-se confortável.")
  .start();

//togle Modal
function toggleP() {
  let p = document.getElementById("Modal");
  if (p.style.display === "block") {
    p.style.display = "none";
  } else {
    p.style.display = "block";
  }
}

function initMenuHmburguer() {
  const buttonMenuLateral = document.querySelector('.buttonMenu-lateral');
  const menuLateral = document.querySelector('.menu-lateral');
  const buttonRemoveMenu = document.querySelector('.buttonRemoveMenu')

function showMenuLateral() {
  menuLateral.classList.toggle('ativo');
  buttonRemoveMenu.classList.toggle('ativo')
}

buttonRemoveMenu.addEventListener('click',showMenuLateral)
buttonMenuLateral.addEventListener('click', showMenuLateral);
}
initMenuHmburguer()


function initAnimationScrol() {
  

const nav = document.querySelector('nav');
const firstContainer = document.querySelector('.hero-container'); 


function activateNav() {

  const containerBottom = firstContainer.getBoundingClientRect().bottom;
  const isPastContainer = containerBottom <= 80;
  
  if (isPastContainer) {
    nav.classList.add('ativo');
  } else {
    nav.classList.remove('ativo');
  }
}
window.addEventListener('scroll', activateNav);
}
initAnimationScrol()