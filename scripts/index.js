// Change header background color when scrolling down
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const phoneNumber = document.querySelector('.phone-number__a');
    
    if (window.scrollY > 10) {
        header.classList.add('header-scrolled');
        header.classList.remove('header-on-top');
        phoneNumber.classList.add('phone-number--shadowed');
    } else {
        header.classList.remove('header-scrolled');
        header.classList.add('header-on-top');
        phoneNumber.classList.remove('phone-number--shadowed');
    }
});

// Move carousel
function moveCarousel(direction) {
    const personalInjuryFlex = document.querySelector('.js-carousel');

    if (direction === 0) {
        personalInjuryFlex.classList.remove('carousel-right');
    } else if (direction === 1) {
        personalInjuryFlex.classList.add('carousel-right');
    }
}

// Show all cards on accidents section
let hideCards = true;
function showCards() {
    const hiddenCards = document.querySelectorAll('.js-hidden-card');
    const loadButton = document.querySelector('.js-load-more-button');

    // Show cards
    if (hideCards) {
        hiddenCards.forEach((hiddenCard) => {
            hiddenCard.classList.remove('hidden-card');
        });
        loadButton.textContent = 'Show Less';
        hideCards = false;

    // Hide cards
    } else {
        hiddenCards.forEach((hiddenCard) => {
            hiddenCard.classList.add('hidden-card');
        });
        loadButton.textContent = 'Load More';
        hideCards = true;
    }
}
