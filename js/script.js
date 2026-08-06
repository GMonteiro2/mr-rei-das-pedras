/* =============================================
   SCRIPTS GERAIS DO SITE — Mr Rei das Pedras
   JavaScript puro, sem dependências externas
   ============================================= */

/* ===== 1. NAVBAR: fundo sólido ao rolar ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('glass-nav', 'shadow-lg', 'shadow-black/30');
  } else {
    navbar.classList.remove('glass-nav', 'shadow-lg', 'shadow-black/30');
  }
});

/* ===== 2. MENU MOBILE (abrir/fechar hambúrguer) ===== */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  });
});

/* ===== 3. CONTADOR NUMÉRICO ANIMADO (seção Sobre) ===== */
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'));
      let current = 0;
      const increment = target / 60;

      const updateCount = () => {
        current += increment;
        if (current < target) {
          el.textContent = Math.ceil(current);
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = target;
        }
      };
      updateCount();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(counter => counterObserver.observe(counter));

/* ===== 4. FILTRO DO SHOWROOM ===== */
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryEmpty = document.getElementById('gallery-empty');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filterValue = btn.getAttribute('data-filter');

    filterBtns.forEach(b => {
      b.classList.remove('active-filter', 'border-marmore-bronze', 'text-marmore-bronze');
      b.classList.add('border-marmore-cinza', 'text-marmore-off/70');
    });
    btn.classList.add('active-filter', 'border-marmore-bronze', 'text-marmore-bronze');
    btn.classList.remove('border-marmore-cinza', 'text-marmore-off/70');

    let visibleCount = 0;
    galleryItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (filterValue === 'todos' || itemCategory === filterValue) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    galleryEmpty.classList.toggle('hidden', visibleCount > 0);
  });
});

/* ===== 5. MODAL / LIGHTBOX DAS FOTOS DO SHOWROOM ===== */
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxWhatsapp = document.getElementById('lightbox-whatsapp');
const lightboxClose = document.getElementById('lightbox-close');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const captionEl = item.querySelector('p');
    const captionText = captionEl ? captionEl.textContent : 'Projeto Mr Rei das Pedras';

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = captionText;

    const mensagem = encodeURIComponent(`Olá! Vi o projeto "${captionText}" no site e quero um projeto parecido.`);
    lightboxWhatsapp.href = `https://wa.me/5521991628672?text=${mensagem}`;

    lightboxModal.classList.remove('hidden');
    lightboxModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightboxModal.classList.add('hidden');
  lightboxModal.classList.remove('flex');
  document.body.style.overflow = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightboxModal.addEventListener('click', (e) => {
  if (e.target === lightboxModal) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

/* ===== 6. ANO ATUAL NO FOOTER ===== */
document.getElementById('ano-atual').textContent = new Date().getFullYear();