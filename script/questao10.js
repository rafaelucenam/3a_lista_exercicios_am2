const labirinto = [
    ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
    ["E", "C", "C", "C", "C", "C", "C", "C", "C", "C", "M"],
    ["M", "C", "M", "M", "M", "C", "M", "M", "M", "C", "M"],
    ["M", "C", "M", "C", "M", "C", "M", "C", "C", "C", "M"],
    ["M", "C", "M", "C", "M", "C", "M", "C", "M", "M", "M"],
    ["M", "C", "C", "C", "C", "C", "M", "C", "C", "C", "M"],
    ["M", "M", "M", "C", "M", "C", "M", "C", "M", "M", "M"],
    ["M", "C", "C", "C", "M", "C", "M", "C", "C", "C", "M"],
    ["M", "C", "M", "M", "M", "C", "M", "C", "M", "C", "M"],
    ["M", "C", "C", "C", "C", "C", "C", "C", "M", "C", "S"],
    ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M"]
];

function exibirLabirinto() {
    const table = document.getElementById("labirinto");
    table.innerHTML = "";

    for (let i = 0; i < labirinto.length; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < labirinto[i].length; j++) {
            const cell = document.createElement("td");
            cell.textContent = labirinto[i][j];

            switch (labirinto[i][j]) {
                case "E":
                    cell.className = "start";
                    break;
                case "S":
                    cell.className = "end";
                    break;
                case "M":
                    cell.className = "wall";
                    break;
                case "C":
                    cell.className = "path";
                    break;
            }

            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

function resolverLabirinto() {
    const start = encontrarPosicao("E");
    const end = encontrarPosicao("S");

    if (!start || !end) {
        alert("Labirinto inválido. Certifique-se de que há uma entrada (E) e uma saída (S).");
        return;
    }

    const caminhoEncontrado = percorrerLabirinto(start[0], start[1], end);

    if (caminhoEncontrado) {
        exibirLabirinto();
        alert("Labirinto resolvido! Caminho encontrado da entrada para a saída.");
    } else {
        alert("Não foi possível encontrar um caminho da entrada para a saída.");
    }
}

function encontrarPosicao(valor) {
    for (let i = 0; i < labirinto.length; i++) {
        for (let j = 0; j < labirinto[i].length; j++) {
            if (labirinto[i][j] === valor) {
                return [i, j];
            }
        }
    }
    return null;
}

function percorrerLabirinto(i, j, end) {
    if (i < 0 || i >= labirinto.length || j < 0 || j >= labirinto[i].length || labirinto[i][j] === "M") {
        return false;
    }

    if (labirinto[i][j] === "S") {
        return true;
    }

    if (labirinto[i][j] === "C" || labirinto[i][j] === "E") {
        labirinto[i][j] = "X";

        if (
            percorrerLabirinto(i - 1, j, end) ||
            percorrerLabirinto(i + 1, j, end) ||
            percorrerLabirinto(i, j - 1, end) ||
            percorrerLabirinto(i, j + 1, end)
        ) {
            return true;
        }

        labirinto[i][j] = "C";
    }

    return false;
}

exibirLabirinto();
