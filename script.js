    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimoni-item');

    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            item.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });