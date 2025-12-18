// ==========================================
// GREENLEAF LANDSCAPING - INTERACTIVE FEATURES
// ==========================================

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        });
    });
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const nav = document.getElementById('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScrollY = currentScrollY;
});

// ==========================================
// PARALLAX EFFECT
// ==========================================

function parallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax, .parallax-light');

    parallaxElements.forEach(element => {
        const scrolled = window.pageYOffset;
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;

        if (scrolled > elementTop - window.innerHeight && scrolled < elementTop + elementHeight) {
            const yPos = (scrolled - elementTop) * 0.5;
            element.style.backgroundPosition = `center ${yPos}px`;
        }
    });
}

window.addEventListener('scroll', parallaxEffect);

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll(
    '.service-card, .process-step, .gallery-item, .testimonial-card'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================================
// LEAD FORM SUBMISSION
// ==========================================

const leadForm = document.getElementById('leadForm');

if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = leadForm.querySelector('input[type="email"]').value;

        // Simulate form submission
        alert(`Thank you! Your free guide will be sent to ${email}`);
        leadForm.reset();

        // In production, you would send this to your email service or CRM
        // Example: Send to Zapier webhook or Mailchimp API
    });
}

// ==========================================
// QUOTE FORM SUBMISSION
// ==========================================

const quoteForm = document.getElementById('quoteForm');
const formMessage = document.getElementById('formMessage');

// GREENLEAF ZAPIER WEBHOOK - Separate webhook for landscaping quote requests
const FORM_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/25742784/uams82s/';

if (quoteForm) {
    quoteForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            service: document.getElementById('service').value,
            budget: document.getElementById('budget').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString(),
            source: 'GreenLeaf Website'
        };

        const submitButton = quoteForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';

        try {
            // Send to Zapier webhook
            const response = await fetch(FORM_WEBHOOK_URL, {
                method: 'POST',
                body: JSON.stringify(formData)
            });

            if (response.ok || response.status === 0) {
                formMessage.textContent = '✓ Thank you! We\'ll contact you within 24 hours with your free quote.';
                formMessage.className = 'form-message success';
                quoteForm.reset();

                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                throw new Error('Failed to send');
            }

        } catch (error) {
            console.error('Form submission error:', error);
            formMessage.textContent = '✗ Oops! Something went wrong. Please call us at (555) 123-4567.';
            formMessage.className = 'form-message error';
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    });
}

// ==========================================
// FORM VALIDATION
// ==========================================

const formInputs = document.querySelectorAll('input, select, textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#dc3545';
        } else if (input.type === 'email' && input.value && !isValidEmail(input.value)) {
            input.style.borderColor = '#dc3545';
        } else if (input.type === 'tel' && input.value && !isValidPhone(input.value)) {
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '#e0e0e0';
        }
    });

    input.addEventListener('focus', () => {
        input.style.borderColor = '#7cb342';
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// ==========================================
// STATS COUNTER ANIMATION
// ==========================================

const animateCounter = (element, target) => {
    const numericTarget = parseInt(target.replace(/\D/g, ''));
    const duration = 2000;
    const increment = numericTarget / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            const suffix = target.includes('+') ? '+' : (target.includes('%') ? '%' : '');
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.trust-number');
            statNumbers.forEach(stat => {
                if (!stat.dataset.animated) {
                    const target = stat.textContent;
                    stat.dataset.animated = 'true';
                    animateCounter(stat, target);
                }
            });
        }
    });
}, { threshold: 0.5 });

const heroTrust = document.querySelector('.hero-trust');
if (heroTrust) {
    statsObserver.observe(heroTrust);
}

// ==========================================
// LAZY LOADING FOR IMAGES
// ==========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ==========================================

document.querySelectorAll('.btn, .service-card, .gallery-item').forEach(element => {
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            element.click();
        }
    });
});

// ==========================================
// CONSOLE BRANDING
// ==========================================

console.log('%c🌿 GreenLeaf Landscaping', 'font-size: 20px; font-weight: bold; color: #7cb342;');
console.log('%cTransform your outdoor space today!', 'font-size: 14px; color: #2d5016;');

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('GreenLeaf website initialized successfully');

    // Initial parallax position
    parallaxEffect();
});
