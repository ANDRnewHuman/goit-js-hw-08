import Player from '@vimeo/player';
console.log(Player);
const idVideo = document.querySelector('#vimeo-player');
const player = new Player(idVideo);
player.on('timeupdate', onPlayVideo);
function onPlayVideo({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
