// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkToggle.setAttribute('aria-pressed', isDark);
    darkToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  });
}




// Typing animation on homepage only
function typeText(element, text, delay = 100, callback) {
  let index = 0;
  element.textContent = '';
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, delay);
    } else if (callback) {
      callback();
    }
  }
  type();
}

document.addEventListener('DOMContentLoaded', () => {
  // Homepage hero typing animation
  const nameEl = document.getElementById('typed-name');
  const subtitleEl = document.getElementById('typed-subtitle');
  const heroSection = document.querySelector('.hero');
  if (nameEl && subtitleEl && heroSection) {
    setTimeout(() => {
      heroSection.classList.add('visible');
      typeText(nameEl, 'Ahmad Hassan', 120, () => {
        typeText(subtitleEl, 'Cybersecurity & Web Developer', 60);
      });
    }, 500);
  }

  // Fade in sections on scroll
  const sections = document.querySelectorAll('section, aside.sidebar, .social-media');
  function fadeOnScroll() {
    const scrollPos = window.scrollY + window.innerHeight * 0.85;
    sections.forEach((sec) => {
      if (scrollPos > sec.offsetTop) {
        sec.classList.add('visible');
      }
    });
  }
  fadeOnScroll();
  window.addEventListener('scroll', fadeOnScroll);

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Contact form validation & mock submission
  const contactForm = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  if (contactForm && formMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formMsg.textContent = '';
      formMsg.style.color = '';

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formMsg.style.color = '#ff4757';
        formMsg.textContent = 'Please fill in all required fields.';
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        formMsg.style.color = '#ff4757';
        formMsg.textContent = 'Please enter a valid email address.';
        return;
      }

      formMsg.style.color = '#2ecc71';
      formMsg.textContent = 'Thank you for your message! I will get back to you soon.';
      contactForm.reset();
    });
  }
});
