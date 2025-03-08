function AnimationFill() {
    const fill = document.querySelectorAll('.progress-bar-fill');
    
    // Check if elements exist
    if (!fill || fill.length === 0) return;

    const targetWidth = window.location.hash === '#Skills' ? '0' : '-100%';

    fill.forEach((item) => {
        // Ensure smooth transition
        item.style.transition = 'all 1s ease-in-out';
        item.style.left = targetWidth;
    });

}

// Initial call to set correct state on page load
document.addEventListener('DOMContentLoaded', AnimationFill);

// Listen for hash changes
window.addEventListener('hashchange', AnimationFill);
