// Aparición suave de los elementos .reveal al entrar en pantalla (se anula con prefers-reduced-motion en CSS).
const els = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window && els.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add('is-in'));
}
