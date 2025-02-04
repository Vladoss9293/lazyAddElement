export function mouseTracking(ms) {
    return new Promise((resolve, reject) => {
        let coordsMouse = { x: 0, y: 0 };
        let lastCoordsMouse = { x: 0, y: 0 };
        let timer = null;
        function trackingM(event) {
            coordsMouse = { x: event.pageX, y: event.pageY };
        }
        function checkIfMouseStopped() {
            if (coordsMouse.x === lastCoordsMouse.x && coordsMouse.y === lastCoordsMouse.y) {
                resolve(true);
                document.removeEventListener('mousemove', trackingM);
                if (timer) {
                    clearInterval(timer);
                }
            }
            else {
                lastCoordsMouse = Object.assign({}, coordsMouse);
            }
        }
        document.addEventListener('mousemove', trackingM);
        timer = setInterval(() => {
            checkIfMouseStopped();
        }, ms);
    });
}
