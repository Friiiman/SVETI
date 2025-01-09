export function removePopupErrorImg() {
    const images = document.querySelectorAll('.product-description__img');
    
    images.forEach(img => {
        img.addEventListener('error', function () {
            this.remove();
        });
    });
}