interface MouseCoords {
    x: number,
    y: number
}

export function mouseTracking (ms: number): Promise<boolean> {
    
    return new Promise((resolve, reject) => {
        let coordsMouse: MouseCoords = { x: 0, y: 0 };
        let lastCoordsMouse: MouseCoords = { x: 0, y: 0 };
        let timer: ReturnType<typeof setInterval> | null = null;


        function trackingM(event: MouseEvent): void {
            coordsMouse = { x: event.pageX, y: event.pageY }
        }

        function checkIfMouseStopped() {
            if (coordsMouse.x === lastCoordsMouse.x && coordsMouse.y === lastCoordsMouse.y) {
                resolve(true);
                document.removeEventListener('mousemove', trackingM);
                if (timer) {
                    clearInterval(timer);
                }
            } else {
                lastCoordsMouse = { ...coordsMouse }
            }
        }

        document.addEventListener('mousemove', trackingM)

        timer = setInterval(() => {
            checkIfMouseStopped();
        }, ms)
    })
}