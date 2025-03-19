let participantes = [];

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

function sortearAmigoSecreto() {
    
    let sorteio = [...participantes];
    embaralhar(sorteio);
    
    let escolhido = sorteio[0]; 
    
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>O amigo secreto sorteado é: ${escolhido}</h3>`;
}

function adicionarParticipante() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();

    if (nome && !participantes.includes(nome)) {
        participantes.push(nome);
        atualizarLista();
    } else {
        alert("Nome inválido ou já adicionado!");
    }

    nomeInput.value = ""; 
}

function atualizarLista() {
    let listaDiv = document.getElementById("listaParticipantes");
    listaDiv.innerHTML = "<h3>Participantes:</h3>";

    participantes.forEach(nome => {
        listaDiv.innerHTML += `<p>${nome}</p>`;
    });
}
