export function slider() {
    const slider = document.querySelector('.slider__container');
    const prevButton = document.querySelector('.slider__prev-button');
    const nextButton = document.querySelector('.slider__next-button');
    setTimeout(() => {
        const slides = Array.from(slider.querySelectorAll('img'));
        const slideCount = slides.length;
        let slideIndex = 0;

        prevButton.addEventListener('click', showPreviousSlide);
        nextButton.addEventListener('click', showNextSlide);

        function showPreviousSlide() {
            slideIndex = (slideIndex - 1 + slideCount) % slideCount;
            updateSlider();
        }

        function showNextSlide() {
            slideIndex = (slideIndex + 1) % slideCount;
            updateSlider();
        }

        function updateSlider() {
            slides.forEach((slide, index) => {
                if (index === slideIndex) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            });
        }
        updateSlider();
    }, 100);
}
