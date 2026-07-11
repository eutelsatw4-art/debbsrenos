(function() {
  'use strict';

  function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    const slides = slider.querySelector('.slides');
    const slideEls = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.slider-btn.prev');
    const nextBtn = slider.querySelector('.slider-btn.next');
    const dotsContainer = slider.querySelector('.slider-dots');
    let currentIndex = 0;
    const totalSlides = slideEls.length;
    let autoplayInterval;

    if (totalSlides === 0) return;

    function createDots() {
      if (!dotsContainer) return;
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', function() {
          goToSlide(i);
          resetAutoplay();
        });
        dotsContainer.appendChild(dot);
      }
      updateDots();
    }

    function updateDots() {
      const dots = slider.querySelectorAll('.dot');
      dots.forEach(function(dot, idx) {
        if (idx === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;
      slides.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
      updateDots();
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function resetAutoplay() {
      clearInterval(autoplayInterval);
      autoplayInterval = setInterval(nextSlide, 4000);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        prevSlide();
        resetAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        nextSlide();
        resetAutoplay();
      });
    }

    createDots();
    autoplayInterval = setInterval(nextSlide, 4000);

    slider.addEventListener('mouseenter', function() {
      clearInterval(autoplayInterval);
    });

    slider.addEventListener('mouseleave', function() {
      autoplayInterval = setInterval(nextSlide, 4000);
    });
  }

  function initFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const category = btn.dataset.filter;
        galleryItems.forEach(function(item) {
          item.style.display =
            category === 'all' || item.dataset.category === category
              ? 'block'
              : 'none';
        });
      });
    });
  }

  function initContactForms() {
    const forms = document.querySelectorAll('form[action*="formsubmit.co"]');
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
          btn.textContent = 'Sending...';
          btn.disabled = true;
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initSlider();
    initFilters();
    initContactForms();
  });
})();
