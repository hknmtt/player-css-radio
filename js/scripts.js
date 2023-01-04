var player = document.getElementById("audio-player");
btnPlayPause = document.getElementById('btnPlayPause');
volumeBar    = document.getElementById('volume-bar');

// Update the video volume
volumeBar.addEventListener("change", function(evt) {function displayMessage(message, canPlay) {
    var element = document.querySelector('#message');
    element.innerHTML = message;
    element.className = canPlay ? 'info' : 'error';
}
  player.volume = parseInt(evt.target.value) / 10;
  // Change the button to a mute button
  changeButtonType(btnMute, 'mute');
  btnMute.src = "assets/volume.svg";
  player.muted = false;
});

// Add a listener for the play and pause events so the buttons state can be updated
player.addEventListener('play', function() {
    // Change the button to be a pause button
    changeButtonType(btnPlayPause, 'pause');
  }, false);
    
  player.addEventListener('pause', function() {
    // Change the button to be a play button
    changeButtonType(btnPlayPause, 'play');
  }, false);


function playPauseAudio() {
    if (player.paused || player.ended) {
    // Change the button to a pause button
    changeButtonType(btnPlayPause, 'pause');
    player.play();
    }
    else {
    // Change the button to a play button
    changeButtonType(btnPlayPause, 'play');
    player.pause();
    }
}

// Toggles the media player's mute and unmute status
function muteVolume() {
    if (player.muted) {
    // Change the button to a mute button
    changeButtonType(btnMute, 'mute');
    btnMute.src = "assets/volume.svg";
    player.muted = false;
    }
    else {
    // Change the button to an unmute button
    changeButtonType(btnMute, 'unmute');
    btnMute.src = "assets/mute.svg";
    player.muted = true;
    }
  }

// Updates a button's title, innerHTML and CSS class
function changeButtonType(btn, value) {
    btn.title     = value;
    btn.className = value;
  }
