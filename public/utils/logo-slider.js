// Logo Slider - Horizontal scroll through partner logos

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLogoSlider);
} else {
  initLogoSlider();
}

function initLogoSlider() {
  const sliderTrack = document.getElementById('sliderTrack');
  const slides = document.querySelectorAll('#sliderTrack .slide');

  let currentPosition = 0;
  const slideWidth = 120; // Width of each logo item in pixels
  const gapWidth = 15;    // Gap between items
  const itemWidth = slideWidth + gapWidth;
  const totalSlides = slides.length;
  const visibleSlides = 5; // Number of logos visible at once (adjust as needed)
  const maxScroll = (totalSlides - visibleSlides) * itemWidth;

  // SLIDE LEFT - scroll backwards
  window.slideLeft = function() {
    currentPosition = Math.max(0, currentPosition - itemWidth);
    updateSliderPosition();
  };

  // SLIDE RIGHT - scroll forwards
  window.slideRight = function() {
    currentPosition = Math.min(maxScroll, currentPosition + itemWidth);
    updateSliderPosition();
  };

  // Update the transform position
  function updateSliderPosition() {
    sliderTrack.style.transition = 'transform 0.4s ease-in-out';
    sliderTrack.style.transform = `translateX(-${currentPosition}px)`;
  }

  // Optional: Auto-scroll every 8 seconds
  let autoScrollTimer;
  function startAutoScroll() {
    autoScrollTimer = setInterval(() => {
      if (currentPosition >= maxScroll) {
        currentPosition = 0;
      } else {
        currentPosition += itemWidth;
      }
      updateSliderPosition();
    }, 8000);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollTimer);
  }

  // Pause auto-scroll on hover
  sliderTrack.addEventListener('mouseenter', stopAutoScroll);
  sliderTrack.addEventListener('mouseleave', startAutoScroll);

  // Start auto-scroll on page load (uncomment to enable)
  // startAutoScroll();

  // Initialize position
  updateSliderPosition();
}
