document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const elements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

document.getElementById('formContato').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const telefone = this.telefone.value.trim();
  const mensagem = this.mensagem.value.trim();

  if (!nome || !email || !telefone || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert(`Agradecemos pelo seu contato, ${nome}! Em breve retornaremos você.`);
  this.reset();
});
