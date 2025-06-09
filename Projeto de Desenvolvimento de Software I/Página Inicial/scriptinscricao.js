function Inscrever(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const email = document.getElementById('email').value.trim();
  const nascimento = document.getElementById('nascimento').value;
  const matricula = document.getElementById('matricula').value.trim();
  const inicio = document.getElementById('inicio').value;
  const conclusao = document.getElementById('conclusao').value;
  const curso = document.getElementById('curso').value;

  if (!nome || !telefone || !email || !nascimento || !matricula || !inicio || !conclusao || !curso) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert(`Agradecemos a sua inscrição, ${nome}!`);
  event.target.reset();
}
