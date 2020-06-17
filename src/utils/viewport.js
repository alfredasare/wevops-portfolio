export const viewportChecker = (element) => {
    let bounding = element.getBoundingClientRect();
    let myElementHeight = element.offsetHeight;
    let myElementWidth = element.offsetWidth;

    // return bounding.top >= 0 && bounding.left >= 0 && bounding.right
    //     <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <=
    //     (window.innerHeight || document.documentElement.clientHeight);

    return bounding.top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight;
};

