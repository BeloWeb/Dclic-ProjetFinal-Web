document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci Woody ! Votre message a été envoyé avec succès.');
    this.reset();
});


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});



window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0'; // On remet à 0
                setTimeout(() => {
                    bar.style.width = width; 
                }, 100);
            });
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.skills'));

