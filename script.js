const botao = document.querySelector('#button');

botao.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('Email').value;
  const senha = document.getElementById('senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const clkbotao = document.querySelector('#submit-btn');
const clkcheck = document.querySelector('#agreement');

clkcheck.addEventListener('change', function() {
  if (clkcheck.checked === true) {
    clkbotao.disabled = false;
  } else {
    clkbotao.disabled = true;
  }
});