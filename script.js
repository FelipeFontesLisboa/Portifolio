//tipyng efect
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
  loop: true
});

typewriter.typeString('Procurando um desenvolvedor FrontEnd ?')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Aqui estão Alguns de meus Projetos. ')
  .pauseFor(2500)
  .deleteChars(10)
  .typeString('Fiquem a vontade.')
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