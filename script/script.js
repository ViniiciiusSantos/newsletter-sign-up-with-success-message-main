let emailOut = document.querySelector('.input-email');
let form = document.querySelector('.form');
let small = document.querySelector('.smalll');
let validado = document.querySelector('.validado')


form.addEventListener('submit' , (e)=>{
  if(validacao(emailOut.value) == true) {
      validado.style.display = 'block';
  } else {
      small.style.display = 'block'
  }
  e.preventDefault()
})

function validacao(email) {
  var emailPadrao = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPadrao.test(email);
}