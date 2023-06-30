const emailOut = document.querySelector('.input-email');
const form = document.querySelector('.form');
const small = document.querySelector('.smalll');
const validado = document.querySelector('.validado');
const containerP = document.querySelector('.container-principal');
const dimiss = document.querySelector('.button-confirm');
const strongOut = document.querySelector('strong');


emailOut.addEventListener('keyup', () => {
  if(validacaoEmail(emailOut.value) !== true){
    small.style.display = "block";
    emailOut.classList.add('invalido');
  } else {
    small.style.display = "none";
    emailOut.classList.remove('invalido');
  }
})

function validacaoEmail(emailOut) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(emailOut);
}

form.addEventListener('submit' , (e) => {
  e.preventDefault();
  const emailV = emailOut.value;
  strongOut.textContent = emailV;
  containerP.style.display = "none"
  validado.style.display = "block"
})

function voltar() {
  containerP.style.display = "";
  validado.style.display = "none";
  emailOut.value = "";
  emailOut.focus();
}

dimiss.addEventListener('click', voltar);

