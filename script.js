//tipyng efect
const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
  loop: true,
});

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

const buttonMenuLateral = document.querySelector('.buttonMenu-lateral');
const menuLateral = document.querySelector('.menu-lateral');

function showMenuLateral() {
  menuLateral.classList.toggle('ativo');  // Corrigido: 'ativo' em vez de '.ativo'
}

buttonMenuLateral.addEventListener('click', showMenuLateral);

