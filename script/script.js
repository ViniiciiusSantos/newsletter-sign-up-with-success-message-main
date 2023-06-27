const emailOut = document.querySelector('.input-email');
const form = document.querySelector('.form');
const small = document.querySelector('.smalll');
const validado = document.querySelector('.validado');
const containerP = document.querySelector('.container-principal');
const dimiss = document.querySelector('.button-confirm');


form.addEventListener('submit' , (e) => {
  e.preventDefault();
  containerP.style.display = "none"
  validado.style.display = "block"
})

function voltar() {
  containerP.style.display = "";
  validado.style.display = "none";
}
dimiss.addEventListener('click', voltar);

