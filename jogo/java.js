
const livia = document.querySelector('.livia');
const pipe = document.querySelector('.pipe');

const felipe = document.querySelector('.felipe');

const back = document.querySelector('.back');

const jump = () => {
    livia.classList.add('jump');

    setTimeout(() => {
         livia.classList.remove('jump');
    }
    ,500);
}


const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const liviaPosition = window.getComputedStyle(livia).bottom.replace('px','');
    const felipePosition = felipe.offsetLeft;

    if(pipePosition <= 120 && pipePosition > 0 && liviaPosition < 80)
    {
        pipe.style.animation = 'none';

        pipe.style.left = `${pipePosition}px`;

        livia.style.animation = 'none';

        livia.style.bottom = `${liviaPosition}px`;

        felipe.style.animation = 'none';



        livia.src = 'jogo/game-over.png';
        livia.style.width = '75px';
        livia.style.marginLeft = '50px';

        clearInterval(loop);

    }

    if(felipePosition < 120 && felipePosition > 0 && liviaPosition<80)
    {
        felipe.style.animation = 'none';
        felipe.style.left = `${felipePosition}px`;
        
        livia.style.animation = 'none';

        livia.style.bottom = `${liviaPosition}px`;
        
        
        back.style.backgroundColor = '#111';

    }



}, 10);


document.addEventListener('click', jump);