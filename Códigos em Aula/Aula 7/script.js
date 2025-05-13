function carregarDados() {
    const jsonData = `[
        {"nome": "Gabriele", "idade": 20},
        {"nome": "Maressa", "idade": 18},
        {"nome": "Giovanna", "idade": 19}
    ]`;

    const lista = JSON.parse(jsonData);
    let soma = 0;
    let html = "<ul>";

    lista.forEach(pessoa => {
        html += `<li>Nome: ${pessoa.nome}, Idade: ${pessoa.idade}</li>`;
        soma += pessoa.idade;
    });

    const quantidade = lista.length;
    const media = soma / quantidade;

    html += `</ul>
        <p><strong>Quantidade de pessoas:</strong> ${quantidade}</p>
        <p><strong>Soma das idades:</strong> ${soma}</p>
        <p><strong>Média das idades:</strong> ${media.toFixed(1)}</p>`;

    document.getElementById("resultado").innerHTML = html;
}
