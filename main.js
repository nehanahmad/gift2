let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

// Handle navbar visibility on scroll
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing carousel');
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        console.log('Showing slide', index);
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        slides.forEach(slide => slide.style.opacity = 0);
        dots.forEach(dot => dot.classList.remove('active'));

        slides[currentIndex].style.opacity = 1;
        dots[currentIndex].classList.add('active');
    }

    // Initialize the carousel
    showSlide(currentIndex);

    // Automatically change slides every 5 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);

    // Event listeners for navigation buttons
    const rightButton = document.querySelector('.right');
    const leftButton = document.querySelector('.left');

    if (rightButton) {
        rightButton.addEventListener('click', () => showSlide(currentIndex + 1));
    }

    if (leftButton) {
        leftButton.addEventListener('click', () => showSlide(currentIndex - 1));
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
});