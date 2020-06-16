export const togglePreviousButton = () => {
    const owlItems = Array.from(document.querySelectorAll('.owl-item'));
    const previousButton = document.querySelector('.previous-button');

    if (owlItems[0].classList.contains('active')) {
        previousButton.style.opacity = 0;
        previousButton.style.pointerEvents = "none";
    } else {
        previousButton.style.opacity = 1;
        previousButton.style.pointerEvents = "auto";
    }
};