(() => {
  document.querySelectorAll('.wall-video').forEach((wrap) => {
    const video = wrap.querySelector('video');
    if (!video) return;
    let loaded = false;

    const load = () => {
      if (loaded) return;
      loaded = true;
      video.src = video.dataset.src;
    };

    const play = () => {
      load();
      video.muted = false;
      video.currentTime = 0;
      video.play().catch(() => {});
      wrap.classList.add('is-playing');
    };

    const pause = () => {
      video.pause();
      video.muted = true;
      wrap.classList.remove('is-playing');
    };

    wrap.addEventListener('mouseenter', play);
    wrap.addEventListener('mouseleave', pause);
    wrap.addEventListener('focus', play);
    wrap.addEventListener('blur', pause);

    // Touch devices have no hover: tap toggles play/pause with sound.
    wrap.addEventListener('click', () => {
      if (wrap.classList.contains('is-playing')) {
        pause();
      } else {
        play();
      }
    });
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
