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