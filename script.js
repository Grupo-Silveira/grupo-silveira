// Menu responsivo
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Animação fade-in ao rolar
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

  const contadores = document.querySelectorAll('.contador');
  const speed = 100;

  contadores.forEach(contador => {
    const atualizar = () => {
      const target = +contador.getAttribute('data-target');
      const atual = +contador.innerText;

      const incremento = Math.ceil(target / speed);

      if (atual < target) {
        contador.innerText = atual + incremento;
        setTimeout(atualizar, 30);
      } else {
        contador.innerText = target;
      }
    };

    atualizar();
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


document.getElementById('contato-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Mensagem enviada com sucesso!');
      this.reset();
    });