const campaignList = document.querySelectorAll('.track');
const trackSelection = document.querySelector('.track-selection');
const modal = document.querySelector('.modal');
let campaignStats;
fetch('./Winter2024Stats.json')
    .then((response) => response.json())
    .then((json) => campaignStats = (json));

document.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.classList.contains('track'))   {
        updateModal(target);
        moveModal(e);
    }
    if (!target.classList.contains('track') && !target.classList.contains('modal')) {
        fadeModal();
    }
});

// function updateCampaign() {
//     const trackNum = target.querySelector('.number');
//     const trackTime = target.querySelector('.time');
//     console.log(trackNum);
//     console.log(trackTime);
// }

function updateModal(target) {
    const trackNum = target.querySelector('.number').textContent;
    const title = document.querySelector('.modal-title');
    // const bronze = document.querySelector('.bronze');
    // const silver = document.querySelector('.silver');
    // const gold = document.querySelector('.gold');
    const author = document.querySelector('.author');
    const totalTime = document.querySelector('#total-time');
    const finishes = document.querySelector('#finishes');
    const resets = document.querySelector('#resets');
    const respawns = document.querySelector('#respawns');
    title.textContent = `Winter 2024 - ${campaignStats[trackNum - 1].name}`;
    author.querySelector('.medal-time').textContent = `${campaignStats[trackNum - 1].author}`;
    totalTime.textContent = `${campaignStats[trackNum - 1].time}`;
    finishes.textContent = `${campaignStats[trackNum - 1].finishes}`;
    resets.textContent = `${campaignStats[trackNum - 1].resets}`;
    respawns.textContent = `${campaignStats[trackNum - 1].respawns}`;
}

function moveModal(event) {
    modal.style.opacity = '1';
    modal.style.visibility = 'visible';
    let x = event.clientX;
    let y = event.clientY;
    modal.style.top = y - modal.offsetHeight - 10 + 'px';
    if ((x + modal.offsetWidth) > window.innerWidth) {
        modal.style.left = x - modal.offsetWidth + 'px';
        return;
    }
    modal.style.left =  x + 30 + 'px';
}

function fadeModal() {
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
}

const menuBG = document.querySelector('.menu-background');
const menu = document.querySelectorAll('.menu li');
let backgroundSize = document.querySelector('.menu li.active').getBoundingClientRect();
menuBG.style.left = '0px';
menuBG.style.height = backgroundSize.height + 'px';
menuBG.style.width = backgroundSize.width - 10 + 'px';

menu.forEach((option) => {
	option.addEventListener('mouseover', () => {
        document.querySelector('li.active').classList.remove('active');
		let position = option.getBoundingClientRect();
		menuBG.style.left = option.offsetLeft + 'px';
		menuBG.style.height = position.height + 'px';
		menuBG.style.width = position.width - 10 + 'px';
		option.classList.add('active');
	});
});