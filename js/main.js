

document.addEventListener('DOMContentLoaded', function() {
    const categoryIcons = document.querySelector('.category-icons');
    const iconItems = document.querySelectorAll('.icon-item');
    
    // Clone items for infinite scroll
    iconItems.forEach(item => {
        const clone = item.cloneNode(true);
        categoryIcons.appendChild(clone);
    });

    // Auto scroll
    let scrollInterval;
    const startAutoScroll = () => {
        scrollInterval = setInterval(() => {
            categoryIcons.scrollLeft += 1;
            
            // Reset scroll position when reaching end
            if (categoryIcons.scrollLeft >= (categoryIcons.scrollWidth / 2)) {
                categoryIcons.scrollLeft = 0;
            }
        }, 30);
    };

    // Pause on hover or touch
    categoryIcons.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    categoryIcons.addEventListener('touchstart', () => clearInterval(scrollInterval));
    
    // Resume on mouse leave or touch end
    categoryIcons.addEventListener('mouseleave', startAutoScroll);
    categoryIcons.addEventListener('touchend', startAutoScroll);

    // Mouse wheel scroll
    categoryIcons.addEventListener('wheel', (e) => {
        e.preventDefault();
        categoryIcons.scrollLeft += e.deltaY;
        
        // Reset scroll position when reaching end
        if (categoryIcons.scrollLeft >= (categoryIcons.scrollWidth / 2)) {
            categoryIcons.scrollLeft = 0;
        }
    });

    // Start auto scroll
    startAutoScroll();
});