// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when a link is clicked
        const mobileLinks = navMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.add('hidden');
            });
        });
    }
});

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // Get the header height (fixed header)
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Header Background on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        });
    }
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const status = document.getElementById('contactFormStatus');
            if (!status) return;
            
            const formData = new FormData(e.target);
            const submitBtn = this.querySelector('button[type="submit"]');
            if (!submitBtn) return;
            
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Submit form
            fetch(e.target.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Create success message using structured elements
                    const successDiv = document.createElement('div');
                    successDiv.classList.add('status', 'status--success');
                    
                    const strongElement = document.createElement('strong');
                    strongElement.textContent = 'Thank you for your message!';
                    
                    const brElement = document.createElement('br');
                    
                    const spanElement = document.createElement('span');
                    spanElement.textContent = 'We\'ll get back to you within 24 hours.';
                    
                    successDiv.appendChild(strongElement);
                    successDiv.appendChild(brElement);
                    successDiv.appendChild(spanElement);
                    
                    status.appendChild(successDiv);
                    e.target.reset();
                } else {
                    // Create error message using structured elements
                    const errorDiv = document.createElement('div');
                    errorDiv.classList.add('status', 'status--error');
                    
                    const strongElement = document.createElement('strong');
                    strongElement.textContent = 'Oops! There was a problem.';
                    
                    const brElement = document.createElement('br');
                    
                    const spanElement = document.createElement('span');
                    spanElement.textContent = 'Please try again or contact us directly.';
                    
                    errorDiv.appendChild(strongElement);
                    errorDiv.appendChild(brElement);
                    errorDiv.appendChild(spanElement);
                    
                    status.appendChild(errorDiv);
                }
            }).catch(error => {
                // Create error message using structured elements
                const errorDiv = document.createElement('div');
                errorDiv.classList.add('status', 'status--error');
                
                const strongElement = document.createElement('strong');
                strongElement.textContent = 'Oops! There was a problem.';
                
                const brElement = document.createElement('br');
                
                const spanElement = document.createElement('span');
                spanElement.textContent = 'Please try again or contact us directly.';
                
                errorDiv.appendChild(strongElement);
                errorDiv.appendChild(brElement);
                errorDiv.appendChild(spanElement);
                
                status.appendChild(errorDiv);
            }).finally(() => {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Clear status after 5 seconds
                setTimeout(() => {
                    if (status) {
                        status.innerHTML = '';
                    }
                }, 5000);
            });
        });
    }
});

// Counter Animation
function animateCounter(element, target, duration = 2000) {
    if (!element) return;
    
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for Counter Animation
document.addEventListener('DOMContentLoaded', () => {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                if (target && !isNaN(target)) {
                    counter.classList.add('animate');
                    animateCounter(counter, target);
                    counterObserver.unobserve(counter);
                }
            }
        });
    }, { threshold: 0.5 });

    // Observe all counters
    document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
    });
});

// Add input validation styling
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = 'var(--color-error)';
            } else {
                this.style.borderColor = 'var(--color-border)';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--color-primary)';
        });
    });
});

// Get Started button functionality
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.textContent.includes('Get Started')) {
            btn.addEventListener('click', () => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });
});

// Add hover effects to service cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Lazy loading effect for sections
document.addEventListener('DOMContentLoaded', () => {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Apply lazy loading to main sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });

    // Don't apply lazy loading to hero section
    const heroSection = document.querySelector('#home');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});