let animationList = [];
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        animationList = document.querySelectorAll('[data-soa]');
        console.log(animationList);
        animationList.forEach(animate => {
            switch (animate.getAttribute('data-soa')) {
                case 'text-animate':
                    textAnimate(animate);
                    break;
                case 'fade-in' :
                    fadeIn(animate);
                    break;
                case 'scroll-down' :
                    scrollDown(animate);
                    break;
                default :
                    console.log('nothing');
            }
        });
    }
};


// UTILS

const textAnimate = (element) => {
    const speed = 80; //ms
    let i = 0;
    element.style.minHeight = element.offsetHeight + "px";
    const wordArray = element.textContent.split(' ');
    element.textContent = '';
    setInterval(() => {
        if (i <= wordArray.length - 1) {
            const node = document.createElement('span');
            node.append(wordArray[i] + '\xA0');
            node.classList.add('span-animate');
            element.append(node);
            i++;
        }
    }, speed);
};

const fadeIn = (element) => {
    element.style.animation = 'text-appear 1s ease-in-out both';
};

const scrollDown = (element) => {
    element.style.animation = 'back-front 1.5s ease-in-out both infinite,' +
        ' text-appear 1.5s ease-in-out both infinite reverse';
};
