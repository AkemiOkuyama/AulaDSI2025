function enviarContato(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !telefone || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert(`Obrigado pelo contato, ${nome}! Em breve entraremos em contato.`);
  event.target.reset();
}
