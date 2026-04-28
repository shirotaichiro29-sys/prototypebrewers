// ── Custom Cursor ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { 
  mx = e.clientX; 
  my = e.clientY; 
});

function animCursor() {
  cursor.style.left = mx + 'px'; 
  cursor.style.top = my + 'px';
  rx += (mx - rx) * .14; 
  ry += (my - ry) * .14;
  ring.style.left = rx + 'px'; 
  ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();

document.querySelectorAll('a, button, .menu-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width = '56px'; 
    ring.style.height = '56px'; 
    ring.style.opacity = '1';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width = '36px'; 
    ring.style.height = '36px'; 
    ring.style.opacity = '.6';
  });
});

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Menu Tabs ──
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { 
    if (e.isIntersecting) { 
      e.target.classList.add('visible'); 
    } 
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Contact Form ──
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.btn-submit');
  btn.innerHTML = '<span>Sending…</span>';
  btn.disabled = true;
  
  setTimeout(() => {
    document.getElementById('form-success').style.display = 'block';
    btn.style.display = 'none';
    this.reset();
  }, 1200);
});