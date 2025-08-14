//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// lista para adicionar os nomes. 
let amigos = [];

// Adiciona um amigo à lista
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    document.getElementById("amigo").value = "";
    atualizarLista();
}

// Atualiza a lista de nomes
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Sorteia um amigo aleatório
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = "Amigo secreto: " + amigoSorteado;
    ulResultado.appendChild(li);
}
