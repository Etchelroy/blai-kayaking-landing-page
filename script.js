document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', 
                mobileToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
            );
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = mobileToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answerId = this.getAttribute('aria-controls');
            const answer = document.getElementById(answerId);
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all other answers
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    const otherAnswerId = otherQuestion.getAttribute('aria-controls');
                    const otherAnswer = document.getElementById(otherAnswerId);
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    otherAnswer.hidden = true;
                }
            });

            // Toggle current answer
            this.setAttribute('aria-expanded', !isExpanded);
            answer.hidden = isExpanded;
        });

        // Keyboard navigation (Enter and Space)
        question.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
        });
    });

    // FAQ Arrow Navigation (Up/Down arrows)
    faqQuestions.forEach((question, index) => {
        question.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                const nextQuestion = faqQuestions[index + 1];
                if (nextQuestion) nextQuestion.focus();
            }
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                const prevQuestion = faqQuestions[index - 1];
                if (prevQuestion) prevQuestion.focus();
            }
        });
    });

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            if (validateEmail(email)) {
                showNotification('Thanks for subscribing! Check your email for confirmation.', 'success');
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }

    // Booking Form
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const fullName = document.getElementById('full-name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const date = document.getElementById('date').value;
            const tour = document.getElementById('tour-select').value;
            const participants = document.getElementById('participants').value;
            const experience = document.querySelector('input[name="experience"]:checked')?.value;
            const terms = document.getElementById('terms').checked;

            // Validation
            if (!fullName || fullName.length < 2) {
                showNotification('Please enter a valid name.', 'error');
                return;
            }

            if (!validateEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            if (!validatePhone(phone)) {
                showNotification('Please enter a valid phone number.', 'error');
                return;
            }

            if (!date) {
                showNotification('Please select a date.', 'error');
                return;
            }

            if (!tour) {
                showNotification('Please select a tour.', 'error');
                return;
            }

            if (!experience) {
                showNotification('Please select your experience level.', 'error');
                return;
            }

            if (!terms) {
                showNotification('Please agree to the terms and conditions.', 'error');
                return;
            }

            // Create booking object
            const booking = {
                fullName,
                email,
                phone,
                date,
                tour,
                participants,
                experience,
                specialRequests: document.getElementById('special-requests').value,
                timestamp: new Date().toISOString()
            };

            // Save to localStorage
            saveBooking(booking);

            // Show success message
            showNotification('Booking submitted successfully! We\'ll confirm within 24 hours.', 'success');

            // Reset form
            this.reset();

            // Scroll to confirmation
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 500);
        });
    }

    // Tour Card Buttons
    const tourButtons = document.querySelectorAll('.tour-card .btn-secondary');
    tourButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tourCard = this.closest('.tour-card');
            const tourTitle = tourCard.querySelector('h3').textContent;
            document.getElementById('tour-select').value = tourTitle.toLowerCase().replace(/\s+/g, '-');
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(
```javascript
href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form input validation feedback
    const inputs = document.querySelectorAll('.booking-form input, .booking-form select, .booking-form textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        });

        input.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });

    // Track scroll position for navbar effects
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});

// Utility Functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.setAttribute('role', 'status');
    notification.setAttribute('aria-live', 'polite');
    notification.textContent = message;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background-color: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 16px 24px;
        border-radius: 6px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideInUp 0.3s ease-out;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function saveBooking(booking) {
    let bookings = JSON.parse(localStorage.getItem('kayakBookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('kayakBookings', JSON.stringify(bookings));
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }

    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #EF4444;
        background-color: #FEF2F2;
    }
`;
document.head.appendChild(style);