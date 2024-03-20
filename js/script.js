const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const grass = document.querySelector('.grass');
const grass2 = document.querySelector('.grass2');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    const grass2Position = grass2.offsetLeft;
    const grassPosition = grass.offsetLeft;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 410 && pipePosition > 300 && marioPosition < 140) {

        grass.style.animation = 'none';
        grass.style.left = `${grassPosition}px`;
       
        grass2.style.animation = 'none';
        grass2.style.left = `${grass2Position}px`;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
       
        mario.src = './imgs/game-over.png';
        mario.style.width = '60px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump); 