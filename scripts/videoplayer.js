function initializeVideoPlayerControls() {
  var video = document.getElementById('videoplayer');

  function playVideo(e) {
    button = e.target;
    if (video.paused) {
      video.play();
      button.textContent = 'Pause';
    } else {
      video.pause();
      button.textContent = 'Play';
    }
  }

  function seek(numberOfSeconds) {
    try {
      if (numberOfSeconds === 0) {
        video.currentTime = numberOfSeconds;
      } else {
        video.currentTime += numberOfSeconds;
      }
    } catch(err) {
      displayError('Something went dead...');
    }
  }

  document.getElementById('playButton').addEventListener('click', playVideo);
  document.getElementById('backButton').addEventListener('click', function() {seek(-5);});
  document.getElementById('forwardButton').addEventListener('click', function() {seek(+5);});
  document.getElementById('slowerButton').addEventListener('click', function() {video.playbackRate -= .25;});
  document.getElementById('fasterButton').addEventListener('click', function() {video.playbackRate += .25;});
  document.getElementById('muteButton').addEventListener('click', function() {
      if (video.muted) {
        video.muted = false;
      } else {
        video.muted = true;
      }
  });
}
