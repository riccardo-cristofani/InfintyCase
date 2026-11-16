if (
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const elements = document.querySelectorAll(
    '.hero-image, .hero-heading > *, .hero-details > *, .feature-list > *, ' +
    '.project-note-content > *, .request-copy > *, .form-wrap, ' +
    '.cover-preview-heading > *, .cover-preview-card, .catalog-heading > *, ' +
    '.cover-card, .preorder-note > *'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, { threshold: 0.15 });

  elements.forEach((element) => {
    element.classList.add('motion-reveal');
    observer.observe(element);
  });
}
