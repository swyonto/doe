const track     = document.getElementById('slidesTrack');
    const slides    = document.querySelectorAll('.slide');   // NodeList of all slides
    const dots      = document.querySelectorAll('.dot');     // NodeList of all dots
    const prevBtn   = document.getElementById('prevBtn');
    const nextBtn   = document.getElementById('nextBtn');
    const pauseBtn  = document.getElementById('pauseBtn');

    let currentSlide = 0;
    let totalSlides  = slides.length;   // 3
    let autoPlayTimer;
    let isPaused = false;

    // FUNCTION: go to a specific slide index
    function goToSlide(index) {
      // Wrap around: if index < 0, go to last; if > last, go to first
      if (index < 0)            index = totalSlides - 1;
      if (index >= totalSlides) index = 0;

      currentSlide = index;

      // Move the track: translateX(-index * 100%)
      // e.g. slide 0 → 0%, slide 1 → -100%, slide 2 → -200%
      track.style.transform = `translateX(-${currentSlide * 100}%)`;

      // Update dots: remove 'active' from all, add to current
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    // Button click handlers
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Dot click handler
    // We iterate over all dots and add a click listener to each
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-index'));
        goToSlide(idx);
        resetAutoPlay();  // restart timer when user manually navigates
      });
    });

    // AUTO-PLAY: advance slide every 5 seconds
    function startAutoPlay() {
      autoPlayTimer = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 5000);  // 5000ms = 5 seconds
    }

    function stopAutoPlay() {
      clearInterval(autoPlayTimer);
    }

    function resetAutoPlay() {
      stopAutoPlay();
      if (!isPaused) startAutoPlay();
    }

    // PAUSE / PLAY toggle
    pauseBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      if (isPaused) {
        stopAutoPlay();
        pauseBtn.innerHTML = '&#9654;'; // ▶ play icon
        pauseBtn.setAttribute('aria-label', 'Play slideshow');
      } else {
        startAutoPlay();
        pauseBtn.innerHTML = '&#9646;&#9646;'; // ❚❚ pause icon
        pauseBtn.setAttribute('aria-label', 'Pause slideshow');
      }
    });

    // KEYBOARD NAVIGATION (accessibility)
    // ArrowLeft → previous, ArrowRight → next
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft')  goToSlide(currentSlide - 1);
      if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    });

    // SWIPE SUPPORT for mobile
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    });
    track.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (diff > 50)       goToSlide(currentSlide + 1);  // swipe left → next
      else if (diff < -50) goToSlide(currentSlide - 1);  // swipe right → prev
    });

    // Start the carousel on page load
    startAutoPlay();


  