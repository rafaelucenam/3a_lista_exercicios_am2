function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimes(arr) {
    const numbers = arr.split(',').map(Number);
    const primeNumbers = numbers.filter(num => isPrime(num));
    return primeNumbers.length > 0 ? primeNumbers : null;
}

function filterAndDisplayPrimes() {
    const input = document.getElementById('numberArray').value;
    const primeNumbersDiv = document.getElementById('primeNumbers');

    const primeResult = filterPrimes(input);
    if (primeResult !== null) {
        primeNumbersDiv.innerHTML = `<p>Números Primos Encontrados: ${primeResult.join(', ')}</p>`;
    } else {
        primeNumbersDiv.innerHTML = `<p>Nenhum número primo encontrado no vetor.</p>`;
    }
}