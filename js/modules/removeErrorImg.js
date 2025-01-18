export function removeErrorImg(classElement) {
    const images = document.querySelectorAll(classElement);
    
    images.forEach(img => {
        img.addEventListener('error', function () {
            this.remove();
        });
    });
}
