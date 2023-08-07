//capturar os dados do formulário

const dados = document.querySelector('#forms');

dados.addEventListener('reset', function(e){
    const limpa = document.querySelector('#resultado');
    limpa.innerHTML = '';
});

dados.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);

    console.log (peso, altura);

    if (!peso) {
        setMostra('Peso inválido');
        return;
    }
    if (!altura) {
        setMostra('Altura inválida');
        return;
    }

    const IMC = getImc(peso, altura);
    const classeIMC = getClasseIMC(IMC);
    const mensagem = `Seu IMC é ${IMC} e sua classificação é ${classeIMC}`;
    
    setMostra(mensagem, true);
});

function getClasseIMC(IMC) {
    const classe = [
        'Abaixo do peso',
        'Peso Normal',
        'Sobrepeso',
        'Obeso',
        'Obeso Mórbido'
    ];

    if (IMC > 40) return classe[4];
    if (IMC >= 39) return classe[3];
    if (IMC >= 25) return classe[2];
    if (IMC >= 18.5) return classe[1];
    if (IMC < 18.5) return classe[0];
}

function getImc (Peso, Altura) {
    const imc = Peso / (Altura ** 2);
    return imc.toFixed(2);
}

function setMostra (frase, verifica) {
    const mensagem = document.querySelector('#resultado');
    mensagem.innerHTML = '';

    const parag = criaP();

    verifica ? parag.classList.add('sim') : parag.classList.add('nao');

    parag.innerHTML = frase;

    mensagem.appendChild(parag);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}