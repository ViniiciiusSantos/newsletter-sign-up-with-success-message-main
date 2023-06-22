let emailOut = document.querySelector('.input-email');
let form = document.querySelector('.form');
let small = document.querySelector('.smalll');
let validado = document.querySelector('.validado')

if (emailOut && form && small && validado) {
    form.addEventListener('submit', (e) => {
      if (validacao(emailOut.value)) {
        validado.style.display = 'block';
        small.style.display = 'none';
      } else {
        small.style.display = 'block';
        validado.style.display = 'none';
      }
      e.preventDefault();
    });
  }
  
  function validacao(email) {
    var emailPadrao = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPadrao.test(email);
  }