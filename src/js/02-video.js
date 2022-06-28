
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = throttle((data) =>
localStorage.setItem("videoplayer-current-time", data.seconds), 1000);

player.on('timeupdate', onPlay);

const savedTime = localStorage.getItem("videoplayer-current-time");
if (savedTime) {
    const parsedTime = JSON.parse(savedTime);
    player.setCurrentTime(parsedTime);
}
