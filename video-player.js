const player = document.querySelector('#player');
const slideSpeed = document.querySelector('#SlideSpeed');
const speed = document.querySelector('#speed');
const time = document.querySelector('#time');
const btnStart = document.querySelector('#btnStart');
const duration = player.duration;
const seekbar = document.querySelector('#seekbar');
const video = document.getElementById("player");

btnStart.addEventListener('click', playVideo);
btnReset.addEventListener('click', resetVideo);

slideSpeed.addEventListener('change', adjustSpeed);

video.ontimeupdate = () => { updateTime(); };

player.addEventListener('durationchange', setupSeekbar);
player.addEventListener('canplay', setupPlayer);
player.addEventListener('ended', clean);

seekbar.addEventListener('change', seekVideo);

function setupPlayer()
{
	setupSeekbar();
	player.volume = 0.5;
}

function clean()
{
	if(player.paused)
	{
		btnStart.innerText='Play';
		seekbar.value = 0;
	}
}

function setupSeekbar()
{
	seekbar.max = player.duration;
}

function seekVideo(event)
{
	const setTime = event.target.value;
	player.currentTime = setTime;
}

function updateTime()
{
	document.getElementById("time").innerHTML = `${video.currentTime} second`;
	seekbar.value = video.currentTime;
}

function playVideo(event)
{
	if(player.paused)
	{
		player.play();
		btnStart.innerText = 'Paused';
	}
	else
	{
		player.pause();
		btnStart.innerText = 'Start';
	}
}

function resetVideo(event)
{
	player.currentTime = 0;
	console.log(event);
}

function adjustSpeed(event)
{
	const currentSpeed = event.target.value;
	speed.innerHTML = `${currentSpeed}X`;
	player.playbackRate = currentSpeed;
}