export const iterate = () => {
    const allProjects = Array.from(document.querySelectorAll('.home-project-image'));
    allProjects[0].classList.add("home-project-image-active");
    let nextProject = 1;
    let currentItem = 0;
    setInterval(() => {
        allProjects[currentItem].classList.toggle("home-project-image-active");
        allProjects[nextProject].classList.toggle("home-project-image-active");
        nextProject = nextProject === allProjects.length - 1 ? 0 : nextProject + 1;
        currentItem = currentItem === allProjects.length - 1 ? 0 : currentItem + 1;
    }, 400);
};