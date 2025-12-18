document.addEventListener('DOMContentLoaded', () => {
    
    // Handle Contact Form Submission
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real website, you would send this data to a server
            alert('Thank you! Your message has been sent (Demo only).');
            form.reset();
        });
    }

    // Optional: Add simple fade-in effect for elements
    const elements = document.querySelectorAll('.hero-text, .job-item');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});