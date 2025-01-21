document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        const images = slider.querySelectorAll(".slider-image");
        let currentIndex = 0;

        // Функція для зміни зображень
        function changeSlide() {
            images.forEach((image, index) => {
                image.classList.remove("active", "prev");
                if (index === currentIndex) {
                    image.classList.add("active");
                } else if (index === (currentIndex - 1 + images.length) % images.length) {
                    image.classList.add("prev");
                }
            });
            currentIndex = (currentIndex + 1) % images.length;
        }

        // Зміна слайду кожні 3 секунди
        setInterval(changeSlide, 3000);

        // Перший запуск
        changeSlide();
    });
});

