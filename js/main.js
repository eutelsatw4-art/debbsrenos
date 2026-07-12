(function() {
  'use strict';

  function initAdminOverrides() {
    const hero = JSON.parse(localStorage.getItem('admin_hero') || '{}');
    if (hero.heroTitle) {
      const h1 = document.querySelector('.hero-content h1');
      if (h1) h1.textContent = hero.heroTitle;
    }
    if (hero.heroSubtitle) {
      const h2 = document.querySelector('.hero-content h2');
      if (h2) h2.textContent = hero.heroSubtitle;
    }
    if (hero.heroBtnText) {
      const btn = document.querySelector('.hero-btn');
      if (btn) btn.textContent = hero.heroBtnText;
    }

    const servicesText = localStorage.getItem('admin_services');
    if (servicesText) {
      const lines = servicesText.split('\n').filter(line => line.trim());
      const servicesGrid = document.querySelector('.services-grid');
      if (servicesGrid) {
        servicesGrid.innerHTML = '';
        lines.forEach(line => {
          const [title, desc] = line.split('|');
          const card = document.createElement('div');
          card.className = 'service-card';
          card.innerHTML = '<h3>' + (title || '').trim() + '</h3><p>' + (desc || '').trim() + '</p>';
          servicesGrid.appendChild(card);
        });
      }
    }

    const footer = JSON.parse(localStorage.getItem('admin_footer') || '{}');
    if (footer.desc) {
      const descEl = document.querySelector('.footer-col h4');
      if (descEl) {
        const next = descEl.nextElementSibling;
        if (next) next.textContent = footer.desc;
      }
    }
    if (footer.email) {
      document.querySelectorAll('.footer-col p').forEach(p => {
        if (p.textContent.startsWith('Email:')) p.textContent = 'Email: ' + footer.email;
      });
    }
    if (footer.phone) {
      document.querySelectorAll('.footer-col p').forEach(p => {
        if (p.textContent.startsWith('Phone:')) p.textContent = 'Phone: ' + footer.phone;
      });
    }
    if (footer.address) {
      document.querySelectorAll('.footer-col p').forEach(p => {
        if (p.textContent.includes('Winnipeg')) p.textContent = footer.address;
      });
    }
    if (footer.copyright) {
      const copyrightEl = document.querySelector('.copyright');
      if (copyrightEl) copyrightEl.textContent = footer.copyright;
    }

    const contact = JSON.parse(localStorage.getItem('admin_contact') || '{}');
    if (contact.hours) {
      document.querySelectorAll('.contact-info p').forEach(p => {
        if (p.textContent.includes('Monday') || p.textContent.includes('Business Hours')) {
          p.textContent = 'Business Hours: ' + contact.hours;
        }
      });
    }

    const logo = localStorage.getItem('admin_logo');
    if (logo) {
      const logoImg = document.querySelector('.logo img');
      if (logoImg) logoImg.src = logo;
    }

    const sliderImages = JSON.parse(localStorage.getItem('admin_slider_images') || '[]');
    if (sliderImages.length > 0) {
      const slides = document.querySelectorAll('.slide img');
      slides.forEach((img, i) => {
        if (sliderImages[i]) img.src = sliderImages[i];
      });
    }

    const sliderContent = JSON.parse(localStorage.getItem('admin_slider_content') || '[]');
    if (sliderContent.length > 0) {
      const slides = document.querySelectorAll('.slide');
      slides.forEach((slide, i) => {
        if (sliderContent[i]) {
          const title = slide.querySelector('h3');
          const desc = slide.querySelector('p');
          if (title) title.textContent = sliderContent[i].title || '';
          if (desc) desc.textContent = sliderContent[i].desc || '';
        }
      });
    }
  }

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

  function initImageFallbacks() {
    const fallbackSrc = 'https://picsum.photos/1200/600';
    document.querySelectorAll('img').forEach(function(img) {
      let triedFallback = false;
      img.addEventListener('error', function() {
        if (!triedFallback) {
          triedFallback = true;
          img.src = fallbackSrc;
          img.alt = 'Project image';
        } else {
          img.style.display = 'none';
          const parent = img.parentElement;
          if (parent) {
            const fallback = document.createElement('div');
            fallback.className = 'img-fallback';
            fallback.textContent = img.alt || 'Image unavailable';
            parent.insertBefore(fallback, img);
          }
        }
      });
    });
  }

  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;
    let current = 0;
    const total = slides.length;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % total;
      slides[current].classList.add('active');
    }, 5000);
  }

  function initScrollHeader() {
    const header = document.querySelector('header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initSlider();
    initFilters();
    initContactForms();
    initImageFallbacks();
    initHeroSlider();
    initScrollHeader();
  });
})();
