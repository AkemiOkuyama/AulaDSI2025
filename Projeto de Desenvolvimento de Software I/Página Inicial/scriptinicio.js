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

function animarAoScroll() {
    const alturaVisivel = window.innerHeight * 0.85;

    elementosAnimados.forEach(el => {
        const posicaoTopo = el.getBoundingClientRect().top;
        if (posicaoTopo < alturaVisivel) {
            el.classList.add('visivel');
        }
    });
}

window.addEventListener('scroll', animarAoScroll);
window.addEventListener('load', animarAoScroll);

document.querySelectorAll('.botao').forEach(botao => {
    botao.addEventListener('mouseenter', () => {
        botao.style.transform = 'scale(1.05)';
    });
    botao.addEventListener('mouseleave', () => {
        botao.style.transform = 'scale(1)';
    });
});
