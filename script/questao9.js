function numeroEmPalavras(numero) {
    const unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    const especiais = ['', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    const dezenas = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    const centenas = ['', 'cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

    if (numero === 0) {
        return 'zero';
    }

    if (numero < 0 || numero > 1000000) {
        return 'Número fora da faixa válida';
    }

    let resultado = '';

    if (Math.floor(numero / 1000000) > 0) {
        resultado += numeroEmPalavras(Math.floor(numero / 1000000)) + ' milhão ';
        numero %= 1000000;
    }

    if (Math.floor(numero / 1000) > 0) {
        const milhares = Math.floor(numero / 1000);
        resultado += milhares === 1 ? 'mil ' : numeroEmPalavras(milhares) + ' mil ';
        if (numero % 1000 !== 0) {
            resultado += ' e ';
        }
        numero %= 1000;
    }

    if (numero > 99) {
        if (numero === 100) {
            resultado += 'cem ';
        } else if (100 < numero && numero < 200) {
            resultado += 'cento e ';
        } else {
            resultado += centenas[Math.floor(numero / 100)];
            if (numero % 10 !== 0) {
                resultado += ' e ';
            }
        }
        numero %= 100;
    }

    if (numero > 0) {
        if (numero === 10) {
            resultado += 'dez ';
        } else if (numero < 10) {
            resultado += unidades[numero];
        } else if (numero < 20) {
            resultado += especiais[numero - 10];
        } else {
            resultado += dezenas[Math.floor(numero / 10)];
            if (numero % 10 !== 0) {
                resultado += ' e ' + unidades[numero % 10];
            }
        }
    }

    return resultado.trim();
}

function converterNumero() {
    const inputNumero = document.getElementById('inputNumero').value;
    const resultado = document.getElementById('result_9');

    if (inputNumero.trim() === '' || isNaN(inputNumero)) {
        resultado.textContent = 'Por favor, insira um número válido.';
    } else {
        const numero = parseInt(inputNumero, 10);
        resultado.textContent = numeroEmPalavras(numero);
    }
}