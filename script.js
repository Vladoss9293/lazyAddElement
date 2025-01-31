import { addImgForLazyLoading } from "./optimizationImg.js";

document.addEventListener("DOMContentLoaded", () => {
    const blockWidth = [...document.querySelectorAll('.blockWidth')];

    
const targetLast = document.querySelector('#targetInLoadImg'); // id div Element
const lazyLoad__Img = document.querySelector('#FrontendInginer'); // id img Element

addImgForLazyLoading(targetLast, './assets/img/FrontendInginer.jpg', lazyLoad__Img);
    
    blockWidth.forEach((section, index) => {
        setTimeout(() => {
            section.style.width = '100%';
        }, index * 300);
    });
});