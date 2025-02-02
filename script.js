import { addImgForLazyLoading } from "./optimizationImg.js";
import { visionElement } from "./visionElement.js";

document.addEventListener("DOMContentLoaded", () => {
    const blockWidth = [...document.querySelectorAll('.blockWidth')];
    const blockProgrammingWidth = [...document.querySelectorAll('.blockProgrammingWidth')];
    blockWidth.forEach((section, index) => {
        setTimeout(() => {
            section.style.width = '100%';
        }, index * 300);
    });
    const targetLast = document.querySelector('#targetInLoadImg'); // id div Element
    const textLanguage = document.querySelector('.textLanguage'); // id div Element
    const lazyLoad__Img = document.querySelector('#FrontendInginer'); // id img Element

    addImgForLazyLoading(targetLast, './assets/img/FrontendInginer.jpg', lazyLoad__Img);




    visionElement(textLanguage).then(res => {
        if (res) {
            blockProgrammingWidth.forEach((section, index) => {
                setTimeout(() => {
                    section.style.width = '100%';
                }, index * 100)
            })
        }
    });
});