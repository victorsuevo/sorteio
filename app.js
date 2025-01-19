let numerosGerados = [];
function gerar() {
    let length = parseInt(document.getElementById('length').value);
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let resultado = document.getElementById('resultado');

    if (max < min) {
        alert ('Intervalo impossivel.');
    }else if (length > (max - min + 1)) {
        alert ('O numero de sorteios excede o intervalo.');
    }else if (isNaN(length) || isNaN(min) || isNaN(max) ) {
        alert ('Preencha todos os campos.');
    }else {
        numerosGerados = [];
        for (let i = 0; i < length; i++){
            let matematicaParaResultado; 
            do {matematicaParaResultado = parseInt(Math.random() * (max - min + 1)) + min; } 
            while (numerosGerados.includes(matematicaParaResultado)); numerosGerados.push(matematicaParaResultado);
        }
        resultado.innerHTML = `Os numeros sao: ${numerosGerados.join(', ')}.`
        resultado.style.display = 'block';
    }
}

