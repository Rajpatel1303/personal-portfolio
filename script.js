// Particle animation for hero background
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const themeIcon = themeToggle.querySelector('i');
  
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    
    // Update icon
    if (body.classList.contains('light-theme')) {
      themeIcon.className = 'fas fa-sun';
    } else {
      themeIcon.className = 'fas fa-moon';
    }
  });
  
  // Initialize as dark theme
  if (!body.classList.contains('dark-theme')) {
    body.classList.add('dark-theme');
  }
  
  // Create particles for hero background
  const particles = document.querySelector('.particles-background');
  
  if (particles) {
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random positioning
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random size
      const size = Math.random() * 4 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random animation duration
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
      
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particles.appendChild(particle);
    }
  }
  
  // Typewriter effect
  const typedText = document.getElementById('typed-text');
  const text = "Creative Full-Stack Developer";
  let charIndex = 0;
  
  function typeWriter() {
    if (charIndex < text.length) {
      typedText.textContent = text.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeWriter, 100);
    } else {
      // Reset for blinking cursor effect only
      setTimeout(() => {
        charIndex = 0;
        typeWriter();
      }, 3000);
    }
  }
  
  typeWriter();
  
  // Handle scroll animations
  const sections = document.querySelectorAll('section');
  const animatedElements = document.querySelectorAll('.project-card, .experience-card, .education-card, .certification-card, .skill');
  
  // Intersection Observer for section animations
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
  
  // Intersection Observer for element animations
  const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  animatedElements.forEach(element => {
    elementObserver.observe(element);
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Show success message
      showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Toast notification
  function showToast(message, type = 'info') {
    // Check if a toast container already exists
    let toastContainer = document.querySelector('.toast-container');
    
    // If not, create one
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
      </div>
      <button class="toast-close">
        <i class="fas fa-times"></i>
      </button>
    `;
    
    // Add toast to container
    toastContainer.appendChild(toast);
    
    // Show toast with animation
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    // Hide toast after 5 seconds
    const hideTimeout = setTimeout(() => {
      hideToast(toast);
    }, 5000);
    
    // Close button functionality
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      clearTimeout(hideTimeout);
      hideToast(toast);
    });
  }
  
  function hideToast(toast) {
    toast.classList.add('hide');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }
  
  // Initialize skill bar animations
  const skillBars = document.querySelectorAll('.skill-bar');
  
  skillBars.forEach(bar => {
    const fill = bar.querySelector('.skill-fill');
    const width = fill.style.width;
    fill.style.width = '0';
    
    setTimeout(() => {
      fill.style.width = width;
    }, 300);
  });
});