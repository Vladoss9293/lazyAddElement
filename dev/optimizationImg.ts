export function addImgForLazyLoading (highTarget: HTMLDivElement | null, src: string, highImgTarget: HTMLImageElement | null): void {
    let imageAdded: boolean = false; // flag addedImg

    function addPromiseToImg(path: string): Promise<HTMLImageElement> { // path: src
        return new Promise((resolve, reject) => {
            if (highImgTarget) {
                highImgTarget.src = path; // add src in path
        
                highImgTarget.addEventListener('load', () => {
                    resolve(highImgTarget);
                });
        
                highImgTarget.addEventListener('error', () => {
                    reject(new Error(`image: ${path} load error`)); // calling error
                })
            } else {
                reject(new Error(`image: ${highImgTarget} not found`)) // calling error
            }
        })
    }

    
    function addImage(target: HTMLDivElement): void {
        if (target && !imageAdded) {
            const rect = target.getBoundingClientRect();
            console.warn('>> scroll tracking <<');
            if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth) { // Show block
                imageAdded = true;
                addPromiseToImg(src).then(img => { // Calling Promise in addPromiseToImg
                    document.removeEventListener('scroll', onScroll); // removeEventListener onScroll
                }).catch((error) => {
                    console.log(error);
                })
            }
        }
    }
    
    function onScroll() {
        if (highTarget) {
            addImage(highTarget); // div Element
        }
    }
    
    if (highTarget) {
        document.addEventListener('scroll', onScroll); // addEventListener onScroll
    }
}