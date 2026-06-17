(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var closeBtn = document.getElementById('lightbox-close');

    if (!lightbox || !lightboxImage || !closeBtn) {
      return;
    }

    function openLightbox(src, alt) {
      lightboxImage.src = src;
      lightboxImage.alt = alt || '';
      lightbox.classList.remove('hidden');
      document.body.classList.add('lightbox-open');
    }

    function closeLightbox() {
      lightbox.classList.add('hidden');
      lightboxImage.src = '';
      document.body.classList.remove('lightbox-open');
    }

    document.querySelectorAll('.paper-thumb').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var img = thumb.querySelector('img');
        var src = thumb.dataset.full || (img && img.src);
        var alt = img ? img.alt : '';
        if (src) {
          openLightbox(src, alt);
        }
      });
    });

    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    closeBtn.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !lightbox.classList.contains('hidden')) {
        closeLightbox();
      }
    });
  });
})();
