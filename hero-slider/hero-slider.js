((Drupal) => {
  const initSlider = (slider) => {
    if (slider.dataset.splideInitialized === 'true') {
      return;
    }

    if (typeof Splide === 'undefined') {
      console.warn('Splide library is not available for hero slider.');
      return;
    }

    slider.dataset.splideInitialized = 'true';

    const autoplay = slider.dataset.autoplay === 'true';

    const splide = new Splide(slider, {
      type: 'loop',
      perPage: 1,
      autoplay,
      pauseOnHover: true,
      pauseOnFocus: true,
      focusOnMove: true,
      drag: true,
      keyboard: true,
      reducedMotion: {
        speed: 0,
        rewindSpeed: 0,
        autoplay: 'pause',
      },
      i18n: {
        prev: Drupal.t('Previous slide'),
        next: Drupal.t('Next slide'),
        first: Drupal.t('Go to first'),
        last: Drupal.t('Go to last'),
        slideX: Drupal.t('Go to slide %s'),
        slide: Drupal.t('slide'),
        slideLabel: Drupal.t('%s of %s'),
      },
    });

    splide.mount();
  };

  Drupal.behaviors.heroSlider = {
    attach(context) {
      context.querySelectorAll('.hero-slider').forEach(initSlider);
    },
  };
})(Drupal);
