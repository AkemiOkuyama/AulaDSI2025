document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const elementosAnimados = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

elementosAnimados.forEach(el => observer.observe(el));

document.querySelectorAll('.botao').forEach(botao => {
  botao.addEventListener('mouseenter', () => {
    botao.style.transform = 'scale(1.05)';
  });
  botao.addEventListener('mouseleave', () => {
    botao.style.transform = 'scale(1)';
  });
});

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
