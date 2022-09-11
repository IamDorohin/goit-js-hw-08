import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';
const currentTime = JSON.parse(localStorage.getItem(STORAGE_KEY));

setCurrentTime();

player.on('timeupdate', Throttle(onCurrentTime, 1000));

function onCurrentTime({seconds}) {
localStorage.setItem(STORAGE_KEY, seconds);
};

function setCurrentTime() {
    player.setCurrentTime(currentTime);
};