let previousScrollPosition = window.pageYOffset;

window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset;
    const navbar = document.querySelector("nav");

    if (currentScrollPosition === 0) {
        navbar.style.padding = "50px 0";
    }

    if (previousScrollPosition > currentScrollPosition || currentScrollPosition < "300") {
        navbar.style.top = "0";
    }else {
        navbar.style.top = "-132px";
        navbar.style.padding = "15px 0";
    }
    previousScrollPosition = currentScrollPosition;
};