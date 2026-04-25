document.querySelectorAll('#navbar a[href^="#"], .logo[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert('Thank you for your message. I will get back to you soon.');
    this.reset();
});
