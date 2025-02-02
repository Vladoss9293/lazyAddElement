export function visionElement(target: HTMLDivElement): Promise<boolean> {
    return new Promise(resolve => {
        function seeElement(): void {
            if (target) {
                const rect = target.getBoundingClientRect();
        
                if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth) {
                    resolve(true);
                    document.removeEventListener('scroll', callingFunction);
                }
            }
        }

        function callingFunction(): void {
            if (target) {
                seeElement();
            }
        }
    
        if (target) {
            document.addEventListener('scroll', callingFunction);
            seeElement();
        }
    })

}