function carregarDados() {
    const jsonData = '{"nome": "Gabriele", "idade": 20}';
    const objeto = JSON.parse(jsonData);
    document.getElementById("resultado").innerText = `Nome: ${objeto.nome}, Idade: ${objeto.idade}`;
    }