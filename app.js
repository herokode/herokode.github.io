// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Background on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Cloud Savings Calculator
function calculateSavings() {
    const currentCostsInput = document.getElementById('currentCosts');
    const employeesInput = document.getElementById('employees');
    const resultDiv = document.getElementById('savingsResult');
    
    const currentCosts = parseFloat(currentCostsInput.value || 0);
    const employees = parseInt(employeesInput.value || 0);
    
    if (!currentCosts || currentCosts <= 0) {
        resultDiv.innerHTML = '<p style="color: var(--color-error); text-align: center; margin: 0;">Please enter valid current monthly IT costs.</p>';
        return;
    }
    
    if (!employees || employees <= 0) {
        resultDiv.innerHTML = '<p style="color: var(--color-error); text-align: center; margin: 0;">Please enter valid number of employees.</p>';
        return;
    }
    
    // Calculation logic based on typical cloud migration savings
    let savingsPercentage = 0;
    let monthlySavings = 0;
    
    if (currentCosts > 10000) {
        savingsPercentage = 35; // Higher savings for larger operations
    } else if (currentCosts > 5000) {
        savingsPercentage = 25;
    } else if (currentCosts > 2000) {
        savingsPercentage = 20;
    } else {
        savingsPercentage = 15;
    }
    
    // Additional savings based on employee count (economies of scale)
    if (employees > 100) {
        savingsPercentage += 5;
    } else if (employees > 50) {
        savingsPercentage += 3;
    }
    
    monthlySavings = Math.round(currentCosts * (savingsPercentage / 100));
    const annualSavings = monthlySavings * 12;
    
    resultDiv.innerHTML = `
        <div style="text-align: center;">
            <h4 style="color: var(--color-primary); margin-bottom: 12px;">Estimated Savings</h4>
            <div style="margin-bottom: 8px;">
                <strong style="color: var(--color-success); font-size: 18px;">$${monthlySavings.toLocaleString()}/month</strong>
            </div>
            <div style="margin-bottom: 16px;">
                <strong style="color: var(--color-success); font-size: 20px;">$${annualSavings.toLocaleString()}/year</strong>
            </div>
            <p style="color: var(--color-text-secondary); font-size: 14px; margin: 0;">
                Based on ${savingsPercentage}% typical cloud optimization savings
            </p>
            <button class="btn btn--primary btn--sm" style="margin-top: 16px;" onclick="document.getElementById('contact').scrollIntoView()">
                Get Free Assessment
            </button>
        </div>
    `;
    
    // Add animation to result
    resultDiv.style.opacity = '0';
    resultDiv.style.transform = 'translateY(20px)';
    setTimeout(() => {
        resultDiv.style.transition = 'all 0.5s ease';
        resultDiv.style.opacity = '1';
        resultDiv.style.transform = 'translateY(0)';
    }, 100);
}

// Technology Readiness Assessment
let assessmentQuestions = [
    {
        question: "How would you rate your current cloud adoption?",
        options: [
            { text: "No cloud usage", value: 1 },
            { text: "Basic cloud services", value: 2 },
            { text: "Moderate cloud integration", value: 3 },
            { text: "Advanced cloud strategy", value: 4 }
        ]
    },
    {
        question: "How do you currently handle data backup and disaster recovery?",
        options: [
            { text: "Manual/local backups only", value: 1 },
            { text: "Basic automated backups", value: 2 },
            { text: "Cloud backup with some DR planning", value: 3 },
            { text: "Comprehensive DR strategy", value: 4 }
        ]
    },
    {
        question: "What's your approach to software updates and security?",
        options: [
            { text: "Manual updates when needed", value: 1 },
            { text: "Some automated updates", value: 2 },
            { text: "Regular update schedule with basic security", value: 3 },
            { text: "Automated updates with comprehensive security", value: 4 }
        ]
    },
    {
        question: "How do you handle customer support and communication?",
        options: [
            { text: "Phone and email only", value: 1 },
            { text: "Basic web forms or ticketing", value: 2 },
            { text: "Some automated responses", value: 3 },
            { text: "AI-powered chat and automation", value: 4 }
        ]
    },
    {
        question: "How do you currently manage your business processes?",
        options: [
            { text: "Mostly manual processes", value: 1 },
            { text: "Some spreadsheet automation", value: 2 },
            { text: "Basic business software", value: 3 },
            { text: "Integrated automation platforms", value: 4 }
        ]
    }
];

let currentQuestion = 0;
let assessmentAnswers = [];

function startAssessment() {
    currentQuestion = 0;
    assessmentAnswers = [];
    showAssessmentQuestion();
}

function showAssessmentQuestion() {
    const assessmentDiv = document.getElementById('assessment');
    
    if (currentQuestion >= assessmentQuestions.length) {
        showAssessmentResult();
        return;
    }
    
    const question = assessmentQuestions[currentQuestion];
    
    assessmentDiv.innerHTML = `
        <div class="assessment__progress" style="margin-bottom: 20px;">
            <div style="background: var(--color-secondary); height: 8px; border-radius: 4px; overflow: hidden;">
                <div style="background: var(--color-primary); height: 100%; width: ${((currentQuestion + 1) / assessmentQuestions.length) * 100}%; transition: width 0.3s ease;"></div>
            </div>
            <p style="text-align: center; margin: 8px 0 0 0; font-size: 14px; color: var(--color-text-secondary);">
                Question ${currentQuestion + 1} of ${assessmentQuestions.length}
            </p>
        </div>
        <div class="assessment__question">
            <h4 style="margin-bottom: 16px;">${question.question}</h4>
            <div class="assessment__options">
                ${question.options.map((option, index) => `
                    <label style="cursor: pointer; padding: 12px; border: 2px solid var(--color-border); border-radius: 8px; transition: all 0.2s ease;">
                        <input type="radio" name="assessmentQ${currentQuestion}" value="${option.value}" style="margin-right: 8px;">
                        ${option.text}
                    </label>
                `).join('')}
            </div>
            <button class="btn btn--primary" style="margin-top: 20px; opacity: 0.5;" id="nextQuestionBtn" onclick="nextQuestion()" disabled>
                ${currentQuestion === assessmentQuestions.length - 1 ? 'Get Results' : 'Next Question'}
            </button>
        </div>
    `;
    
    // Add event listeners to radio buttons
    const radioButtons = assessmentDiv.querySelectorAll('input[type="radio"]');
    const nextBtn = document.getElementById('nextQuestionBtn');
    const labels = assessmentDiv.querySelectorAll('label');
    
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
            
            // Update label styles
            labels.forEach(label => {
                label.style.borderColor = 'var(--color-border)';
                label.style.background = 'transparent';
            });
            
            const selectedLabel = radio.closest('label');
            selectedLabel.style.borderColor = 'var(--color-primary)';
            selectedLabel.style.background = 'var(--color-secondary)';
        });
    });
}

function nextQuestion() {
    const selectedAnswer = document.querySelector(`input[name="assessmentQ${currentQuestion}"]:checked`);
    if (!selectedAnswer) return;
    
    assessmentAnswers.push(parseInt(selectedAnswer.value));
    currentQuestion++;
    showAssessmentQuestion();
}

function showAssessmentResult() {
    const totalScore = assessmentAnswers.reduce((sum, score) => sum + score, 0);
    const maxScore = assessmentQuestions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    let resultTitle, resultDescription, recommendation;
    
    if (percentage >= 80) {
        resultTitle = "Technology Leader";
        resultDescription = "Your organization is already leveraging advanced technology solutions effectively.";
        recommendation = "Consider our advanced AI automation and custom development services to stay ahead of the competition.";
    } else if (percentage >= 60) {
        resultTitle = "Technology Adopter";
        resultDescription = "You have good technology foundations with room for strategic improvements.";
        recommendation = "Cloud optimization and process automation could significantly boost your efficiency and reduce costs.";
    } else if (percentage >= 40) {
        resultTitle = "Technology Opportunity";
        resultDescription = "There are significant opportunities to modernize your technology stack.";
        recommendation = "A comprehensive cloud migration strategy would transform your business operations and competitiveness.";
    } else {
        resultTitle = "Technology Transformation Needed";
        resultDescription = "Your organization would benefit greatly from modern technology solutions.";
        recommendation = "We recommend starting with a technology assessment to identify quick wins and long-term improvements.";
    }
    
    const assessmentDiv = document.getElementById('assessment');
    assessmentDiv.innerHTML = `
        <div class="assessment__result" style="text-align: center;">
            <div style="margin-bottom: 20px;">
                <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover)); color: white; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; margin: 0 auto 16px;">
                    ${percentage}%
                </div>
                <h4 style="color: var(--color-primary); margin-bottom: 8px;">${resultTitle}</h4>
                <p style="color: var(--color-text-secondary); margin-bottom: 16px;">${resultDescription}</p>
                <p style="margin-bottom: 20px;">${recommendation}</p>
            </div>
            <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn--primary" onclick="document.getElementById('contact').scrollIntoView()">
                    Get Free Consultation
                </button>
                <button class="btn btn--outline" onclick="startAssessment()">
                    Retake Assessment
                </button>
            </div>
        </div>
    `;
}

// Counter Animation
function animateCounter(element, target, duration = 2000) {
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
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            counter.classList.add('animate');
            animateCounter(counter, target);
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

// Observe all counters
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
    });
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.innerHTML = `
                    <div style="background: rgba(var(--color-success-rgb), 0.1); border: 1px solid var(--color-success); color: var(--color-success); padding: 16px; border-radius: 8px; margin-top: 16px; text-align: center;">
                        <strong>Thank you for your message!</strong><br>
                        We'll get back to you within 24 hours to discuss your project.
                    </div>
                `;
                
                this.appendChild(successMessage);
                this.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }, 1500);
        });
    }
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
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
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

// Clear calculator results when inputs change
document.addEventListener('DOMContentLoaded', () => {
    const currentCostsInput = document.getElementById('currentCosts');
    const employeesInput = document.getElementById('employees');
    const resultDiv = document.getElementById('savingsResult');
    
    if (currentCostsInput && employeesInput && resultDiv) {
        currentCostsInput.addEventListener('input', function() {
            if (resultDiv.innerHTML) {
                resultDiv.innerHTML = '';
            }
        });

        employeesInput.addEventListener('input', function() {
            if (resultDiv.innerHTML) {
                resultDiv.innerHTML = '';
            }
        });
    }
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
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});