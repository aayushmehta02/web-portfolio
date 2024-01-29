let currentIndex = 1;
const totalCards = document.getElementsByClassName('card');
totalCardsLength = 6

const windowWidth = window.innerWidth;

if(windowWidth < 606){
    function updateCarousel() {
        const wrapper = document.querySelector('.carousel-wrapper');
        wrapper.style.transform = `translateX(${-currentIndex * (100 )}%)`; // Adjust the percentage based on the number of cards displayed
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % (totalCardsLength - 2);
        console.log(currentIndex) // Adjust the total number of cards to show 3 at a time
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + (totalCardsLength - 2)) % (totalCardsLength - 2);
        console.log(currentIndex)  // Adjust the total number of cards to show 3 at a time
        updateCarousel();
    }
}else{
    function updateCarousel() {
        const wrapper = document.querySelector('.carousel-wrapper');
        wrapper.style.transform = `translateX(${-currentIndex * (100 / 3)}%)`; // Adjust the percentage based on the number of cards displayed
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % (totalCardsLength - 2);
        console.log(currentIndex) // Adjust the total number of cards to show 3 at a time
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + (totalCardsLength - 2)) % (totalCardsLength - 2);
        console.log(currentIndex)  // Adjust the total number of cards to show 3 at a time
        updateCarousel();
    }
}





