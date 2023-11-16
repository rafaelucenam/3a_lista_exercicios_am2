function sortArrayStr(arr, typeSort) {
    if (arr.length > 100 || (typeSort !== 1 && typeSort !== -1)) {
        return null;
    }

    const sortedArray = [...arr];
    sortedArray.sort((a, b) => (typeSort === 1 ? a.localeCompare(b) : b.localeCompare(a)));

    return sortedArray;
}

function sortArray() {
    const inputWords = document.getElementById("inputWords").value;
    const selectSortType = document.getElementById("selectSortType");
    const result = document.getElementById("result_1");

    const words = inputWords.split(",").map(word => word.trim());
    const sortType = parseInt(selectSortType.value);

    const sortedArray = sortArrayStr(words, sortType);

    if (sortedArray !== null) {
        result.textContent = "Vetor Ordenado: " + sortedArray.join(", ");
    } else {
        result.textContent = "Parâmetros inválidos. Verifique o número de palavras e o tipo de ordenação.";
    }
}
