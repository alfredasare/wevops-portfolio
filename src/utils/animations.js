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

