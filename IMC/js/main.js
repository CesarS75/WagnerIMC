//capturar os dados do formulário

const dados = document.querySelector('#forms');

dados.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Tente de novo');
});