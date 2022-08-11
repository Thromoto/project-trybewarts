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
